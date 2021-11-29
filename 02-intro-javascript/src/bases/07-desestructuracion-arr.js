const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [,,p3] = personajes;
console.log(p3);

const retornarArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornarArreglo();

console.log(letras, numeros);

const useContext = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}];
}

const [nombre, setNombre] = useContext('Nestor');
console.log(nombre);
setNombre();