<?php
$arquivo = fopen($_FILES["arquivo"]["tmp_name"], 'r'); // abre o arquivo como leitura
$cabeçalho = mb_convert_encoding(fgetcsv($arquivo, null, ';'), 'UTF-8'); // cria o cabeçalho e converte para utf-8 (precisa mesmo disso?)
// ↑ detecta automaticamente como cabeçalho e ignora na próxima execução (eu acho, bem, funcionou)
function limpar_texto($input) { // função para converter para utf-8 e trocar , por . nos valores monetários
    $input = mb_convert_encoding($input, 'UTF-8');
    $input = str_replace('.', "", $input);
    $input = str_replace(',','.', $input);
    return $input;
};

fclose($arquivo);