<?php

include './classes/MySQL.php';

$busca = new MySQL();

$query = "SELECT 
            T0.codigo_venda,
            T1.produto,
            T1.id as CodigoProduto,
            T0.quantidade,
            T0.valor,
            T0.subtotal,
            T0.imposto,
            T0.valor_imposto,
            T0.subtotal_imposto,
            T0.data
        FROM historico_de_vendas T0
        INNER JOIN produtos T1
        ON T0.produto_PRODUTOS = T1.id";

$resultado = $busca->select($query);

if ($resultado !== null) {

    $produtos = array();

    foreach ($resultado as $row) {
        $item = array(
            "CodigoPedido" => $row['codigo_venda'],
            "Produto" => $row['produto'],
            "CodigoProduto" => $row['CodigoProduto'],
            "Quantidade" => $row['quantidade'],
            "Valor" => $row['valor'],
            "Subtotal" => $row['subtotal'],
            "Imposto" => $row['imposto'],
            "ImpostoDoProduto" => $row['valor_imposto'], 
            "SubtotalImposto" => $row['subtotal_imposto'],
            "Data" => $row['data'] 
        );

        array_push($produtos,$item);
    }
    echo json_encode($produtos);
} else {
    echo json_encode("Nenhum resultado encontrado.");
}