window.onload = function () {
    /* FUNCTIONES  */
    // Ejs1
    let estudiante = {
        nombre: 'tito viayo',
        curso: 'inet',
        dni: 65859965,
        email: 'tito@gmail.com'
    }

    function fromObjectToArray(objeto) {
        let resultado = []
        for (prop in objeto) {
            if (typeof objeto[prop] !== 'function') {
                resultado[prop] = objeto[prop]
            }
        }
        return resultado
    }
    console.log(fromObjectToArray(estudiante))

    // Ej.2
    function cambiarColorDeFondoDelBody(color){
        color = color.toUpperCase()
        if (color == 'GREEN' || color == '#0F0' || color == '#00FF00') {
            return false
        } else {
            document.querySelector('body').style.backgroundColor = color
            return true
        }
    }

    let cambioaverde = cambiarColorDeFondoDelBody('green')
    let cambioaverde2 = cambiarColorDeFondoDelBody('GREEN')
    let cambioahexa = cambiarColorDeFondoDelBody('#0f0')
    let cambioarojo = cambiarColorDeFondoDelBody('red')
    let cambioaazul = cambiarColorDeFondoDelBody('blue')
    let cambioahexalargo = cambiarColorDeFondoDelBody('#00ff00')

    console.log(cambioaverde,cambioaverde2, cambioahexa, cambioarojo, cambioaazul, cambioahexalargo)

    // Ej. 3
    let pes = document.querySelectorAll('p')
    console.log('Párrafos que no se vieron afectados:' + transformarParrafos(pes))


    function transformarParrafos(parrafos){
        let contador = 0
        for (var i = 0; i < parrafos.length; i++) {
            if (i % 2 != 0) {
                parrafos[i].style.color = 'red'
                parrafos[i].style.fontWeight = 'bold'
                parrafos[i].style.textAlign = 'center'
            } else {
                contador++
            }
        }
        return contador
    }

    /* METODOS DE ARRAY */
    var enigma = ["l", 1, "a", 2, 2, 5, "p", 5, 7, 5, 3, "e", 6, "r", 7, 6, 5, 3, 2, 1, "s", 9, 9, 9, 6, "e", 2, "v", 5, "e", 3, "r", 2, "a", 1, 6, 4, 1, 2, "n", 2, "c", 3, 5, 5, 5, 7, "i", 4, "a", 5, 2, 1, 3, "e", 6, "s", 7, "l", 4, "a", 3, "c", 2, 3, 1, 5, 3, 2, "l", 3, "a", 4, "v", 5, "e", 6];
    let numeros = enigma.filter(n => typeof n == 'number')
    // console.log(numeros)
    let altura = numeros.reduce((acum, el) => acum + el, 0)
    console.log('La altura es: '  + altura)
    let calle = enigma.filter(n => typeof n == 'string').join('')
    console.log('La calle es: ' + calle)
    console.log('La direccion completa: ' + calle + ' ' + altura )

}