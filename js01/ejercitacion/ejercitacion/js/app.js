console.log('Practica js01')

/* Rompehielo */

// Ej 1 a 5
let string = "Este es un string";
let array = [1,2,4];
let booleano = true;

console.log(string)
console.log(array)
console.log(booleano)

// Ej 6
let numeros = []
for(let i = 1; i<138;i++){
    if(i%2 != 0){
        numeros.push(i);
    }
}
console.log(numeros)


/* Objetos Literales */

// Ej 1
let IronMan =  {
    nombre: 'Iron Man',
    equipo: 'Avengers',
    poderes: ['Volar', 'Lanzar misiles', 'Disparar láser'],
    energia: 100,
    getPoder: function (n) {
        let poder = this.poderes[n]
        switch (poder) {
            case 'Volar':
                this.energia -= 10
                break;
            case 'Lanzar misiles':
                this.energia -= 15
                break;
            case 'Disparar láser':
                this.energia -= 25
                break;
        }
        return poder 
    }
}

console.log(' ')

let Hulk = {
    nombre: 'Hulk',
    equipo: 'Avengers',
    poderes: ['Aplastar', 'Gritar', 'Golpear'],
    energia: 100,
    getPoder: function(n){
        let poder = this.poderes[n]
        switch (poder) {
            case 'Aplastar':
                this.energia -= 5
                break;
            case 'Gritar':
                this.energia -= 25
                break;
            case 'Golpear':
                this.energia -= 10
                break;
        }
        return poder 
    }
}

function poderAleatorio(){
    return Math.floor(Math.random() * 3);
}
// console.log(Hulk)

let poderHulk = 'Hulk se pone a ' + Hulk.getPoder(poderAleatorio()) + ' y le queda ' + Hulk.energia + ' energía'
let poderIronMan = 'Ironman se pone a ' + IronMan.getPoder(poderAleatorio()) + ' y le queda ' + IronMan.energia + ' energía'

console.log(poderHulk)
console.log(poderIronMan)
console.log(' ')

// Ej 2
let misDatos = {
    nombre : "Santiago",
    apellido : "Argilla",
    dni : "38.555.266",
    comidaFavorita: "Mila con fritas",
    edad: 25,
    saludar: function () {
        return `Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    }
}
// Ej 3
for(prop in misDatos){
    console.log(prop + ': ' + misDatos[prop])
}

// Ej 4
console.log(misDatos.saludar())


/* DOM */
let botonDePrueba = document.getElementById('miBoton');
botonDePrueba.onclick = function(){alert("Testeando el click")}