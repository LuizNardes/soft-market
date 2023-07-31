<?php

include './classes/MySQL.php';

$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true);

$categoria = $data['categoria'];
$imposto = $data['imposto'];

$busca = new MySQL();

$query = "INSERT INTO `soft_market`.`categorias` (`categoria`, `imposto`) VALUES ('$categoria', '$imposto')";

$resultado = $busca->insert($query);

echo json_encode($resultado);
