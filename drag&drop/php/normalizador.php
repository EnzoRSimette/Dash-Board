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


//? $$$$$$$$$$$$$$$$$$$$$$$$
//? $ VERIFY UPLOAD ERRORS $
//? $$$$$$$$$$$$$$$$$$$$$$$$


// Se não há arquivo, significa que a página foi acessada diretamente
// Isso previne o erro "Path cannot be empty"
if (!isset($_FILES["arquivo"]) || empty($_FILES["arquivo"]["tmp_name"])) {
    http_response_code(400);
    die("Nenhum arquivo foi enviado. Este script deve ser chamado via POST com um arquivo.");
}

// Verificar se houve erro no upload
if ($_FILES["arquivo"]["error"] !== UPLOAD_ERR_OK) {
    $erros = [
        UPLOAD_ERR_INI_SIZE => "Arquivo excede upload_max_filesize",
        UPLOAD_ERR_FORM_SIZE => "Arquivo excede MAX_FILE_SIZE",
        UPLOAD_ERR_PARTIAL => "Upload parcial - tente novamente",
        UPLOAD_ERR_NO_FILE => "Nenhum arquivo foi enviado",
        UPLOAD_ERR_NO_TMP_DIR => "Pasta temporária ausente",
        UPLOAD_ERR_CANT_WRITE => "Falha ao gravar no disco",
        UPLOAD_ERR_EXTENSION => "Extensão bloqueou o upload"
    ];

    $erro_msg = isset($erros[$_FILES["arquivo"]["error"]])
        ? $erros[$_FILES["arquivo"]["error"]]  // Pergunta se dentro do upload possui algum erro (dos listados), se sim, printa
        : "Erro desconhecido: " . $_FILES["arquivo"]["error"]; // Se não, reze

    http_response_code(400);
    die("ERRO no upload: " . $erro_msg);
}

// Verificar se o arquivo temporário existe
if (!file_exists($_FILES["arquivo"]["tmp_name"])) {
    http_response_code(500);
    die("ERRO: Arquivo temporário não encontrado: " . $_FILES["arquivo"]["tmp_name"]);
}

// =========
// = PATHS =
// =========

$caminho_temp = $_FILES["arquivo"]["tmp_name"];
$caminho = str_replace('\\', '/', $caminho_temp);

//! ==============
//! = SQL QUERYs =
//! ==============

$sql_query = "
LOAD DATA LOCAL INFILE '$caminho'
IGNORE INTO TABLE `dados`
CHARACTER SET latin1
FIELDS TERMINATED BY ';'
OPTIONALLY ENCLOSED BY '\"'
ESCAPED BY '\"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(@ColVar0, `NOME_ORGAO_SUPERIOR`, @ColVar2, `NOME_ORGAO`, @ColVar4, `NOME_UNIDADE_GESTORA`, `CATEGORIA_ECONOMICA`, `ORIGEM_RECEITA`, `ESPECIE_RECEITA`, `DETALHAMENTO`, @ColVar10, @ColVar11, @ColVar12, @ColVar13, `DATA_LANCAMENTO`, @ColVar15)
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

$limpar_dados = "TRUNCATE TABLE `dados`";

// Limpar tabela
echo 'Limpando banco de dados...' . PHP_EOL;
$resultado_limpar = $db->execute_query($limpar_dados);

if ($resultado_limpar->status !== 'SUCESS') {
    http_response_code(500);
    die('ERRO ao limpar tabela: ' . $resultado_limpar->message);
}

echo 'Database is clear' . PHP_EOL;

// Importar dados
echo 'Importando dados...' . PHP_EOL;
$resultado_importar = $db->execute_query($sql_query);

if ($resultado_importar->status !== 'SUCESS') { // Se o resulado for um erro, printa resposta 500
    http_response_code(500);
    die('ERRO ao importar dados: ' . $resultado_importar->message);
}

echo 'Data imported - ' . $resultado_importar->affected_rows . ' linhas importadas' . PHP_EOL;

http_response_code(200);