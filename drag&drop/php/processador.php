<?php
$caminho = $_FILES["arquivo"]["tmp_name"];
$caminho = str_replace('\\', '/', $caminho);

$ligacao = new PDO("mysql:host=localhost;dbname=dashboard;charset=latin1", "root", "", [PDO::MYSQL_ATTR_LOCAL_INFILE => true, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]); // Pode usar a mesma estrutura sempre

$cols = "`CODIGO_ORGAO_SUPERIOR`, `NOME_ORGAO_SUPERIOR`, `CODIGO_ORGAO`, `NOME_ORGAO`, `CODIGO_UNIDADE_GESTORA`, `NOME_UNIDADE_GESTORA`, `CATEGORIA_ECONOMICA`, `ORIGEM_RECEITA`,
`ESPECIE_RECEITA`, `DETALHAMENTO`, `VALOR_PREVISTO_ATUALIZADO`, `VALOR_LANCADO`, `VALOR_REALIZADO`, `PERCENTUAL_REALIZADO`, `DATA_LANCAMENTO`, ANO_EXERCICIO";


$sql_query = "
LOAD DATA LOCAL INFILE '$caminho' IGNORE INTO TABLE `dados` CHARACTER SET latin1 FIELDS TERMINATED BY ';' OPTIONALLY ENCLOSED BY '\"' ESCAPED BY '\"' LINES TERMINATED BY '\n' IGNORE 1 LINES (@ColVar0, `NOME_ORGAO_SUPERIOR`, @ColVar2, `NOME_ORGAO`, @ColVar4, `NOME_UNIDADE_GESTORA`, `CATEGORIA_ECONOMICA`, `ORIGEM_RECEITA`, `ESPECIE_RECEITA`, `DETALHAMENTO`, @ColVar10, @ColVar11, @ColVar12, @ColVar13, `DATA_LANCAMENTO`, @ColVar15)
SET
`CODIGO_ORGAO_SUPERIOR` = REPLACE(REPLACE(@ColVar0, '.', ''), ',', '.'),
`CODIGO_ORGAO` = REPLACE(REPLACE(@ColVar2, '.', ''), ',', '.'),
`CODIGO_UNIDADE_GESTORA` = REPLACE(REPLACE(@ColVar4, '.', ''), ',', '.'),
`VALOR_PREVISTO_ATUALIZADO` = REPLACE(REPLACE(@ColVar10, '.', ''), ',', '.'),
`VALOR_LANCADO` = REPLACE(REPLACE(@ColVar11, '.', ''), ',', '.'),
`VALOR_REALIZADO` = REPLACE(REPLACE(@ColVar12, '.', ''), ',', '.'),
`PERCENTUAL_REALIZADO` = REPLACE(REPLACE(@ColVar13, '.', ''), ',', '.'),
`ANO_EXERCICIO` = REPLACE(REPLACE(@ColVar15, '.', ''), ',', '.');";

$limpar_dados = "
TRUNCATE TABLE `dados`
";

try {
    $ligacao->exec($limpar_dados); echo "Dados Limpos" . PHP_EOL;
} catch (Exception $ex) { echo $ex->getMessage(); }

try {$ligacao->query($sql_query)->fetchAll(); echo "Dados importados" . PHP_EOL;} catch (Exception $ex) { echo $ex->getMessage(); }