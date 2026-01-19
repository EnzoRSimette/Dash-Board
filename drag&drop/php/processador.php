<?php
$dados_finais = [];
$arquivo = fopen($_FILES["arquivo"]["tmp_name"], 'r');
while(!feof($arquivo)) {
    $informacoes = fgetcsv($arquivo);
    $dados_finais[] = $informacoes;
}
echo json_encode($dados_finais);
fclose($arquivo);