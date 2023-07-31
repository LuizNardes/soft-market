<?php

include './classes/MySQL.php';

$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true);

$id = $data['id'];

$busca = new MySQL();

$query = "DELETE FROM `soft_market`.`categorias` WHERE (`id` = '$id');";

$resultado = $busca->delete($query);

echo json_encode($resultado);
