<?php
$arquivo = fopen($_FILES["arquivo"]["tmp_name"], 'r');
$cabeçalho = mb_convert_encoding(fgetcsv($arquivo, null, ';'), 'UTF-8');
$dados_finais = [
    'codigo_orgao_superior' => [],
    'nome_orgao_superior' => [],
    'codigo_orgao' => [],
    'nome_unidade_gestora' => [],
    'categoria_economica' => [],
    'origem_receita' => [],
    'especie_receita' => [],
    'detalhamento' => [],
    'valor_previsto' => [],
    'valor_lancado' => [],
    'valor_realizado' => [],
    'percentual_realizado' => [],
    'data_lancada' => [],
    'ano_exercicio' => []
];
while ($informacoes = fgetcsv($arquivo, null, ';')) {
    if ($informacoes !== false || null) {
    if (is_string($indice_atual)) {
    $indice_atual = mb_convert_encoding($indice_atual, "UTF-8");
    };
        $dados_finais['codigo_orgao_superior'][] = $informacoes[0][0];
        $dados_finais['nome_orgao_superior'][] = $informacoes[1][0];
        $dados_finais['codigo_orgao'][] = $informacoes[2][0];
        $dados_finais['nome_unidade_gestora'][] = $informacoes[3][0];
        $dados_finais['categoria_economica'][] = $informacoes[4][0];
        $dados_finais['origem_receita'][] = $informacoes[5][0];
        $dados_finais['especie_receita'][] = $informacoes[6][0];
        $dados_finais['detalhamento'][] = $informacoes[7][0];
        $dados_finais['valor_previsto'][] = $informacoes[8][0];
        $dados_finais['valor_lancado'][] = $informacoes[9][0];
        $dados_finais['valor_realizado'][] = $informacoes[10][0];
        $dados_finais['percentual_realizado'][] = $informacoes[11][0];
        $dados_finais['data_lancada'][] = $informacoes[12][0];
        $dados_finais['ano_exercicio'][] = $informacoes[13][0];
    }
}
echo json_encode($dados_finais);
fclose($arquivo);