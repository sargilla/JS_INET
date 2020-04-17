# Arrays

## For of


```js
var miArray = [1, 2, 3];

for(var numero of miArray){
	console.log(numero);
}

// 1
// 2
// 3


ar miString = "hola";

for(var letra of miString){
	console.log(letra);
}

// h
// o
// l
// a

```

## .forEach()

```js
var miArray = [1,2,3];

miArray.forEach(function(numero){
	console.log(numero);
});
```
## .map()
El map() recibe un callback como parámetro y devuelve un **array nuevo**.
```js
var miArray = [1, 2, 3];

var arrayAlDoble = miArray.map(function(elemento){
	return elemento * 2;
});

// [2, 4, 6]
```
## .filter()
El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por el callback.

```js
var miArray = [1, 2, 3];

var impares = miArray.filter(function(numero){
	 return numero % 2 != 0;
});

// [1, 3]
// Con ES6
var impares_es6 = miArray.filter(n => n % 2 != 0)
```

## .reduce()
El método reduce() recibe un callback cuyo objetivo será retornar un único valor. Reduce el array dado a un solo valor. 

```js
var miArray = [1, 2, 3];
var sumado = miArray.reduce(function(acumulador, elementoActual){
	return acumulador + elementoActual;
}, 0);
```

## .join() y .split()
El método join() une todos los elementos de un array en un string y devuelve ese string. 

```js
var frutas = ["Manzana", "Naranja", "Ananá"];
var texto = frutas.join(", ");
var otra_vez_array = texto.split(", ");
console.log(texto, otra_vez_array)
// Manzana, Naranja, Ananá
// ["Manzana", "Naranja", "Ananá"]

```

## .find()
El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
```js
var frutas = ["Manzana", "Naranja", "Ananá"];

var match = frutas.find(function(fruta){
	return fruta === "Manzana";
});

console.log(match); // "Manzana"
```

#### Menu
[1](/01_closures_callbacks.md) - [2](/02_arrays.md) - [3](/03_editar_dom.md) - [4](/04_clases.md) - [5](/05_eventos.md) - [6](/06_timers.md)