<?php
$arquivo = fopen($_FILES["arquivo"]["tmp_name"], 'r');
$cabeçalho = mb_convert_encoding(fgetcsv($arquivo, null, ';'), 'UTF-8');
function limpar_texto($input) {
    $input = mb_convert_encoding($input, 'UTF-8');
    $input = str_replace(',','.', $input);
    return $input;
};
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
        $dados_finais['codigo_orgao_superior'][] = limpar_texto($informacoes[0]);
        $dados_finais['nome_orgao_superior'][] = limpar_texto($informacoes[1]);
        $dados_finais['codigo_orgao'][] = limpar_texto($informacoes[2]);
        $dados_finais['nome_unidade_gestora'][] = limpar_texto($informacoes[3]);
        $dados_finais['categoria_economica'][] = limpar_texto($informacoes[4]);
        $dados_finais['origem_receita'][] = limpar_texto($informacoes[5]);
        $dados_finais['especie_receita'][] = limpar_texto($informacoes[6]);
        $dados_finais['detalhamento'][] = limpar_texto($informacoes[7]);
        $dados_finais['valor_previsto'][] = limpar_texto($informacoes[8]);
        $dados_finais['valor_lancado'][] = limpar_texto($informacoes[9]);
        $dados_finais['valor_realizado'][] = limpar_texto($informacoes[10]);
        $dados_finais['percentual_realizado'][] = limpar_texto($informacoes[11]);
        $dados_finais['data_lancada'][] = limpar_texto($informacoes[12]);
        $dados_finais['ano_exercicio'][] = limpar_texto($informacoes[13]);
    }
}
// $quantidades = [];
// foreach ($dados_finais as $i) {
//     $quantidades[] = array_count_values($i);
// }
echo json_encode($dados_finais);
fclose($arquivo);