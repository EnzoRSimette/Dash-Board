window.addEventListener("dados", (e) => {
    // vai detectar o objeto dados e pegar as propriedades dele como dados
    let dados = e.detail;
    function extrairLabelsEDados(results, label, data) {
        let labels = [];
        let dados = [];
        let tudo = [labels, dados];
        results.forEach((element) => {
            labels.push(element[label]);
            dados.push(element[data]);
        });
        return tudo;
    }

    let porcentagemData = {
        labels: extrairLabelsEDados(dados.porcentagem_no.results, 'NO', 'NO')[0],
        totais: extrairLabelsEDados(dados.porcentagem_no.results, 'NO', 'TOTAL')[1],
        porcentagens: extrairLabelsEDados(dados.porcentagem_no.results, 'NO', 'PORCENTAGEM')[1]
    };

    let porcentagemData_superior = {
        labels: extrairLabelsEDados(dados.porcentagem_nos.results, 'NOS', 'NOS')[0],
        totais: extrairLabelsEDados(dados.porcentagem_nos.results, 'NOS', 'TOTAL')[1],
        porcentagens: extrairLabelsEDados(dados.porcentagem_nos.results, 'NOS', 'PORCENTAGEM')[1]
    };

    let graficosData = {
        soma_valores_nos: extrairLabelsEDados(
            dados.soma_valores_nos.results,
            "NOS",
            "TOTAL",
        ),
        soma_valores_no: extrairLabelsEDados(dados.soma_valores_no.results, 'NO', 'TOTAL'),
        media_no: extrairLabelsEDados(dados.media_no.results, 'NO', 'MEDIA'),
        media_nos: extrairLabelsEDados(dados.media_nos.results, 'NOS', 'MEDIA'),
        tipos_receita_nos: extrairLabelsEDados(dados.tipos_receita_nos.results, 'NOS', 'ESPECIE_RECEITA'),
        tipos_receita_no: extrairLabelsEDados(dados.tipos_receita_no.results, 'NOME_ORGÃO', 'ESPECIE_RECEITA'),
        soma_tipo_receita: extrairLabelsEDados(dados.soma_tipo_receita.results, 'OR', 'TOTAL'),
        porcentagem_nos: porcentagemData_superior,
        porcentagem_no: porcentagemData,
        mediana_nos: extrairLabelsEDados(dados.mediana_nos.results, 'NOS', 'MEDIANA'),
        mediana_orgao: extrairLabelsEDados(dados.mediana_orgaos.results, 'NO', 'MEDIANA'),
        no_mais_receitas: extrairLabelsEDados(dados.no_mais_receitas.results, 'NO', 'QUANTIDADE'),
        nos_mais_receitas: extrairLabelsEDados(dados.nos_mais_receitas.results, 'NOS', 'QUANTIDADE'),
    };

    console.log(graficosData);
});

