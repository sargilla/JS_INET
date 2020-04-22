function stringBomb(unTexto) {
  return unTexto.split(",")
      .map(palabra => palabra.trim().replace("ñ", "n"))
      .filter(palabra => palabra.length > 3 && palabra.indexOf("a") != -1)
      .toString();
}

let string = unTexto = "Dario, Alejandro, Javier , Carolina, Camila , Santiago, De    , Cheryll, Mañana";

console.log(stringBomb(string))