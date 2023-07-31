<?php

include './classes/MySQL.php';

$busca = new MySQL();

$query = "SELECT 
            T0.id AS CodigoProduto,
            T0.produto AS Nome,
            T1.categoria AS Categoria,
            T0.valor AS Valor,
            T1.imposto AS Imposto,
            T0.foto AS Foto
            FROM produtos T0 
            INNER JOIN categorias T1 
            on T0.categoria_CATEGORIAS = T1.id;";

$resultado = $busca->select($query);

if ($resultado !== null) {

    $produtos = array();

    foreach ($resultado as $row) {
        $item = array(
            "CodigoProduto" => $row['CodigoProduto'],
            "Nome" => $row['Nome'],
            "Categoria" => $row['Categoria'],
            "Valor" => $row['Valor'],
            "Imposto" => $row['Imposto'],
            "Foto" => $row['Foto'] 
        );

        array_push($produtos,$item);
    }
    echo json_encode($produtos);
} else {
    echo json_encode("Nenhum resultado encontrado.");
}