//vai detectar o objeto dados e pegar as propriedades dele como dados
let dados = JSON.parse(sessionStorage.getItem('dados'));
console.log(dados);

//? Total de 18 itens
//! Dados mais importantes (5)
//! => Média no e nos, porcentagem no e nos, soma valores no e nos

let media_no = dados.media_no.results;
let media_no_labels = media_no.map((item) => item.NO);
let media_no_dados = media_no.map((item) => item.MEDIA);

let media_nos = dados.media_nos.results;
let media_nos_labels = media_nos.map((item) => item.NOS); //! JÁ FEITO
let media_nos_dados = media_nos.map((item) => item.MEDIA);

let mediana_nos = dados.mediana_nos.results;
let mediana_nos_labels = mediana_nos.map((item) => item.NOS); //! JÁ FEITO
let mediana_nos_dados = mediana_nos.map((item) => item.MEDIANA);

let mediana_no = dados.mediana_orgao.results; //& Não fazer agora
let mediana_no_labels = mediana_no.map((item) => item.NO); //! não conta como gráfico
let mediana_no_dados = mediana_no.map((item) => item.MEDIANA); //? Fazer como métrica

let no_mais_receitas = dados.no_mais_receitas.results;
let no_mais_receitas_labels = no_mais_receitas.map((item) => item.NO);
let no_mais_receitas_dados = no_mais_receitas.map((item) => item.QUANTIDADE);

let nos_mais_receitas = dados.nos_mais_receitas.results;
let nos_mais_receitas_labels = nos_mais_receitas.map((item) => item.NOS); //! JÁ FEITO
let nos_mais_receitas_dados = nos_mais_receitas.map((item) => item.QUANTIDADE);

let porcentagem_no = dados.porcentagem_no.results;
let porcentagem_no_labels = porcentagem_no.map((item) => item.NO);
let porcentagem_no_dados = porcentagem_no.map((item) => item.PORCENTAGEM);

let porcentagem_nos = dados.porcentagem_nos.results;
let porcentagem_nos_labels = porcentagem_nos.map((item) => item.NOS); //! JÁ FEITO
let porcentagem_nos_dados = porcentagem_nos.map((item) => item.PORCENTAGEM);

let soma_tipo_receita = dados.soma_tipo_receita.results;
let soma_tipo_receita_labels = soma_tipo_receita.map((item) => item.OR);
let soma_tipo_receita_dados = soma_tipo_receita.map((item) => item.TOTAL);

let soma_valores_no = dados.soma_valores_no.results;
let soma_valores_no_labels = soma_valores_no.map((item) => item.NO);
let soma_valores_no_dados = soma_valores_no.map((item) => item.TOTAL);

let soma_valores_nos = dados.soma_valores_nos.results;
let soma_valores_nos_labels = soma_valores_nos.map((item) => item.NOS); //! JÁ FEITO
let soma_valores_nos_dados = soma_valores_nos.map((item) => item.TOTAL);

let tipos_receita_nos = dados.tipos_receita_nos.results;
let tipos_receita_nos_labels = tipos_receita_nos.map(
    (item) => item.NOME_ORGAO_SUPERIOR,
); //* tabela separada
let tipos_receita_nos_dados = tipos_receita_nos.map(
    (item) => item.ESPECIE_RECEITA,
);

let tipos_receitas_no = dados.tipos_receitas_no.results;
let tipos_receitas_no_labels = tipos_receitas_no.map((item) => item.NOME_ORGAO); //* tabela separada
let tipos_receitas_no_dados = tipos_receitas_no.map(
    (item) => item.ESPECIE_RECEITA,
);

console.log(soma_valores_nos);

window.onload = function () {
    this.document.getElementById("mediana_nos_paragrafo").innerHTML =
        "R$ " + mediana_nos_dados.toLocaleString("pt-BR");
    this.document.getElementById("nos_mais_receitas_nome").innerHTML =
        nos_mais_receitas_labels;
    this.document.getElementById("nos_mais_receitas_valor").innerHTML =
        `${nos_mais_receitas_dados.toLocaleString("pt-BR")} Receitas`;
};

new Chart("grafico_porcentagem_nos", {
    type: "treemap",
    data: {
        datasets: [
            {
                tree: porcentagem_nos,
                key: "PORCENTAGEM",
                groups: ["NOS"],
                spacing: 0,
                borderWidth: 1,
                borderColor: "black",
                backgroundColor: (ctx) => {
                    const cores = [
                        "#8E3517",
                        "#cf4200",
                        "#F84C02",
                        "#F8C41B",
                        "#82AB2B",
                    ];
                    return cores[ctx.dataIndex % cores.length];
                },
                labels: {
                    display: true,
                    formatter: (ctx) => {
                        // ctx.raw.v contém o valor
                        const valor = ctx.raw.v;
                        const porcentagem = (valor * 100).toFixed(2);
                        if (ctx.dataIndex === 0) {
                            const nome = ctx.raw._data.NOS;
                            return [porcentagem + "%", nome];
                        }
                        return porcentagem + "%";
                    },
                    color: "white",
                    font: {
                        family: "serif",
                        size: 72,
                        weight: "bold",
                    },
                    overflow: "fit", // Adapta o tamanho
                },
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: "Porcentagem de participação de cada orgão superior",
                font: {
                    size: 35,
                },
            },
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    title: (items) => {
                        return items[0].raw._data.NOS;
                    },
                    label: (item) => {
                        const valor = item.raw.v;
                        const porcentagem = (valor * 100).toFixed(2);
                        return "Participação: " + porcentagem + "%";
                    },
                },
            },
        },
    },
});

new Chart("grafico_media_nos", {
    type: "bar",
    data: {
        labels: media_nos_labels,
        datasets: [
            {
                label: "Média (R$)",
                data: media_nos_dados,
                backgroundColor: [
                    "rgba(80, 173, 159, 0.5)",
                    "rgba(233, 199, 22, 0.5)",
                    "rgba(188, 39, 45, 0.5)",
                    "rgba(0, 0, 162, 0.5)",
                    "rgba(255, 90, 94, 0.5)",
                ],
                borderColor: [
                    "rgba(80, 173, 159, 1)",
                    "rgba(233, 199, 22, 1)",
                    "rgba(188, 39, 45, 1)",
                    "rgba(0, 0, 162, 1)",
                    "rgba(255, 90, 94, 1)",
                ],
                borderWidth: 2,
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: "Média de valores das receitas nos órgãos superiores (Top 15)",
                font: {
                    size: 18,
                },
            },
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        return (
                            "Média: R$ " +
                            context.parsed.y.toLocaleString("pt-BR", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            })
                        );
                    },
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        return "R$ " + value.toLocaleString("pt-BR");
                    },
                },
            },
            x: {
                display: false, // Remove o eixo X inteiro
            },
        },
    },
});

soma_valores_nos.forEach((element) => {
    this.document.querySelector("#tabela_soma_valores_nos_body").innerHTML +=
        `<tr'>
    <td class="px-4 py-2 border-b border-gray-200">${element["NOS"]}</td>
    <td class="px-4 py-2 border-b border-gray-200">${element["TOTAL"].toLocaleString("pt-BR")}<td>
    </tr>
    `;
});

new DataTable("#tabela_soma_valores_nos", {
    paging: false,
    scrollCollapse: true,
    searching: false,
    scrollY: "185px",
    scrollX: false,
    order: ["valor_tabela_nos", "desc"],
});
