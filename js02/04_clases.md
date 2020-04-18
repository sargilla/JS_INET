# Clases
Agregar una clese
```js
var lista = document.querySelector('ul');
lista.classList.add('nueva-clase');
```
Borrar una clase
```js
var lista = document.querySelector('ul');
lista.classList.remove('clase-base');
```
Cambiar estado
```js
btn.onclick = function () {
	lista.classList.toggle('visible');
}
```
Pregunta si contiene una clase y devuelve un booleano
```js
if ( lista.classList.contains('nueva-clase') ) {
// do some stuff
}
```
Ejercicio

```js
 let mas_grande = confirm('Queres ver el sitio mas grande')
  if(mas_grande){
    document.querySelector("h1").classList.add('xl')
  }
  var nombre = prompt("¿Cuál es tu nombre?")
  
  document.querySelector("h1").innerHTML = "Bienvenido " + nombre
```


#### Menu
[1](/js02/01_closures_callbacks.md) - [2](/js02/02_arrays.md) - [3](/js02/03_editar_dom.md) - [4](/js02/04_clases.md) - [5](/js02/05_eventos.md) - [6](/js02/06_timers.md)