//Condicional if
const edad = 5;

if (edad >= 18){
    console.log('Mayor de edad');
}
//else
else{
    console.log('Menor de edad')
}

//Condicional else if
const nota = 2.9

if (nota >= 3){
    console.log('Ha pasado el curso');
}else if(nota < 3){
    console.log('Ha perdido el curso');
}

//Switch
const cliente = 'comprar';

switch (cliente){
    case 'vender':
        console.log('Que producto ofrece');
    break;

    case 'comprar':
        console.log('Que desea comprar');
    break;

    case 'pagar':
        console.log('El precio es: ???');
    break;
    default:
        console.log('Opcion incorrecta');
}

//ternary operator
const calor = false;

const clima = calor ? "Hace calor, es verano" : "Hace frio, es invierno";
console.log(clima);

//operadores logicos
// || 
const tipo = 'carro';

if (tipo == 'carro' || tipo == 'moto'){
    console.log('necesita licencia');
}
if(tipo == 'Bicicleta'){
    console.log('No necesita licencia')
}

// NOT !
const esEstudiante = true;
const noEsEstudiante = !esEstudiante;

console.log("¿Es estudiante?", esEstudiante)
console.log("¿No es estudiante?", noEsEstudiante); 

//&&
let alimento = 'carne';
let dia = 'miercoles'

if (alimento == 'carne' && dia == 'miercoles' ){
    console.log('Hoy es dia de descuento en este Producto');
}
else{
    console.log('Hoy no hay descuento en este Producto');
}