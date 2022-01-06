import React, { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from './../../selectors/getHeroById';

// import batman from '../../../public/assets/dc-batman.jpg' forma estatica
const heroImages = require.context('../../../public/assets');

export const HeroScreen = () => {
    const {heroeId} = useParams();

    const navigate = useNavigate();

    const hero = useMemo(() => getHeroById(heroeId), [heroeId])
    
    if(!hero){
        return <Navigate to='/'/>
    }
    
    const{
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;
    
    const handleReturn = () => {
        const returnPath = publisher === 'Marvel Comics' ? '/marvel' : '/dc';
        navigate(-1)
    }
    // const imagePath = `/assets/${id}.jpg`; desde public
    // const imagePath = batman; desde import
    const imagePath = heroImages(`./${id}.jpg`).default;
    

    return (
            <div className="row mt-5">
                <div className="col-4">
                    <img 
                    src={imagePath}
                    alt={superhero} 
                    className="img-thumbnail animate__animated animate__fadeInLeft"/>
                </div>

                <div className="col-8">
                    <h3>{superhero}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
                        <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                        <li className="list-group-item"><b>First Appearance: </b>{first_appearance}</li>
                    </ul>
                    <h5 className="mt-3">Characters</h5>
                    <p>{characters}</p>
                    <button 
                        className="btn btn-outline-info"
                        onClick={handleReturn}
                    >
                        Regresar
                    </button>
                </div>

            </div>
    )
}
