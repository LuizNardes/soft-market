<?php

include './classes/MySQL.php';

$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true);

$id = $data['id'];
$tabela = $data['tabela'];
$content = $data['content'];
$coluna = $data['coluna'];

$busca = new MySQL();

$query = "UPDATE `soft_market`.`$tabela` SET `$coluna` = '$content' WHERE (`id` = '$id')";

$resultado = $busca->update($query);

echo json_encode($resultado);
