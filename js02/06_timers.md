# Timers
Javascript tiene funciones nativas que nos permiten retrasar la ejecución de un código que nosotros elegimos.

## setTimeout()
```js
var myOwnTimeout = setTimeout(areYouThere, 3000);

function areYouThere() {
	alert('Are you there bro?');
}
```

## setInterval()
```js
let tiempo = document.getElementById('contar')
tiempo.onclick = setInterval(everySecond, 1000);

function everySecond() {
	alert('Hello, how are you?');
}

let parar = document.querySelector('#parar');
parar.onclick = function(){
    clearInterval(myOwnInterval)
}
```
#### Menu
[1](/01_closures_callbacks.md) - [2](/02_arrays.md) - [3](/03_editar_dom.md) - [4](/04_clases.md) - [5](/05_eventos.md) - [6](/06_timers.md)