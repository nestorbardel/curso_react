const persona = {
    nombre : 'Tony',
    apellido : 'Stark',
    edad : 45,
    direccion: {
       ciudad: 'New York',
       zip: 123456,
       lat:14.3232,
       lng: 34.9233321 
    }
};

const persona2 = {...persona};
persona2.nombre = 'Peter';
console.log(persona);
console.log(persona2);

// console.table(persona);
// console.log({persona})

