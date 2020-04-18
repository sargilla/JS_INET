window.onload = function () {

    let quiere  = confirm('Quiere Iniciar?')

   
    if(quiere){
        let cantidad = preguntarIntegrantes()
        // Ej Dom - 1  d
        let integrantes = validarCantidad(cantidad)
        console.log(integrantes) 

    } else {
        alert('Gracias por haber venido')
        // window.location.href = 'https://www.netflix.com/'
    }
    
    function preguntarIntegrantes() {
        return prompt('Cuantos integrantes tiene tu familia')
    }

    function validarCantidad(cantidad) {
        if (!isNaN(cantidad) && cantidad > 1) {
            return recavarInformacion(cantidad)
        } else {
            alert('Error, debe escribir un numero mayor que 3')
            let cantidad = preguntarIntegrantes()
            validarCantidad(cantidad)
        }
    }
    
    function recavarInformacion(cantidad) {
        let integrantes = []
        for (let i = 0; i < cantidad; i++) {
            let nombre =  preguntarNombre(i)
            let gasto = preguntarGasto(nombre)
            integrantes.push({
                nombre: nombre,
                gasto: Number(gasto)
            })
        }
        return integrantes
    }
    function preguntarNombre(i){
        let nombre = prompt('Nombre del integrante ' + (i + 1))
        if (isNaN(nombre) && nombre != ''){
            return nombre
        } else {
            alert('Debe poner un texto')
            return preguntarNombre(i)
        }
    }
    function preguntarGasto(nombre) {
        let gasto = prompt('Cuanto gasto ' + nombre)
        if (!isNaN(gasto) && gasto != '') {
            return parseFloat(gasto)
        } else {
            alert('Debe poner un numero!')
            return preguntarGasto(nombre)
        }
    }

    let body = document.querySelector('body');
    let titulo = document.createElement('h1')
    let texto = document.createTextNode('Reporte de gastos familiares')
    titulo.append(texto)
    body.append(titulo)
    let ul = document.createElement('ul');
    body.append(ul)

    // integrantes.sort((a, b) => {
    //     a.gasto.localeCompare(b.gasto)
    // })
    console.log(integrantes)
    // var li1 = document.createElement("li");
    // var li2 = document.createElement("li");
    // var li3 = document.createElement("li");
    // var li4 = document.createElement("li");
    // var texto1 = "El integrante que más gastó es " + integranteQueMasGasto + ". Su gasto fue de " + gastoMayor;
    // var texto2 = "El integrante que menos gastó es " + integranteQueMenosGasto + ". Su gasto fue de " + gastoMenor;
    // var texto3 = "Los gastos de todos fueron " + gastosTotales;
    // var texto4 = "El promedio de gastos fue de " + promedioDeGastos;
    // integrantes.forEach(int =>{
    //     let li = document.createElement('li')
    //     let texto = 
    // })
}