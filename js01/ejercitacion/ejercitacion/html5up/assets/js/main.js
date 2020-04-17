/*  El evento load dispara el evento al final 
del proceso de carga del documento. 
En este punto, todos los objetos del documento son DOM,  
y todas las imágenes y sub-frames han terminado de cargarse. */

window.onload = function () {
    
    //  ej 1
    let titular =  document.getElementById('titular')
    titular.style.display = 'none'

    //  ej 2
    let lechuza =  document.getElementById('lechuza')
    lechuza.style.filter = "grayscale(100%)"

    // ej 3
    let copyright = document.getElementById('copyright')
    console.log(copyright)

    // ej 4
    let h2s = document.querySelectorAll('h2')
    h2s.forEach((h2) => h2.style.color = 'red')

    // ej 5
    let icons = document.querySelectorAll('.icon')
    icons.forEach((icon) => icon.style.color = 'red')

    // ej 6
    console.log(copyright.attributes)

    // ej 7
    let twitter = document.querySelector('.fa-twitter')
    console.log(twitter.getAttribute('href'))

    let facebook = document.querySelector('.fa-facebook')
    console.log(facebook.getAttribute('href'))

    // Ej 8
    let youtube = document.querySelector('.fa-youtube')
    youtube.setAttribute('href', 'https://www.youtube.com/channel/UCKkPOtW8gQPgIUaxF4Og7PA')

    // Ej 9
    let form = document.querySelector('.formulario')
    console.log(form.hasAttribute('action'))

    // Ej 10
    let url =  form.getAttribute('url');
    form.setAttribute('action', url)
    form.removeAttribute('url')

};