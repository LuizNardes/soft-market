<?php

include './classes/MySQL.php';

$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true);

$codigo = $data['codigo'];
$quantidade = $data['quantidade'];

$busca = new MySQL();

$query = "INSERT INTO `soft_market`.`produtos` (`categoria_CATEGORIAS`, `produto`, `valor`) VALUES ('$categoria', '$nome', '$valor');";

$resultado = $busca->insert($query);

echo json_encode($resultado);
