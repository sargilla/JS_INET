<!DOCTYPE html>
<html lang="es" dir="ltr">

<head>
    <meta charset="utf-8">
    {{-- Necesario para poder enviar DATA vía fetch --}}
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Fetch Laravel</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <style>
        .error {
            border-color: red;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-8">
                <h2>Total de películas: <span></span></h2>
                <!-- En este listado se cargarán las películas que vengan de la consulta asíncrona -->
                <ul class="list-group"></ul>
            </div>
            <div class="col-4">
                <h2>Dar de alta una película</h2>
                <form method="post" enctype="multipart/form-data" id="form">
                    @csrf
                    <div class="form-group">
                        <label>Title:</label>
                        <input type="text" name="title" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Revenue:</label>
                        <input type="text" name="revenue" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Awards:</label>
                        <input type="number" name="awards" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Release date:</label>
                        <input type="date" name="release_date" class="form-control">
                    </div>
                    <button type="submit" class="btn btn-success">GUARDAR</button>
                </form>
            </div>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"></script>
    <script>
        function actualizarPeliculas() {
                fetch('api/getMovies')
                    .then(response => response.json())
                    .then(data => {
                        // Lista HTML donde se cargarán las películas que vienen de la DB
                        let ul = document.querySelector('ul');
                        ul.innerHTML = ''

                        // Tag donde mostraremos cuantas películas hay en la DB
                        let span = document.querySelector('h2 span');
                        span.innerHTML = data.length

                        data.forEach(pelicula => {
                            let li = document.createElement('li')
                            let nombre = document.createTextNode(pelicula.title)
                            li.append(nombre)
                            ul.append(li)
                        })
                    });
            }
            window.onload = function(){
                actualizarPeliculas();

                // Formulario con el que estamos guardando una película
                let form = document.querySelector('form');

                var campos= Array.from(form.elements); // Array de elementos HTML
                campos.shift();
                campos.pop();
                campos.forEach( element => {
                    element.onblur = function()  {
                        this.value == "" ? this.classList.add("error") : this.classList.remove("error")
                    };
                })

                // Cabecera CSRF para que Laravel recibe el $request y guarde la película
                let header = document.querySelector('meta[name="csrf-token"]').getAttribute('content');


                form.onsubmit = e => {
                    e.preventDefault();

                    let errores = 0

                    campos.forEach( function(element) {
                        if(element.value == ""){
                            errores++
                        }

                    })

                    let data = new FormData(form);
                    if(!errores){
                        fetch('api/movies', {
                            method: 'POST',
                            body: data ,
                            headers: {'X-CSRF-TOKEN': header} // Para enviar data via fetch

                        }).then(response => {
                            if (!response.ok) {
                                throw Error(response.statusText);
                            }
                            return response.json()
                        })
                        .then(data => {
                            swal({
                                icon: 'success',
                                title: data.mensaje,
                                showConfirmButton: false,
                                timer: 1500
                            })
                            actualizarPeliculas()
                        })
                        .catch(error => {
                            swal({
                            icon: 'error',
                            title: error,
                            text: 'Llena bien el form!',
                            })
                        });
                    } else {

                        swal({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Llena bien el form!',
                        })
                    }
                }
            }
    </script>
</body>
</html>