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
- [1-repaso ](/01-Intro_y_Repaso.md)
- [2-tipos ](/02-Tipos_de_datos.md)
- [3-funciones ](/03-funciones.md)
- [4-operadores ](/04-Operadores.md)
- [5-condicionales ](/05-Condicionales.md)
- [6-ciclos ](/06-Ciclos.md)
- [7-objetos ](/07-Objetos_Literales.md)
- [8-alertas ](/08-Alertas.md)
- [9-DOM](/09-DOM.md)