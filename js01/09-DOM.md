# DOM
### Modificando Estilos
```js
let color = prompt('Elegi un color')
let cuerpo = document.querySelector('body')
cuerpo.style.backgroundColor = color
```

```js
let color = prompt('Elegí un color')
let lis = document.querySelectorAll('li')
for (let i=0; i<lis.length; i++){
    lis[i].style.color = color
}
```

### Modificando Atributos
```js
let video = prompt('Ingrese un codigo')
let iframe = document.querySelector('iframe')
  iframe.setAttribute('src',"https://www.youtube.com/embed/" + video)
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