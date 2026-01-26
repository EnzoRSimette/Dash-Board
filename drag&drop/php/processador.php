<?php
$arquivo = fopen($_FILES["arquivo"]["tmp_name"], 'r'); // abre o arquivo como leitura
$cabeçalho = mb_convert_encoding(fgetcsv($arquivo, null, ';'), 'latin1_general_ci'); // cria o cabeçalho e converte para latin1_general_ci (precisa mesmo disso?)
$cabeçalho = str_replace(' ', '_', $cabeçalho);
// ↑ detecta automaticamente como cabeçalho e ignora na próxima execução (eu acho, bem, funcionou)


$ligacao = new PDO("mysql:host=localhost;dbname=dashboard", "root", "", [PDO::MYSQL_ATTR_LOCAL_INFILE => true]); // Pode usar a mesma estrutura sempre
$estado = $ligacao->getAttribute(PDO::ATTR_CONNECTION_STATUS); // checa a conexão

function limpar_texto($input) { // função para converter para utf-8 e trocar , por . nos valores monetários
    $input = mb_convert_encoding($input, 'latin1_general_ci');
    $input = str_replace('.', "", $input);
    $input = str_replace(',','.', $input);
    return $input;
};

$cols = "`CODIGO_ORGAO_SUPERIOR`, `NOME_ORGAO_SUPERIOR`, `CODIGO_ORGAO`, `NOME_ORGAO`, `CODIGO_UNIDADE_GESTORA`, `NOME_UNIDADE_GESTORA`, `CATEGORIA_ECONOMICA`, `ORIGEM_RECEITA`,
`ESPECIE_RECEITA`, `DETALHAMENTO`, `VALOR_PREVISTO_ATUALIZADO`, `VALOR_LANCADO`, `VALOR_REALIZADO`, `PERCENTUAL_REALIZADO`, `DATA_LANCAMENTO`, ANO_EXERCICIO";

$mandar_csv = $ligacao->query("")->fetchAll();

fclose($arquivo);