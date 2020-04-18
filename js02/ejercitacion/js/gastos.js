// DOM 1

var quiereIngresar = confirm("Bienvenido. Quiere ingresar?")
if (!quiereIngresar) {
    alert("Gracias por haber venido.")
    window.location.href = "http://www.netflix.com"
} else {
    var integrantes = prompt("Ingrese la cantidad de integrantes del grupo familiar");
    while (isNaN(integrantes)) {
        integrantes = prompt("La cantidad de integrantes debe ser numérica. Ingrese el dato nuevamente.")
    }

    while (integrantes < 3) {
        integrantes = prompt("La cantidad de integrantes debe ser superior a tres. Ingrese el dato nuevamente.")
    }

    nombre = "";
    gasto = Number;
    integrante = [];

    for (var i = 0; i < integrantes; i++) {

        nombre = prompt("nombre del integrante " + i);
        while (nombre === "") {
            nombre = prompt("El nombre no puede estar vacío. Ingrese el dato nuevamente.");
        }

        gasto = prompt("gasto del integrante " + i);
        while (gasto === "" || isNaN(gasto) || gasto === "0") {

            if (isNaN(gasto)) {
                gasto = prompt("El gasto debe estar expresado en números. Ingrese el dato nuevamente.")
            }
            if (gasto == "0") {
                gasto = prompt("El gasto no puede ser cero. Ingrese el dato nuevamente.")
            }

            if (gasto === "") {
                gasto = prompt("El gasto no puede estar vacío. Ingrese el dato nuevamente.")
            }

        }
        integrante[i] = { nombre: nombre, gasto: parseInt(gasto) };
    }
    console.log(integrante);
}


// DOM 2

//EJERCICIO 1

var body = document.querySelector("body");
var h1 = document.createElement("h1");
var textoDelh1 = document.createTextNode("Reporte de Gastos Familiares");
h1.append(textoDelh1);
body.append(h1);

// EJERCICIO 2

var integranteQueMasGasto = "";
var integranteQueMenosGasto = "";
var gastosDeTodaLaFamilia = 0;
var promedioDeGastos = 0;

var gastos = [];
var indiceMayor = 0;
var indiceMenor = 0;
var gastoMenor = 0;
var gastosTotales = 0;
var promedioDeGastos = 0;
var gastoMayor = 0;
for (let i = 0; i < integrante.length; i++) {
    gastos.push(integrante[i].gasto);
    gastoMayor = Math.max(...gastos);
    gastoMenor = Math.min(...gastos);
    indiceMayor = gastos.indexOf(gastoMayor);
    indiceMenor = gastos.indexOf(gastoMenor);
}

integranteQueMasGasto = integrante[indiceMayor].nombre;
integranteQueMenosGasto = integrante[indiceMenor].nombre;

gastos.forEach(element => {
    gastosTotales += element;
});

promedioDeGastos = gastosTotales / gastos.length;
var ul = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var texto1 = "El integrante que más gastó es " + integranteQueMasGasto + ". Su gasto fue de " + gastoMayor;
var texto2 = "El integrante que menos gastó es " + integranteQueMenosGasto + ". Su gasto fue de " + gastoMenor;
var texto3 = "Los gastos de todos fueron " + gastosTotales;
var texto4 = "El promedio de gastos fue de " + promedioDeGastos;
var textoDelLi1 = document.createTextNode(texto1);
var textoDelLi2 = document.createTextNode(texto2);
var textoDelLi3 = document.createTextNode(texto3);
var textoDelLi4 = document.createTextNode(texto4);

li1.append(textoDelLi1);
li1.setAttribute("title", texto1)
li2.append(textoDelLi2);
li2.setAttribute("title", texto2)
li3.append(textoDelLi3);
li3.setAttribute("title", texto3)
li4.append(textoDelLi4);
li4.setAttribute("title", texto4)


ul.append(li1);
ul.append(li2);
ul.append(li3);
ul.append(li4);
body.append(ul);

//EJERCICIO 3

var button = document.createElement("button");
var textoDelButton = document.createTextNode("Nos pasamos del presupuesto?");
button.append(textoDelButton);
body.append(button);

button.onclick = function () {
    if (gastosTotales > 1200) {
        alert("El presupuesto del día fue superado por " + (gastosTotales - 1200));
    } else {
        alert("El presupuesto del día aún no fue superado. Quedan " + (1200 - gastosTotales))
    }
}
//EJERCICIO 4

button = document.querySelector("button");
var ayuda = document.createElement("span");
var textoDeAyuda = document.createTextNode("Este boton indicará si se pasaron del presupuesto diario de $1200");
ayuda.append(textoDeAyuda);
body.append(ayuda);
ayuda.style.display = "none";

button.addEventListener("mouseover", function () {
    var span = document.querySelector('span');
    span.style.display = "block";
});
/*
button.addEventListener("mouseout", function(){
var span = document.querySelector('span');
span.style.display = "none";
});
*/


//EJERCICIO 5
var span = document.querySelector('span');
span.onmouseout = function () {
    window.setTimeout(() => {
        span.style.display = "none";
    }, 3000);
}

//EJERCICIO 6
var darkThemeButton = document.createElement("button");
var textoDelDarkThemeButton = document.createTextNode("Poner Dark Theme todo el sitio");
darkThemeButton.append(textoDelDarkThemeButton);
body.append(darkThemeButton);
darkThemeButton.onclick = function () {
    body.classList.toggle("dark-theme");
}
//EJERCICIO 7

body.addEventListener("keypress", function (evt) {
    var letraApretada = evt.keyCode;
    var charStr = String.fromCharCode(letraApretada);
    if (charStr === "q") {
        alert("Encontraste el Secreto de la letra q!!!!! Ganaste un millon de dolares, que Dios te lo pague. xoxoxo");
    }
});
