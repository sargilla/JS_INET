# Tipos de Variable

### Booleanos, string, number
```js
let verdadero = true
let nada = null
let texto = "Hola"
let numero = 35

var unNuevoNumero = Number('50');

let positivo = Number('23');
let negativo = Number('-23');
let decimal = Number('2.5');
```

En esta variable debería quedar guardado solo el número 10
```js
var numeroRedondeado = parseInt("10.59");
```
En esta variable debería quedar guardado solo el número 51
```js
var numeroRedondeado = parseInt("51.598597");
```
Cuando parseamos un stting da ***NaN***
```js
const nan = parseInt('aver') //NaN
const correcto = parseInt('55.3')
```

### Objetos Literales
```js
var tenista = {
    nombre: 'Roger',
    apellido: 'Federer',
    edad: 38,
    saludar: function () {
        // Accedemos a la propiedad "nombre" de ESTE objeto con la palabra reservada THIS
        return "¡Hola! Mi nombre es " + this.nombre;
    }
}

let perro = {
    nombre: 'Pichuco',
    edad: 11,
    vacunado: true
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