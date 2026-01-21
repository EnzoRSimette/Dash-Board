<?php
$arquivo = fopen($_FILES["arquivo"]["tmp_name"], 'r'); // abre o arquivo como leitura
$cabeçalho = mb_convert_encoding(fgetcsv($arquivo, null, ';'), 'UTF-8'); // cria o cabeçalho e converte para utf-8 (precisa mesmo disso?)
// ↑ detecta automaticamente como cabeçalho e ignora na próxima execução (eu acho, bem, funcionou)
function limpar_texto($input) { // função para converter para utf-8 e trocar , por . nos valores monetários
    $input = mb_convert_encoding($input, 'UTF-8');
    $input = str_replace(',','.', $input);
    return $input;
};
$dados_finais = [ // Aqui é o "cabeçalho" digamos assim
    'codigo_orgao_superior' => [], // ele vai colocar os dados dentro de cada um desses arrays
    'nome_orgao_superior' => [],
    'codigo_orgao' => [],
    'nome_orgao' => [],
    'codigo_unidade_gestora' => [],
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
while ($informacoes = fgetcsv($arquivo, null, ';')) { // informações = conteúdo do csv separado por ;
    if ($informacoes !== false || null) { // executa até encontrar um null ou falso (evita erros no final do arquivo)
        $dados_finais['codigo_orgao_superior'][] = limpar_texto($informacoes[0]); // vai entrar no array e colocar o dados
        $dados_finais['nome_orgao_superior'][] = limpar_texto($informacoes[1]);
        $dados_finais['codigo_orgao'][] = limpar_texto($informacoes[2]);
        $dados_finais['nome_orgao'][] = limpar_texto($informacoes[3]);
        $dados_finais['codigo_unidade_gestora'][] = limpar_texto($informacoes[4]);
        $dados_finais['nome_unidade_gestora'][] = limpar_texto($informacoes[5]);
        $dados_finais['categoria_economica'][] = limpar_texto($informacoes[6]);
        $dados_finais['origem_receita'][] = limpar_texto($informacoes[7]);
        $dados_finais['especie_receita'][] = limpar_texto($informacoes[8]);
        $dados_finais['detalhamento'][] = limpar_texto($informacoes[9]);
        $dados_finais['valor_previsto'][] = limpar_texto($informacoes[10]);
        $dados_finais['valor_lancado'][] = limpar_texto($informacoes[11]);
        $dados_finais['valor_realizado'][] = limpar_texto($informacoes[12]);
        $dados_finais['percentual_realizado'][] = limpar_texto($informacoes[13]);
        $dados_finais['data_lancada'][] = limpar_texto($informacoes[14]);
        $dados_finais['ano_exercicio'][] = limpar_texto($informacoes[15]);
    }
}
$quantidades = [];
foreach ($dados_finais as $i => $value) {  // Varre cada valor de cada nome dentro de $dados_finais e extrai o valor colocando em um objeto nome: quantidade
    if ($i == 'valor_realizado') continue; // pula valor_realizado e data_lancada
    if ($i == 'data_lancada') continue;
    $contador = array_count_values($value);
    $quantidades[] = $contador;
}
$quantidades[] = $dados_finais['valor_realizado'];
$quantidades[] = $dados_finais['data_lancada'];
$quantidades[] = array_count_values($dados_finais['data_lancada']);
echo json_encode($quantidades); // Envia para o js
fclose($arquivo);