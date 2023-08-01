<?php

include './classes/MySQL.php';
$busca = new MySQL();

$query = "SELECT 
            T0.id,
            T1.id as CodigoProduto,
            t0.quantidade,
            T1.valor,
            T2.imposto 
        FROM carrinho t0
        INNER JOIN produtos t1 
        ON t0.produto_PRODUTOS = t1.id
        INNER JOIN categorias T2
        ON T1.categoria_CATEGORIAS = T2.id";

$resultado = $busca->select($query);
$codigoDaVenda = rand(100000, 999999);

foreach ($resultado as $row) {

    $IdProdutoCarrinho = $row['id'];
    $CodigoProduto = $row['CodigoProduto'];
    $Qtd = $row['quantidade'];
    $Valor = $row['valor'];
    $subtotal = $Valor * $Qtd;
    $Imposto = $row['imposto'];
    $impostoPorProduto = $Valor * ($Imposto/100); 
    $subtotalImposto = $subtotal * ($Imposto/100); 
    $data = date('Y-m-d');

    $query = "INSERT INTO 
            `soft_market`.`historico_de_vendas` 
            (`codigo_venda`, `produto_PRODUTOS`, `quantidade`, `valor`, `subtotal`, `imposto`, `valor_imposto`, `subtotal_imposto`, `data`) 
            VALUES ('$codigoDaVenda', ' $CodigoProduto', '$Qtd', '$Valor', '$subtotal', '$Imposto', '$impostoPorProduto', '$subtotalImposto', '$data')";

    $insereNoHistorico = new MySQL();
    $insereNoHistorico->insert($query);

}

$query = "DELETE FROM `soft_market`.`carrinho`";

$deletaDoCarrinho = new MySQL();
$deletaDoCarrinho->delete($query);

echo json_encode(true);
