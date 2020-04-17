# Objetos Literales

Definimos un objeto
```js
var ginobili = {
  nombre : "Emanuel",
  apellido: "Ginobili",
  puntos: 0,
  saludar: function(fan) {
    return "Hola " + fan + " soy Manu"
  },
  doble: function() {
    this.puntos += 2
  },
  triple: function() {
    this.puntos += 3
  }
};
```
Para sumar los puntos podemos llamar a la función que corresponda y despues podemos consultar la propiedad
```js
ginobili.doble()
ginobili.doble()
ginobili.triple()
ginobili.triple()

console.log(ginobili.puntos) // 10
```
Para recorrer un objeto literal
```js
function partesAuto(auto) {
  var partes = []
  for(var parte in auto){
    partes.push(auto[parte])
  }  
  return partes
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