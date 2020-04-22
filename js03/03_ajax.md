# Ajax
Con fetch podemos traer datos de apis remotas sin parar la carga
```js
fetch('https://restcountries.eu/rest/v2/all')
  .then( function (response)  {
    return response.json()
  })
  .then( function (data)  {
    return console.log(data)
  })
  .catch( function (error) {
    return console.error(error)
  })
```

## Ejercicio Playground
Ver [este html](/js03/03_ajax.html) 

### Menu
[1](/js03/01_strings.md) - [2](/js03/02_json.md) - [3](/js03/03_ajax.md) - [4](/js03/04_forms.md)