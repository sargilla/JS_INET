# Strings
Texto de prueba
```js
let texto = "     Mi mamá me mima      "
```
let texto
## length
Devuelve la cantidad de caracteres incluso los espacios al inicio y fin
```js
console.log(texto.length) // 26
```

## trim()
Trim primero borra los es
```js
console.log(texto.trim().length) // 15
```
## .indexOf
```js
console.log(texto.indexOf('s')) // -1
console.log(texto.indexOf('M')) // 6
```
## .match()
Machea una expresión regular contra nuestro string y devuelve un array de resultados.
```js
string.match(/expr/g)
string.match(/e./g)
``` 
[Guia Expresiones Regulares](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)
[Pagina Expresiones Regulares](https://www.regular-expressions.info/)

## .slice()
Nos da una tajada de un texto o array,
- Si el inicio es negativo extrae del final
- Si no se pone es 0
- Si el fin no se pone es = al length,
- Si el fin es negativo saca la cantidad de elementos del parametro inicio contanto desde el final
```js
string.slice(11,16); // 
```

## .split
Separa el string con los caracteres que indiquemos y nos devuelve un array con las partes.
```js
var string = 'Josefina, Javier, Octavio, Germán'
console.log(string.split(', '))
// ["Josefina","Javier","Octavio","Germán"]
```

## .replace
Reemplaza una parte de nuestro string por otra
```js
string.replace('Javier', 'Rosa');
```


## .toString()
Convierte un numero o un array a string
Para un array es idem de join()
```js
var number = 1001;
var numberString = number.toString();
```


## Ejercicio Playground
```js
function stringBomb(unTexto) {
  return unTexto.split(",")
      .map(palabra => palabra.trim().replace("ñ", "n"))
      .filter(palabra => palabra.length > 3 && palabra.indexOf("a") != -1)
      .toString();
}

let string = unTexto = "Dario, Alejandro, Javier , Carolina, Camila , Santiago, De    , Cheryll, Mañana";

console.log(stringBomb(string))
```
### Menu
[1](/js03/01_strings.md) - [2](/js03/02_json.md) - [3](/js03/03_ajax.md) - [4](/js03/04_forms.md)