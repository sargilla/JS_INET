# Formularios

## .onFocus
Este evento se dispara INMEDIATAMENTE cuando se hace foco sobre un campo de formulario

```js
var inputName = document.querySelector("[name=user-name]");
inputName.onfocus = function() {
	console.log("You focus the name input!");
}
```

## .onblur
Este evento se dispara INMEDIATAMENTE cuando el campo ha perdido el foco.
```js
var inputName = document.querySelector("[name=user-name]");
inputName.onblur = function() {
	console.log("I lost the focus :/");
}
```

## .onchange
Este evento se dispara INMEDIATAMENTE cuando el campo ha perdido el foco siempre y cuando el valor del campo haya cambiado. 

```js
var inputName = document.querySelector("[name=user-name]");
inputName.onchange = function() {
	console.log("I lost the focus and you do some changes");
}
```


## .onsubmit 
Este evento se dispara EXCLUSIVAMENTE sobre el <form> y cuando se ha presionado un botón submit.
```js
var theForm = document.querySelector(".myForm");
theForm.onsubmit = function(event) {
	if ( hay campos vacios ) {
		event.preventDefault(); // evitamos que se envíe el formulario
}
}
```

## .value
La propiedad .value nos retorna el valor actual de un campo de un formulario.

```js
var inputName = document.querySelector("[name=user-name]");
inputName.onblur = function() {
	if( this.value == "" ) {
		console.log("¡Llename el campito por el amor de Jebus!");
}
}
```

## .elements 
La propiedad .elements (ejecutada sobre un formulario) retorna una colección de elementos HTML pertenecientes al formulario.
```js
var theForm = document.querySelector(".myForm");
var elementsOfForm = theForm.elements;
console.log(elementsOfForm); // HTML Collection
```
Una vez capturados todos los elementos de un formulario podemos recorrer los mismos y aplicarle el comportamiento deseado.

Atentis: necesitamos convertir la HTML Collection a un Array.

```js
var theForm = document.querySelector(".myForm");
var elementsOfForm = theForm.elements; // HTML Collection
var elementsinArray = Array.from(elementsOfForm); // Array de elementos HTML
elementsinArray.pop(); // Sacamos el último elemento, seguro es un botón SUBMIT
elementsinArray.forEach( function(element) {
	element.addEventListener("blur", function(){
		if ( this.value == "" ) {
			this.classList.add("error");
}
})
}); 

```

## Selects
Un campo <select> es algo especial, pues no permite inserción de datos de parte de usuario si no que ya trae consigo todas las opciones.

JS nos permite acceder a las mismas de una manera bastante sencilla.

```js
var theSelect = document.querySelector("select");
var allTheOptions = theSelect.options;
console.log(allTheOptions); // HTML Collection

// Al retornar una HTML Collection, podemos acceder a sus posiciones como si fuera un Array.
```
### .options
La propiedad .options, retorna todos los elementos <option> de un <select>. Al igual que .elements, retorna una HTML collection.
```js
var theSelect = document.querySelector("select");
var allTheOptions = theSelect.options;
console.log(allTheOptions); // HTML Collection

// Al retornar una HTML Collection, podemos acceder a sus posiciones como si fuera un Array.

```

### .selectedIndex
No solo podemos acceder a toda la colección de <options> si no que a su vez podemos acceder a la posición numérica del <option> actualmente seleccionado.

```js
var theSelect = document.querySelector("select");
var allTheOptions = theSelect.options; // Collection of Options
var optionSelected = theSelect.selectedIndex;
console.log(optionSelected); // Number del <option> seleccionado
console.log(allTheOptions[optionSelected]); // ¿?
```

## Regex 
Una expresión regular es una secuencia de caracteres que forma un patrón de búsqueda

### .text()
Lo primero que necesitamos es guardar la RegEx en una variable y luego usando el método .test(), que recibe como parámetro el valor que deseamos evaluar, testear si el valor suministrado cumple con el patrón, .test() retorna un boolean.

```js
var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
var validEmail = "javier@digitalhouse.com";
var notAnEmail = "Peter Griffin";
console.log(regexEmail.test(validEmail)); // true
console.log(regexEmail.test(notAnEmail)); // false

```

## Ejercicio Playground
Ver [este html](/js03/04_forms.html) 

### Menu
[1](/js03/01_strings.md) - [2](/js03/02_json.md) - [3](/js03/03_ajax.md) - [4](/js03/04_forms.md)