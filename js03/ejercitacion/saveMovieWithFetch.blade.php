<!DOCTYPE html>
<html lang="es" dir="ltr">
	<head>
		<meta charset="utf-8">
		{{-- Necesario para poder enviar DATA vía fetch --}}
		<meta name="csrf-token" content="{{ csrf_token() }}">
		<title>Fetch Laravel</title>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
	</head>
	<body>
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-8">
					<h2>Total de películas: <span>(aqui va el # de pelis)</span></h2>
					<!-- En este listado se cargarán las películas que vengan de la consulta asíncrona -->
					<ul class="list-group"></ul>
				</div>
				<div class="col-4">
					<h2>Dar de alta una película</h2>
					<form method="post" enctype="multipart/form-data">
						@csrf
						<div class="form-group">
							<label>Title:</label>
							<input type="text" name="title" class="form-control">
						</div>
						<div class="form-group">
							<label>Rating:</label>
							<input type="text" name="rating" class="form-control">
						</div>
						<div class="form-group">
							<label>Awards:</label>
							<input type="text" name="awards" class="form-control">
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

		<script>
			// Lista HTML donde se cargarán las películas que vienen de la DB
			let ul = document.querySelector('ul');

			// Tag donde mostraremos cuantas películas hay en la DB
			let span = document.querySelector('h2 span');

			// Formulario con el que estamos guardando una película
			let form = document.querySelector('form');

			// Array de los campos del Formulario, sacamos el último pues es el botón de enviar
			let campos = Array.from(form.elements);
			campos.pop();

			// Cabecera CSRF para que Laravel recibe el $request y guarde la película
			let header = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

			// Llamado asíncrono para guardar la película
			window.fetch('urlPost', {
				method: 'POST',
				body: '¿?', // data del formulario
				headers: {'X-CSRF-TOKEN': header} // Para enviar data via fetch

			})
				.then(response => response.json())
				.then(data => '¿Qué hacemos al recibir la data?')
				.catch(error => console.error(`Error: `, error));
		</script>
	</body>
</html>
