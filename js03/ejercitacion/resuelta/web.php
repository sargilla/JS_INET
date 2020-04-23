<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();


Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', 'HomeController@index')->name('home');

Route::get('movies', function () {
    return view('saveMovieWithFetch');
});

Route::get('getMovies', function () {
    return \App\Movie::orderBy('title')->get();
});

Route::post('movies', function (){
    
    $pelicula = \App\Movie::create(request()->all());

    return response(['status' => 'ok', 'mensaje' => 'Se ha guardado correctamente la pelicula '.$pelicula->title, 'pelicula' => $pelicula],200);
});

