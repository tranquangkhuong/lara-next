<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

Route::get('/', function () {
    return view('welcome');
});

Route::get('files/{any}', function ($any) {
    $file = Storage::disk('files')->get($any);
    if (!$file) abort(404);

    $mimeType = (new finfo(FILEINFO_MIME))->buffer($file);
    $e        = explode('/', $any);
    $filename = end($e);

    return response($file)->withHeaders([
        'Content-Type'        => $mimeType,
        'Content-Disposition' => "filename={$filename}"
    ]);
})->where('any', '.*');
