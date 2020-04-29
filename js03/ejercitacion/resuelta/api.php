<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('getMovies', function () {
    return \App\Movie::orderBy('title')->get();
});


Route::post('movies', function (){

    // $validator = Validator::make(request()->all(), [
    //       'title'=>'required|min:5'
    // ]);

    // if ($validator->fails()) {
    //     return response([$validator->messages()], 416);
    // }

    request()->validate([
        'title'=>'required|min:5'
    ]);

    $pelicula = \App\Movie::create(request()->all());

    return response(['status' => 'ok', 'mensaje' => 'Se ha guardado correctamente la pelicula '.$pelicula->title, 'pelicula' => $pelicula],201);
});


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
