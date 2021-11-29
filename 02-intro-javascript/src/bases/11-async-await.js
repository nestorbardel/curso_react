

// const apiKey = 'aHiUAAhuwpEwJ2UoCCjVbXiDUQxMqM1x';

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion
// .then( resp => {
//     return resp.json();
// })
// .then( ({data}) => {
//     const {url} = data.images.original;
//     // console.log(data.images.original.url);
//     const img = document.createElement('img');
//     img.src = url;
//     document.body.append(img);

// })
// .catch(console.warn)

const getImagen = async() => {
    try{
        const apiKey = 'aHiUAAhuwpEwJ2UoCCjVbXiDUQxMqM1x';
        const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const data =  await peticion.json();
        const {url} = data.data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    }catch(error){
        console.error(error);
    }

}

getImagen();

