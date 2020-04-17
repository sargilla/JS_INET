# Eventos


## Que es un evento??
Un evento es algo que pasa en el navegador o que es ejecutado por el usuario.
- La página terminó de cargar
- El input de un formulario cambió
- Hicieron click en un botón


## onload
 onload, es un evento que permite que todo el script se ejecute cuando se haya cargado por completo el objeto document dentro del objeto window. En unas clases más adelante profundizaremos sobre los eventos. 

```js

window.onload = function () {
var mySuperHeroe = "Ada Lovelace";
console.log(mySuperHeroe); // "Ada Lovelace"
}
```
## Eventos más comunes
- onclick
- ondblclick
- onmouseover
- onmouseout
- onmousemove
- onscroll
- onkeydown
- onload
- onfocus
- onblur
- onchange
- onsubmit


## Formato
```js
element.onNameEvent = function () {
// Lo que sucede al disparar el evento
}

// Ejemplo 
btn.onclick = function () {
    alert('Dont push me bro');
}

```

## This
Podemos utilizar la palabra reservada ***this*** que en este contexto hace referencia al objeto que ejecutó el evento.
```js
btn = document.querySelector('.my_button');

btn.onclick = sayHello;

function sayHello() {
	alert('Hello. Is anybody out there?');
	console.log(this); // ¿?
}
```

## preventDefault()
Un link cualquiera en html
```html
<a href="http://google.com">Click!</a> 
```
lo buscamos desde el script y esperamos el evento
```js
// javascript
var btn = document.querySelector('a');

btn.onclick = function () {
	alert('Hi there!');
}
```
Para frenar un formulario
```html
<h2>Formulario</h2>
<form action="" id="form" >
    <input type="text" name="nombre" id='nombre'>
    <button tipe="submit" class="enviar">Envio form</button>
</form>
```
En el js
```js
btns.onclick = function (e) {
    e.preventDefault();
    alert('antes de que envies!');
    let enviar = confirm('pusiste: ' + document.getElementById('nombre').value + 'esta bien??' )
    if(enviar){
        document.getElementById('form').submit()
    } else {
        alert('no lo pude enviar porque no quisiste!')
    }
}
```

## Galeria
Html
```html
    <h1>Mi galería!</h1>
    <div>
      <img src="https://images.agoramedia.com/everydayhealth/cms/looking-at-cute-pics-helps-you-work-article.jpg">
    </div>
    <button id="anterior">Anterior</button>
    <button id="siguiente">Siguiente</button>
```
Javascript
```js

 var imagenes = [ 
    "https://images.agoramedia.com/everydayhealth/cms/looking-at-cute-pics-helps-you-work-article.jpg",   
    "http://lifeisbetterrescue.org/images/large/kittens.jpg",
    "https://vmdtoday.s3.amazonaws.com/_media/_image/Kitten-USDA-Investigation_Thumb.jpg",
    "https://pet-uploads.adoptapet.com/f/9/9/243980831.jpg"
  ]
  
  var indice = 0
  
  let siguiente = document.getElementById('siguiente')
  siguiente.onclick = function(){
    indice += 1
    if(indice > imagenes.length -1){
      indice = 0
    }
    let foto = imagenes[indice]
    
    document.querySelector('img').setAttribute('src',foto)
  }

  let anterior = document.getElementById('anterior')
  anterior.onclick =  function(){
    indice -= 1
    if(indice < 1 ){
      indice = imagenes.length -1
    }
    let foto = imagenes[indice]
    
    document.querySelector('img').setAttribute('src',foto)
  }
 
```

#### Menu
[1](/01_closures_callbacks.md) - [2](/02_arrays.md) - [3](/03_editar_dom.md) - [4](/04_clases.md) - [5](/05_eventos.md) - [6](/06_timers.md)