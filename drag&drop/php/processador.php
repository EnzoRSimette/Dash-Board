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
        foreach ($informacoes as $i) {
            $informacoes[$i] = mb_convert_encoding($informacoes[$i], 'UTF-8');
            $informacoes[$i] = str_replace($i, ',', '.');
        };
        $dados_finais['codigo_orgao_superior'][] = $informacoes[0];
        $dados_finais['nome_orgao_superior'][] = $informacoes[1];
        $dados_finais['codigo_orgao'][] = $informacoes[2];
        $dados_finais['nome_unidade_gestora'][] = $informacoes[3];
        $dados_finais['categoria_economica'][] = $informacoes[4];
        $dados_finais['origem_receita'][] = $informacoes[5];
        $dados_finais['especie_receita'][] = $informacoes[6];
        $dados_finais['detalhamento'][] = $informacoes[7];
        $dados_finais['valor_previsto'][] = $informacoes[8];
        $dados_finais['valor_lancado'][] = $informacoes[9];
        $dados_finais['valor_realizado'][] = $informacoes[10];
        $dados_finais['percentual_realizado'][] = $informacoes[11];
        $dados_finais['data_lancada'][] = $informacoes[12];
        $dados_finais['ano_exercicio'][] = $informacoes[13];
    }
}
$quantidades = [];
foreach ($dados_finais as $i) {
        $quantidades[] = array_count_values($i);
}
json_encode($dados_finais);
fclose($arquivo);