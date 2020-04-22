# Json

De objeto literal a json
```js
var miAutito = {marca: "Fiat", modelo: 1985, color: "Verde"};

let json = JSON.stringify(miAutito);
console.log(json)
// '{"marca": "Fiat", "modelo": 1985, "color": "Verde"}'
```
De json a objeto literal
```js
var miAutito = JSON.parse('{"marca": "Fiat", "modelo": 1985, "color": "Verde"}')
// {marca: "Fiat", modelo: 1985, color: "Verde"}
```

## Ejercicio Playground
```js
function cambiarColor(autoJson, colorNuevo) {
  let auto = JSON.parse(autoJson)
  auto.color =  colorNuevo
  return JSON.stringify(auto)
}

let autoJSON = '{"marca":"ford","color":"amarillo"}';
console.log(cambiarColor(autoJSON,'verde'));
// {"marca":"ford","color":"verde"}
```

### Menu
[1](/js03/01_strings.md) - [2](/js03/02_json.md) - [3](/js03/03_ajax.md) - [4](/js03/04_forms.md)