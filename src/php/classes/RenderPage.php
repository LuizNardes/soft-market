<?php

class RenderPage
{
    public function __construct()
    {
        $this->render();
    }

    private function render()
    {
        $request_uri = $_SERVER["REQUEST_URI"];
        $parts = explode('/', $request_uri);
        $page = $parts[1] != '' ? $parts[1] : 'home';
        $arquivo = 'dist/pages/'.$page.'.php';
    
        if(is_file($arquivo)){
            include $arquivo;
        }else{
            include 'dist/pages/404.php';
        } 
    }
}