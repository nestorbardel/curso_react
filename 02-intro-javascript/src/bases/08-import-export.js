import heroes, {owners} from '../data/heroes';

const getHeroeById = (id) => {
    return heroes.find(x => x.id === id);
};

// const heroe = getHeroeById(3);
// console.log(heroe);

const getHeroesByOwner = (owner) => heroes.filter(x => owner === x.owner);

export {
    getHeroeById,
    getHeroesByOwner
} 
// console.log(getHeroesByOwner('Marvel'));