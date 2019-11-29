<?php

namespace App\Http\Controllers;

class ViewController extends Controller
{
    public function main() {
        return view('main', []);
    }

}
