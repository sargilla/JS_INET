# Alertas

Mostrar un mensaje de alerta

```js
 alert('Bienvenido!')
```

Mostrar un mensaje de confirmacion y guardar el resultado
```js
let res = confirm("Estas ahi?")
// Si acepta devuelve true y si no false
```

Hacer un pregunta y guardar lo que puso el usuario en una variable

```js
let res = prompt('Como se llama tu mascota');
alert("Tu mascota se llama " + res );
```

Con todos juntos

```js
let news = confirm('Quiere nuestro newsletter?')

if(news){
    let intereses = prompt("Cuales son tus intereses?");
    alert('Gracias, le mostraremos informacion de ' + intereses);
} else {
    let respuesta  = prompt("Porque no?");
    alert('No lo incluimos a nuestro news porque ' + respuesta);
}
``` 

## Menu
- [1-repaso ](/js01/01-Intro_y_Repaso.md)
- [2-tipos ](/js01/02-Tipos_de_datos.md)
- [3-funciones ](/js01/03-funciones.md)
- [4-operadores ](/js01/04-Operadores.md)
- [5-condicionales ](/js01/05-Condicionales.md)
- [6-ciclos ](/js01/06-Ciclos.md)
- [7-objetos ](/js01/07-Objetos_Literales.md)
- [8-alertas ](/js01/08-Alertas.md)
- [9-DOM](/js01/09-DOM.md)