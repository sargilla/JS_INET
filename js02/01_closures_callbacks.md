# Closures & Callbacks

## Closures
Son funciones que viven dentro de otras funciones, las cuales tienen acceso a todos los parámetros y variables de la función que las contiene

```js
function crearSuma(a) {
  return function(b) {
    return a + b
  }
}

var sumar5 = crearSuma(5);
var sumar10 = crearSuma(10);

console.log(sumar5(15)); //20
console.log(sumar10(15)); //25
```

Otro ejemplo

Creamos 3 botones

```html
<button id="b12">12</button>
<button id="b15">15</button>
<button id="b18">18</button>
```

```js
function cambiarTamanio(a) {
    return function() {
        document.body.style.fontSize = a + 'px';
    }
}
var size12 = cambiarTamanio(12);
var size15 = cambiarTamanio(15);
var size18 = cambiarTamanio(18);

let b12 =document.getElementById('b12')
let b15 =document.getElementById('b15')
let b18 =document.getElementById('b18')

b12.onclick = size12
b15.onclick = size15
b18.onclick = size18

```

## Callbacks
Son funciones que se pasan como parámetro de otra función para ser ejecutadas dentro de la función que las recibe.

```js
function sumar(n1, n2){ return n1 + n2; }	
function restar(n1, n2){ return n1 - n2; }	

function operacionMatematica(n1, n2, operacion){
	return operacion(n1, n2);
}

operacionMatematica(4, 17, sumar); // 21
operacionMatematica(26, 12, restar); // 14
```


#### Menu
[1](/01_closures_callbacks.md) - [2](/02_arrays.md) - [3](/03_editar_dom.md) - [4](/04_clases.md) - [5](/05_eventos.md) - [6](/06_timers.md)