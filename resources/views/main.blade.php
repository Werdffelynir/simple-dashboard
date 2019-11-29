@extends('layouts.app')

@section('content')

    @if(csrf_token())
        <app-component csrf="{{csrf_token()}}"/>
    @endif

@endsection
