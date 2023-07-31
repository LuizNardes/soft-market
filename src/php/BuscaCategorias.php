<?php

include './classes/MySQL.php';

$busca = new MySQL();

$query = "SELECT * FROM categorias;";

$resultado = $busca->select($query);

if ($resultado !== null) {

    $categorias = array();

    foreach ($resultado as $row) {
        $item = array(
            "Codigo" => $row['id'],
            "Categoria" => $row['categoria'],
            "Imposto" => $row['imposto']
        );

        array_push($categorias,$item);
    }
    echo json_encode($categorias);
} else {
    echo json_encode("Nenhum resultado encontrado.");
}