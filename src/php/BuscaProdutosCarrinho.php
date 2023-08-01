<?php

include './classes/MySQL.php';

$agrupaCarrinho = new MySQL();

$query = "SELECT produto_PRODUTOS,SUM(quantidade) as quantidade FROM CARRINHO GROUP BY produto_PRODUTOS";

$resultado = $agrupaCarrinho->select($query);

if ($resultado !== null) {
  

    $deleteCarrinho = new MySQL();
    $query = "DELETE FROM carrinho";
    $deleteCarrinho->delete($query);

    foreach ($resultado as $row) {
        $produto_PRODUTOS = $row['produto_PRODUTOS'];
        $quantidade = $row['quantidade'];

        $query = "INSERT INTO carrinho (produto_PRODUTOS,quantidade) VALUES('$produto_PRODUTOS','$quantidade')";
        
        $insertCarrinhoAgrupado = new MySQL();
        $insertCarrinhoAgrupado->insert($query);
    }

    $busca = new MySQL();

    $query = "SELECT 
                T0.id,
                T1.produto,
                T1.id as CodigoProduto,
                t0.quantidade,
                T1.valor,
                T2.categoria,
                T2.imposto 
            FROM carrinho t0
            INNER JOIN produtos t1 
            ON t0.produto_PRODUTOS = t1.id
            INNER JOIN categorias T2
            ON T1.categoria_CATEGORIAS = T2.id";

    $resultado = $busca->select($query);

    $produtos = array();

    foreach ($resultado as $row) {
        $item = array(
            "ID" => $row['id'],
            "Produto" => $row['produto'],
            "CodigoProduto" => $row['CodigoProduto'],
            "Valor" => $row['valor'],
            "Qtd" => $row['quantidade'],
            "Categoria" => $row['categoria'],
            "Imposto" => $row['imposto']
        );

        array_push($produtos, $item);
    }
    echo json_encode($produtos);
} else {
    echo json_encode("Nenhum resultado encontrado.");
}
