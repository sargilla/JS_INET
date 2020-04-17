# Funciones

### Definición de la función
```js
function doble(numero) {
  return 2 * numero
}

function siguiente(numero) {
  return numero + 1
}

function siguienteDelDoble(numero) {
   return siguiente(doble(numero));
}
```

### Uso
```js
let resultado = siguienteDelDoble(4) //9
```

### Funciones Nativas

```js
function tirarDado(){
  return parseInt(6*Math.random()+1);
}
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