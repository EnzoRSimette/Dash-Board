<?php

//* $$$$$$$$$$$$$$$$$
//* $ SQL CONECTION $
//* $$$$$$$$$$$$$$$$$

use sys4soft\Database;
require_once('database.php');
define('MYSQL_CONFIG', [
    'host' => 'localhost',
    'database' => 'dashboard',
    'username' => 'root',
    'password' => '',
    'charset' => 'latin1'
]);

$db = new Database(MYSQL_CONFIG);

// =========
// = PATHS =
// =========

$caminho = str_replace('\\', '/', $_FILES["arquivo"]["tmp_name"]);

//! ==============
//! = SQL QUERYs =
//! ==============

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
`ANO_EXERCICIO` = REPLACE(REPLACE(@ColVar15, '.', ''), ',', '.');
";
//`DATA_LANCAMENTO` = STR_TO_DATE(@ColVar14, '%d/%m/%Y'),
$limpar_dados = "
TRUNCATE TABLE `dados`
";

$db->execute_query($limpar_dados);
echo 'Database is clear' . PHP_EOL;
$db->execute_query($sql_query);
echo 'Data imported';

//? $$$$$$$$$$$$$$$$$
//? $ DATA ANALYSIS $
//? $$$$$$$$$$$$$$$$$

$soma_valores_por_orgao_superior = $db->execute_query("SELECT NOME_ORGAO_SUPERIOR NOS, ROUND(SUM(VALOR_REALIZADO), 2) TOTAL FROM dados GROUP BY NOS ORDER BY TOTAL DESC LIMIT 5"); //* CORRETO
$soma_valores_por_orgao = $db->execute_query("SELECT NOME_ORGAO `NO`, ROUND(SUM(VALOR_REALIZADO), 2) TOTAL FROM dados GROUP BY `NO` ORDER BY TOTAL DESC LIMIT 5"); //* CORRETO
$orgao_s_com_mais_receitas = $db->execute_query("SELECT NOME_ORGAO_SUPERIOR NOS, COUNT(NOME_ORGAO_SUPERIOR) QUANTIDADE FROM dados GROUP BY NOS ORDER BY QUANTIDADE DESC LIMIT 1");
$orgao_com_mais_receitas = $db->execute_query("SELECT NOME_ORGAO `NO`, COUNT(NOME_ORGAO) QUANTIDADE FROM dados GROUP BY `NO` ORDER BY QUANTIDADE DESC LIMIT 1");
$media_orgao_s = $db->execute_query("SELECT NOME_ORGAO_SUPERIOR NOS, ROUND(AVG(VALOR_REALIZADO), 2) MEDIA FROM dados GROUP BY NOS");
$media_orgao = $db->execute_query("SELECT NOME_ORGAO `NO`, ROUND(AVG(VALOR_REALIZADO), 2) MEDIA FROM dados GROUP BY `NO`");
$soma_tipo_receita = $db->execute_query("SELECT ORIGEM_RECEITA `OR`, ROUND(SUM(VALOR_REALIZADO), 2) FROM dados GROUP BY `OR`");
$porcentagem_por_orgao_s = $db->execute_query("WITH org_total AS (SELECT NOME_ORGAO_SUPERIOR NOS, ROUND(SUM(VALOR_REALIZADO), 2) TOTAL FROM dados GROUP BY NOS ORDER BY TOTAL DESC) SELECT NOS, TOTAL, TOTAL/SUM(TOTAL) OVER () AS PORCENTAGEM FROM org_total;");
$porcentagem_por_orgao = $db->execute_query("WITH org_total AS (SELECT NOME_ORGAO `NO`, ROUND(SUM(VALOR_REALIZADO), 2) TOTAL FROM dados GROUP BY `NO` ORDER BY TOTAL DESC) SELECT `NO`, TOTAL, TOTAL/SUM(TOTAL) OVER () AS PORCENTAGEM FROM org_total;");
$mediana_orgao_superior = $db->execute_query("
WITH mediana AS (
  SELECT ROUND(AVG(VALOR_REALIZADO), 2) AS MEDIANA
  FROM (
    SELECT
      VALOR_REALIZADO,
      ROW_NUMBER() OVER (ORDER BY VALOR_REALIZADO) AS rn,
      COUNT(*) OVER () AS cnt
    FROM dados
  ) t
  WHERE rn IN (FLOOR((cnt + 1) / 2), CEIL((cnt + 1) / 2))
),
org_total AS (
  SELECT
    NOME_ORGAO_SUPERIOR AS NOS,
    ROUND(SUM(VALOR_REALIZADO), 2) AS TOTAL
  FROM dados
  GROUP BY NOME_ORGAO_SUPERIOR
)
SELECT
  o.NOS,
  o.TOTAL,
  o.TOTAL / SUM(o.TOTAL) OVER () AS PORCENTAGEM,
  m.MEDIANA
FROM org_total o
CROSS JOIN mediana m
ORDER BY o.TOTAL DESC;
");
$mediana_orgao = $db->execute_query("
WITH mediana AS (
  SELECT ROUND(AVG(VALOR_REALIZADO), 2) AS MEDIANA
  FROM (
    SELECT
      VALOR_REALIZADO,
      ROW_NUMBER() OVER (ORDER BY VALOR_REALIZADO) AS rn,
      COUNT(*) OVER () AS cnt
    FROM dados
  ) t
  WHERE rn IN (FLOOR((cnt + 1) / 2), CEIL((cnt + 1) / 2))
),
org_total AS (
  SELECT
    NOME_ORGAO AS `NO`,
    ROUND(SUM(VALOR_REALIZADO), 2) AS TOTAL
  FROM dados
  GROUP BY `NO`
)
SELECT
  o.`NO`,
  o.TOTAL,
  o.TOTAL / SUM(o.TOTAL) OVER () AS PORCENTAGEM,
  m.MEDIANA
FROM org_total o
CROSS JOIN mediana m
ORDER BY o.TOTAL DESC;
");
$tipos_receita_nos = $db->execute_query("SELECT DISTINCT NOME_ORGAO_SUPERIOR NOS, ESPECIE_RECEITA FROM dados");
$tipos_receita_no = $db->execute_query("SELECT DISTINCT NOME_ORGAO, ESPECIE_RECEITA FROM dados ");
$all_data = [
    'soma_valores_nos' => $soma_valores_por_orgao_superior,
    'soma_valores_no' => $soma_valores_por_orgao,
    'nos_mais_receitas' => $orgao_s_com_mais_receitas,
    'no_mais_receitas' => $orgao_com_mais_receitas,
    'media_nos' => $media_orgao_s,
    'media_no' => $media_orgao,
    'soma_tipo_receita' => $soma_tipo_receita,
    'porcentagem_nos' => $porcentagem_por_orgao_s,
    'porcentagem_no' => $porcentagem_por_orgao,
    'mediana_nos' => $mediana_orgao_superior,
    'mediana_orgao' => $mediana_orgao,
    'tipos_receita_nos' => $tipos_receita_nos,
    'tipos_receitas_no' => $tipos_receita_no
];

print_r($all_data);