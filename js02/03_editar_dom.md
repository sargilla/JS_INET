# Edición del Dom
```js

var lista = document.querySelector('.links');

var nuevoLi = document.createElement('li');
var textoDelLi = document.createTextNode('Soy un elemento!');
nuevoLi.append(textoDelLi)
// nuevoLi.innerHTML = 'Soy un elemento!'
lista.append(nuevoLi)
```

Ejemplo del 2do ejercicio
```js
  let series =  prompt('Cuales series te gustan?')
  let array = series.split(',')
  let ul = document.querySelector('ul')
  array.forEach(function(el)  {
      ul.innerHTML = ul.innerHTML + '<li>' + el + '</li>' 
  })
```
#### Menu
[1](/01_closures_callbacks.md) - [2](/02_arrays.md) - [3](/03_editar_dom.md) - [4](/04_clases.md) - [5](/05_eventos.md) - [6](/06_timers.md)