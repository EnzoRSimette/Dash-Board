//window.addEventListener("dados", (e) => {
    // vai detectar o objeto dados e pegar as propriedades dele como dados
    //let dados = e.detail;
    const dados = {
    "soma_valores_nos": {
        "status": "SUCESS",
        "message": "sucess",
        "query": "SELECT NOME_ORGAO_SUPERIOR NOS, ROUND(SUM(VALOR_REALIZADO), 2) TOTAL FROM dados GROUP BY NOS ORDER BY TOTAL DESC",
        "results": [
            {
                "NOS": "Ministério da Fazenda",
                "TOTAL": 3392907445981.89
            },
            {
                "NOS": "Ministério da Previdência Social",
                "TOTAL": 211986645944.26
            },
            {
                "NOS": "Ministério de Minas e Energia",
                "TOTAL": 37274320131.98
            },
            {
                "NOS": "Ministério do Trabalho e Emprego",
                "TOTAL": 35427961165.26
            },
            {
                "NOS": "Ministério da Ciência, Tecnologia e Inovaç",
                "TOTAL": 16777394166.95
            },
            {
                "NOS": "Ministério da Defesa",
                "TOTAL": 15987329318.6
            },
            {
                "NOS": "Ministério da Educação",
                "TOTAL": 14276865609.41
            },
            {
                "NOS": "Presidência da República",
                "TOTAL": 13217456019.74
            },
            {
                "NOS": "Ministério da Saúde",
                "TOTAL": 3159666643.89
            },
            {
                "NOS": "Ministério da Justiça e Segurança Pública",
                "TOTAL": 2565732250.77
            },
            {
                "NOS": "Ministério da Integração e do Desenvolvime",
                "TOTAL": 2449829198.06
            },
            {
                "NOS": "Ministério dos Transportes",
                "TOTAL": 1804802070.3
            },
            {
                "NOS": "Ministério do Turismo",
                "TOTAL": 1330247309.66
            },
            {
                "NOS": "Ministério do Meio Ambiente e Mudança do Cl",
                "TOTAL": 1263143526.8
            },
            {
                "NOS": "Ministério do Esporte",
                "TOTAL": 1162897613.93
            },
            {
                "NOS": "Ministério de Portos e Aeroportos",
                "TOTAL": 772214058.21
            },
            {
                "NOS": "Ministério do Desenvolvimento Agrário e Agr",
                "TOTAL": 596316227.33
            },
            {
                "NOS": "Ministério do Desenvolvimento e Assistência",
                "TOTAL": 561035569.51
            },
            {
                "NOS": "Ministério das Comunicações",
                "TOTAL": 447276791.82
            },
            {
                "NOS": "Ministério do Desenvolvimento, Indústria, C",
                "TOTAL": 354125398.99
            },
            {
                "NOS": "Banco Central do Brasil - Orçamento Fiscal e",
                "TOTAL": 294367815.55
            },
            {
                "NOS": "Ministério da Agricultura e Pecuária",
                "TOTAL": 280165154.73
            },
            {
                "NOS": "Ministério da Gestão e da Inovação em Ser",
                "TOTAL": 73220897.7
            },
            {
                "NOS": "Ministério da Cultura",
                "TOTAL": 46753066.67
            },
            {
                "NOS": "Ministério das Cidades",
                "TOTAL": 32043701.87
            },
            {
                "NOS": "Ministério dos Direitos Humanos e Cidadania",
                "TOTAL": 8930579.84
            },
            {
                "NOS": "Ministério do Planejamento e Orçamento",
                "TOTAL": 7200595.41
            },
            {
                "NOS": "Ministério da Pesca e Aquicultura",
                "TOTAL": 6467997.14
            },
            {
                "NOS": "Ministério dos Povos Indígenas",
                "TOTAL": 4774669.67
            },
            {
                "NOS": "Ministério das Relações Exteriores",
                "TOTAL": 4567019.31
            },
            {
                "NOS": "Ministério do Empreendedorismo, da Microempr",
                "TOTAL": 3919750.66
            },
            {
                "NOS": "Advocacia-Geral da União",
                "TOTAL": 48692.72
            },
            {
                "NOS": "Ministério das Mulheres, Igualdade Racial, d",
                "TOTAL": 895.65
            }
        ],
        "affected_rows": 33,
        "last_id": null
    },
    "soma_valores_no": {
        "status": "SUCESS",
        "message": "sucess",
        "query": "SELECT NOME_ORGAO `NO`, ROUND(SUM(VALOR_REALIZADO), 2) TOTAL FROM dados GROUP BY `NO` ORDER BY TOTAL DESC",
        "results": [
            {
                "NO": "Ministério da Fazenda - Unidades com vínculo direto",
                "TOTAL": 3390708386284.79
            },
            {
                "NO": "Fundo do Regime Geral da Previdência Social",
                "TOTAL": 207022347362.42
            },
            {
                "NO": "Fundo de Amparo ao Trabalhador",
                "TOTAL": 35000963503.66
            },
            {
                "NO": "Agência Nacional do Petróleo, Gás Natural e Biocombustíveis",
                "TOTAL": 32461835600.98
            },
            {
                "NO": "Fundo Nacional de Desenvolvimento Científico e Tecnológico",
                "TOTAL": 16181204772.49
            },
            {
                "NO": "Presidência da República",
                "TOTAL": 12885228710.8
            },
            {
                "NO": "Fundo Nacional de Desenvolvimento da Educação",
                "TOTAL": 9977270123.69
            },
            {
                "NO": "Ministério da Defesa - Unidades com vínculo direto",
                "TOTAL": 5298505854.1
            },
            {
                "NO": "Instituto Nacional do Seguro Social",
                "TOTAL": 4924283903.52
            },
            {
                "NO": "Fundo Aeronáutico",
                "TOTAL": 4733969048.19
            },
            {
                "NO": "Agência Nacional de Energia Elétrica",
                "TOTAL": 4481677361.85
            },
            {
                "NO": "Ministério da Educação - Unidades com vínculo direto",
                "TOTAL": 3612779899.84
            },
            {
                "NO": "Ministério da Saúde - Unidades com vínculo direto",
                "TOTAL": 2635089115.17
            },
            {
                "NO": "Comando da Marinha",
                "TOTAL": 2617189613.04
            },
            {
                "NO": "Fundo do Exército",
                "TOTAL": 2054252457.83
            },
            {
                "NO": "Fundo de Desenvolvimento do Nordeste",
                "TOTAL": 1306374149.27
            },
            {
                "NO": "Ministério do Esporte - Unidades com vínculo direto",
                "TOTAL": 1162897613.93
            },
            {
                "NO": "Comando da Aeronáutica",
                "TOTAL": 1033033137.38
            },
            {
                "NO": "Agência Nacional de Transportes Terrestres",
                "TOTAL": 960296990.05
            },
            {
                "NO": "Ministério do Turismo - Unidades com vínculo direto",
                "TOTAL": 890562784.17
            },
            {
                "NO": "Fundo Nacional de Segurança Pública",
                "TOTAL": 837505328.51
            },
            {
                "NO": "Comissão de Valores Mobiliários",
                "TOTAL": 833737221.01
            },
            {
                "NO": "Fundo de Desenvolvimento da Amazônia",
                "TOTAL": 638176361.59
            },
            {
                "NO": "Fundo da Marinha Mercante",
                "TOTAL": 622805025.88
            },
            {
                "NO": "Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis",
                "TOTAL": 609451882.84
            },
            {
                "NO": "Fundo de Garantia à Exportação",
                "TOTAL": 535842422.29
            },
            {
                "NO": "Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome - Unidades com vín",
                "TOTAL": 528940628.22
            },
            {
                "NO": "Fundo Nacional sobre Mudança no Clima",
                "TOTAL": 525434000
            },
            {
                "NO": "Polícia Federal",
                "TOTAL": 471523996.86
            },
            {
                "NO": "Fundo Constitucional do Distrito Federal",
                "TOTAL": 471476414.36
            },
            {
                "NO": "Fundo Nacional de Segurança e Educação de Trânsito",
                "TOTAL": 460543185.21
            },
            {
                "NO": "Fundo de Defesa de Direitos Difusos",
                "TOTAL": 456089460.97
            },
            {
                "NO": "Fundo Geral de Turismo",
                "TOTAL": 439531941.08
            },
            {
                "NO": "Ministério do Trabalho e Emprego - Unidades com vínculo direto",
                "TOTAL": 428133256.88
            },
            {
                "NO": "Fundo Penitenciário Nacional",
                "TOTAL": 422113209.07
            },
            {
                "NO": "Departamento Nacional de Infraestrutura de Transportes",
                "TOTAL": 376777848.37
            },
            {
                "NO": "Financiadora de Estudos e Projetos",
                "TOTAL": 339279510.24
            },
            {
                "NO": "Empresa Brasil de Comunicação",
                "TOTAL": 331715701.04
            },
            {
                "NO": "Fundo Nacional Antidrogas",
                "TOTAL": 295689129.5
            },
            {
                "NO": "Banco Central do Brasil - Orçamento Fiscal e Seguridade Social - Unidades com vínculo direto",
                "TOTAL": 294367815.55
            },
            {
                "NO": "Agência Nacional de Vigilância Sanitária",
                "TOTAL": 289310121.84
            },
            {
                "NO": "Companhia Nacional de Abastecimento",
                "TOTAL": 280887786.39
            },
            {
                "NO": "Superintendência de Seguros Privados",
                "TOTAL": 277302491.4
            },
            {
                "NO": "Instituto Nacional de Metrologia, Qualidade e Tecnologia",
                "TOTAL": 241425442.56
            },
            {
                "NO": "Agêncial Nacional de Telecomunicações",
                "TOTAL": 204656803.38
            },
            {
                "NO": "Agência Nacional de Saúde Suplementar",
                "TOTAL": 203260852.59
            },
            {
                "NO": "Ministério de Minas e Energia - Unidades com vínculo direto",
                "TOTAL": 202730610.12
            },
            {
                "NO": "Fundo de Terras",
                "TOTAL": 176936622.22
            },
            {
                "NO": "Fundo de Universalização dos Serviços de Telecomunicações",
                "TOTAL": 170521134.34
            },
            {
                "NO": "Agência Nacional de Águas e Saneamento Básico",
                "TOTAL": 168265165.31
            },
            {
                "NO": "Instituto Nacional de Colonização e Reforma Agrária",
                "TOTAL": 138489769.64
            },
            {
                "NO": "Fundo de Desenvolvimento do Centro-Oeste",
                "TOTAL": 137726724.12
            },
            {
                "NO": "Universidade Federal de Juiz de Fora",
                "TOTAL": 128945699.88
            },
            {
                "NO": "Fundo de Defesa da Economia Cafeeira",
                "TOTAL": 128224673.95
            },
            {
                "NO": "Ministério da Agricultura e Pecuária - Unidades com vínculo direto",
                "TOTAL": 124588712.78
            },
            {
                "NO": "Fundo Nacional de Aviação Civil",
                "TOTAL": 111293273
            },
            {
                "NO": "Conselho Nacional de Desenvolvimento Científico e Tecnológico",
                "TOTAL": 102252440.53
            },
            {
                "NO": "Caixa de Construções de Casas para o Pessoal da Marinha do Brasil",
                "TOTAL": 92262295.18
            },
            {
                "NO": "Empresa Brasileira de Serviços Hospitalares",
                "TOTAL": 90334383.92
            },
            {
                "NO": "Comissão Nacional de Energia Nuclear",
                "TOTAL": 89063850.78
            },
            {
                "NO": "Fundo Nacional do Meio Ambiente",
                "TOTAL": 88284747.29
            },
            {
                "NO": "Fundo de Compensação de Variações Salariais",
                "TOTAL": 80351766.5
            },
            {
                "NO": "Companhia de Pesquisa de Recursos Minerais",
                "TOTAL": 78424971.11
            },
            {
                "NO": "Comando do Exército",
                "TOTAL": 75625309.49
            },
            {
                "NO": "Ministério da Gestão e da Inovação em Serviços Públicos - Unidades com vínculo direto",
                "TOTAL": 72334754.7
            },
            {
                "NO": "Superintendência da Zona Franca de Manaus",
                "TOTAL": 70234982.78
            },
            {
                "NO": "Indústria de Material Bélico do Brasil",
                "TOTAL": 69750418.21
            },
            {
                "NO": "Ministério da Integração e do Desenvolvimento Regional - Unidades com vínculo direto",
                "TOTAL": 68940471.74
            },
            {
                "NO": "Telecomunicações Brasileiras S.A.",
                "TOTAL": 66500159.23
            },
            {
                "NO": "Ministério da Ciência, Tecnologia e Inovação - Unidades com vínculo direto",
                "TOTAL": 65242026.97
            },
            {
                "NO": "Fundação Universidade de Brasília",
                "TOTAL": 51841626.11
            },
            {
                "NO": "Superintendência do Desenvolvimento da Amazônia",
                "TOTAL": 48446590.17
            },
            {
                "NO": "Polícia Rodoviária Federal",
                "TOTAL": 46208992.62
            },
            {
                "NO": "Superintendência do Desenvolvimento do Nordeste",
                "TOTAL": 46010336.16
            },
            {
                "NO": "Universidade Federal do Rio de Janeiro",
                "TOTAL": 43082619.51
            },
            {
                "NO": "Fundo Nacional de Cultura",
                "TOTAL": 42985346.13
            },
            {
                "NO": "Superintendência Nacional de Previdência Complementar",
                "TOTAL": 40014678.33
            },
            {
                "NO": "Hospital de Clínicas de Porto Alegre",
                "TOTAL": 37817635.03
            },
            {
                "NO": "Agência Nacional de Aviação Civil",
                "TOTAL": 35500630.46
            },
            {
                "NO": "Conselho Administrativo de Defesa Econômica",
                "TOTAL": 34292550.85
            },
            {
                "NO": "Fundo Nacional de Assistência Social",
                "TOTAL": 32094941.29
            },
            {
                "NO": "Instituto Nacional da Propriedade Industrial",
                "TOTAL": 28543050.26
            },
            {
                "NO": "Empresa Brasileira de Pesquisa Agropecuária",
                "TOTAL": 27351768.01
            },
            {
                "NO": "Empresa de Trens Urbanos de Porto Alegre",
                "TOTAL": 27259825.59
            },
            {
                "NO": "Nuclebrás Equipamentos Pesados S.A.",
                "TOTAL": 26374782.18
            },
            {
                "NO": "Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira",
                "TOTAL": 24798515.03
            },
            {
                "NO": "Universidade Federal de Santa Catarina",
                "TOTAL": 24248052.51
            },
            {
                "NO": "Agência Nacional de Mineração",
                "TOTAL": 23073393.06
            },
            {
                "NO": "Instituto Chico Mendes de Conservação da Biodiversidade",
                "TOTAL": 23034445.47
            },
            {
                "NO": "Universidade Federal de Minas Gerais",
                "TOTAL": 22101328.75
            },
            {
                "NO": "Superintendência de Desenvolvimento do Centro-Oeste",
                "TOTAL": 20405392.99
            },
            {
                "NO": "Universidade Federal do Espírito Santo",
                "TOTAL": 19439798.89
            },
            {
                "NO": "Universidade Federal do Rio Grande do Norte",
                "TOTAL": 17320976.51
            },
            {
                "NO": "Universidade Federal da Bahia",
                "TOTAL": 16836740.79
            },
            {
                "NO": "Serviço Florestal Brasileiro",
                "TOTAL": 16265625.48
            },
            {
                "NO": "Universidade Federal Fluminense",
                "TOTAL": 16132587.2
            },
            {
                "NO": "Universidade Federal do Paraná",
                "TOTAL": 14950696.34
            },
            {
                "NO": "Universidade Federal do Rio Grande do Sul",
                "TOTAL": 14847802.81
            },
            {
                "NO": "Universidade Federal de Pernambuco",
                "TOTAL": 13456995.68
            },
            {
                "NO": "Companhia de Desenvolvimento dos Vales do São Francisco e do Parnaíba",
                "TOTAL": 13427262.12
            },
            {
                "NO": "Fundação Nacional de Saúde",
                "TOTAL": 13422483.01
            },
            {
                "NO": "Caixa de Financiamento Imobiliário da Aeronáutica",
                "TOTAL": 12022347.72
            },
            {
                "NO": "Hospital Nossa Senhora da Conceição S.A.",
                "TOTAL": 10483301.86
            },
            {
                "NO": "Ministério do Desenvolvimento, Indústria, Comércio e Serviços - Unidades com vínculo direto",
                "TOTAL": 10007013.55
            },
            {
                "NO": "Fundação Universidade Federal do Mato Grosso do Sul",
                "TOTAL": 9342122.43
            },
            {
                "NO": "Universidade Federal de Goiás",
                "TOTAL": 9022643.25
            },
            {
                "NO": "Fundação Universidade Federal de Uberlândia",
                "TOTAL": 8169384.87
            },
            {
                "NO": "Fundação Oswaldo Cruz",
                "TOTAL": 8100769.42
            },
            {
                "NO": "Fundação Instituto Brasileiro de Geografia e Estatística",
                "TOTAL": 7190066.77
            },
            {
                "NO": "Universidade Federal do Ceará",
                "TOTAL": 7065650.25
            },
            {
                "NO": "Universidade Federal do Pará",
                "TOTAL": 6738212.75
            },
            {
                "NO": "Fundação Universidade do Maranhão",
                "TOTAL": 6697490.73
            },
            {
                "NO": "Ministério da Pesca e Aquicultura - Unidades com vínculo direto",
                "TOTAL": 6467997.14
            },
            {
                "NO": "Fundo para o Desenvolvimento Tecnológico das Telecomunicações",
                "TOTAL": 5598694.87
            },
            {
                "NO": "Fundo Nacional para a Criança e o Adolescente",
                "TOTAL": 5435820.51
            },
            {
                "NO": "Universidade Federal de Viçosa",
                "TOTAL": 5376158.06
            },
            {
                "NO": "Universidade Federal de São Paulo",
                "TOTAL": 5139738.71
            },
            {
                "NO": "Fundação Nacional do Índio - Patrimônio Indígena",
                "TOTAL": 4867871.56
            },
            {
                "NO": "Universidade Federal de Santa Maria",
                "TOTAL": 4663892.82
            },
            {
                "NO": "Ministério das Relações Exteriores - Unidades com vínculo direto",
                "TOTAL": 4550521.23
            },
            {
                "NO": "Universidade Federal de Lavras",
                "TOTAL": 4215086.19
            },
            {
                "NO": "VALEC Engenharia, Construções e Ferrovias S.A.",
                "TOTAL": 4074631
            },
            {
                "NO": "Ministério do Empreendedorismo, da Microempresa e da Empresa de Pequeno Porte - Unidades com víncu",
                "TOTAL": 3919750.66
            },
            {
                "NO": "Fundo de Garantia para a Promoção da Competitividade",
                "TOTAL": 3914909.85
            },
            {
                "NO": "Universidade Tecnológica Federal do Paraná",
                "TOTAL": 3904920.32
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas Gerais",
                "TOTAL": 3527052.62
            },
            {
                "NO": "Fundo Nacional do Idoso",
                "TOTAL": 3495654.98
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais",
                "TOTAL": 3480235.34
            },
            {
                "NO": "Fundação Universidade Federal do Piauí",
                "TOTAL": 3314636.31
            },
            {
                "NO": "Ministério dos Transportes - Unidades com vínculo direto",
                "TOTAL": 3109415.66
            },
            {
                "NO": "Fundação Universidade Federal de São Carlos",
                "TOTAL": 3058636.05
            },
            {
                "NO": "Instituto Federal do Paraná",
                "TOTAL": 2982806.74
            },
            {
                "NO": "Universidade Federal de Alagoas",
                "TOTAL": 2846310.82
            },
            {
                "NO": "Fundação Universidade Federal de Sergipe",
                "TOTAL": 2728486.91
            },
            {
                "NO": "Universidade Federal de Ouro Preto",
                "TOTAL": 2707046.56
            },
            {
                "NO": "Universidade Federal da Paraíba",
                "TOTAL": 2621576.65
            },
            {
                "NO": "Agência Nacional de Transportes Aquaviários",
                "TOTAL": 2615128.87
            },
            {
                "NO": "Companhia Brasileira de Trens Urbanos",
                "TOTAL": 2598862.45
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Mato Grosso",
                "TOTAL": 2469056.43
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul",
                "TOTAL": 2414118.37
            },
            {
                "NO": "Centro Federal de Educação Tecnológica de Minas Gerais",
                "TOTAL": 2355757.93
            },
            {
                "NO": "Ministério da Justiça e Segurança Pública - Unidades com vínculo direto",
                "TOTAL": 2309582.41
            },
            {
                "NO": "Fundação Universidade Federal do Tocantins",
                "TOTAL": 2271848.07
            },
            {
                "NO": "Universidade Federal da Integração Latino-Americana",
                "TOTAL": 2262499.65
            },
            {
                "NO": "Fundo Nacional de Habitação de Interesse Social",
                "TOTAL": 2185013.83
            },
            {
                "NO": "Fundação Universidade Federal do Amapá",
                "TOTAL": 2169299.2
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte",
                "TOTAL": 2161531.32
            },
            {
                "NO": "Fundação Universidade do Amazonas",
                "TOTAL": 2147817.03
            },
            {
                "NO": "Fundação Biblioteca Nacional",
                "TOTAL": 2125140.98
            },
            {
                "NO": "Departamento Nacional de Obras Contra as Secas",
                "TOTAL": 2056744.59
            },
            {
                "NO": "Universidade Federal do Sul e Sudeste do Pará",
                "TOTAL": 1922736.84
            },
            {
                "NO": "Fundação Universidade Federal do ABC",
                "TOTAL": 1677930.23
            },
            {
                "NO": "Universidade Federal Rural do Rio de Janeiro",
                "TOTAL": 1673330.07
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia Goiano",
                "TOTAL": 1559435.62
            },
            {
                "NO": "Fundação Universidade Federal do Mato Grosso",
                "TOTAL": 1384282.61
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Espírito Santo",
                "TOTAL": 1359820.12
            },
            {
                "NO": "Agência Nacional do Cinema",
                "TOTAL": 1104462.75
            },
            {
                "NO": "Fundação Universidade Federal da Grande Dourados",
                "TOTAL": 1099094.53
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia Catarinense",
                "TOTAL": 1060857.57
            },
            {
                "NO": "Universidade Federal da Fronteira Sul",
                "TOTAL": 1003805.63
            },
            {
                "NO": "Fundação Universidade Federal de Pelotas",
                "TOTAL": 911944.24
            },
            {
                "NO": "Universidade Federal do Rio Grande",
                "TOTAL": 908995.21
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Ceará",
                "TOTAL": 897497.6
            },
            {
                "NO": "Universidade Federal de Alfenas",
                "TOTAL": 865658.17
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia Farroupilha",
                "TOTAL": 851044.12
            },
            {
                "NO": "Universidade Federal do Recôncavo da Bahia",
                "TOTAL": 850115.06
            },
            {
                "NO": "Instituto Nacional de Tecnologia da Informação",
                "TOTAL": 780000
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Rio de Janeiro",
                "TOTAL": 689540.31
            },
            {
                "NO": "Instituto de Pesquisas Jardim Botânico do Rio de Janeiro",
                "TOTAL": 672825.72
            },
            {
                "NO": "Universidade Federal do Delta do Parnaíba",
                "TOTAL": 671221.41
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Sudeste de Minas Gerais",
                "TOTAL": 654473.68
            },
            {
                "NO": "Universidade Federal Rural de Pernambuco",
                "TOTAL": 649090.19
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de Goiás",
                "TOTAL": 627151.09
            },
            {
                "NO": "Universidade Federal do Sul da Bahia",
                "TOTAL": 613179.28
            },
            {
                "NO": "Universidade Federal de Itajubá",
                "TOTAL": 609921.34
            },
            {
                "NO": "Universidade Federal do Oeste do Pará",
                "TOTAL": 584190.19
            },
            {
                "NO": "Universidade Federal de Roraima",
                "TOTAL": 577682.46
            },
            {
                "NO": "Fundação Universidade Federal de Ciências da Saúde de Porto Alegre",
                "TOTAL": 574491.95
            },
            {
                "NO": "Fundação Universidade Federal de São João Del-Rei",
                "TOTAL": 540097.04
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de Alagoas",
                "TOTAL": 526034.46
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de São Paulo",
                "TOTAL": 521878.44
            },
            {
                "NO": "Amazônia Azul Tecnologia de Defesa S.A.",
                "TOTAL": 515365.01
            },
            {
                "NO": "Fundo de Imprensa Nacional",
                "TOTAL": 511607.89
            },
            {
                "NO": "Universidade Federal do Cariri",
                "TOTAL": 487880.46
            },
            {
                "NO": "Universidade Federal Rural do Semi-Árido",
                "TOTAL": 478718.16
            },
            {
                "NO": "Fundação Universidade Federal do Acre",
                "TOTAL": 473357.97
            },
            {
                "NO": "Instituto do Patrimônio Histórico e Artístico Nacional",
                "TOTAL": 460672.05
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Norte de Minas Gerais",
                "TOTAL": 455373.68
            },
            {
                "NO": "Universidade Federal de Campina Grande",
                "TOTAL": 405220.37
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia Baiano",
                "TOTAL": 379030.76
            },
            {
                "NO": "Universidade Federal dos Vales do Jequitinhonha e Mucuri",
                "TOTAL": 374815.38
            },
            {
                "NO": "Fundo de Estabilidade do Seguro Rural",
                "TOTAL": 349381.53
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de Sergipe",
                "TOTAL": 334923.11
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia da Bahia",
                "TOTAL": 332464.44
            },
            {
                "NO": "Universidade Federal do Triângulo Mineiro",
                "TOTAL": 332311.69
            },
            {
                "NO": "Fundação Osório",
                "TOTAL": 309708.91
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de Rondônia",
                "TOTAL": 303993.08
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia Sul-rio-grandense",
                "TOTAL": 284679.81
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia da Paraíba",
                "TOTAL": 273674.26
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de Brasília",
                "TOTAL": 266221.29
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Maranhão",
                "TOTAL": 265728.01
            },
            {
                "NO": "Universidade Federal do Estado do Rio de Janeiro",
                "TOTAL": 258782.34
            },
            {
                "NO": "Agência Espacial Brasileira",
                "TOTAL": 255500
            },
            {
                "NO": "Universidade Federal de Jataí",
                "TOTAL": 253355.51
            },
            {
                "NO": "Universidade Federal Rural da Amazônia",
                "TOTAL": 237490.15
            },
            {
                "NO": "Fundação Coordenação de Aperfeiçoamento de Pessoal de Nível Superior",
                "TOTAL": 233583.74
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de Pernambuco",
                "TOTAL": 230691.43
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia Fluminense",
                "TOTAL": 213848.86
            },
            {
                "NO": "Empresa de Pesquisa Energética",
                "TOTAL": 203412.68
            },
            {
                "NO": "Fundação Universidade Federal de Rondônia",
                "TOTAL": 196171.05
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Pará",
                "TOTAL": 172433.43
            },
            {
                "NO": "Universidade Federal do Oeste da Bahia",
                "TOTAL": 169258.14
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Triângulo Mineiro",
                "TOTAL": 157775.25
            },
            {
                "NO": "Fundação Universidade Federal do Vale do São Francisco",
                "TOTAL": 152903.25
            },
            {
                "NO": "Instituto Brasileiro de Turismo",
                "TOTAL": 152584.41
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Tocantins",
                "TOTAL": 132363.77
            },
            {
                "NO": "Universidade Federal de Rondonópolis",
                "TOTAL": 120095.4
            },
            {
                "NO": "Fundação Escola Nacional de Administração Pública",
                "TOTAL": 106140
            },
            {
                "NO": "Universidade Federal do Norte do Tocantins",
                "TOTAL": 99637.75
            },
            {
                "NO": "Universidade Federal de Catalão",
                "TOTAL": 97045.41
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Acre",
                "TOTAL": 96963.22
            },
            {
                "NO": "Centro Nacional de Tecnologia Eletrônica Avançada S.A.",
                "TOTAL": 96065.94
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Mato Grosso do Sul",
                "TOTAL": 88204.45
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Sertão de Pernambuco",
                "TOTAL": 85767.05
            },
            {
                "NO": "Universidade da Integração Internacional da Lusofonia Afro-Brasileira",
                "TOTAL": 82577.93
            },
            {
                "NO": "Colégio Pedro II",
                "TOTAL": 82548.63
            },
            {
                "NO": "Centro Federal de Educação Tecnológica Celso Suckow da Fonseca",
                "TOTAL": 79827.49
            },
            {
                "NO": "Fundação Casa de Rui Barbosa",
                "TOTAL": 59408.32
            },
            {
                "NO": "Universidade Federal do Agreste de Pernambuco",
                "TOTAL": 58708.01
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de Roraima",
                "TOTAL": 54400.99
            },
            {
                "NO": "Advocacia-Geral da União - Unidades com vínculo direto",
                "TOTAL": 48692.72
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Piauí",
                "TOTAL": 46619.06
            },
            {
                "NO": "Fundação Universidade Federal do Pampa",
                "TOTAL": 35201.86
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Amazonas",
                "TOTAL": 26024.96
            },
            {
                "NO": "Fundação Alexandre de Gusmão",
                "TOTAL": 16498.08
            },
            {
                "NO": "Instituto Brasileiro de Museus",
                "TOTAL": 14953.44
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Amapá",
                "TOTAL": 12327.58
            },
            {
                "NO": "Instituto de Pesquisa Econômica Aplicada",
                "TOTAL": 10528.64
            },
            {
                "NO": "Fundação Joaquim Nabuco",
                "TOTAL": 9981.28
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de Santa Catarina",
                "TOTAL": 7630.62
            },
            {
                "NO": "Fundação Nacional de Artes",
                "TOTAL": 3083
            },
            {
                "NO": "Ministério do Desenvolvimento Agrário e Agricultura Familiar - Unidades com vínculo direto",
                "TOTAL": 2049.09
            },
            {
                "NO": "Fundo Nacional de Desenvolvimento",
                "TOTAL": 3
            },
            {
                "NO": "Fundo de Apoio ao Desenvolvimento Social",
                "TOTAL": 0.01
            },
            {
                "NO": "Ministério da Cultura - Unidades com vínculo direto",
                "TOTAL": 0
            },
            {
                "NO": "Fundo de Desenvolvimento do Ensino Profissional Marítimo",
                "TOTAL": 0
            },
            {
                "NO": "Receita Federal do Brasil",
                "TOTAL": 0
            },
            {
                "NO": "Fundo Constitucional de Financiamento do Norte",
                "TOTAL": 0
            },
            {
                "NO": "Fundo Constitucional de Financiamento do Centro-Oeste",
                "TOTAL": 0
            },
            {
                "NO": "Fundo Constitucional de Financiamento do Nordeste",
                "TOTAL": 0
            },
            {
                "NO": "Fundação Nacional dos Povos Indígenas",
                "TOTAL": -93201.89
            },
            {
                "NO": "Comando da Marinha - Fundo Naval",
                "TOTAL": -106236.45
            },
            {
                "NO": "Fundação Jorge Duprat Figueiredo, de Segurança e Medicina do Trabalho",
                "TOTAL": -1135595.28
            }
        ],
        "affected_rows": 253,
        "last_id": null
    },
    "nos_mais_receitas": {
        "status": "SUCESS",
        "message": "sucess",
        "query": "SELECT NOME_ORGAO_SUPERIOR NOS, COUNT(NOME_ORGAO_SUPERIOR) QUANTIDADE FROM dados GROUP BY NOS ORDER BY QUANTIDADE DESC LIMIT 1",
        "results": [
            {
                "NOS": "Ministério da Educação",
                "QUANTIDADE": 29438
            }
        ],
        "affected_rows": 1,
        "last_id": null
    },
    "no_mais_receitas": {
        "status": "SUCESS",
        "message": "sucess",
        "query": "SELECT NOME_ORGAO `NO`, COUNT(NOME_ORGAO) QUANTIDADE FROM dados GROUP BY `NO` ORDER BY QUANTIDADE DESC LIMIT 1",
        "results": [
            {
                "NO": "Ministério da Fazenda - Unidades com vínculo direto",
                "QUANTIDADE": 13331
            }
        ],
        "affected_rows": 1,
        "last_id": null
    },
    "media_nos": {
        "status": "SUCESS",
        "message": "sucess",
        "query": "SELECT NOME_ORGAO_SUPERIOR NOS, ROUND(AVG(VALOR_REALIZADO), 2) MEDIA FROM dados GROUP BY NOS ORDER BY MEDIA DESC LIMIT 15",
        "results": [
            {
                "NOS": "Ministério da Fazenda",
                "MEDIA": 225652264.3
            },
            {
                "NOS": "Ministério da Previdência Social",
                "MEDIA": 105518489.77
            },
            {
                "NOS": "Ministério do Trabalho e Emprego",
                "MEDIA": 43738223.66
            },
            {
                "NOS": "Presidência da República",
                "MEDIA": 18642392.13
            },
            {
                "NOS": "Ministério de Minas e Energia",
                "MEDIA": 14319754.18
            },
            {
                "NOS": "Ministério do Esporte",
                "MEDIA": 12113516.81
            },
            {
                "NOS": "Ministério da Ciência, Tecnologia e Inovaç",
                "MEDIA": 6652416.4
            },
            {
                "NOS": "Ministério do Turismo",
                "MEDIA": 4524650.71
            },
            {
                "NOS": "Ministério da Defesa",
                "MEDIA": 2074390.73
            },
            {
                "NOS": "Ministério do Desenvolvimento e Assistência",
                "MEDIA": 1870118.57
            },
            {
                "NOS": "Ministério da Integração e do Desenvolvime",
                "MEDIA": 1582577
            },
            {
                "NOS": "Ministério da Saúde",
                "MEDIA": 1192327.04
            },
            {
                "NOS": "Ministério de Portos e Aeroportos",
                "MEDIA": 766085.38
            },
            {
                "NOS": "Ministério da Justiça e Segurança Pública",
                "MEDIA": 731394.6
            },
            {
                "NOS": "Ministério dos Transportes",
                "MEDIA": 640909.83
            }
        ],
        "affected_rows": 15,
        "last_id": null
    },
    "media_no": {
        "status": "SUCESS",
        "message": "sucess",
        "query": "SELECT NOME_ORGAO `NO`, ROUND(AVG(VALOR_REALIZADO), 2) MEDIA FROM dados GROUP BY `NO` ORDER BY MEDIA DESC",
        "results": [
            {
                "NO": "Ministério da Fazenda - Unidades com vínculo direto",
                "MEDIA": 254347639.81
            },
            {
                "NO": "Fundo Nacional sobre Mudança no Clima",
                "MEDIA": 175144666.67
            },
            {
                "NO": "Fundo do Regime Geral da Previdência Social",
                "MEDIA": 145790385.47
            },
            {
                "NO": "Presidência da República",
                "MEDIA": 117138442.83
            },
            {
                "NO": "Ministério da Educação - Unidades com vínculo direto",
                "MEDIA": 78538693.47
            },
            {
                "NO": "Fundo de Amparo ao Trabalhador",
                "MEDIA": 48144378.96
            },
            {
                "NO": "Agência Nacional do Petróleo, Gás Natural e Biocombustíveis",
                "MEDIA": 38829946.89
            },
            {
                "NO": "Fundo Nacional de Aviação Civil",
                "MEDIA": 22258654.6
            },
            {
                "NO": "Fundo de Desenvolvimento do Nordeste",
                "MEDIA": 21070550.79
            },
            {
                "NO": "Fundo Nacional de Desenvolvimento da Educação",
                "MEDIA": 20829373.95
            },
            {
                "NO": "Fundo da Marinha Mercante",
                "MEDIA": 15190366.48
            },
            {
                "NO": "Ministério do Turismo - Unidades com vínculo direto",
                "MEDIA": 14135917.21
            },
            {
                "NO": "Fundo Nacional de Desenvolvimento Científico e Tecnológico",
                "MEDIA": 12543569.59
            },
            {
                "NO": "Ministério do Esporte - Unidades com vínculo direto",
                "MEDIA": 12113516.81
            },
            {
                "NO": "Fundo Constitucional do Distrito Federal",
                "MEDIA": 11786910.36
            },
            {
                "NO": "Agência Nacional de Energia Elétrica",
                "MEDIA": 9109100.33
            },
            {
                "NO": "Instituto Nacional do Seguro Social",
                "MEDIA": 8872583.61
            },
            {
                "NO": "Fundo de Desenvolvimento da Amazônia",
                "MEDIA": 7597337.64
            },
            {
                "NO": "Ministério do Trabalho e Emprego - Unidades com vínculo direto",
                "MEDIA": 7381607.88
            },
            {
                "NO": "Fundo de Garantia à Exportação",
                "MEDIA": 7144565.63
            },
            {
                "NO": "Financiadora de Estudos e Projetos",
                "MEDIA": 6652539.42
            },
            {
                "NO": "Ministério da Defesa - Unidades com vínculo direto",
                "MEDIA": 6255614.94
            },
            {
                "NO": "Fundo Aeronáutico",
                "MEDIA": 5068489.34
            },
            {
                "NO": "Comando da Aeronáutica",
                "MEDIA": 4550806.77
            },
            {
                "NO": "Fundo Nacional de Segurança Pública",
                "MEDIA": 4384844.65
            },
            {
                "NO": "Fundo de Terras",
                "MEDIA": 4021286.87
            },
            {
                "NO": "Fundo de Defesa da Economia Cafeeira",
                "MEDIA": 3374333.52
            },
            {
                "NO": "Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome - Unidades com vín",
                "MEDIA": 3039888.67
            },
            {
                "NO": "Fundo de Desenvolvimento do Centro-Oeste",
                "MEDIA": 2754534.48
            },
            {
                "NO": "Ministério da Saúde - Unidades com vínculo direto",
                "MEDIA": 2073240.85
            },
            {
                "NO": "Fundo Geral de Turismo",
                "MEDIA": 1944831.6
            },
            {
                "NO": "Comissão de Valores Mobiliários",
                "MEDIA": 1529793.07
            },
            {
                "NO": "Fundo de Compensação de Variações Salariais",
                "MEDIA": 1409680.11
            },
            {
                "NO": "Companhia de Pesquisa de Recursos Minerais",
                "MEDIA": 1285655.26
            },
            {
                "NO": "Superintendência de Seguros Privados",
                "MEDIA": 1254762.4
            },
            {
                "NO": "Comando da Marinha",
                "MEDIA": 1181042.24
            },
            {
                "NO": "Fundo do Exército",
                "MEDIA": 1179249.4
            },
            {
                "NO": "Superintendência Nacional de Previdência Complementar",
                "MEDIA": 1176902.3
            },
            {
                "NO": "Agência Nacional de Transportes Terrestres",
                "MEDIA": 952675.59
            },
            {
                "NO": "Fundo de Defesa de Direitos Difusos",
                "MEDIA": 912178.92
            },
            {
                "NO": "Superintendência do Desenvolvimento da Amazônia",
                "MEDIA": 849940.18
            },
            {
                "NO": "Ministério de Minas e Energia - Unidades com vínculo direto",
                "MEDIA": 834282.35
            },
            {
                "NO": "Agência Nacional de Vigilância Sanitária",
                "MEDIA": 826600.35
            },
            {
                "NO": "Departamento Nacional de Infraestrutura de Transportes",
                "MEDIA": 808536.16
            },
            {
                "NO": "Fundo Penitenciário Nacional",
                "MEDIA": 770279.58
            },
            {
                "NO": "Empresa Brasil de Comunicação",
                "MEDIA": 624700
            },
            {
                "NO": "Fundo Nacional de Segurança e Educação de Trânsito",
                "MEDIA": 604387.38
            },
            {
                "NO": "Superintendência da Zona Franca de Manaus",
                "MEDIA": 580454.4
            },
            {
                "NO": "Agência Nacional de Saúde Suplementar",
                "MEDIA": 537727.12
            },
            {
                "NO": "Polícia Federal",
                "MEDIA": 534002.26
            },
            {
                "NO": "Universidade Federal de Juiz de Fora",
                "MEDIA": 505669.41
            },
            {
                "NO": "Conselho Nacional de Desenvolvimento Científico e Tecnológico",
                "MEDIA": 498792.39
            },
            {
                "NO": "Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis",
                "MEDIA": 490307.23
            },
            {
                "NO": "Agência Nacional de Águas e Saneamento Básico",
                "MEDIA": 451113.04
            },
            {
                "NO": "Banco Central do Brasil - Orçamento Fiscal e Seguridade Social - Unidades com vínculo direto",
                "MEDIA": 437396.46
            },
            {
                "NO": "Superintendência de Desenvolvimento do Centro-Oeste",
                "MEDIA": 434157.3
            },
            {
                "NO": "Ministério da Integração e do Desenvolvimento Regional - Unidades com vínculo direto",
                "MEDIA": 407931.79
            },
            {
                "NO": "Fundo Nacional Antidrogas",
                "MEDIA": 356681.7
            },
            {
                "NO": "Telecomunicações Brasileiras S.A.",
                "MEDIA": 351852.69
            },
            {
                "NO": "Superintendência do Desenvolvimento do Nordeste",
                "MEDIA": 345942.38
            },
            {
                "NO": "Ministério da Gestão e da Inovação em Serviços Públicos - Unidades com vínculo direto",
                "MEDIA": 320065.29
            },
            {
                "NO": "Caixa de Construções de Casas para o Pessoal da Marinha do Brasil",
                "MEDIA": 301510.77
            },
            {
                "NO": "Instituto Nacional de Colonização e Reforma Agrária",
                "MEDIA": 287920.52
            },
            {
                "NO": "Companhia Nacional de Abastecimento",
                "MEDIA": 270344.36
            },
            {
                "NO": "Fundo de Universalização dos Serviços de Telecomunicações",
                "MEDIA": 264784.37
            },
            {
                "NO": "Caixa de Financiamento Imobiliário da Aeronáutica",
                "MEDIA": 261355.39
            },
            {
                "NO": "Conselho Administrativo de Defesa Econômica",
                "MEDIA": 259792.05
            },
            {
                "NO": "Empresa Brasileira de Serviços Hospitalares",
                "MEDIA": 256631.77
            },
            {
                "NO": "Fundo Nacional de Assistência Social",
                "MEDIA": 254721.76
            },
            {
                "NO": "Ministério do Desenvolvimento, Indústria, Comércio e Serviços - Unidades com vínculo direto",
                "MEDIA": 244073.5
            },
            {
                "NO": "Hospital Nossa Senhora da Conceição S.A.",
                "MEDIA": 227897.87
            },
            {
                "NO": "Fundo Nacional do Meio Ambiente",
                "MEDIA": 203890.87
            },
            {
                "NO": "Instituto Nacional de Tecnologia da Informação",
                "MEDIA": 195000
            },
            {
                "NO": "Indústria de Material Bélico do Brasil",
                "MEDIA": 193751.16
            },
            {
                "NO": "Ministério da Agricultura e Pecuária - Unidades com vínculo direto",
                "MEDIA": 187633.6
            },
            {
                "NO": "Ministério do Empreendedorismo, da Microempresa e da Empresa de Pequeno Porte - Unidades com víncu",
                "MEDIA": 186654.79
            },
            {
                "NO": "Instituto Nacional de Metrologia, Qualidade e Tecnologia",
                "MEDIA": 182621.36
            },
            {
                "NO": "Comando do Exército",
                "MEDIA": 170711.76
            },
            {
                "NO": "Comissão Nacional de Energia Nuclear",
                "MEDIA": 161640.38
            },
            {
                "NO": "Ministério da Ciência, Tecnologia e Inovação - Unidades com vínculo direto",
                "MEDIA": 159906.93
            },
            {
                "NO": "Fundo Nacional do Idoso",
                "MEDIA": 158893.41
            },
            {
                "NO": "Serviço Florestal Brasileiro",
                "MEDIA": 157918.69
            },
            {
                "NO": "Polícia Rodoviária Federal",
                "MEDIA": 150029.2
            },
            {
                "NO": "Fundação Nacional do Índio - Patrimônio Indígena",
                "MEDIA": 131564.1
            },
            {
                "NO": "Agêncial Nacional de Telecomunicações",
                "MEDIA": 127750.81
            },
            {
                "NO": "Nuclebrás Equipamentos Pesados S.A.",
                "MEDIA": 120432.8
            },
            {
                "NO": "Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira",
                "MEDIA": 103759.48
            },
            {
                "NO": "Centro Nacional de Tecnologia Eletrônica Avançada S.A.",
                "MEDIA": 96065.94
            },
            {
                "NO": "Universidade Federal do Sul e Sudeste do Pará",
                "MEDIA": 91558.9
            },
            {
                "NO": "Fundo Nacional de Habitação de Interesse Social",
                "MEDIA": 91042.24
            },
            {
                "NO": "Instituto Nacional da Propriedade Industrial",
                "MEDIA": 85203.14
            },
            {
                "NO": "Universidade Federal do Rio de Janeiro",
                "MEDIA": 81906.12
            },
            {
                "NO": "VALEC Engenharia, Construções e Ferrovias S.A.",
                "MEDIA": 81492.62
            },
            {
                "NO": "Fundação Nacional de Saúde",
                "MEDIA": 78494.05
            },
            {
                "NO": "Hospital de Clínicas de Porto Alegre",
                "MEDIA": 78297.38
            },
            {
                "NO": "Empresa de Trens Urbanos de Porto Alegre",
                "MEDIA": 71925.66
            },
            {
                "NO": "Fundação Universidade de Brasília",
                "MEDIA": 71505.69
            },
            {
                "NO": "Fundo de Garantia para a Promoção da Competitividade",
                "MEDIA": 69909.1
            },
            {
                "NO": "Fundo Nacional para a Criança e o Adolescente",
                "MEDIA": 63207.22
            },
            {
                "NO": "Empresa de Pesquisa Energética",
                "MEDIA": 50853.17
            },
            {
                "NO": "Universidade Federal de Minas Gerais",
                "MEDIA": 48256.18
            },
            {
                "NO": "Universidade Federal do Rio Grande do Norte",
                "MEDIA": 45342.87
            },
            {
                "NO": "Agência Nacional de Aviação Civil",
                "MEDIA": 45051.56
            },
            {
                "NO": "Instituto Chico Mendes de Conservação da Biodiversidade",
                "MEDIA": 44901.45
            },
            {
                "NO": "Universidade Federal de Goiás",
                "MEDIA": 43799.24
            },
            {
                "NO": "Universidade Federal da Bahia",
                "MEDIA": 42950.87
            },
            {
                "NO": "Universidade Federal do Espírito Santo",
                "MEDIA": 42537.85
            },
            {
                "NO": "Amazônia Azul Tecnologia de Defesa S.A.",
                "MEDIA": 39643.46
            },
            {
                "NO": "Universidade Federal Fluminense",
                "MEDIA": 38967.6
            },
            {
                "NO": "Universidade Federal do Oeste do Pará",
                "MEDIA": 38946.01
            },
            {
                "NO": "Companhia de Desenvolvimento dos Vales do São Francisco e do Parnaíba",
                "MEDIA": 38807.12
            },
            {
                "NO": "Universidade Federal de Pernambuco",
                "MEDIA": 35506.58
            },
            {
                "NO": "Fundo Nacional de Cultura",
                "MEDIA": 34443.39
            },
            {
                "NO": "Universidade Federal do Paraná",
                "MEDIA": 33223.77
            },
            {
                "NO": "Empresa Brasileira de Pesquisa Agropecuária",
                "MEDIA": 32795.88
            },
            {
                "NO": "Universidade Federal da Integração Latino-Americana",
                "MEDIA": 31423.61
            },
            {
                "NO": "Universidade Federal de Santa Catarina",
                "MEDIA": 30968.14
            },
            {
                "NO": "Agência Nacional de Mineração",
                "MEDIA": 30846.78
            },
            {
                "NO": "Instituto Brasileiro de Turismo",
                "MEDIA": 30516.88
            },
            {
                "NO": "Ministério da Pesca e Aquicultura - Unidades com vínculo direto",
                "MEDIA": 30366.18
            },
            {
                "NO": "Fundação Universidade Federal do Mato Grosso do Sul",
                "MEDIA": 30233.41
            },
            {
                "NO": "Fundação Instituto Brasileiro de Geografia e Estatística",
                "MEDIA": 29834.3
            },
            {
                "NO": "Universidade Federal do Rio Grande do Sul",
                "MEDIA": 29113.34
            },
            {
                "NO": "Fundação Universidade Federal de Uberlândia",
                "MEDIA": 27322.36
            },
            {
                "NO": "Fundação Universidade Federal de São Carlos",
                "MEDIA": 23710.36
            },
            {
                "NO": "Fundação Universidade do Maranhão",
                "MEDIA": 23094.8
            },
            {
                "NO": "Fundo para o Desenvolvimento Tecnológico das Telecomunicações",
                "MEDIA": 22758.92
            },
            {
                "NO": "Universidade Federal do Ceará",
                "MEDIA": 22719.13
            },
            {
                "NO": "Fundação Universidade Federal do Amapá",
                "MEDIA": 21692.99
            },
            {
                "NO": "Universidade Federal de São Paulo",
                "MEDIA": 21595.54
            },
            {
                "NO": "Ministério das Relações Exteriores - Unidades com vínculo direto",
                "MEDIA": 19871.27
            },
            {
                "NO": "Ministério da Justiça e Segurança Pública - Unidades com vínculo direto",
                "MEDIA": 19740.02
            },
            {
                "NO": "Fundação Oswaldo Cruz",
                "MEDIA": 18665.37
            },
            {
                "NO": "Universidade Federal de Santa Maria",
                "MEDIA": 17533.43
            },
            {
                "NO": "Agência Espacial Brasileira",
                "MEDIA": 15968.75
            },
            {
                "NO": "Universidade Federal de Viçosa",
                "MEDIA": 15673.93
            },
            {
                "NO": "Agência Nacional de Transportes Aquaviários",
                "MEDIA": 15029.48
            },
            {
                "NO": "Fundação Universidade Federal do Piauí",
                "MEDIA": 13419.58
            },
            {
                "NO": "Agência Nacional do Cinema",
                "MEDIA": 12993.68
            },
            {
                "NO": "Universidade Federal do Pará",
                "MEDIA": 12455.11
            },
            {
                "NO": "Departamento Nacional de Obras Contra as Secas",
                "MEDIA": 11426.36
            },
            {
                "NO": "Instituto de Pesquisas Jardim Botânico do Rio de Janeiro",
                "MEDIA": 11213.76
            },
            {
                "NO": "Instituto Federal do Paraná",
                "MEDIA": 11129.88
            },
            {
                "NO": "Fundação Universidade Federal de Sergipe",
                "MEDIA": 11001.96
            },
            {
                "NO": "Universidade Tecnológica Federal do Paraná",
                "MEDIA": 10816.95
            },
            {
                "NO": "Universidade Federal de Alagoas",
                "MEDIA": 10700.42
            },
            {
                "NO": "Fundação Universidade Federal do Tocantins",
                "MEDIA": 10517.82
            },
            {
                "NO": "Fundo de Estabilidade do Seguro Rural",
                "MEDIA": 10275.93
            },
            {
                "NO": "Universidade Federal da Fronteira Sul",
                "MEDIA": 10242.91
            },
            {
                "NO": "Universidade Federal do Sul da Bahia",
                "MEDIA": 10219.65
            },
            {
                "NO": "Universidade Federal de Ouro Preto",
                "MEDIA": 9737.58
            },
            {
                "NO": "Fundação Universidade do Amazonas",
                "MEDIA": 9461.75
            },
            {
                "NO": "Companhia Brasileira de Trens Urbanos",
                "MEDIA": 8779.94
            },
            {
                "NO": "Universidade Federal do Recôncavo da Bahia",
                "MEDIA": 8764.07
            },
            {
                "NO": "Universidade Federal de Lavras",
                "MEDIA": 8549.87
            },
            {
                "NO": "Centro Federal de Educação Tecnológica de Minas Gerais",
                "MEDIA": 8413.42
            },
            {
                "NO": "Fundação Universidade Federal do ABC",
                "MEDIA": 8145.29
            },
            {
                "NO": "Universidade Federal da Paraíba",
                "MEDIA": 8091.29
            },
            {
                "NO": "Fundação Universidade Federal do Mato Grosso",
                "MEDIA": 7910.19
            },
            {
                "NO": "Fundo de Imprensa Nacional",
                "MEDIA": 7523.65
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte",
                "MEDIA": 7205.1
            },
            {
                "NO": "Universidade Federal do Oeste da Bahia",
                "MEDIA": 6770.33
            },
            {
                "NO": "Universidade Federal Rural do Rio de Janeiro",
                "MEDIA": 6267.15
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas Gerais",
                "MEDIA": 6081.13
            },
            {
                "NO": "Instituto do Patrimônio Histórico e Artístico Nacional",
                "MEDIA": 5982.75
            },
            {
                "NO": "Ministério dos Transportes - Unidades com vínculo direto",
                "MEDIA": 5866.82
            },
            {
                "NO": "Universidade Federal do Rio Grande",
                "MEDIA": 5753.13
            },
            {
                "NO": "Fundação Osório",
                "MEDIA": 5631.07
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul",
                "MEDIA": 5499.13
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Mato Grosso",
                "MEDIA": 4938.11
            },
            {
                "NO": "Fundação Biblioteca Nacional",
                "MEDIA": 4808.01
            },
            {
                "NO": "Fundação Universidade Federal de Ciências da Saúde de Porto Alegre",
                "MEDIA": 4747.87
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais",
                "MEDIA": 4709.38
            },
            {
                "NO": "Universidade Federal de Alfenas",
                "MEDIA": 4604.56
            },
            {
                "NO": "Fundação Casa de Rui Barbosa",
                "MEDIA": 4569.87
            },
            {
                "NO": "Fundação Coordenação de Aperfeiçoamento de Pessoal de Nível Superior",
                "MEDIA": 4027.31
            },
            {
                "NO": "Universidade Federal de Rondonópolis",
                "MEDIA": 4003.18
            },
            {
                "NO": "Fundação Universidade Federal da Grande Dourados",
                "MEDIA": 3870.05
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Espírito Santo",
                "MEDIA": 3715.36
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia Goiano",
                "MEDIA": 3626.59
            },
            {
                "NO": "Fundação Universidade Federal de Pelotas",
                "MEDIA": 3562.28
            },
            {
                "NO": "Fundação Escola Nacional de Administração Pública",
                "MEDIA": 3423.87
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de Goiás",
                "MEDIA": 3390.01
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Rio de Janeiro",
                "MEDIA": 3299.24
            },
            {
                "NO": "Universidade Federal do Cariri",
                "MEDIA": 3274.37
            },
            {
                "NO": "Universidade Federal Rural de Pernambuco",
                "MEDIA": 3061.75
            },
            {
                "NO": "Universidade Federal de Roraima",
                "MEDIA": 2947.36
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Norte de Minas Gerais",
                "MEDIA": 2793.7
            },
            {
                "NO": "Universidade Federal Rural do Semi-Árido",
                "MEDIA": 2751.25
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia Catarinense",
                "MEDIA": 2713.19
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia Farroupilha",
                "MEDIA": 2578.92
            },
            {
                "NO": "Universidade Federal de Itajubá",
                "MEDIA": 2551.97
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de Sergipe",
                "MEDIA": 2499.43
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de São Paulo",
                "MEDIA": 2361.44
            },
            {
                "NO": "Universidade Federal do Delta do Parnaíba",
                "MEDIA": 2346.93
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia da Bahia",
                "MEDIA": 2261.66
            },
            {
                "NO": "Universidade Federal do Estado do Rio de Janeiro",
                "MEDIA": 2211.81
            },
            {
                "NO": "Fundação Universidade Federal de São João Del-Rei",
                "MEDIA": 2143.24
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia da Paraíba",
                "MEDIA": 2057.7
            },
            {
                "NO": "Ministério do Desenvolvimento Agrário e Agricultura Familiar - Unidades com vínculo direto",
                "MEDIA": 2049.09
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de Alagoas",
                "MEDIA": 2038.89
            },
            {
                "NO": "Universidade Federal Rural da Amazônia",
                "MEDIA": 1870
            },
            {
                "NO": "Fundação Universidade Federal do Acre",
                "MEDIA": 1786.26
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de Brasília",
                "MEDIA": 1653.55
            },
            {
                "NO": "Fundação Universidade Federal de Rondônia",
                "MEDIA": 1634.76
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia Fluminense",
                "MEDIA": 1632.43
            },
            {
                "NO": "Advocacia-Geral da União - Unidades com vínculo direto",
                "MEDIA": 1623.09
            },
            {
                "NO": "Centro Federal de Educação Tecnológica Celso Suckow da Fonseca",
                "MEDIA": 1596.55
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Acre",
                "MEDIA": 1589.56
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Ceará",
                "MEDIA": 1574.56
            },
            {
                "NO": "Universidade Federal de Campina Grande",
                "MEDIA": 1570.62
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia Baiano",
                "MEDIA": 1566.24
            },
            {
                "NO": "Universidade Federal do Triângulo Mineiro",
                "MEDIA": 1510.51
            },
            {
                "NO": "Universidade Federal de Jataí",
                "MEDIA": 1431.39
            },
            {
                "NO": "Universidade Federal dos Vales do Jequitinhonha e Mucuri",
                "MEDIA": 1398.56
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Sudeste de Minas Gerais",
                "MEDIA": 1293.43
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia Sul-rio-grandense",
                "MEDIA": 1265.24
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Mato Grosso do Sul",
                "MEDIA": 1191.95
            },
            {
                "NO": "Universidade Federal do Agreste de Pernambuco",
                "MEDIA": 1029.97
            },
            {
                "NO": "Fundação Universidade Federal do Vale do São Francisco",
                "MEDIA": 1026.2
            },
            {
                "NO": "Fundação Joaquim Nabuco",
                "MEDIA": 998.13
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de Roraima",
                "MEDIA": 971.45
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Maranhão",
                "MEDIA": 969.81
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Pará",
                "MEDIA": 927.06
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de Rondônia",
                "MEDIA": 894.1
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Tocantins",
                "MEDIA": 848.49
            },
            {
                "NO": "Universidade Federal de Catalão",
                "MEDIA": 770.2
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Sertão de Pernambuco",
                "MEDIA": 765.78
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de Pernambuco",
                "MEDIA": 672.57
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Triângulo Mineiro",
                "MEDIA": 657.4
            },
            {
                "NO": "Colégio Pedro II",
                "MEDIA": 639.91
            },
            {
                "NO": "Universidade da Integração Internacional da Lusofonia Afro-Brasileira",
                "MEDIA": 616.25
            },
            {
                "NO": "Universidade Federal do Norte do Tocantins",
                "MEDIA": 503.22
            },
            {
                "NO": "Instituto Brasileiro de Museus",
                "MEDIA": 467.29
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Amapá",
                "MEDIA": 397.66
            },
            {
                "NO": "Instituto de Pesquisa Econômica Aplicada",
                "MEDIA": 350.95
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Amazonas",
                "MEDIA": 299.14
            },
            {
                "NO": "Fundação Alexandre de Gusmão",
                "MEDIA": 253.82
            },
            {
                "NO": "Fundação Nacional de Artes",
                "MEDIA": 220.21
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Piauí",
                "MEDIA": 206.28
            },
            {
                "NO": "Fundação Universidade Federal do Pampa",
                "MEDIA": 162.97
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de Santa Catarina",
                "MEDIA": 123.07
            },
            {
                "NO": "Fundo Nacional de Desenvolvimento",
                "MEDIA": 1
            },
            {
                "NO": "Ministério da Cultura - Unidades com vínculo direto",
                "MEDIA": 0
            },
            {
                "NO": "Fundo de Desenvolvimento do Ensino Profissional Marítimo",
                "MEDIA": 0
            },
            {
                "NO": "Receita Federal do Brasil",
                "MEDIA": 0
            },
            {
                "NO": "Fundo de Apoio ao Desenvolvimento Social",
                "MEDIA": 0
            },
            {
                "NO": "Fundo Constitucional de Financiamento do Norte",
                "MEDIA": 0
            },
            {
                "NO": "Fundo Constitucional de Financiamento do Centro-Oeste",
                "MEDIA": 0
            },
            {
                "NO": "Fundo Constitucional de Financiamento do Nordeste",
                "MEDIA": 0
            },
            {
                "NO": "Comando da Marinha - Fundo Naval",
                "MEDIA": -205.88
            },
            {
                "NO": "Fundação Nacional dos Povos Indígenas",
                "MEDIA": -3106.73
            },
            {
                "NO": "Fundação Jorge Duprat Figueiredo, de Segurança e Medicina do Trabalho",
                "MEDIA": -45423.81
            }
        ],
        "affected_rows": 253,
        "last_id": null
    },
    "soma_tipo_receita": {
        "status": "SUCESS",
        "message": "sucess",
        "query": "SELECT ORIGEM_RECEITA `OR`, ROUND(SUM(VALOR_REALIZADO), 2) AS TOTAL FROM dados GROUP BY `OR` ORDER BY TOTAL DESC",
        "results": [
            {
                "OR": "Operações de Crédito",
                "TOTAL": 2311534992723.33
            },
            {
                "OR": "Impostos, Taxas e Contribuições de Melhoria",
                "TOTAL": 643850189112.98
            },
            {
                "OR": "Contribuições",
                "TOTAL": 618675439728.94
            },
            {
                "OR": "Receita Patrimonial",
                "TOTAL": 89497283373.52
            },
            {
                "OR": "Receita de Serviços",
                "TOTAL": 51340025394.73
            },
            {
                "OR": "Outras Receitas Correntes",
                "TOTAL": 12593762171.61
            },
            {
                "OR": "Amortizações de Empréstimos",
                "TOTAL": 11030105581.04
            },
            {
                "OR": "Alienação de Bens",
                "TOTAL": 10104296925.36
            },
            {
                "OR": "Receita Industrial",
                "TOTAL": 5091972151.83
            },
            {
                "OR": "Transferências de Capital",
                "TOTAL": 1271537060.69
            },
            {
                "OR": "Transferências Correntes",
                "TOTAL": 76054183.73
            },
            {
                "OR": "Receita Agropecuária",
                "TOTAL": 20521274.22
            },
            {
                "OR": "Sem informação",
                "TOTAL": 0
            },
            {
                "OR": "Receitas Correntes - a classificar",
                "TOTAL": -1013847.71
            }
        ],
        "affected_rows": 14,
        "last_id": null
    },
    "porcentagem_nos": {
        "status": "SUCESS",
        "message": "sucess",
        "query": "WITH org_total AS (SELECT NOME_ORGAO_SUPERIOR NOS, ROUND(SUM(VALOR_REALIZADO), 2) TOTAL FROM dados WHERE VALOR_REALIZADO > 0 GROUP BY NOS ORDER BY TOTAL DESC) SELECT NOS, TOTAL/SUM(TOTAL) OVER () AS PORCENTAGEM FROM org_total;",
        "results": [
            {
                "NOS": "Ministério da Fazenda",
                "PORCENTAGEM": 0.9021713369542607
            },
            {
                "NOS": "Ministério da Previdência Social",
                "PORCENTAGEM": 0.05594783567457723
            },
            {
                "NOS": "Ministério do Trabalho e Emprego",
                "PORCENTAGEM": 0.010810437052936777
            },
            {
                "NOS": "Ministério de Minas e Energia",
                "PORCENTAGEM": 0.009798159306060922
            },
            {
                "NOS": "Ministério da Defesa",
                "PORCENTAGEM": 0.004705864351464417
            },
            {
                "NOS": "Ministério da Ciência, Tecnologia e Inovaç",
                "PORCENTAGEM": 0.004400309242661804
            },
            {
                "NOS": "Ministério da Educação",
                "PORCENTAGEM": 0.003751622087087247
            },
            {
                "NOS": "Presidência da República",
                "PORCENTAGEM": 0.003464057666914957
            },
            {
                "NOS": "Ministério da Saúde",
                "PORCENTAGEM": 0.0008489585125934845
            },
            {
                "NOS": "Ministério da Justiça e Segurança Pública",
                "PORCENTAGEM": 0.0007897025233394957
            },
            {
                "NOS": "Ministério da Integração e do Desenvolvime",
                "PORCENTAGEM": 0.0007858105026064302
            },
            {
                "NOS": "Ministério dos Transportes",
                "PORCENTAGEM": 0.0004732419846977056
            },
            {
                "NOS": "Ministério do Turismo",
                "PORCENTAGEM": 0.00034878967778178915
            },
            {
                "NOS": "Ministério do Meio Ambiente e Mudança do Cl",
                "PORCENTAGEM": 0.0003368968958858442
            },
            {
                "NOS": "Ministério do Esporte",
                "PORCENTAGEM": 0.00030477351881464635
            },
            {
                "NOS": "Ministério de Portos e Aeroportos",
                "PORCENTAGEM": 0.00020259440030194774
            },
            {
                "NOS": "Ministério do Desenvolvimento, Indústria, C",
                "PORCENTAGEM": 0.00016521347820275397
            },
            {
                "NOS": "Ministério do Desenvolvimento Agrário e Agr",
                "PORCENTAGEM": 0.0001563665788494333
            },
            {
                "NOS": "Ministério do Desenvolvimento e Assistência",
                "PORCENTAGEM": 0.00014788722997862485
            },
            {
                "NOS": "Ministério das Comunicações",
                "PORCENTAGEM": 0.0001225991594330245
            },
            {
                "NOS": "Banco Central do Brasil - Orçamento Fiscal e",
                "PORCENTAGEM": 0.00007946977174278447
            },
            {
                "NOS": "Ministério da Agricultura e Pecuária",
                "PORCENTAGEM": 0.00007430959163194197
            },
            {
                "NOS": "Ministério da Cultura",
                "PORCENTAGEM": 0.00005762489996243639
            },
            {
                "NOS": "Ministério da Gestão e da Inovação em Ser",
                "PORCENTAGEM": 0.000029508066105308587
            },
            {
                "NOS": "Ministério das Cidades",
                "PORCENTAGEM": 0.000014706579664019636
            },
            {
                "NOS": "Ministério dos Direitos Humanos e Cidadania",
                "PORCENTAGEM": 0.000004765354476325174
            },
            {
                "NOS": "Ministério do Planejamento e Orçamento",
                "PORCENTAGEM": 0.0000019209678535217055
            },
            {
                "NOS": "Ministério da Pesca e Aquicultura",
                "PORCENTAGEM": 0.0000016951379994320907
            },
            {
                "NOS": "Ministério dos Povos Indígenas",
                "PORCENTAGEM": 0.000001301617910040386
            },
            {
                "NOS": "Ministério das Relações Exteriores",
                "PORCENTAGEM": 0.0000012009265740016863
            },
            {
                "NOS": "Ministério do Empreendedorismo, da Microempr",
                "PORCENTAGEM": 0.0000010272914703337389
            },
            {
                "NOS": "Advocacia-Geral da União",
                "PORCENTAGEM": 1.2761428024952244e-8
            },
            {
                "NOS": "Ministério das Mulheres, Igualdade Racial, d",
                "PORCENTAGEM": 2.3473268715628283e-10
            }
        ],
        "affected_rows": 33,
        "last_id": null
    },
    "porcentagem_no": {
        "status": "SUCESS",
        "message": "sucess",
        "query": "WITH org_total AS (SELECT NOME_ORGAO `NO`, ROUND(SUM(VALOR_REALIZADO), 2) TOTAL FROM dados WHERE VALOR_REALIZADO > 0 GROUP BY `NO` ORDER BY TOTAL DESC) SELECT `NO`, TOTAL/SUM(TOTAL) OVER () AS PORCENTAGEM FROM org_total;",
        "results": [
            {
                "NO": "Ministério da Fazenda - Unidades com vínculo direto",
                "PORCENTAGEM": 0.9003202928448311
            },
            {
                "NO": "Fundo do Regime Geral da Previdência Social",
                "PORCENTAGEM": 0.05464624177247873
            },
            {
                "NO": "Fundo de Amparo ao Trabalhador",
                "PORCENTAGEM": 0.010697667134101418
            },
            {
                "NO": "Agência Nacional do Petróleo, Gás Natural e Biocombustíveis",
                "PORCENTAGEM": 0.008520716091730546
            },
            {
                "NO": "Fundo Nacional de Desenvolvimento Científico e Tecnológico",
                "PORCENTAGEM": 0.004243532097139832
            },
            {
                "NO": "Presidência da República",
                "PORCENTAGEM": 0.003376972218086565
            },
            {
                "NO": "Fundo Nacional de Desenvolvimento da Educação",
                "PORCENTAGEM": 0.002615155847159755
            },
            {
                "NO": "Fundo Aeronáutico",
                "PORCENTAGEM": 0.001533097000240362
            },
            {
                "NO": "Ministério da Defesa - Unidades com vínculo direto",
                "PORCENTAGEM": 0.0013900897364287586
            },
            {
                "NO": "Instituto Nacional do Seguro Social",
                "PORCENTAGEM": 0.0012911051572394871
            },
            {
                "NO": "Agência Nacional de Energia Elétrica",
                "PORCENTAGEM": 0.0011902147271861698
            },
            {
                "NO": "Fundo de Garantia à Exportação",
                "PORCENTAGEM": 0.001039907337174323
            },
            {
                "NO": "Ministério da Educação - Unidades com vínculo direto",
                "PORCENTAGEM": 0.0009468403215470792
            },
            {
                "NO": "Comando da Marinha",
                "PORCENTAGEM": 0.0008028082159555406
            },
            {
                "NO": "Ministério da Saúde - Unidades com vínculo direto",
                "PORCENTAGEM": 0.0006917512775505483
            },
            {
                "NO": "Fundo do Exército",
                "PORCENTAGEM": 0.0006030034139741739
            },
            {
                "NO": "Fundo de Compensação de Variações Salariais",
                "PORCENTAGEM": 0.0003775726780962891
            },
            {
                "NO": "Fundo de Desenvolvimento do Nordeste",
                "PORCENTAGEM": 0.00037339758562985237
            },
            {
                "NO": "Ministério do Esporte - Unidades com vínculo direto",
                "PORCENTAGEM": 0.00030477351881464347
            },
            {
                "NO": "Comando da Aeronáutica",
                "PORCENTAGEM": 0.00029078115658545954
            },
            {
                "NO": "Agência Nacional de Transportes Terrestres",
                "PORCENTAGEM": 0.0002517807644456928
            },
            {
                "NO": "Fundo de Desenvolvimento da Amazônia",
                "PORCENTAGEM": 0.00024353892813234053
            },
            {
                "NO": "Ministério do Turismo - Unidades com vínculo direto",
                "PORCENTAGEM": 0.00023339942545592902
            },
            {
                "NO": "Fundo Nacional de Segurança Pública",
                "PORCENTAGEM": 0.0002324986388226934
            },
            {
                "NO": "Comissão de Valores Mobiliários",
                "PORCENTAGEM": 0.00022065478156110772
            },
            {
                "NO": "Fundo de Defesa de Direitos Difusos",
                "PORCENTAGEM": 0.00018510728892209803
            },
            {
                "NO": "Fundo da Marinha Mercante",
                "PORCENTAGEM": 0.00016322525238569673
            },
            {
                "NO": "Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis",
                "PORCENTAGEM": 0.0001597321431585945
            },
            {
                "NO": "Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome - Unidades com vín",
                "PORCENTAGEM": 0.00013947574957027547
            },
            {
                "NO": "Fundo Nacional sobre Mudança no Clima",
                "PORCENTAGEM": 0.00013770617400019332
            },
            {
                "NO": "Fundo Penitenciário Nacional",
                "PORCENTAGEM": 0.00012685890437673565
            },
            {
                "NO": "Polícia Federal",
                "PORCENTAGEM": 0.0001235841041280661
            },
            {
                "NO": "Fundo Constitucional do Distrito Federal",
                "PORCENTAGEM": 0.00012356492566686854
            },
            {
                "NO": "Fundo Nacional de Segurança e Educação de Trânsito",
                "PORCENTAGEM": 0.00012070761720685295
            },
            {
                "NO": "Fundo Geral de Turismo",
                "PORCENTAGEM": 0.00011535026287844152
            },
            {
                "NO": "Ministério do Trabalho e Emprego - Unidades com vínculo direto",
                "PORCENTAGEM": 0.00011222303269769198
            },
            {
                "NO": "Fundo Nacional Antidrogas",
                "PORCENTAGEM": 0.00009950101764194003
            },
            {
                "NO": "Departamento Nacional de Infraestrutura de Transportes",
                "PORCENTAGEM": 0.00009874630177514791
            },
            {
                "NO": "Financiadora de Estudos e Projetos",
                "PORCENTAGEM": 0.00008892417355814463
            },
            {
                "NO": "Empresa Brasil de Comunicação",
                "PORCENTAGEM": 0.00008695136620999549
            },
            {
                "NO": "Superintendência de Seguros Privados",
                "PORCENTAGEM": 0.00008165470444275111
            },
            {
                "NO": "Banco Central do Brasil - Orçamento Fiscal e Seguridade Social - Unidades com vínculo direto",
                "PORCENTAGEM": 0.00007946977174278371
            },
            {
                "NO": "Instituto Nacional de Metrologia, Qualidade e Tecnologia",
                "PORCENTAGEM": 0.00007634059943569885
            },
            {
                "NO": "Agência Nacional de Vigilância Sanitária",
                "PORCENTAGEM": 0.00007584229899385251
            },
            {
                "NO": "Companhia Nacional de Abastecimento",
                "PORCENTAGEM": 0.00007369883048318308
            },
            {
                "NO": "Instituto Nacional da Propriedade Industrial",
                "PORCENTAGEM": 0.0000654940665948111
            },
            {
                "NO": "Fundo de Desenvolvimento do Centro-Oeste",
                "PORCENTAGEM": 0.0000606365356572749
            },
            {
                "NO": "Fundo Nacional de Cultura",
                "PORCENTAGEM": 0.000056597566179153596
            },
            {
                "NO": "Agêncial Nacional de Telecomunicações",
                "PORCENTAGEM": 0.00005517454458621539
            },
            {
                "NO": "Agência Nacional de Saúde Suplementar",
                "PORCENTAGEM": 0.000054210537868651966
            },
            {
                "NO": "Ministério de Minas e Energia - Unidades com vínculo direto",
                "PORCENTAGEM": 0.000053496821162811804
            },
            {
                "NO": "Fundo de Universalização dos Serviços de Telecomunicações",
                "PORCENTAGEM": 0.00004852888798499625
            },
            {
                "NO": "Fundo de Terras",
                "PORCENTAGEM": 0.00004637169518233268
            },
            {
                "NO": "Agência Nacional de Águas e Saneamento Básico",
                "PORCENTAGEM": 0.00004415213245145354
            },
            {
                "NO": "Instituto Nacional de Colonização e Reforma Agrária",
                "PORCENTAGEM": 0.00003629551615672693
            },
            {
                "NO": "Universidade Federal de Juiz de Fora",
                "PORCENTAGEM": 0.00003379422710009513
            },
            {
                "NO": "Fundo de Defesa da Economia Cafeeira",
                "PORCENTAGEM": 0.00003360522779659625
            },
            {
                "NO": "Ministério da Agricultura e Pecuária - Unidades com vínculo direto",
                "PORCENTAGEM": 0.000032653372382906934
            },
            {
                "NO": "Fundo Nacional de Aviação Civil",
                "PORCENTAGEM": 0.000029167832338198548
            },
            {
                "NO": "Caixa de Construções de Casas para o Pessoal da Marinha do Brasil",
                "PORCENTAGEM": 0.00002857650966364108
            },
            {
                "NO": "Fundo Nacional do Meio Ambiente",
                "PORCENTAGEM": 0.00002798082627085993
            },
            {
                "NO": "Conselho Nacional de Desenvolvimento Científico e Tecnológico",
                "PORCENTAGEM": 0.000027311762297724686
            },
            {
                "NO": "Comando do Exército",
                "PORCENTAGEM": 0.000026358020109169406
            },
            {
                "NO": "Indústria de Material Bélico do Brasil",
                "PORCENTAGEM": 0.00002444449727201107
            },
            {
                "NO": "Empresa Brasileira de Serviços Hospitalares",
                "PORCENTAGEM": 0.000024079805375773217
            },
            {
                "NO": "Comissão Nacional de Energia Nuclear",
                "PORCENTAGEM": 0.000023349968749572084
            },
            {
                "NO": "Ministério da Integração e do Desenvolvimento Regional - Unidades com vínculo direto",
                "PORCENTAGEM": 0.00002111221679203674
            },
            {
                "NO": "Fundação Oswaldo Cruz",
                "PORCENTAGEM": 0.000020884643830545513
            },
            {
                "NO": "Companhia de Pesquisa de Recursos Minerais",
                "PORCENTAGEM": 0.000020671819674289078
            },
            {
                "NO": "Superintendência da Zona Franca de Manaus",
                "PORCENTAGEM": 0.000019140365464926557
            },
            {
                "NO": "Ministério da Gestão e da Inovação em Serviços Públicos - Unidades com vínculo direto",
                "PORCENTAGEM": 0.00001895755188468866
            },
            {
                "NO": "Telecomunicações Brasileiras S.A.",
                "PORCENTAGEM": 0.000017428416314831055
            },
            {
                "NO": "Ministério da Ciência, Tecnologia e Inovação - Unidades com vínculo direto",
                "PORCENTAGEM": 0.000017099102226365306
            },
            {
                "NO": "Superintendência do Desenvolvimento do Nordeste",
                "PORCENTAGEM": 0.000014943222857460065
            },
            {
                "NO": "Fundação Universidade de Brasília",
                "PORCENTAGEM": 0.000014604463567531407
            },
            {
                "NO": "Superintendência do Desenvolvimento da Amazônia",
                "PORCENTAGEM": 0.00001425611456477525
            },
            {
                "NO": "Universidade Federal do Rio de Janeiro",
                "PORCENTAGEM": 0.000012896451673331747
            },
            {
                "NO": "Polícia Rodoviária Federal",
                "PORCENTAGEM": 0.000012559759779129139
            },
            {
                "NO": "Empresa de Trens Urbanos de Porto Alegre",
                "PORCENTAGEM": 0.000011728657537532329
            },
            {
                "NO": "Hospital de Clínicas de Porto Alegre",
                "PORCENTAGEM": 0.000011641580052629875
            },
            {
                "NO": "Superintendência Nacional de Previdência Complementar",
                "PORCENTAGEM": 0.000010488744861088182
            },
            {
                "NO": "Fundo Nacional de Desenvolvimento",
                "PORCENTAGEM": 0.000010318163848124504
            },
            {
                "NO": "Agência Nacional de Aviação Civil",
                "PORCENTAGEM": 0.000009506529399709824
            },
            {
                "NO": "Conselho Administrativo de Defesa Econômica",
                "PORCENTAGEM": 0.000008987419874352587
            },
            {
                "NO": "Fundo Nacional de Assistência Social",
                "PORCENTAGEM": 0.00000841148040834799
            },
            {
                "NO": "Empresa Brasileira de Pesquisa Agropecuária",
                "PORCENTAGEM": 0.000008050991455058878
            },
            {
                "NO": "Companhia de Desenvolvimento dos Vales do São Francisco e do Parnaíba",
                "PORCENTAGEM": 0.000007685314003894377
            },
            {
                "NO": "Fundo de Estabilidade do Seguro Rural",
                "PORCENTAGEM": 0.000007626799166616511
            },
            {
                "NO": "Instituto Chico Mendes de Conservação da Biodiversidade",
                "PORCENTAGEM": 0.00000699807944853252
            },
            {
                "NO": "Nuclebrás Equipamentos Pesados S.A.",
                "PORCENTAGEM": 0.0000069123272748911925
            },
            {
                "NO": "Universidade Federal de Santa Catarina",
                "PORCENTAGEM": 0.0000067149014911839225
            },
            {
                "NO": "Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira",
                "PORCENTAGEM": 0.000006613547937189632
            },
            {
                "NO": "Agência Nacional de Mineração",
                "PORCENTAGEM": 0.000006094208469982641
            },
            {
                "NO": "Universidade Federal de Minas Gerais",
                "PORCENTAGEM": 0.0000058588972446560445
            },
            {
                "NO": "Caixa de Financiamento Imobiliário da Aeronáutica",
                "PORCENTAGEM": 0.000005763421091561909
            },
            {
                "NO": "Superintendência de Desenvolvimento do Centro-Oeste",
                "PORCENTAGEM": 0.000005549418281850865
            },
            {
                "NO": "Universidade Federal do Espírito Santo",
                "PORCENTAGEM": 0.000005188414082909663
            },
            {
                "NO": "Universidade Federal do Paraná",
                "PORCENTAGEM": 0.000004686903979183827
            },
            {
                "NO": "Universidade Federal do Rio Grande do Norte",
                "PORCENTAGEM": 0.000004612606105473672
            },
            {
                "NO": "Universidade Federal Fluminense",
                "PORCENTAGEM": 0.000004506903136801506
            },
            {
                "NO": "Universidade Federal da Bahia",
                "PORCENTAGEM": 0.000004441136774809483
            },
            {
                "NO": "Serviço Florestal Brasileiro",
                "PORCENTAGEM": 0.0000042878181265751825
            },
            {
                "NO": "Universidade Federal do Rio Grande do Sul",
                "PORCENTAGEM": 0.0000041440650115918525
            },
            {
                "NO": "Fundo Nacional para a Criança e o Adolescente",
                "PORCENTAGEM": 0.0000036407435415146217
            },
            {
                "NO": "Universidade Federal de Pernambuco",
                "PORCENTAGEM": 0.0000036057065436418987
            },
            {
                "NO": "Fundação Nacional de Saúde",
                "PORCENTAGEM": 0.000003520658253565054
            },
            {
                "NO": "Hospital Nossa Senhora da Conceição S.A.",
                "PORCENTAGEM": 0.00000274909609369226
            },
            {
                "NO": "Ministério do Desenvolvimento, Indústria, Comércio e Serviços - Unidades com vínculo direto",
                "PORCENTAGEM": 0.0000026239817211473675
            },
            {
                "NO": "Fundação Universidade Federal do Mato Grosso do Sul",
                "PORCENTAGEM": 0.000002456556360447636
            },
            {
                "NO": "Universidade Federal de Goiás",
                "PORCENTAGEM": 0.0000023736805002273964
            },
            {
                "NO": "Universidade Federal do Pará",
                "PORCENTAGEM": 0.0000022542295081427723
            },
            {
                "NO": "Fundação Universidade Federal de Uberlândia",
                "PORCENTAGEM": 0.0000021749630380907353
            },
            {
                "NO": "Fundação Instituto Brasileiro de Geografia e Estatística",
                "PORCENTAGEM": 0.0000019181947553902567
            },
            {
                "NO": "Fundação Universidade do Maranhão",
                "PORCENTAGEM": 0.0000018779259350616568
            },
            {
                "NO": "Universidade Federal do Ceará",
                "PORCENTAGEM": 0.0000018517714170590585
            },
            {
                "NO": "Ministério da Pesca e Aquicultura - Unidades com vínculo direto",
                "PORCENTAGEM": 0.0000016951379994320746
            },
            {
                "NO": "Companhia Brasileira de Trens Urbanos",
                "PORCENTAGEM": 0.0000016268221571481677
            },
            {
                "NO": "Fundo de Garantia para a Promoção da Competitividade",
                "PORCENTAGEM": 0.0000016144649914101195
            },
            {
                "NO": "Universidade Federal de São Paulo",
                "PORCENTAGEM": 0.000001582813930976971
            },
            {
                "NO": "Fundo para o Desenvolvimento Tecnológico das Telecomunicações",
                "PORCENTAGEM": 0.0000014673105469806097
            },
            {
                "NO": "Universidade Federal de Viçosa",
                "PORCENTAGEM": 0.0000014098597840433048
            },
            {
                "NO": "Fundo Nacional de Habitação de Interesse Social",
                "PORCENTAGEM": 0.000001351099969338998
            },
            {
                "NO": "Fundação Universidade do Amazonas",
                "PORCENTAGEM": 0.0000013105688401792765
            },
            {
                "NO": "Fundação Nacional do Índio - Patrimônio Indígena",
                "PORCENTAGEM": 0.0000012757757740305202
            },
            {
                "NO": "Universidade Federal de Santa Maria",
                "PORCENTAGEM": 0.000001235087847157326
            },
            {
                "NO": "Ministério das Relações Exteriores - Unidades com vínculo direto",
                "PORCENTAGEM": 0.0000011965914741782313
            },
            {
                "NO": "VALEC Engenharia, Construções e Ferrovias S.A.",
                "PORCENTAGEM": 0.0000011918950644936062
            },
            {
                "NO": "Fundo Nacional do Idoso",
                "PORCENTAGEM": 0.000001124845667497663
            },
            {
                "NO": "Universidade Federal de Lavras",
                "PORCENTAGEM": 0.0000011046932484497614
            },
            {
                "NO": "Ministério do Empreendedorismo, da Microempresa e da Empresa de Pequeno Porte - Unidades com víncu",
                "PORCENTAGEM": 0.0000010272914703337291
            },
            {
                "NO": "Universidade Tecnológica Federal do Paraná",
                "PORCENTAGEM": 0.0000010248739293894637
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais",
                "PORCENTAGEM": 9.49059779228103e-7
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas Gerais",
                "PORCENTAGEM": 9.372114460244606e-7
            },
            {
                "NO": "Fundação Universidade Federal do Piauí",
                "PORCENTAGEM": 8.68702604803303e-7
            },
            {
                "NO": "Instituto Federal do Paraná",
                "PORCENTAGEM": 8.288796232630198e-7
            },
            {
                "NO": "Ministério dos Transportes - Unidades com vínculo direto",
                "PORCENTAGEM": 8.154062028929881e-7
            },
            {
                "NO": "Fundação Universidade Federal de São Carlos",
                "PORCENTAGEM": 8.016098465355571e-7
            },
            {
                "NO": "Universidade Federal de Alagoas",
                "PORCENTAGEM": 7.494701173614107e-7
            },
            {
                "NO": "Fundação Universidade Federal de Sergipe",
                "PORCENTAGEM": 7.448368665337921e-7
            },
            {
                "NO": "Universidade Federal de Ouro Preto",
                "PORCENTAGEM": 7.105952053279742e-7
            },
            {
                "NO": "Agência Nacional de Transportes Aquaviários",
                "PORCENTAGEM": 6.94786175719878e-7
            },
            {
                "NO": "Universidade Federal da Paraíba",
                "PORCENTAGEM": 6.907739358803958e-7
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul",
                "PORCENTAGEM": 6.894129790068324e-7
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Mato Grosso",
                "PORCENTAGEM": 6.875517596417034e-7
            },
            {
                "NO": "Comando da Marinha - Fundo Naval",
                "PORCENTAGEM": 6.70362806371042e-7
            },
            {
                "NO": "Centro Federal de Educação Tecnológica de Minas Gerais",
                "PORCENTAGEM": 6.595777245741832e-7
            },
            {
                "NO": "Universidade Federal da Integração Latino-Americana",
                "PORCENTAGEM": 6.154650801623602e-7
            },
            {
                "NO": "Ministério da Justiça e Segurança Pública - Unidades com vínculo direto",
                "PORCENTAGEM": 6.053897944733025e-7
            },
            {
                "NO": "Fundação Universidade Federal do Tocantins",
                "PORCENTAGEM": 5.997713346657207e-7
            },
            {
                "NO": "Fundação Universidade Federal do Amapá",
                "PORCENTAGEM": 5.685317149131578e-7
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte",
                "PORCENTAGEM": 5.667579833676308e-7
            },
            {
                "NO": "Fundação Biblioteca Nacional",
                "PORCENTAGEM": 5.572534677733608e-7
            },
            {
                "NO": "Fundação Jorge Duprat Figueiredo, de Segurança e Medicina do Trabalho",
                "PORCENTAGEM": 5.468861375632528e-7
            },
            {
                "NO": "Departamento Nacional de Obras Contra as Secas",
                "PORCENTAGEM": 5.390342354839817e-7
            },
            {
                "NO": "Fundação Universidade Federal da Grande Dourados",
                "PORCENTAGEM": 5.113211831186299e-7
            },
            {
                "NO": "Universidade Federal do Sul e Sudeste do Pará",
                "PORCENTAGEM": 5.039124492241116e-7
            },
            {
                "NO": "Fundação Universidade Federal do ABC",
                "PORCENTAGEM": 4.511971119432255e-7
            },
            {
                "NO": "Universidade Federal Rural do Rio de Janeiro",
                "PORCENTAGEM": 4.385477182275522e-7
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia Goiano",
                "PORCENTAGEM": 4.1497343308035206e-7
            },
            {
                "NO": "Fundação Universidade Federal do Mato Grosso",
                "PORCENTAGEM": 3.6322228327679233e-7
            },
            {
                "NO": "Fundação Universidade Federal de Pelotas",
                "PORCENTAGEM": 3.631066296313782e-7
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Espírito Santo",
                "PORCENTAGEM": 3.5676977222345603e-7
            },
            {
                "NO": "Agência Nacional do Cinema",
                "PORCENTAGEM": 2.90768887208934e-7
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia Catarinense",
                "PORCENTAGEM": 2.78448187396293e-7
            },
            {
                "NO": "Universidade Federal Rural de Pernambuco",
                "PORCENTAGEM": 2.648415225161544e-7
            },
            {
                "NO": "Universidade Federal da Fronteira Sul",
                "PORCENTAGEM": 2.635045853498181e-7
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Ceará",
                "PORCENTAGEM": 2.488882934196416e-7
            },
            {
                "NO": "Universidade Federal de Alfenas",
                "PORCENTAGEM": 2.4288397726120113e-7
            },
            {
                "NO": "Universidade Federal do Rio Grande",
                "PORCENTAGEM": 2.4078434821499995e-7
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia Farroupilha",
                "PORCENTAGEM": 2.230423415130376e-7
            },
            {
                "NO": "Universidade Federal do Recôncavo da Bahia",
                "PORCENTAGEM": 2.2279885270565815e-7
            },
            {
                "NO": "Instituto Nacional de Tecnologia da Informação",
                "PORCENTAGEM": 2.0442304022988764e-7
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Sudeste de Minas Gerais",
                "PORCENTAGEM": 1.946425902226222e-7
            },
            {
                "NO": "Instituto de Pesquisas Jardim Botânico do Rio de Janeiro",
                "PORCENTAGEM": 1.9185488108543183e-7
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Rio de Janeiro",
                "PORCENTAGEM": 1.8072774974691245e-7
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de Goiás",
                "PORCENTAGEM": 1.7678768958628877e-7
            },
            {
                "NO": "Universidade Federal do Delta do Parnaíba",
                "PORCENTAGEM": 1.759142580763999e-7
            },
            {
                "NO": "Universidade Federal do Sul da Bahia",
                "PORCENTAGEM": 1.6070252900458146e-7
            },
            {
                "NO": "Universidade Federal de Itajubá",
                "PORCENTAGEM": 1.599011015794012e-7
            },
            {
                "NO": "Universidade Federal de Roraima",
                "PORCENTAGEM": 1.5616622711419598e-7
            },
            {
                "NO": "Universidade Federal do Oeste do Pará",
                "PORCENTAGEM": 1.5310504450291755e-7
            },
            {
                "NO": "Fundação Universidade Federal de Ciências da Saúde de Porto Alegre",
                "PORCENTAGEM": 1.5056332180332895e-7
            },
            {
                "NO": "Universidade Federal Rural do Semi-Árido",
                "PORCENTAGEM": 1.46044055166296e-7
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de São Paulo",
                "PORCENTAGEM": 1.4532069899682612e-7
            },
            {
                "NO": "Fundação Universidade Federal de São João Del-Rei",
                "PORCENTAGEM": 1.446356223520434e-7
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de Alagoas",
                "PORCENTAGEM": 1.379275038741735e-7
            },
            {
                "NO": "Amazônia Azul Tecnologia de Defesa S.A.",
                "PORCENTAGEM": 1.3506728483629032e-7
            },
            {
                "NO": "Fundo de Imprensa Nacional",
                "PORCENTAGEM": 1.3408261574281785e-7
            },
            {
                "NO": "Fundação Coordenação de Aperfeiçoamento de Pessoal de Nível Superior",
                "PORCENTAGEM": 1.2990325482633121e-7
            },
            {
                "NO": "Universidade Federal do Cariri",
                "PORCENTAGEM": 1.2786411141276423e-7
            },
            {
                "NO": "Fundação Universidade Federal do Acre",
                "PORCENTAGEM": 1.240580453133948e-7
            },
            {
                "NO": "Instituto do Patrimônio Histórico e Artístico Nacional",
                "PORCENTAGEM": 1.2083411837481953e-7
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Norte de Minas Gerais",
                "PORCENTAGEM": 1.1968052246748737e-7
            },
            {
                "NO": "Universidade Federal de Campina Grande",
                "PORCENTAGEM": 1.062004871775384e-7
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia da Bahia",
                "PORCENTAGEM": 1.0181812894048707e-7
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia Baiano",
                "PORCENTAGEM": 1.0094848974007525e-7
            },
            {
                "NO": "Universidade Federal dos Vales do Jequitinhonha e Mucuri",
                "PORCENTAGEM": 9.878156620151532e-8
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de Sergipe",
                "PORCENTAGEM": 8.777692357621677e-8
            },
            {
                "NO": "Universidade Federal do Triângulo Mineiro",
                "PORCENTAGEM": 8.712134936943236e-8
            },
            {
                "NO": "Fundação Osório",
                "PORCENTAGEM": 8.465755116029448e-8
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de Rondônia",
                "PORCENTAGEM": 7.975041277089094e-8
            },
            {
                "NO": "Fundação Universidade Federal do Pampa",
                "PORCENTAGEM": 7.535476179460823e-8
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia Sul-rio-grandense",
                "PORCENTAGEM": 7.477481625028425e-8
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia da Paraíba",
                "PORCENTAGEM": 7.183257901952934e-8
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de Brasília",
                "PORCENTAGEM": 6.977149419964433e-8
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Maranhão",
                "PORCENTAGEM": 6.96422149723564e-8
            },
            {
                "NO": "Universidade Federal do Estado do Rio de Janeiro",
                "PORCENTAGEM": 6.782188807769803e-8
            },
            {
                "NO": "Agência Espacial Brasileira",
                "PORCENTAGEM": 6.696164971632858e-8
            },
            {
                "NO": "Universidade Federal de Jataí",
                "PORCENTAGEM": 6.639962001691501e-8
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Piauí",
                "PORCENTAGEM": 6.617113533652678e-8
            },
            {
                "NO": "Fundo de Apoio ao Desenvolvimento Social",
                "PORCENTAGEM": 6.288331309383863e-8
            },
            {
                "NO": "Universidade Federal Rural da Amazônia",
                "PORCENTAGEM": 6.224161344570775e-8
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de Pernambuco",
                "PORCENTAGEM": 6.050893948156848e-8
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia Fluminense",
                "PORCENTAGEM": 5.604568475755847e-8
            },
            {
                "NO": "Fundação Universidade Federal de Rondônia",
                "PORCENTAGEM": 5.530400127628953e-8
            },
            {
                "NO": "Empresa de Pesquisa Energética",
                "PORCENTAGEM": 5.331056213706315e-8
            },
            {
                "NO": "Fundo de Desenvolvimento do Ensino Profissional Marítimo",
                "PORCENTAGEM": 5.229250394701982e-8
            },
            {
                "NO": "Fundação Universidade Federal do Vale do São Francisco",
                "PORCENTAGEM": 4.858690390949878e-8
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Pará",
                "PORCENTAGEM": 4.621780074253507e-8
            },
            {
                "NO": "Universidade Federal do Oeste da Bahia",
                "PORCENTAGEM": 4.435931225955892e-8
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Triângulo Mineiro",
                "PORCENTAGEM": 4.134986702311613e-8
            },
            {
                "NO": "Instituto Brasileiro de Turismo",
                "PORCENTAGEM": 3.998944741523548e-8
            },
            {
                "NO": "Ministério da Cultura - Unidades com vínculo direto",
                "PORCENTAGEM": 3.818052365709045e-8
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Tocantins",
                "PORCENTAGEM": 3.469000548678153e-8
            },
            {
                "NO": "Universidade Federal de Rondonópolis",
                "PORCENTAGEM": 3.147470100721083e-8
            },
            {
                "NO": "Fundação Escola Nacional de Administração Pública",
                "PORCENTAGEM": 2.7927332265252344e-8
            },
            {
                "NO": "Universidade Federal do Norte do Tocantins",
                "PORCENTAGEM": 2.6113143303417293e-8
            },
            {
                "NO": "Fundação Nacional dos Povos Indígenas",
                "PORCENTAGEM": 2.584213600985304e-8
            },
            {
                "NO": "Universidade Federal de Catalão",
                "PORCENTAGEM": 2.543374070840505e-8
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Acre",
                "PORCENTAGEM": 2.541220028574288e-8
            },
            {
                "NO": "Centro Nacional de Tecnologia Eletrônica Avançada S.A.",
                "PORCENTAGEM": 2.5177040406848682e-8
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Mato Grosso do Sul",
                "PORCENTAGEM": 2.3629599925239762e-8
            },
            {
                "NO": "Colégio Pedro II",
                "PORCENTAGEM": 2.300225968528094e-8
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Sertão de Pernambuco",
                "PORCENTAGEM": 2.2477898862242034e-8
            },
            {
                "NO": "Universidade da Integração Internacional da Lusofonia Afro-Brasileira",
                "PORCENTAGEM": 2.2302053114712998e-8
            },
            {
                "NO": "Centro Federal de Educação Tecnológica Celso Suckow da Fonseca",
                "PORCENTAGEM": 2.092125410220635e-8
            },
            {
                "NO": "Fundação Casa de Rui Barbosa",
                "PORCENTAGEM": 1.5569781268397487e-8
            },
            {
                "NO": "Universidade Federal do Agreste de Pernambuco",
                "PORCENTAGEM": 1.5386243448777753e-8
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de Roraima",
                "PORCENTAGEM": 1.4257456111943224e-8
            },
            {
                "NO": "Advocacia-Geral da União - Unidades com vínculo direto",
                "PORCENTAGEM": 1.2761428024952122e-8
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Amazonas",
                "PORCENTAGEM": 6.820642878283611e-9
            },
            {
                "NO": "Fundação Alexandre de Gusmão",
                "PORCENTAGEM": 4.335099823443321e-9
            },
            {
                "NO": "Instituto Brasileiro de Museus",
                "PORCENTAGEM": 3.919009829096425e-9
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia do Amapá",
                "PORCENTAGEM": 3.2308222849707157e-9
            },
            {
                "NO": "Fundação Joaquim Nabuco",
                "PORCENTAGEM": 2.9571050757193126e-9
            },
            {
                "NO": "Instituto de Pesquisa Econômica Aplicada",
                "PORCENTAGEM": 2.7730981314303326e-9
            },
            {
                "NO": "Instituto Federal de Educação, Ciência e Tecnologia de Santa Catarina",
                "PORCENTAGEM": 1.999839152870494e-9
            },
            {
                "NO": "Fundação Nacional de Artes",
                "PORCENTAGEM": 8.079951705496713e-10
            },
            {
                "NO": "Ministério do Desenvolvimento Agrário e Agricultura Familiar - Unidades com vínculo direto",
                "PORCENTAGEM": 5.370271891085391e-10
            }
        ],
        "affected_rows": 249,
        "last_id": null
    },
    "mediana_nos": {
        "status": "SUCESS",
        "message": "sucess",
        "query": "\r\nWITH mediana AS (\r\n  SELECT ROUND(AVG(VALOR_REALIZADO), 2) AS MEDIANA\r\n  FROM (\r\n    SELECT\r\n      VALOR_REALIZADO,\r\n      ROW_NUMBER() OVER (ORDER BY VALOR_REALIZADO) AS rn,\r\n      COUNT(*) OVER () AS cnt\r\n    FROM dados\r\n  ) t\r\n  WHERE rn IN (FLOOR((cnt + 1) / 2), CEIL((cnt + 1) / 2))\r\n),\r\norg_total AS (\r\n  SELECT\r\n    NOME_ORGAO_SUPERIOR AS NOS,\r\n    ROUND(SUM(VALOR_REALIZADO), 2) AS TOTAL\r\n  FROM dados\r\n  GROUP BY NOME_ORGAO_SUPERIOR\r\n)\r\nSELECT\r\n  m.MEDIANA\r\nFROM org_total o\r\nCROSS JOIN mediana m\r\nORDER BY o.TOTAL DESC LIMIT 1;\r\n",
        "results": [
            {
                "MEDIANA": 3519.98
            }
        ],
        "affected_rows": 1,
        "last_id": null
    },
    "mediana_orgao": {
        "status": "SUCESS",
        "message": "sucess",
        "query": "\r\nWITH mediana AS (\r\n  SELECT ROUND(AVG(VALOR_REALIZADO), 2) AS MEDIANA\r\n  FROM (\r\n    SELECT\r\n      VALOR_REALIZADO,\r\n      ROW_NUMBER() OVER (ORDER BY VALOR_REALIZADO) AS rn,\r\n      COUNT(*) OVER () AS cnt\r\n    FROM dados\r\n  ) t\r\n  WHERE rn IN (FLOOR((cnt + 1) / 2), CEIL((cnt + 1) / 2))\r\n),\r\norg_total AS (\r\n  SELECT\r\n    NOME_ORGAO AS `NO`,\r\n    ROUND(SUM(VALOR_REALIZADO), 2) AS TOTAL\r\n  FROM dados\r\n  GROUP BY `NO`\r\n)\r\nSELECT\r\n  m.MEDIANA\r\nFROM org_total o\r\nCROSS JOIN mediana m\r\nORDER BY o.TOTAL DESC LIMIT 1;\r\n",
        "results": [
            {
                "MEDIANA": 3519.98
            }
        ],
        "affected_rows": 1,
        "last_id": null
    },
    "tipos_receita_nos": {
        "status": "SUCESS",
        "message": "sucess",
        "query": "SELECT DISTINCT NOME_ORGAO_SUPERIOR NOS, ESPECIE_RECEITA FROM dados",
        "results": [
            {
                "NOS": "Advocacia-Geral da União",
                "ESPECIE_RECEITA": "Bens, Direitos e Valores Incorporados ao Patr"
            },
            {
                "NOS": "Banco Central do Brasil - Orçamento Fiscal e",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOS": "Banco Central do Brasil - Orçamento Fiscal e",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOS": "Banco Central do Brasil - Orçamento Fiscal e",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOS": "Banco Central do Brasil - Orçamento Fiscal e",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOS": "Banco Central do Brasil - Orçamento Fiscal e",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOS": "Banco Central do Brasil - Orçamento Fiscal e",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOS": "Banco Central do Brasil - Orçamento Fiscal e",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOS": "Banco Central do Brasil - Orçamento Fiscal e",
                "ESPECIE_RECEITA": "Bens, Direitos e Valores Incorporados ao Patr"
            },
            {
                "NOS": "Ministério da Agricultura e Pecuária",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOS": "Ministério da Agricultura e Pecuária",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOS": "Ministério da Agricultura e Pecuária",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOS": "Ministério da Agricultura e Pecuária",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOS": "Ministério da Agricultura e Pecuária",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOS": "Ministério da Agricultura e Pecuária",
                "ESPECIE_RECEITA": "Contribuições econômicas"
            },
            {
                "NOS": "Ministério da Agricultura e Pecuária",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOS": "Ministério da Agricultura e Pecuária",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOS": "Ministério da Agricultura e Pecuária",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOS": "Ministério da Agricultura e Pecuária",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOS": "Ministério da Agricultura e Pecuária",
                "ESPECIE_RECEITA": "Transferências de Instituições Privadas"
            },
            {
                "NOS": "Ministério da Agricultura e Pecuária",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOS": "Ministério da Agricultura e Pecuária",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOS": "Ministério da Ciência, Tecnologia e Inovaç",
                "ESPECIE_RECEITA": "Contribuições econômicas"
            },
            {
                "NOS": "Ministério da Ciência, Tecnologia e Inovaç",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOS": "Ministério da Ciência, Tecnologia e Inovaç",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOS": "Ministério da Ciência, Tecnologia e Inovaç",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOS": "Ministério da Ciência, Tecnologia e Inovaç",
                "ESPECIE_RECEITA": "Exploração de recursos naturais"
            },
            {
                "NOS": "Ministério da Ciência, Tecnologia e Inovaç",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOS": "Ministério da Ciência, Tecnologia e Inovaç",
                "ESPECIE_RECEITA": "Delegação de Serviços Públicos Mediante C"
            },
            {
                "NOS": "Ministério da Ciência, Tecnologia e Inovaç",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOS": "Ministério da Ciência, Tecnologia e Inovaç",
                "ESPECIE_RECEITA": "Indenizações e restituições"
            },
            {
                "NOS": "Ministério da Ciência, Tecnologia e Inovaç",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOS": "Ministério da Ciência, Tecnologia e Inovaç",
                "ESPECIE_RECEITA": "Transferências de Instituições Privadas"
            },
            {
                "NOS": "Ministério da Ciência, Tecnologia e Inovaç",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOS": "Ministério da Ciência, Tecnologia e Inovaç",
                "ESPECIE_RECEITA": "RECEITA INDUSTRIAL-INTRA"
            },
            {
                "NOS": "Ministério da Ciência, Tecnologia e Inovaç",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOS": "Ministério da Ciência, Tecnologia e Inovaç",
                "ESPECIE_RECEITA": "AMORTIZACAO DE EMPRESTIMOS"
            },
            {
                "NOS": "Ministério da Ciência, Tecnologia e Inovaç",
                "ESPECIE_RECEITA": "Receita de concessões e permissões"
            },
            {
                "NOS": "Ministério da Ciência, Tecnologia e Inovaç",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOS": "Ministério da Cultura",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOS": "Ministério da Cultura",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOS": "Ministério da Cultura",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOS": "Ministério da Cultura",
                "ESPECIE_RECEITA": "Delegação de Serviços Públicos Mediante C"
            },
            {
                "NOS": "Ministério da Cultura",
                "ESPECIE_RECEITA": "Receita de concessões e permissões"
            },
            {
                "NOS": "Ministério da Cultura",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOS": "Ministério da Cultura",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOS": "Ministério da Cultura",
                "ESPECIE_RECEITA": "Contribuições econômicas"
            },
            {
                "NOS": "Ministério da Cultura",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOS": "Ministério da Cultura",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOS": "Ministério da Cultura",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOS": "Ministério da Defesa",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOS": "Ministério da Defesa",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOS": "Ministério da Defesa",
                "ESPECIE_RECEITA": "Exploração de recursos naturais"
            },
            {
                "NOS": "Ministério da Defesa",
                "ESPECIE_RECEITA": "Serviços e Atividades Referentes à Saúde"
            },
            {
                "NOS": "Ministério da Defesa",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOS": "Ministério da Defesa",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOS": "Ministério da Defesa",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOS": "Ministério da Defesa",
                "ESPECIE_RECEITA": "MULTAS E JUROS DE MORA DAS REC.DE CAPITAL"
            },
            {
                "NOS": "Ministério da Defesa",
                "ESPECIE_RECEITA": "Contribuições econômicas"
            },
            {
                "NOS": "Ministério da Defesa",
                "ESPECIE_RECEITA": "Transferências da União e de suas Entidades"
            },
            {
                "NOS": "Ministério da Defesa",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOS": "Ministério da Defesa",
                "ESPECIE_RECEITA": "Transferências dos Municípios e de suas Ent"
            },
            {
                "NOS": "Ministério da Defesa",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOS": "Ministério da Defesa",
                "ESPECIE_RECEITA": "Serviços e Atividades Referentes à Navegaç"
            },
            {
                "NOS": "Ministério da Defesa",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOS": "Ministério da Defesa",
                "ESPECIE_RECEITA": "Alienação de bens imóveis"
            },
            {
                "NOS": "Ministério da Defesa",
                "ESPECIE_RECEITA": "Cessão de direitos"
            },
            {
                "NOS": "Ministério da Defesa",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOS": "Ministério da Defesa",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOS": "Ministério da Defesa",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOS": "Ministério da Defesa",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOS": "Ministério da Defesa",
                "ESPECIE_RECEITA": "Transferências dos Estados e do Distrito Fed"
            },
            {
                "NOS": "Ministério da Defesa",
                "ESPECIE_RECEITA": "Transferências de Instituições Privadas"
            },
            {
                "NOS": "Ministério da Defesa",
                "ESPECIE_RECEITA": "Indenizações e restituições"
            },
            {
                "NOS": "Ministério da Defesa",
                "ESPECIE_RECEITA": "Transferências de Convênios"
            },
            {
                "NOS": "Ministério da Defesa",
                "ESPECIE_RECEITA": "Operações de crédito - mercado externo"
            },
            {
                "NOS": "Ministério da Defesa",
                "ESPECIE_RECEITA": "AMORTIZACAO DE EMPRESTIMOS"
            },
            {
                "NOS": "Ministério da Educação",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOS": "Ministério da Educação",
                "ESPECIE_RECEITA": "MULTAS E JUROS DE MORA DAS REC.DE CAPITAL"
            },
            {
                "NOS": "Ministério da Educação",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOS": "Ministério da Educação",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOS": "Ministério da Educação",
                "ESPECIE_RECEITA": "Serviços e Atividades Referentes à Saúde"
            },
            {
                "NOS": "Ministério da Educação",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOS": "Ministério da Educação",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOS": "Ministério da Educação",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOS": "Ministério da Educação",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOS": "Ministério da Educação",
                "ESPECIE_RECEITA": "Transferências dos Municípios e de suas Ent"
            },
            {
                "NOS": "Ministério da Educação",
                "ESPECIE_RECEITA": "Transferências da União e de suas Entidades"
            },
            {
                "NOS": "Ministério da Educação",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOS": "Ministério da Educação",
                "ESPECIE_RECEITA": "Cessão de direitos"
            },
            {
                "NOS": "Ministério da Educação",
                "ESPECIE_RECEITA": "Transferências dos Estados e do Distrito Fed"
            },
            {
                "NOS": "Ministério da Educação",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOS": "Ministério da Educação",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOS": "Ministério da Educação",
                "ESPECIE_RECEITA": "Exploração de recursos naturais"
            },
            {
                "NOS": "Ministério da Educação",
                "ESPECIE_RECEITA": "AMORTIZACAO DE EMPRESTIMOS"
            },
            {
                "NOS": "Ministério da Educação",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOS": "Ministério da Educação",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOS": "Ministério da Educação",
                "ESPECIE_RECEITA": "Bens, Direitos e Valores Incorporados ao Patr"
            },
            {
                "NOS": "Ministério da Educação",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOS": "Ministério da Educação",
                "ESPECIE_RECEITA": "DEMAIS TRANSFERENCIAS DE CAPITAL"
            },
            {
                "NOS": "Ministério da Educação",
                "ESPECIE_RECEITA": "Exploração do patrimônio intangível"
            },
            {
                "NOS": "Ministério da Educação",
                "ESPECIE_RECEITA": "Operações de crédito - mercado interno"
            },
            {
                "NOS": "Ministério da Educação",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "Impostos"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "Contribuições econômicas"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "AMORTIZACAO DE EMPRESTIMOS"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "Bens, Direitos e Valores Incorporados ao Patr"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "Operações de crédito - mercado interno"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "Exploração de recursos naturais"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "Delegação de Serviços Públicos Mediante C"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "Operações de crédito - mercado externo"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "Sem informação"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "MULTAS E JUROS DE MORA DAS REC.DE CAPITAL"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "Cessão de direitos"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "Contribuições para Entidades Privadas de Se"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "Receita de concessões e permissões"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "Indenizações e restituições"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "Serviços e Atividades Financeiras"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "Alienação de bens imóveis"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "Receitas de valores mobiliários"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "Transferências de Convênios"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "Alienação de bens intangíveis"
            },
            {
                "NOS": "Ministério da Fazenda",
                "ESPECIE_RECEITA": "Exploração do patrimônio intangível"
            },
            {
                "NOS": "Ministério da Gestão e da Inovação em Ser",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOS": "Ministério da Gestão e da Inovação em Ser",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOS": "Ministério da Gestão e da Inovação em Ser",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOS": "Ministério da Gestão e da Inovação em Ser",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOS": "Ministério da Gestão e da Inovação em Ser",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOS": "Ministério da Gestão e da Inovação em Ser",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOS": "Ministério da Gestão e da Inovação em Ser",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOS": "Ministério da Integração e do Desenvolvime",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOS": "Ministério da Integração e do Desenvolvime",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOS": "Ministério da Integração e do Desenvolvime",
                "ESPECIE_RECEITA": "Receita de Serviços"
            },
            {
                "NOS": "Ministério da Integração e do Desenvolvime",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOS": "Ministério da Integração e do Desenvolvime",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOS": "Ministério da Integração e do Desenvolvime",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOS": "Ministério da Integração e do Desenvolvime",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOS": "Ministério da Integração e do Desenvolvime",
                "ESPECIE_RECEITA": "Impostos"
            },
            {
                "NOS": "Ministério da Integração e do Desenvolvime",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOS": "Ministério da Integração e do Desenvolvime",
                "ESPECIE_RECEITA": "Bens, Direitos e Valores Incorporados ao Patr"
            },
            {
                "NOS": "Ministério da Integração e do Desenvolvime",
                "ESPECIE_RECEITA": "Exploração de recursos naturais"
            },
            {
                "NOS": "Ministério da Integração e do Desenvolvime",
                "ESPECIE_RECEITA": "MULTAS E JUROS DE MORA DAS REC.DE CAPITAL"
            },
            {
                "NOS": "Ministério da Integração e do Desenvolvime",
                "ESPECIE_RECEITA": "Alienação de bens imóveis"
            },
            {
                "NOS": "Ministério da Integração e do Desenvolvime",
                "ESPECIE_RECEITA": "AMORTIZACAO DE EMPRESTIMOS"
            },
            {
                "NOS": "Ministério da Integração e do Desenvolvime",
                "ESPECIE_RECEITA": "Operações de crédito - mercado externo"
            },
            {
                "NOS": "Ministério da Integração e do Desenvolvime",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOS": "Ministério da Integração e do Desenvolvime",
                "ESPECIE_RECEITA": "Transferências de Instituições Privadas"
            },
            {
                "NOS": "Ministério da Integração e do Desenvolvime",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOS": "Ministério da Justiça e Segurança Pública",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOS": "Ministério da Justiça e Segurança Pública",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOS": "Ministério da Justiça e Segurança Pública",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOS": "Ministério da Justiça e Segurança Pública",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOS": "Ministério da Justiça e Segurança Pública",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOS": "Ministério da Justiça e Segurança Pública",
                "ESPECIE_RECEITA": "Bens, Direitos e Valores Incorporados ao Patr"
            },
            {
                "NOS": "Ministério da Justiça e Segurança Pública",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOS": "Ministério da Justiça e Segurança Pública",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOS": "Ministério da Justiça e Segurança Pública",
                "ESPECIE_RECEITA": "Transferências de Instituições Privadas"
            },
            {
                "NOS": "Ministério da Justiça e Segurança Pública",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOS": "Ministério da Justiça e Segurança Pública",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOS": "Ministério da Justiça e Segurança Pública",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOS": "Ministério da Justiça e Segurança Pública",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOS": "Ministério da Justiça e Segurança Pública",
                "ESPECIE_RECEITA": "Transferências da União e de suas Entidades"
            },
            {
                "NOS": "Ministério da Justiça e Segurança Pública",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOS": "Ministério da Justiça e Segurança Pública",
                "ESPECIE_RECEITA": "Transferências dos Municípios e de suas Ent"
            },
            {
                "NOS": "Ministério da Pesca e Aquicultura",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOS": "Ministério da Pesca e Aquicultura",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOS": "Ministério da Previdência Social",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOS": "Ministério da Previdência Social",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOS": "Ministério da Previdência Social",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOS": "Ministério da Previdência Social",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOS": "Ministério da Previdência Social",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOS": "Ministério da Previdência Social",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOS": "Ministério da Previdência Social",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOS": "Ministério da Previdência Social",
                "ESPECIE_RECEITA": "Cessão de direitos"
            },
            {
                "NOS": "Ministério da Previdência Social",
                "ESPECIE_RECEITA": "MULTAS E JUROS DE MORA DAS REC.DE CAPITAL"
            },
            {
                "NOS": "Ministério da Previdência Social",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOS": "Ministério da Previdência Social",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOS": "Ministério da Saúde",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOS": "Ministério da Saúde",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOS": "Ministério da Saúde",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOS": "Ministério da Saúde",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOS": "Ministério da Saúde",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOS": "Ministério da Saúde",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOS": "Ministério da Saúde",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOS": "Ministério da Saúde",
                "ESPECIE_RECEITA": "Exploração de recursos naturais"
            },
            {
                "NOS": "Ministério da Saúde",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOS": "Ministério da Saúde",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOS": "Ministério da Saúde",
                "ESPECIE_RECEITA": "Bens, Direitos e Valores Incorporados ao Patr"
            },
            {
                "NOS": "Ministério da Saúde",
                "ESPECIE_RECEITA": "Indenizações e restituições"
            },
            {
                "NOS": "Ministério da Saúde",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOS": "Ministério da Saúde",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOS": "Ministério das Cidades",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOS": "Ministério das Cidades",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOS": "Ministério das Cidades",
                "ESPECIE_RECEITA": "Transferências de Instituições Privadas"
            },
            {
                "NOS": "Ministério das Cidades",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOS": "Ministério das Cidades",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOS": "Ministério das Cidades",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOS": "Ministério das Cidades",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOS": "Ministério das Cidades",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOS": "Ministério das Cidades",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOS": "Ministério das Comunicações",
                "ESPECIE_RECEITA": "Contribuições econômicas"
            },
            {
                "NOS": "Ministério das Comunicações",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOS": "Ministério das Comunicações",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOS": "Ministério das Comunicações",
                "ESPECIE_RECEITA": "Delegação de Serviços Públicos Mediante C"
            },
            {
                "NOS": "Ministério das Comunicações",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOS": "Ministério das Comunicações",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOS": "Ministério das Comunicações",
                "ESPECIE_RECEITA": "Operações de crédito - mercado externo"
            },
            {
                "NOS": "Ministério das Comunicações",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOS": "Ministério das Comunicações",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOS": "Ministério das Comunicações",
                "ESPECIE_RECEITA": "Receita de concessões e permissões"
            },
            {
                "NOS": "Ministério das Mulheres, Igualdade Racial, d",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOS": "Ministério das Relações Exteriores",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOS": "Ministério das Relações Exteriores",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOS": "Ministério das Relações Exteriores",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOS": "Ministério de Minas e Energia",
                "ESPECIE_RECEITA": "Exploração de recursos naturais"
            },
            {
                "NOS": "Ministério de Minas e Energia",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOS": "Ministério de Minas e Energia",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOS": "Ministério de Minas e Energia",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOS": "Ministério de Minas e Energia",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOS": "Ministério de Minas e Energia",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOS": "Ministério de Minas e Energia",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOS": "Ministério de Minas e Energia",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOS": "Ministério de Minas e Energia",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOS": "Ministério de Minas e Energia",
                "ESPECIE_RECEITA": "Contribuições econômicas"
            },
            {
                "NOS": "Ministério de Minas e Energia",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOS": "Ministério de Portos e Aeroportos",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOS": "Ministério de Portos e Aeroportos",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOS": "Ministério de Portos e Aeroportos",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOS": "Ministério de Portos e Aeroportos",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOS": "Ministério de Portos e Aeroportos",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOS": "Ministério de Portos e Aeroportos",
                "ESPECIE_RECEITA": "Delegação de Serviços Públicos Mediante C"
            },
            {
                "NOS": "Ministério de Portos e Aeroportos",
                "ESPECIE_RECEITA": "Serviços e Atividades Financeiras"
            },
            {
                "NOS": "Ministério do Desenvolvimento Agrário e Agr",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOS": "Ministério do Desenvolvimento Agrário e Agr",
                "ESPECIE_RECEITA": "Contribuições econômicas"
            },
            {
                "NOS": "Ministério do Desenvolvimento Agrário e Agr",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOS": "Ministério do Desenvolvimento Agrário e Agr",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOS": "Ministério do Desenvolvimento Agrário e Agr",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOS": "Ministério do Desenvolvimento Agrário e Agr",
                "ESPECIE_RECEITA": "Operações de crédito - mercado interno"
            },
            {
                "NOS": "Ministério do Desenvolvimento Agrário e Agr",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOS": "Ministério do Desenvolvimento Agrário e Agr",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOS": "Ministério do Desenvolvimento Agrário e Agr",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOS": "Ministério do Desenvolvimento Agrário e Agr",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOS": "Ministério do Desenvolvimento Agrário e Agr",
                "ESPECIE_RECEITA": "AMORTIZACAO DE EMPRESTIMOS"
            },
            {
                "NOS": "Ministério do Desenvolvimento Agrário e Agr",
                "ESPECIE_RECEITA": "MULTAS E JUROS DE MORA DAS REC.DE CAPITAL"
            },
            {
                "NOS": "Ministério do Desenvolvimento Agrário e Agr",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOS": "Ministério do Desenvolvimento Agrário e Agr",
                "ESPECIE_RECEITA": "Alienação de bens imóveis"
            },
            {
                "NOS": "Ministério do Desenvolvimento Agrário e Agr",
                "ESPECIE_RECEITA": "Serviços e Atividades Financeiras"
            },
            {
                "NOS": "Ministério do Desenvolvimento e Assistência",
                "ESPECIE_RECEITA": "Operações de crédito - mercado interno"
            },
            {
                "NOS": "Ministério do Desenvolvimento e Assistência",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOS": "Ministério do Desenvolvimento e Assistência",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOS": "Ministério do Desenvolvimento e Assistência",
                "ESPECIE_RECEITA": "DEMAIS TRANSFERENCIAS CORRENTES"
            },
            {
                "NOS": "Ministério do Desenvolvimento e Assistência",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOS": "Ministério do Desenvolvimento, Indústria, C",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOS": "Ministério do Desenvolvimento, Indústria, C",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOS": "Ministério do Desenvolvimento, Indústria, C",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOS": "Ministério do Desenvolvimento, Indústria, C",
                "ESPECIE_RECEITA": "Alienação de bens imóveis"
            },
            {
                "NOS": "Ministério do Desenvolvimento, Indústria, C",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOS": "Ministério do Desenvolvimento, Indústria, C",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOS": "Ministério do Desenvolvimento, Indústria, C",
                "ESPECIE_RECEITA": "AMORTIZACAO DE EMPRESTIMOS"
            },
            {
                "NOS": "Ministério do Desenvolvimento, Indústria, C",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOS": "Ministério do Desenvolvimento, Indústria, C",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOS": "Ministério do Desenvolvimento, Indústria, C",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOS": "Ministério do Desenvolvimento, Indústria, C",
                "ESPECIE_RECEITA": "Serviços e Atividades Financeiras"
            },
            {
                "NOS": "Ministério do Empreendedorismo, da Microempr",
                "ESPECIE_RECEITA": "MULTAS E JUROS DE MORA DAS REC.DE CAPITAL"
            },
            {
                "NOS": "Ministério do Esporte",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOS": "Ministério do Esporte",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOS": "Ministério do Esporte",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOS": "Ministério do Esporte",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOS": "Ministério do Meio Ambiente e Mudança do Cl",
                "ESPECIE_RECEITA": "Bens, Direitos e Valores Incorporados ao Patr"
            },
            {
                "NOS": "Ministério do Meio Ambiente e Mudança do Cl",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOS": "Ministério do Meio Ambiente e Mudança do Cl",
                "ESPECIE_RECEITA": "Exploração de recursos naturais"
            },
            {
                "NOS": "Ministério do Meio Ambiente e Mudança do Cl",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOS": "Ministério do Meio Ambiente e Mudança do Cl",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOS": "Ministério do Meio Ambiente e Mudança do Cl",
                "ESPECIE_RECEITA": "Serviços e Atividades Financeiras"
            },
            {
                "NOS": "Ministério do Meio Ambiente e Mudança do Cl",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOS": "Ministério do Meio Ambiente e Mudança do Cl",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOS": "Ministério do Meio Ambiente e Mudança do Cl",
                "ESPECIE_RECEITA": "Transferências de Convênios"
            },
            {
                "NOS": "Ministério do Meio Ambiente e Mudança do Cl",
                "ESPECIE_RECEITA": "Transferências do Exterior"
            },
            {
                "NOS": "Ministério do Meio Ambiente e Mudança do Cl",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOS": "Ministério do Meio Ambiente e Mudança do Cl",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOS": "Ministério do Planejamento e Orçamento",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOS": "Ministério do Planejamento e Orçamento",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOS": "Ministério do Planejamento e Orçamento",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOS": "Ministério do Planejamento e Orçamento",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOS": "Ministério do Planejamento e Orçamento",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOS": "Ministério do Planejamento e Orçamento",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOS": "Ministério do Planejamento e Orçamento",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOS": "Ministério do Trabalho e Emprego",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOS": "Ministério do Trabalho e Emprego",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOS": "Ministério do Trabalho e Emprego",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOS": "Ministério do Trabalho e Emprego",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOS": "Ministério do Trabalho e Emprego",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOS": "Ministério do Trabalho e Emprego",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOS": "Ministério do Trabalho e Emprego",
                "ESPECIE_RECEITA": "Serviços e Atividades Financeiras"
            },
            {
                "NOS": "Ministério do Turismo",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOS": "Ministério do Turismo",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOS": "Ministério do Turismo",
                "ESPECIE_RECEITA": "Serviços e Atividades Financeiras"
            },
            {
                "NOS": "Ministério do Turismo",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOS": "Ministério do Turismo",
                "ESPECIE_RECEITA": "Delegação de Serviços Públicos Mediante C"
            },
            {
                "NOS": "Ministério do Turismo",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOS": "Ministério do Turismo",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOS": "Ministério do Turismo",
                "ESPECIE_RECEITA": "MULTAS E JUROS DE MORA DAS REC.DE CAPITAL"
            },
            {
                "NOS": "Ministério do Turismo",
                "ESPECIE_RECEITA": "AMORTIZACAO DE EMPRESTIMOS"
            },
            {
                "NOS": "Ministério dos Direitos Humanos e Cidadania",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOS": "Ministério dos Direitos Humanos e Cidadania",
                "ESPECIE_RECEITA": "DEMAIS TRANSFERENCIAS CORRENTES"
            },
            {
                "NOS": "Ministério dos Direitos Humanos e Cidadania",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOS": "Ministério dos Povos Indígenas",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOS": "Ministério dos Povos Indígenas",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOS": "Ministério dos Povos Indígenas",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOS": "Ministério dos Povos Indígenas",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOS": "Ministério dos Transportes",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOS": "Ministério dos Transportes",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOS": "Ministério dos Transportes",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOS": "Ministério dos Transportes",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOS": "Ministério dos Transportes",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOS": "Ministério dos Transportes",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOS": "Ministério dos Transportes",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOS": "Ministério dos Transportes",
                "ESPECIE_RECEITA": "Delegação de Serviços Públicos Mediante C"
            },
            {
                "NOS": "Ministério dos Transportes",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOS": "Ministério dos Transportes",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOS": "Ministério dos Transportes",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOS": "Presidência da República",
                "ESPECIE_RECEITA": "AMORTIZACAO DE EMPRESTIMOS"
            },
            {
                "NOS": "Presidência da República",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOS": "Presidência da República",
                "ESPECIE_RECEITA": "Contribuições econômicas"
            },
            {
                "NOS": "Presidência da República",
                "ESPECIE_RECEITA": "Exploração de recursos naturais"
            },
            {
                "NOS": "Presidência da República",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOS": "Presidência da República",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOS": "Presidência da República",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOS": "Presidência da República",
                "ESPECIE_RECEITA": "RECEITA INDUSTRIAL-INTRA"
            },
            {
                "NOS": "Presidência da República",
                "ESPECIE_RECEITA": "MULTAS E JUROS DE MORA DAS REC.DE CAPITAL"
            }
        ],
        "affected_rows": 340,
        "last_id": null
    },
    "tipos_receitas_no": {
        "status": "SUCESS",
        "message": "sucess",
        "query": "SELECT DISTINCT NOME_ORGAO, ESPECIE_RECEITA FROM dados",
        "results": [
            {
                "NOME_ORGAO": "Advocacia-Geral da União - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Bens, Direitos e Valores Incorporados ao Patr"
            },
            {
                "NOME_ORGAO": "Banco Central do Brasil - Orçamento Fiscal e Seguridade Social - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Banco Central do Brasil - Orçamento Fiscal e Seguridade Social - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Banco Central do Brasil - Orçamento Fiscal e Seguridade Social - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Banco Central do Brasil - Orçamento Fiscal e Seguridade Social - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Banco Central do Brasil - Orçamento Fiscal e Seguridade Social - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Banco Central do Brasil - Orçamento Fiscal e Seguridade Social - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Banco Central do Brasil - Orçamento Fiscal e Seguridade Social - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Banco Central do Brasil - Orçamento Fiscal e Seguridade Social - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Bens, Direitos e Valores Incorporados ao Patr"
            },
            {
                "NOME_ORGAO": "Empresa Brasileira de Pesquisa Agropecuária",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Empresa Brasileira de Pesquisa Agropecuária",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Empresa Brasileira de Pesquisa Agropecuária",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Empresa Brasileira de Pesquisa Agropecuária",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundo de Defesa da Economia Cafeeira",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Ministério da Agricultura e Pecuária - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Contribuições econômicas"
            },
            {
                "NOME_ORGAO": "Fundo de Defesa da Economia Cafeeira",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Ministério da Agricultura e Pecuária - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Empresa Brasileira de Pesquisa Agropecuária",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Ministério da Agricultura e Pecuária - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Empresa Brasileira de Pesquisa Agropecuária",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Empresa Brasileira de Pesquisa Agropecuária",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Empresa Brasileira de Pesquisa Agropecuária",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundo de Defesa da Economia Cafeeira",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Empresa Brasileira de Pesquisa Agropecuária",
                "ESPECIE_RECEITA": "Transferências de Instituições Privadas"
            },
            {
                "NOME_ORGAO": "Ministério da Agricultura e Pecuária - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Empresa Brasileira de Pesquisa Agropecuária",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Empresa Brasileira de Pesquisa Agropecuária",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Ministério da Agricultura e Pecuária - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Ministério da Agricultura e Pecuária - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Desenvolvimento Científico e Tecnológico",
                "ESPECIE_RECEITA": "Contribuições econômicas"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Desenvolvimento Científico e Tecnológico",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Comissão Nacional de Energia Nuclear",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Ministério da Ciência, Tecnologia e Inovação - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Comissão Nacional de Energia Nuclear",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Financiadora de Estudos e Projetos",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Desenvolvimento Científico e Tecnológico",
                "ESPECIE_RECEITA": "Exploração de recursos naturais"
            },
            {
                "NOME_ORGAO": "Conselho Nacional de Desenvolvimento Científico e Tecnológico",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Ministério da Ciência, Tecnologia e Inovação - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Exploração de recursos naturais"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Desenvolvimento Científico e Tecnológico",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Desenvolvimento Científico e Tecnológico",
                "ESPECIE_RECEITA": "Delegação de Serviços Públicos Mediante C"
            },
            {
                "NOME_ORGAO": "Conselho Nacional de Desenvolvimento Científico e Tecnológico",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Comissão Nacional de Energia Nuclear",
                "ESPECIE_RECEITA": "Indenizações e restituições"
            },
            {
                "NOME_ORGAO": "Comissão Nacional de Energia Nuclear",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Conselho Nacional de Desenvolvimento Científico e Tecnológico",
                "ESPECIE_RECEITA": "Transferências de Instituições Privadas"
            },
            {
                "NOME_ORGAO": "Ministério da Ciência, Tecnologia e Inovação - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Desenvolvimento Científico e Tecnológico",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Comissão Nacional de Energia Nuclear",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Agência Espacial Brasileira",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Comissão Nacional de Energia Nuclear",
                "ESPECIE_RECEITA": "RECEITA INDUSTRIAL-INTRA"
            },
            {
                "NOME_ORGAO": "Comissão Nacional de Energia Nuclear",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Comissão Nacional de Energia Nuclear",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Centro Nacional de Tecnologia Eletrônica Avançada S.A.",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Conselho Nacional de Desenvolvimento Científico e Tecnológico",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Desenvolvimento Científico e Tecnológico",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Financiadora de Estudos e Projetos",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Desenvolvimento Científico e Tecnológico",
                "ESPECIE_RECEITA": "AMORTIZACAO DE EMPRESTIMOS"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Desenvolvimento Científico e Tecnológico",
                "ESPECIE_RECEITA": "Receita de concessões e permissões"
            },
            {
                "NOME_ORGAO": "Comissão Nacional de Energia Nuclear",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Ministério da Ciência, Tecnologia e Inovação - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Cultura",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Agência Nacional do Cinema",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Fundação Biblioteca Nacional",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Cultura",
                "ESPECIE_RECEITA": "Delegação de Serviços Públicos Mediante C"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Cultura",
                "ESPECIE_RECEITA": "Receita de concessões e permissões"
            },
            {
                "NOME_ORGAO": "Instituto Brasileiro de Museus",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Cultura",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Fundação Biblioteca Nacional",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Instituto do Patrimônio Histórico e Artístico Nacional",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto do Patrimônio Histórico e Artístico Nacional",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Agência Nacional do Cinema",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundação Casa de Rui Barbosa",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Cultura",
                "ESPECIE_RECEITA": "Contribuições econômicas"
            },
            {
                "NOME_ORGAO": "Fundação Biblioteca Nacional",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Agência Nacional do Cinema",
                "ESPECIE_RECEITA": "Contribuições econômicas"
            },
            {
                "NOME_ORGAO": "Instituto do Patrimônio Histórico e Artístico Nacional",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Cultura",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOME_ORGAO": "Fundação Nacional de Artes",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Ministério da Cultura - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Cultura",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Cultura",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundação Casa de Rui Barbosa",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Fundação Biblioteca Nacional",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Fundação Casa de Rui Barbosa",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Fundo Aeronáutico",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Fundo do Exército",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Comando da Marinha",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Fundo Aeronáutico",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Comando da Marinha",
                "ESPECIE_RECEITA": "Exploração de recursos naturais"
            },
            {
                "NOME_ORGAO": "Ministério da Defesa - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Serviços e Atividades Referentes à Saúde"
            },
            {
                "NOME_ORGAO": "Ministério da Defesa - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Comando da Marinha",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Comando da Marinha - Fundo Naval",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOME_ORGAO": "Fundo do Exército",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Ministério da Defesa - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundo Aeronáutico",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOME_ORGAO": "Fundo do Exército",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOME_ORGAO": "Comando da Marinha",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOME_ORGAO": "Caixa de Construções de Casas para o Pessoal da Marinha do Brasil",
                "ESPECIE_RECEITA": "MULTAS E JUROS DE MORA DAS REC.DE CAPITAL"
            },
            {
                "NOME_ORGAO": "Ministério da Defesa - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOME_ORGAO": "Comando da Marinha",
                "ESPECIE_RECEITA": "Contribuições econômicas"
            },
            {
                "NOME_ORGAO": "Fundo do Exército",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Comando do Exército",
                "ESPECIE_RECEITA": "Transferências da União e de suas Entidades"
            },
            {
                "NOME_ORGAO": "Comando da Marinha",
                "ESPECIE_RECEITA": "Transferências da União e de suas Entidades"
            },
            {
                "NOME_ORGAO": "Comando do Exército",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOME_ORGAO": "Comando do Exército",
                "ESPECIE_RECEITA": "Transferências dos Municípios e de suas Ent"
            },
            {
                "NOME_ORGAO": "Comando da Marinha",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundo Aeronáutico",
                "ESPECIE_RECEITA": "Serviços e Atividades Referentes à Navegaç"
            },
            {
                "NOME_ORGAO": "Fundo do Exército",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Caixa de Financiamento Imobiliário da Aeronáutica",
                "ESPECIE_RECEITA": "Alienação de bens imóveis"
            },
            {
                "NOME_ORGAO": "Fundo do Exército",
                "ESPECIE_RECEITA": "Alienação de bens imóveis"
            },
            {
                "NOME_ORGAO": "Caixa de Construções de Casas para o Pessoal da Marinha do Brasil",
                "ESPECIE_RECEITA": "Alienação de bens imóveis"
            },
            {
                "NOME_ORGAO": "Fundo Aeronáutico",
                "ESPECIE_RECEITA": "Cessão de direitos"
            },
            {
                "NOME_ORGAO": "Ministério da Defesa - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Comando da Marinha",
                "ESPECIE_RECEITA": "Cessão de direitos"
            },
            {
                "NOME_ORGAO": "Fundo do Exército",
                "ESPECIE_RECEITA": "Cessão de direitos"
            },
            {
                "NOME_ORGAO": "Indústria de Material Bélico do Brasil",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Fundo Aeronáutico",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Indústria de Material Bélico do Brasil",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Comando da Aeronáutica",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Comando da Marinha",
                "ESPECIE_RECEITA": "Serviços e Atividades Referentes à Navegaç"
            },
            {
                "NOME_ORGAO": "Comando da Marinha",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundo Aeronáutico",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundo do Exército",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundo do Exército",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Fundo Aeronáutico",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Fundo do Exército",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Comando da Marinha",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Fundo Aeronáutico",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Indústria de Material Bélico do Brasil",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Comando do Exército",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Indústria de Material Bélico do Brasil",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Comando do Exército",
                "ESPECIE_RECEITA": "Transferências dos Estados e do Distrito Fed"
            },
            {
                "NOME_ORGAO": "Amazônia Azul Tecnologia de Defesa S.A.",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Indústria de Material Bélico do Brasil",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Comando da Marinha",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Fundo do Exército",
                "ESPECIE_RECEITA": "Serviços e Atividades Referentes à Saúde"
            },
            {
                "NOME_ORGAO": "Fundação Osório",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Ministério da Defesa - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Transferências de Instituições Privadas"
            },
            {
                "NOME_ORGAO": "Comando do Exército",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Comando da Marinha - Fundo Naval",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Caixa de Construções de Casas para o Pessoal da Marinha do Brasil",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Comando da Marinha",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Ministério da Defesa - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Caixa de Financiamento Imobiliário da Aeronáutica",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundação Osório",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundo do Exército",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundo de Desenvolvimento do Ensino Profissional Marítimo",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOME_ORGAO": "Fundo do Exército",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Comando da Marinha",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Fundo Aeronáutico",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Comando da Aeronáutica",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Comando da Marinha",
                "ESPECIE_RECEITA": "Transferências dos Estados e do Distrito Fed"
            },
            {
                "NOME_ORGAO": "Fundo Aeronáutico",
                "ESPECIE_RECEITA": "Indenizações e restituições"
            },
            {
                "NOME_ORGAO": "Fundo do Exército",
                "ESPECIE_RECEITA": "Indenizações e restituições"
            },
            {
                "NOME_ORGAO": "Comando da Marinha",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Indústria de Material Bélico do Brasil",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOME_ORGAO": "Fundo do Exército",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Indústria de Material Bélico do Brasil",
                "ESPECIE_RECEITA": "Transferências de Convênios"
            },
            {
                "NOME_ORGAO": "Comando do Exército",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Comando da Marinha - Fundo Naval",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundação Osório",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Amazônia Azul Tecnologia de Defesa S.A.",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Ministério da Defesa - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Comando da Marinha",
                "ESPECIE_RECEITA": "Operações de crédito - mercado externo"
            },
            {
                "NOME_ORGAO": "Ministério da Defesa - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Operações de crédito - mercado externo"
            },
            {
                "NOME_ORGAO": "Comando da Aeronáutica",
                "ESPECIE_RECEITA": "Operações de crédito - mercado externo"
            },
            {
                "NOME_ORGAO": "Comando do Exército",
                "ESPECIE_RECEITA": "Operações de crédito - mercado externo"
            },
            {
                "NOME_ORGAO": "Fundo do Exército",
                "ESPECIE_RECEITA": "Operações de crédito - mercado externo"
            },
            {
                "NOME_ORGAO": "Caixa de Financiamento Imobiliário da Aeronáutica",
                "ESPECIE_RECEITA": "AMORTIZACAO DE EMPRESTIMOS"
            },
            {
                "NOME_ORGAO": "Caixa de Construções de Casas para o Pessoal da Marinha do Brasil",
                "ESPECIE_RECEITA": "AMORTIZACAO DE EMPRESTIMOS"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Desenvolvimento da Educação",
                "ESPECIE_RECEITA": "MULTAS E JUROS DE MORA DAS REC.DE CAPITAL"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Campina Grande",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Rio de Janeiro",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia da Bahia",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Viçosa",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Goiás",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Universidade Federal da Fronteira Sul",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Sergipe",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Universidade Federal da Paraíba",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Fundação Universidade do Maranhão",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Uberlândia",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Pelotas",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Piauí",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Mato Grosso",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Uberlândia",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Minas Gerais",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Mato Grosso do Sul",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Minas Gerais",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Santa Maria",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Mato Grosso do Sul",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Universidade Tecnológica Federal do Paraná",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Desenvolvimento da Educação",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Sergipe",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Pará",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Colégio Pedro II",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Fundação Coordenação de Aperfeiçoamento de Pessoal de Nível Superior",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Vale do São Francisco",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Acre",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia da Paraíba",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Universidade Federal Fluminense",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Alagoas",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Universidade Federal da Paraíba",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Mato Grosso do Sul",
                "ESPECIE_RECEITA": "Serviços e Atividades Referentes à Saúde"
            },
            {
                "NOME_ORGAO": "Instituto Federal do Paraná",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Sertão de Pernambuco",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Pernambuco",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Norte de Minas Gerais",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Sergipe",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Baiano",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Santa Catarina",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Piauí",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Goiano",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Empresa Brasileira de Serviços Hospitalares",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Tocantins",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade da Integração Internacional da Lusofonia Afro-Brasileira",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Espírito Santo",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Ouro Preto",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas Gerais",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Rondônia",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de São Paulo",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundação Universidade de Brasília",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de São João Del-Rei",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Mato Grosso",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Universidade Federal Rural de Pernambuco",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Vale do São Francisco",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Empresa Brasileira de Serviços Hospitalares",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Catarinense",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Pará",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Triângulo Mineiro",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundação Universidade do Amazonas",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Santa Catarina",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Paraná",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal de São Paulo",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Norte de Minas Gerais",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Rio de Janeiro",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas Gerais",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Hospital de Clínicas de Porto Alegre",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de São João Del-Rei",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Alagoas",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Espírito Santo",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Maranhão",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Ceará",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Paraná",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Alfenas",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Piauí",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Empresa Brasileira de Serviços Hospitalares",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do ABC",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas Gerais",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Itajubá",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Universidade Federal Rural de Pernambuco",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Tocantins",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Fundação Universidade de Brasília",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Rio de Janeiro",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Viçosa",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Piauí",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Juiz de Fora",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Rio Grande do Sul",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Rio de Janeiro",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Mato Grosso",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Pernambuco",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Universidade Federal da Bahia",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Estado do Rio de Janeiro",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Roraima",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Mato Grosso do Sul",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas Gerais",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Hospital de Clínicas de Porto Alegre",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Rio de Janeiro",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Pernambuco",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Rio Grande do Norte",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Sudeste de Minas Gerais",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Sertão de Pernambuco",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Norte de Minas Gerais",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Sul-rio-grandense",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Rio Grande do Norte",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Rio Grande do Sul",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Amazonas",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Norte do Tocantins",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Viçosa",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Piauí",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Ceará",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Hospital de Clínicas de Porto Alegre",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Pampa",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Campina Grande",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia da Bahia",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal dos Vales do Jequitinhonha e Mucuri",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Pernambuco",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Espírito Santo",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Goiás",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundação Universidade do Maranhão",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal da Fronteira Sul",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Pará",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Sergipe",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal da Paraíba",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Baiano",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Juiz de Fora",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Ceará",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Hospital de Clínicas de Porto Alegre",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Rondônia",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal Fluminense",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de São Paulo",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal Rural do Rio de Janeiro",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Mato Grosso",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de São João Del-Rei",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Pernambuco",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Ciências da Saúde de Porto Alegre",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Maranhão",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal da Bahia",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Espírito Santo",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Sertão de Pernambuco",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Rondônia",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de São Carlos",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Pelotas",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Santa Maria",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Minas Gerais",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Lavras",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Colégio Pedro II",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal Fluminense",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Triângulo Mineiro",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Rio de Janeiro",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal de São Paulo",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Juiz de Fora",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Santa Catarina",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de São João Del-Rei",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Ministério da Educação - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Desenvolvimento da Educação",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais",
                "ESPECIE_RECEITA": "Transferências dos Municípios e de suas Ent"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Pernambuco",
                "ESPECIE_RECEITA": "Transferências dos Municípios e de suas Ent"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Uberlândia",
                "ESPECIE_RECEITA": "Transferências dos Municípios e de suas Ent"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Mato Grosso",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Pernambuco",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Uberlândia",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Pelotas",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Mato Grosso do Sul",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Amapá",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Roraima",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Vale do São Francisco",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Amapá",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Espírito Santo",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia da Paraíba",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Jataí",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Empresa Brasileira de Serviços Hospitalares",
                "ESPECIE_RECEITA": "Transferências da União e de suas Entidades"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Campina Grande",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Desenvolvimento da Educação",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Recôncavo da Bahia",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Tecnológica Federal do Paraná",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Agreste de Pernambuco",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal dos Vales do Jequitinhonha e Mucuri",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Juiz de Fora",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Minas Gerais",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Goiás",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal da Paraíba",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Delta do Parnaíba",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Catalão",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do ABC",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Jataí",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Brasília",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Hospital de Clínicas de Porto Alegre",
                "ESPECIE_RECEITA": "Cessão de direitos"
            },
            {
                "NOME_ORGAO": "Empresa Brasileira de Serviços Hospitalares",
                "ESPECIE_RECEITA": "Serviços e Atividades Referentes à Saúde"
            },
            {
                "NOME_ORGAO": "Instituto Federal do Paraná",
                "ESPECIE_RECEITA": "Transferências dos Estados e do Distrito Fed"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Santa Catarina",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Sul e Sudeste do Pará",
                "ESPECIE_RECEITA": "Transferências dos Estados e do Distrito Fed"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Sergipe",
                "ESPECIE_RECEITA": "Transferências dos Estados e do Distrito Fed"
            },
            {
                "NOME_ORGAO": "Universidade Tecnológica Federal do Paraná",
                "ESPECIE_RECEITA": "Transferências dos Estados e do Distrito Fed"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul",
                "ESPECIE_RECEITA": "Transferências dos Estados e do Distrito Fed"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Pará",
                "ESPECIE_RECEITA": "Transferências dos Estados e do Distrito Fed"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Brasília",
                "ESPECIE_RECEITA": "Transferências dos Estados e do Distrito Fed"
            },
            {
                "NOME_ORGAO": "Hospital de Clínicas de Porto Alegre",
                "ESPECIE_RECEITA": "Transferências dos Estados e do Distrito Fed"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Oeste do Pará",
                "ESPECIE_RECEITA": "Transferências dos Estados e do Distrito Fed"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Paraná",
                "ESPECIE_RECEITA": "Transferências dos Estados e do Distrito Fed"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Uberlândia",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Instituto Federal do Paraná",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Espírito Santo",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Hospital de Clínicas de Porto Alegre",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Jataí",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Hospital de Clínicas de Porto Alegre",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Pampa",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de São João Del-Rei",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Alagoas",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de São Carlos",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Mato Grosso",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Universidade Federal da Bahia",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Uberlândia",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Pelotas",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Acre",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Catarinense",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Paraná",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal da Grande Dourados",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Espírito Santo",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia da Paraíba",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Sudeste de Minas Gerais",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Universidade Federal Rural do Semi-Árido",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Ceará",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Sergipe",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Fundação Universidade de Brasília",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Sudeste de Minas Gerais",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Recôncavo da Bahia",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Universidade Tecnológica Federal do Paraná",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Universidade Federal da Paraíba",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Universidade Federal de São Paulo",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Juiz de Fora",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Norte de Minas Gerais",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do ABC",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Alagoas",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Fluminense",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Santa Catarina",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Rio Grande do Norte",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas Gerais",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Ceará",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Catarinense",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Ministério da Educação - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Exploração de recursos naturais"
            },
            {
                "NOME_ORGAO": "Universidade Federal Rural do Semi-Árido",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Rio de Janeiro",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Catalão",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Rondônia",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Itajubá",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Tecnológica Federal do Paraná",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Maranhão",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Lavras",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Tocantins",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Pará",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Ceará",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Desenvolvimento da Educação",
                "ESPECIE_RECEITA": "AMORTIZACAO DE EMPRESTIMOS"
            },
            {
                "NOME_ORGAO": "Universidade Federal Rural de Pernambuco",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Triângulo Mineiro",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Santa Catarina",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de São Carlos",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Triângulo Mineiro",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Instituto Federal do Paraná",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Amazonas",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Mato Grosso",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Centro Federal de Educação Tecnológica de Minas Gerais",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Recôncavo da Bahia",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Fundação Coordenação de Aperfeiçoamento de Pessoal de Nível Superior",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Universidade Federal dos Vales do Jequitinhonha e Mucuri",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Empresa Brasileira de Serviços Hospitalares",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Lavras",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Sul e Sudeste do Pará",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Desenvolvimento da Educação",
                "ESPECIE_RECEITA": "Bens, Direitos e Valores Incorporados ao Patr"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Sergipe",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Pernambuco",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Farroupilha",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Pelotas",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Mato Grosso do Sul",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Catarinense",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Espírito Santo",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Universidade Federal da Paraíba",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Baiano",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Norte do Tocantins",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Rio Grande",
                "ESPECIE_RECEITA": "Transferências dos Municípios e de suas Ent"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Sergipe",
                "ESPECIE_RECEITA": "Transferências dos Municípios e de suas Ent"
            },
            {
                "NOME_ORGAO": "Fundação Universidade do Maranhão",
                "ESPECIE_RECEITA": "Transferências dos Municípios e de suas Ent"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Goiano",
                "ESPECIE_RECEITA": "Transferências dos Municípios e de suas Ent"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Pará",
                "ESPECIE_RECEITA": "Transferências dos Municípios e de suas Ent"
            },
            {
                "NOME_ORGAO": "Centro Federal de Educação Tecnológica de Minas Gerais",
                "ESPECIE_RECEITA": "Transferências dos Municípios e de suas Ent"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de São Paulo",
                "ESPECIE_RECEITA": "Transferências dos Municípios e de suas Ent"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Pelotas",
                "ESPECIE_RECEITA": "Transferências dos Municípios e de suas Ent"
            },
            {
                "NOME_ORGAO": "Fundação Universidade de Brasília",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Fundação Universidade do Amazonas",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas Gerais",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Universidade Federal Rural do Semi-Árido",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Tocantins",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Ceará",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Universidade Federal Rural de Pernambuco",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Sergipe",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Espírito Santo",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Sertão de Pernambuco",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Norte de Minas Gerais",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Alagoas",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Fluminense",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Goiano",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Piauí",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Tocantins",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Sul-rio-grandense",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Ceará",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Brasília",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Instituto Federal do Paraná",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Fundação Universidade de Brasília",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Pernambuco",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Pelotas",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Paraná",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Sergipe",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Agreste de Pernambuco",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Campina Grande",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Universidade Tecnológica Federal do Paraná",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Universidade Federal de São Paulo",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Ceará",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Fundação Universidade de Brasília",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Rondônia",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Mato Grosso",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Goiano",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Universidade Federal da Integração Latino-Americana",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Rio Grande do Norte",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Hospital de Clínicas de Porto Alegre",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Rio de Janeiro",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Goiás",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Triângulo Mineiro",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Ouro Preto",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Catalão",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do ABC",
                "ESPECIE_RECEITA": "DEMAIS TRANSFERENCIAS DE CAPITAL"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Minas Gerais",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Agreste de Pernambuco",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Delta do Parnaíba",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Rondonópolis",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Norte do Tocantins",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Farroupilha",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Centro Federal de Educação Tecnológica de Minas Gerais",
                "ESPECIE_RECEITA": "Exploração do patrimônio intangível"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Alagoas",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Estado do Rio de Janeiro",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Mato Grosso do Sul",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de São Carlos",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal Rural do Rio de Janeiro",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundação Joaquim Nabuco",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Sul da Bahia",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Rio Grande do Sul",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Oeste do Pará",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal Rural do Semi-Árido",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Itajubá",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Tocantins",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Ceará",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal Rural de Pernambuco",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Triângulo Mineiro",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Rio Grande",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Sul e Sudeste do Pará",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundação Universidade do Amazonas",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Santa Catarina",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Rio de Janeiro",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Recôncavo da Bahia",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundação Universidade do Maranhão",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Goiás",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Oeste da Bahia",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Acre",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Paraná",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Centro Federal de Educação Tecnológica Celso Suckow da Fonseca",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Ouro Preto",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Fluminense",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal da Bahia",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Mato Grosso",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Santa Catarina",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Goiano",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Pará",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Sul-rio-grandense",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal Rural da Amazônia",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Rio Grande do Norte",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Centro Federal de Educação Tecnológica de Minas Gerais",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Acre",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Amazonas",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Roraima",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Pará",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Cariri",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal da Grande Dourados",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Santa Catarina",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Pernambuco",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Farroupilha",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Recôncavo da Bahia",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Pernambuco",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Goiás",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal da Fronteira Sul",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundação Universidade do Maranhão",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Baiano",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Goiás",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal de São Paulo",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Juiz de Fora",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal da Bahia",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Pelotas",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia da Paraíba",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Catalão",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal Rural de Pernambuco",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Triângulo Mineiro",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade da Integração Internacional da Lusofonia Afro-Brasileira",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundação Universidade de Brasília",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Ouro Preto",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Rondônia",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Mato Grosso",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Pará",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Sul-rio-grandense",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Rio Grande do Norte",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Brasília",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Pampa",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Centro Federal de Educação Tecnológica de Minas Gerais",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Ciências da Saúde de Porto Alegre",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Maranhão",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundação Universidade do Amazonas",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Acre",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Santa Maria",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Roraima",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Lavras",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Colégio Pedro II",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal Fluminense",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal Rural do Rio de Janeiro",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Rio Grande do Sul",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundação Universidade do Amazonas",
                "ESPECIE_RECEITA": "Transferências dos Estados e do Distrito Fed"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Goiás",
                "ESPECIE_RECEITA": "Transferências dos Estados e do Distrito Fed"
            },
            {
                "NOME_ORGAO": "Universidade Federal da Fronteira Sul",
                "ESPECIE_RECEITA": "Transferências dos Estados e do Distrito Fed"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Sergipe",
                "ESPECIE_RECEITA": "Transferências dos Estados e do Distrito Fed"
            },
            {
                "NOME_ORGAO": "Fundação Universidade do Maranhão",
                "ESPECIE_RECEITA": "Transferências dos Estados e do Distrito Fed"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Juiz de Fora",
                "ESPECIE_RECEITA": "Transferências dos Estados e do Distrito Fed"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Desenvolvimento da Educação",
                "ESPECIE_RECEITA": "Operações de crédito - mercado interno"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Goiano",
                "ESPECIE_RECEITA": "Transferências dos Estados e do Distrito Fed"
            },
            {
                "NOME_ORGAO": "Universidade Federal da Integração Latino-Americana",
                "ESPECIE_RECEITA": "Transferências dos Estados e do Distrito Fed"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Pampa",
                "ESPECIE_RECEITA": "Transferências dos Estados e do Distrito Fed"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Santa Maria",
                "ESPECIE_RECEITA": "Transferências dos Estados e do Distrito Fed"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Pernambuco",
                "ESPECIE_RECEITA": "Transferências dos Estados e do Distrito Fed"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Farroupilha",
                "ESPECIE_RECEITA": "Transferências dos Estados e do Distrito Fed"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Pelotas",
                "ESPECIE_RECEITA": "Transferências dos Estados e do Distrito Fed"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais",
                "ESPECIE_RECEITA": "Transferências dos Estados e do Distrito Fed"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Santa Catarina",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Sudeste de Minas Gerais",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Espírito Santo",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Norte de Minas Gerais",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Tocantins",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Ouro Preto",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Fluminense",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Goiano",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Pará",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas Gerais",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Centro Federal de Educação Tecnológica de Minas Gerais",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Lavras",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Ceará",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Universidade Federal Fluminense",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Universidade Federal Rural do Rio de Janeiro",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Rio Grande do Sul",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Pernambuco",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Farroupilha",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Minas Gerais",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Paraná",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Mato Grosso do Sul",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Acre",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Sul da Bahia",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Rondonópolis",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Cariri",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal da Grande Dourados",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Amapá",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Estado do Rio de Janeiro",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Roraima",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Alagoas",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Amazonas",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Mato Grosso do Sul",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Roraima",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Roraima",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Baiano",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Juiz de Fora",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Vale do São Francisco",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal da Grande Dourados",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Acre",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Alagoas",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Universidade Federal Rural do Rio de Janeiro",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Farroupilha",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Uberlândia",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Farroupilha",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Catarinense",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Espírito Santo",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Alagoas",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Ouro Preto",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Rio Grande do Norte",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Ceará",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Hospital de Clínicas de Porto Alegre",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Catarinense",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Rondônia",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Centro Federal de Educação Tecnológica de Minas Gerais",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Maranhão",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Rio Grande",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Piauí",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Tocantins",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade da Integração Internacional da Lusofonia Afro-Brasileira",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundação Universidade de Brasília",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundação Universidade do Amazonas",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Santa Catarina",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Sudeste de Minas Gerais",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Viçosa",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Piauí",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal do Paraná",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia da Bahia",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal da Fronteira Sul",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Rio Grande",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Sul e Sudeste do Pará",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Sergipe",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Sergipe",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Baiano",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Goiás",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Oeste da Bahia",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Sergipe",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Rio de Janeiro",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Tocantins",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Recôncavo da Bahia",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Pernambuco",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Espírito Santo",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Alagoas",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Ouro Preto",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Rondônia",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Fluminense",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Alfenas",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Mato Grosso",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Goiano",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal da Integração Latino-Americana",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal Rural da Amazônia",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Empresa Brasileira de Serviços Hospitalares",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas Gerais",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Brasília",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Amapá",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal do Pampa",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Rondônia",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Centro Federal de Educação Tecnológica de Minas Gerais",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de São Paulo",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundação Universidade Federal de Ciências da Saúde de Porto Alegre",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Maranhão",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Santa Maria",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Roraima",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Lavras",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia de Alagoas",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia Fluminense",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Universidade Federal da Integração Latino-Americana",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia da Paraíba",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Cariri",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Colégio Pedro II",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal de Alagoas",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundação Joaquim Nabuco",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Universidade Federal do Oeste do Pará",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Federal de Educação, Ciência e Tecnologia do Triângulo Mineiro",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Ministério da Educação - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Impostos"
            },
            {
                "NOME_ORGAO": "Receita Federal do Brasil",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Receita Federal do Brasil",
                "ESPECIE_RECEITA": "Impostos"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Contribuições econômicas"
            },
            {
                "NOME_ORGAO": "Receita Federal do Brasil",
                "ESPECIE_RECEITA": "Contribuições econômicas"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "AMORTIZACAO DE EMPRESTIMOS"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Bens, Direitos e Valores Incorporados ao Patr"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Comissão de Valores Mobiliários",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Operações de crédito - mercado interno"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Exploração de recursos naturais"
            },
            {
                "NOME_ORGAO": "Fundo de Garantia à Exportação",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Delegação de Serviços Públicos Mediante C"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Comissão de Valores Mobiliários",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Operações de crédito - mercado externo"
            },
            {
                "NOME_ORGAO": "Fundo Constitucional do Distrito Federal",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Sem informação"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "MULTAS E JUROS DE MORA DAS REC.DE CAPITAL"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Cessão de direitos"
            },
            {
                "NOME_ORGAO": "Receita Federal do Brasil",
                "ESPECIE_RECEITA": "Contribuições para Entidades Privadas de Se"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Receita de concessões e permissões"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Indenizações e restituições"
            },
            {
                "NOME_ORGAO": "Fundo de Garantia à Exportação",
                "ESPECIE_RECEITA": "Serviços e Atividades Financeiras"
            },
            {
                "NOME_ORGAO": "Fundo de Estabilidade do Seguro Rural",
                "ESPECIE_RECEITA": "Serviços e Atividades Financeiras"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Serviços e Atividades Financeiras"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Alienação de bens imóveis"
            },
            {
                "NOME_ORGAO": "Receita Federal do Brasil",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Comissão de Valores Mobiliários",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Superintendência de Seguros Privados",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Superintendência de Seguros Privados",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Receitas de valores mobiliários"
            },
            {
                "NOME_ORGAO": "Fundo de Compensação de Variações Salariais",
                "ESPECIE_RECEITA": "Serviços e Atividades Financeiras"
            },
            {
                "NOME_ORGAO": "Superintendência de Seguros Privados",
                "ESPECIE_RECEITA": "Serviços e Atividades Financeiras"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Transferências de Convênios"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Alienação de bens intangíveis"
            },
            {
                "NOME_ORGAO": "Comissão de Valores Mobiliários",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundo de Estabilidade do Seguro Rural",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Superintendência de Seguros Privados",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundo de Compensação de Variações Salariais",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundo de Apoio ao Desenvolvimento Social",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Ministério da Fazenda - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Exploração do patrimônio intangível"
            },
            {
                "NOME_ORGAO": "Receita Federal do Brasil",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Ministério da Gestão e da Inovação em Serviços Públicos - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Ministério da Gestão e da Inovação em Serviços Públicos - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Desenvolvimento",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundação Escola Nacional de Administração Pública",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Ministério da Gestão e da Inovação em Serviços Públicos - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Ministério da Gestão e da Inovação em Serviços Públicos - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Ministério da Gestão e da Inovação em Serviços Públicos - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Nacional de Tecnologia da Informação",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Ministério da Gestão e da Inovação em Serviços Públicos - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Fundação Escola Nacional de Administração Pública",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Departamento Nacional de Obras Contra as Secas",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Superintendência do Desenvolvimento do Nordeste",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Companhia de Desenvolvimento dos Vales do São Francisco e do Parnaíba",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Superintendência do Desenvolvimento do Nordeste",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Companhia de Desenvolvimento dos Vales do São Francisco e do Parnaíba",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Águas e Saneamento Básico",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundo de Desenvolvimento do Nordeste",
                "ESPECIE_RECEITA": "Receita de Serviços"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Águas e Saneamento Básico",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Companhia de Desenvolvimento dos Vales do São Francisco e do Parnaíba",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Departamento Nacional de Obras Contra as Secas",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Departamento Nacional de Obras Contra as Secas",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundo de Desenvolvimento do Centro-Oeste",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Fundo Constitucional de Financiamento do Norte",
                "ESPECIE_RECEITA": "Impostos"
            },
            {
                "NOME_ORGAO": "Departamento Nacional de Obras Contra as Secas",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundo Constitucional de Financiamento do Centro-Oeste",
                "ESPECIE_RECEITA": "Impostos"
            },
            {
                "NOME_ORGAO": "Fundo Constitucional de Financiamento do Nordeste",
                "ESPECIE_RECEITA": "Impostos"
            },
            {
                "NOME_ORGAO": "Ministério da Integração e do Desenvolvimento Regional - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Bens, Direitos e Valores Incorporados ao Patr"
            },
            {
                "NOME_ORGAO": "Superintendência do Desenvolvimento da Amazônia",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Águas e Saneamento Básico",
                "ESPECIE_RECEITA": "Exploração de recursos naturais"
            },
            {
                "NOME_ORGAO": "Companhia de Desenvolvimento dos Vales do São Francisco e do Parnaíba",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundo de Desenvolvimento da Amazônia",
                "ESPECIE_RECEITA": "MULTAS E JUROS DE MORA DAS REC.DE CAPITAL"
            },
            {
                "NOME_ORGAO": "Ministério da Integração e do Desenvolvimento Regional - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Ministério da Integração e do Desenvolvimento Regional - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Exploração de recursos naturais"
            },
            {
                "NOME_ORGAO": "Companhia de Desenvolvimento dos Vales do São Francisco e do Parnaíba",
                "ESPECIE_RECEITA": "Alienação de bens imóveis"
            },
            {
                "NOME_ORGAO": "Departamento Nacional de Obras Contra as Secas",
                "ESPECIE_RECEITA": "Alienação de bens imóveis"
            },
            {
                "NOME_ORGAO": "Fundo de Desenvolvimento da Amazônia",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Companhia de Desenvolvimento dos Vales do São Francisco e do Parnaíba",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundo de Desenvolvimento da Amazônia",
                "ESPECIE_RECEITA": "AMORTIZACAO DE EMPRESTIMOS"
            },
            {
                "NOME_ORGAO": "Fundo de Desenvolvimento do Nordeste",
                "ESPECIE_RECEITA": "AMORTIZACAO DE EMPRESTIMOS"
            },
            {
                "NOME_ORGAO": "Fundo de Desenvolvimento do Centro-Oeste",
                "ESPECIE_RECEITA": "AMORTIZACAO DE EMPRESTIMOS"
            },
            {
                "NOME_ORGAO": "Fundo de Desenvolvimento do Nordeste",
                "ESPECIE_RECEITA": "Operações de crédito - mercado externo"
            },
            {
                "NOME_ORGAO": "Ministério da Integração e do Desenvolvimento Regional - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Superintendência do Desenvolvimento da Amazônia",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Superintendência do Desenvolvimento do Nordeste",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Superintendência de Desenvolvimento do Centro-Oeste",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Departamento Nacional de Obras Contra as Secas",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Departamento Nacional de Obras Contra as Secas",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Ministério da Integração e do Desenvolvimento Regional - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundo de Desenvolvimento do Nordeste",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundo de Desenvolvimento da Amazônia",
                "ESPECIE_RECEITA": "Transferências de Instituições Privadas"
            },
            {
                "NOME_ORGAO": "Fundo de Desenvolvimento do Nordeste",
                "ESPECIE_RECEITA": "Transferências de Instituições Privadas"
            },
            {
                "NOME_ORGAO": "Superintendência do Desenvolvimento da Amazônia",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundo de Desenvolvimento do Centro-Oeste",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Superintendência de Desenvolvimento do Centro-Oeste",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Superintendência do Desenvolvimento do Nordeste",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Águas e Saneamento Básico",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Polícia Rodoviária Federal",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Fundo Penitenciário Nacional",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Segurança Pública",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Conselho Administrativo de Defesa Econômica",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Polícia Rodoviária Federal",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundo Nacional Antidrogas",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundo Penitenciário Nacional",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Polícia Rodoviária Federal",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Polícia Federal",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundo de Defesa de Direitos Difusos",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundo Penitenciário Nacional",
                "ESPECIE_RECEITA": "Bens, Direitos e Valores Incorporados ao Patr"
            },
            {
                "NOME_ORGAO": "Fundo Nacional Antidrogas",
                "ESPECIE_RECEITA": "Bens, Direitos e Valores Incorporados ao Patr"
            },
            {
                "NOME_ORGAO": "Polícia Federal",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Polícia Federal",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Segurança Pública",
                "ESPECIE_RECEITA": "Transferências de Instituições Privadas"
            },
            {
                "NOME_ORGAO": "Fundo Penitenciário Nacional",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Polícia Rodoviária Federal",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Polícia Rodoviária Federal",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Polícia Federal",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Polícia Federal",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Fundo Penitenciário Nacional",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Fundo de Defesa de Direitos Difusos",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Polícia Rodoviária Federal",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Polícia Federal",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Fundo de Defesa de Direitos Difusos",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Fundo de Defesa de Direitos Difusos",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Polícia Rodoviária Federal",
                "ESPECIE_RECEITA": "Bens, Direitos e Valores Incorporados ao Patr"
            },
            {
                "NOME_ORGAO": "Polícia Federal",
                "ESPECIE_RECEITA": "Bens, Direitos e Valores Incorporados ao Patr"
            },
            {
                "NOME_ORGAO": "Fundo Nacional Antidrogas",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Segurança Pública",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOME_ORGAO": "Fundo Nacional Antidrogas",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Conselho Administrativo de Defesa Econômica",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundo de Defesa de Direitos Difusos",
                "ESPECIE_RECEITA": "Bens, Direitos e Valores Incorporados ao Patr"
            },
            {
                "NOME_ORGAO": "Fundo Penitenciário Nacional",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOME_ORGAO": "Polícia Federal",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOME_ORGAO": "Polícia Rodoviária Federal",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Segurança Pública",
                "ESPECIE_RECEITA": "Transferências da União e de suas Entidades"
            },
            {
                "NOME_ORGAO": "Fundo Nacional Antidrogas",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Fundo de Defesa de Direitos Difusos",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOME_ORGAO": "Fundo Penitenciário Nacional",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Ministério da Justiça e Segurança Pública - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Polícia Rodoviária Federal",
                "ESPECIE_RECEITA": "Transferências dos Municípios e de suas Ent"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Segurança Pública",
                "ESPECIE_RECEITA": "Transferências dos Municípios e de suas Ent"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Segurança Pública",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Ministério da Pesca e Aquicultura - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Ministério da Pesca e Aquicultura - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Fundo do Regime Geral da Previdência Social",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOME_ORGAO": "Fundo do Regime Geral da Previdência Social",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Nacional do Seguro Social",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundo do Regime Geral da Previdência Social",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Instituto Nacional do Seguro Social",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Instituto Nacional do Seguro Social",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundo do Regime Geral da Previdência Social",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Fundo do Regime Geral da Previdência Social",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundo do Regime Geral da Previdência Social",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Instituto Nacional do Seguro Social",
                "ESPECIE_RECEITA": "Cessão de direitos"
            },
            {
                "NOME_ORGAO": "Fundo do Regime Geral da Previdência Social",
                "ESPECIE_RECEITA": "MULTAS E JUROS DE MORA DAS REC.DE CAPITAL"
            },
            {
                "NOME_ORGAO": "Superintendência Nacional de Previdência Complementar",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Instituto Nacional do Seguro Social",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Instituto Nacional do Seguro Social",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Nacional do Seguro Social",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOME_ORGAO": "Superintendência Nacional de Previdência Complementar",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Fundo do Regime Geral da Previdência Social",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Ministério da Saúde - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundação Oswaldo Cruz",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundação Oswaldo Cruz",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Fundação Oswaldo Cruz",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundação Oswaldo Cruz",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Hospital Nossa Senhora da Conceição S.A.",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Ministério da Saúde - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Saúde Suplementar",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Vigilância Sanitária",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Hospital Nossa Senhora da Conceição S.A.",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundação Oswaldo Cruz",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Ministério da Saúde - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOME_ORGAO": "Hospital Nossa Senhora da Conceição S.A.",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Fundação Nacional de Saúde",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Fundação Oswaldo Cruz",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Ministério da Saúde - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Exploração de recursos naturais"
            },
            {
                "NOME_ORGAO": "Ministério da Saúde - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundação Nacional de Saúde",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Ministério da Saúde - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Bens, Direitos e Valores Incorporados ao Patr"
            },
            {
                "NOME_ORGAO": "Ministério da Saúde - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Indenizações e restituições"
            },
            {
                "NOME_ORGAO": "Ministério da Saúde - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundação Nacional de Saúde",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Vigilância Sanitária",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Saúde Suplementar",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundação Oswaldo Cruz",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Hospital Nossa Senhora da Conceição S.A.",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Saúde Suplementar",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Vigilância Sanitária",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Fundação Nacional de Saúde",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Saúde Suplementar",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Ministério da Saúde - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Vigilância Sanitária",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Empresa de Trens Urbanos de Porto Alegre",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Empresa de Trens Urbanos de Porto Alegre",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Companhia Brasileira de Trens Urbanos",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Companhia Brasileira de Trens Urbanos",
                "ESPECIE_RECEITA": "Transferências de Instituições Privadas"
            },
            {
                "NOME_ORGAO": "Empresa de Trens Urbanos de Porto Alegre",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Companhia Brasileira de Trens Urbanos",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Companhia Brasileira de Trens Urbanos",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Companhia Brasileira de Trens Urbanos",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Empresa de Trens Urbanos de Porto Alegre",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Companhia Brasileira de Trens Urbanos",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Companhia Brasileira de Trens Urbanos",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Companhia Brasileira de Trens Urbanos",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Empresa de Trens Urbanos de Porto Alegre",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Habitação de Interesse Social",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Empresa de Trens Urbanos de Porto Alegre",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundo para o Desenvolvimento Tecnológico das Telecomunicações",
                "ESPECIE_RECEITA": "Contribuições econômicas"
            },
            {
                "NOME_ORGAO": "Agêncial Nacional de Telecomunicações",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Telecomunicações Brasileiras S.A.",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Agêncial Nacional de Telecomunicações",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Agêncial Nacional de Telecomunicações",
                "ESPECIE_RECEITA": "Delegação de Serviços Públicos Mediante C"
            },
            {
                "NOME_ORGAO": "Fundo de Universalização dos Serviços de Telecomunicações",
                "ESPECIE_RECEITA": "Delegação de Serviços Públicos Mediante C"
            },
            {
                "NOME_ORGAO": "Telecomunicações Brasileiras S.A.",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Agêncial Nacional de Telecomunicações",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Agêncial Nacional de Telecomunicações",
                "ESPECIE_RECEITA": "Contribuições econômicas"
            },
            {
                "NOME_ORGAO": "Fundo de Universalização dos Serviços de Telecomunicações",
                "ESPECIE_RECEITA": "Contribuições econômicas"
            },
            {
                "NOME_ORGAO": "Agêncial Nacional de Telecomunicações",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundo de Universalização dos Serviços de Telecomunicações",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundo de Universalização dos Serviços de Telecomunicações",
                "ESPECIE_RECEITA": "Operações de crédito - mercado externo"
            },
            {
                "NOME_ORGAO": "Agêncial Nacional de Telecomunicações",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Telecomunicações Brasileiras S.A.",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Fundo de Universalização dos Serviços de Telecomunicações",
                "ESPECIE_RECEITA": "Receita de concessões e permissões"
            },
            {
                "NOME_ORGAO": "Fundo de Universalização dos Serviços de Telecomunicações",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Fundo Nacional para a Criança e o Adolescente",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOME_ORGAO": "Ministério das Relações Exteriores - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundação Alexandre de Gusmão",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Ministério das Relações Exteriores - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Ministério das Relações Exteriores - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Agência Nacional do Petróleo, Gás Natural e Biocombustíveis",
                "ESPECIE_RECEITA": "Exploração de recursos naturais"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Mineração",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Ministério de Minas e Energia - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Exploração de recursos naturais"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Mineração",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Companhia de Pesquisa de Recursos Minerais",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Companhia de Pesquisa de Recursos Minerais",
                "ESPECIE_RECEITA": "Exploração de recursos naturais"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Energia Elétrica",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Energia Elétrica",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Energia Elétrica",
                "ESPECIE_RECEITA": "Exploração de recursos naturais"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Mineração",
                "ESPECIE_RECEITA": "Exploração de recursos naturais"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Energia Elétrica",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Companhia de Pesquisa de Recursos Minerais",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Nuclebrás Equipamentos Pesados S.A.",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Companhia de Pesquisa de Recursos Minerais",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Agência Nacional do Petróleo, Gás Natural e Biocombustíveis",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Ministério de Minas e Energia - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Energia Elétrica",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Agência Nacional do Petróleo, Gás Natural e Biocombustíveis",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Mineração",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Mineração",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Empresa de Pesquisa Energética",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Nuclebrás Equipamentos Pesados S.A.",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Agência Nacional do Petróleo, Gás Natural e Biocombustíveis",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Ministério de Minas e Energia - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Contribuições econômicas"
            },
            {
                "NOME_ORGAO": "Companhia de Pesquisa de Recursos Minerais",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Transportes Aquaviários",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Aviação Civil",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Aviação Civil",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Transportes Aquaviários",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Aviação Civil",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Aviação Civil",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Aviação Civil",
                "ESPECIE_RECEITA": "Delegação de Serviços Públicos Mediante C"
            },
            {
                "NOME_ORGAO": "Fundo da Marinha Mercante",
                "ESPECIE_RECEITA": "Serviços e Atividades Financeiras"
            },
            {
                "NOME_ORGAO": "Instituto Nacional de Colonização e Reforma Agrária",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Companhia Nacional de Abastecimento",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Nacional de Colonização e Reforma Agrária",
                "ESPECIE_RECEITA": "Contribuições econômicas"
            },
            {
                "NOME_ORGAO": "Instituto Nacional de Colonização e Reforma Agrária",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Companhia Nacional de Abastecimento",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Companhia Nacional de Abastecimento",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Companhia Nacional de Abastecimento",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Nacional de Colonização e Reforma Agrária",
                "ESPECIE_RECEITA": "Operações de crédito - mercado interno"
            },
            {
                "NOME_ORGAO": "Companhia Nacional de Abastecimento",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Companhia Nacional de Abastecimento",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Companhia Nacional de Abastecimento",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Companhia Nacional de Abastecimento",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Instituto Nacional de Colonização e Reforma Agrária",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Fundo de Terras",
                "ESPECIE_RECEITA": "AMORTIZACAO DE EMPRESTIMOS"
            },
            {
                "NOME_ORGAO": "Companhia Nacional de Abastecimento",
                "ESPECIE_RECEITA": "MULTAS E JUROS DE MORA DAS REC.DE CAPITAL"
            },
            {
                "NOME_ORGAO": "Fundo de Terras",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Ministério do Desenvolvimento Agrário e Agricultura Familiar - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Instituto Nacional de Colonização e Reforma Agrária",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Fundo de Terras",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Companhia Nacional de Abastecimento",
                "ESPECIE_RECEITA": "Alienação de bens imóveis"
            },
            {
                "NOME_ORGAO": "Fundo de Terras",
                "ESPECIE_RECEITA": "Serviços e Atividades Financeiras"
            },
            {
                "NOME_ORGAO": "Instituto Nacional de Colonização e Reforma Agrária",
                "ESPECIE_RECEITA": "Alienação de bens imóveis"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Assistência Social",
                "ESPECIE_RECEITA": "Operações de crédito - mercado interno"
            },
            {
                "NOME_ORGAO": "Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome - Unidades com vín",
                "ESPECIE_RECEITA": "Operações de crédito - mercado interno"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Assistência Social",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome - Unidades com vín",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Assistência Social",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome - Unidades com vín",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome - Unidades com vín",
                "ESPECIE_RECEITA": "DEMAIS TRANSFERENCIAS CORRENTES"
            },
            {
                "NOME_ORGAO": "Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome - Unidades com vín",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Instituto Nacional de Metrologia, Qualidade e Tecnologia",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Instituto Nacional de Metrologia, Qualidade e Tecnologia",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Instituto Nacional da Propriedade Industrial",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Instituto Nacional de Metrologia, Qualidade e Tecnologia",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Nacional da Propriedade Industrial",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Superintendência da Zona Franca de Manaus",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Superintendência da Zona Franca de Manaus",
                "ESPECIE_RECEITA": "Alienação de bens imóveis"
            },
            {
                "NOME_ORGAO": "Instituto Nacional de Metrologia, Qualidade e Tecnologia",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Ministério do Desenvolvimento, Indústria, Comércio e Serviços - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Instituto Nacional da Propriedade Industrial",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Ministério do Desenvolvimento, Indústria, Comércio e Serviços - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "AMORTIZACAO DE EMPRESTIMOS"
            },
            {
                "NOME_ORGAO": "Instituto Nacional da Propriedade Industrial",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Nacional de Metrologia, Qualidade e Tecnologia",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Nacional da Propriedade Industrial",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Ministério do Desenvolvimento, Indústria, Comércio e Serviços - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Instituto Nacional da Propriedade Industrial",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundo de Garantia para a Promoção da Competitividade",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Superintendência da Zona Franca de Manaus",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Instituto Nacional de Metrologia, Qualidade e Tecnologia",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundo de Garantia para a Promoção da Competitividade",
                "ESPECIE_RECEITA": "Serviços e Atividades Financeiras"
            },
            {
                "NOME_ORGAO": "Instituto Nacional da Propriedade Industrial",
                "ESPECIE_RECEITA": "AMORTIZACAO DE EMPRESTIMOS"
            },
            {
                "NOME_ORGAO": "Superintendência da Zona Franca de Manaus",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Ministério do Empreendedorismo, da Microempresa e da Empresa de Pequeno Porte - Unidades com víncu",
                "ESPECIE_RECEITA": "MULTAS E JUROS DE MORA DAS REC.DE CAPITAL"
            },
            {
                "NOME_ORGAO": "Ministério do Esporte - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOME_ORGAO": "Ministério do Esporte - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOME_ORGAO": "Ministério do Esporte - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Ministério do Esporte - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis",
                "ESPECIE_RECEITA": "Bens, Direitos e Valores Incorporados ao Patr"
            },
            {
                "NOME_ORGAO": "Instituto Chico Mendes de Conservação da Biodiversidade",
                "ESPECIE_RECEITA": "Bens, Direitos e Valores Incorporados ao Patr"
            },
            {
                "NOME_ORGAO": "Fundo Nacional do Meio Ambiente",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Serviço Florestal Brasileiro",
                "ESPECIE_RECEITA": "Exploração de recursos naturais"
            },
            {
                "NOME_ORGAO": "Instituto de Pesquisas Jardim Botânico do Rio de Janeiro",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto Chico Mendes de Conservação da Biodiversidade",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Serviço Florestal Brasileiro",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Instituto Chico Mendes de Conservação da Biodiversidade",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundo Nacional sobre Mudança no Clima",
                "ESPECIE_RECEITA": "Serviços e Atividades Financeiras"
            },
            {
                "NOME_ORGAO": "Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis",
                "ESPECIE_RECEITA": "Exploração de recursos naturais"
            },
            {
                "NOME_ORGAO": "Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Chico Mendes de Conservação da Biodiversidade",
                "ESPECIE_RECEITA": "Exploração de recursos naturais"
            },
            {
                "NOME_ORGAO": "Serviço Florestal Brasileiro",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Instituto Chico Mendes de Conservação da Biodiversidade",
                "ESPECIE_RECEITA": "Transferências de Convênios"
            },
            {
                "NOME_ORGAO": "Serviço Florestal Brasileiro",
                "ESPECIE_RECEITA": "Transferências de Convênios"
            },
            {
                "NOME_ORGAO": "Instituto Chico Mendes de Conservação da Biodiversidade",
                "ESPECIE_RECEITA": "Transferências do Exterior"
            },
            {
                "NOME_ORGAO": "Fundo Nacional sobre Mudança no Clima",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Instituto Chico Mendes de Conservação da Biodiversidade",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto de Pesquisas Jardim Botânico do Rio de Janeiro",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto Chico Mendes de Conservação da Biodiversidade",
                "ESPECIE_RECEITA": "Receita da produção vegetal"
            },
            {
                "NOME_ORGAO": "Fundação Instituto Brasileiro de Geografia e Estatística",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Fundação Instituto Brasileiro de Geografia e Estatística",
                "ESPECIE_RECEITA": "Alienação de bens móveis"
            },
            {
                "NOME_ORGAO": "Fundação Instituto Brasileiro de Geografia e Estatística",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundação Instituto Brasileiro de Geografia e Estatística",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundação Instituto Brasileiro de Geografia e Estatística",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundação Instituto Brasileiro de Geografia e Estatística",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Instituto de Pesquisa Econômica Aplicada",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Instituto de Pesquisa Econômica Aplicada",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Instituto de Pesquisa Econômica Aplicada",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundação Instituto Brasileiro de Geografia e Estatística",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Fundo de Amparo ao Trabalhador",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Ministério do Trabalho e Emprego - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Fundação Jorge Duprat Figueiredo, de Segurança e Medicina do Trabalho",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Fundo de Amparo ao Trabalhador",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Fundação Jorge Duprat Figueiredo, de Segurança e Medicina do Trabalho",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundo de Amparo ao Trabalhador",
                "ESPECIE_RECEITA": "Contribuições sociais"
            },
            {
                "NOME_ORGAO": "Fundo de Amparo ao Trabalhador",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Ministério do Trabalho e Emprego - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundação Jorge Duprat Figueiredo, de Segurança e Medicina do Trabalho",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Ministério do Trabalho e Emprego - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Fundo de Amparo ao Trabalhador",
                "ESPECIE_RECEITA": "Serviços e Atividades Financeiras"
            },
            {
                "NOME_ORGAO": "Fundo Geral de Turismo",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Ministério do Turismo - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Fundo Geral de Turismo",
                "ESPECIE_RECEITA": "Serviços e Atividades Financeiras"
            },
            {
                "NOME_ORGAO": "Fundo Geral de Turismo",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Ministério do Turismo - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Delegação de Serviços Públicos Mediante C"
            },
            {
                "NOME_ORGAO": "Ministério do Turismo - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOME_ORGAO": "Fundo Geral de Turismo",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Fundo Geral de Turismo",
                "ESPECIE_RECEITA": "MULTAS E JUROS DE MORA DAS REC.DE CAPITAL"
            },
            {
                "NOME_ORGAO": "Ministério do Turismo - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Instituto Brasileiro de Turismo",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundo Geral de Turismo",
                "ESPECIE_RECEITA": "AMORTIZACAO DE EMPRESTIMOS"
            },
            {
                "NOME_ORGAO": "Fundo Nacional para a Criança e o Adolescente",
                "ESPECIE_RECEITA": "DEMAIS TRANSFERENCIAS CORRENTES"
            },
            {
                "NOME_ORGAO": "Fundo Nacional para a Criança e o Adolescente",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundo Nacional do Idoso",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundo Nacional do Idoso",
                "ESPECIE_RECEITA": "DEMAIS TRANSFERENCIAS CORRENTES"
            },
            {
                "NOME_ORGAO": "Fundação Nacional dos Povos Indígenas",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Fundação Nacional do Índio - Patrimônio Indígena",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Fundação Nacional do Índio - Patrimônio Indígena",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundação Nacional dos Povos Indígenas",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Departamento Nacional de Infraestrutura de Transportes",
                "ESPECIE_RECEITA": "Indenizações, restituições e ressarciment"
            },
            {
                "NOME_ORGAO": "Departamento Nacional de Infraestrutura de Transportes",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "VALEC Engenharia, Construções e Ferrovias S.A.",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Transportes Terrestres",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "Departamento Nacional de Infraestrutura de Transportes",
                "ESPECIE_RECEITA": "Demais receitas patrimoniais"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Segurança e Educação de Trânsito",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Ministério dos Transportes - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Transportes Terrestres",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Segurança e Educação de Trânsito",
                "ESPECIE_RECEITA": "Multas administrativas, contratuais e judicia"
            },
            {
                "NOME_ORGAO": "VALEC Engenharia, Construções e Ferrovias S.A.",
                "ESPECIE_RECEITA": "Outros serviços"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Transportes Terrestres",
                "ESPECIE_RECEITA": "Taxas"
            },
            {
                "NOME_ORGAO": "Agência Nacional de Transportes Terrestres",
                "ESPECIE_RECEITA": "Delegação de Serviços Públicos Mediante C"
            },
            {
                "NOME_ORGAO": "Ministério dos Transportes - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Departamento Nacional de Infraestrutura de Transportes",
                "ESPECIE_RECEITA": "Receitas Correntes - a classificar"
            },
            {
                "NOME_ORGAO": "Ministério dos Transportes - Unidades com vínculo direto",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Segurança e Educação de Trânsito",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "VALEC Engenharia, Construções e Ferrovias S.A.",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Departamento Nacional de Infraestrutura de Transportes",
                "ESPECIE_RECEITA": "Exploração do patrimônio imobiliário do E"
            },
            {
                "NOME_ORGAO": "Fundo Nacional de Segurança e Educação de Trânsito",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Presidência da República",
                "ESPECIE_RECEITA": "AMORTIZACAO DE EMPRESTIMOS"
            },
            {
                "NOME_ORGAO": "Empresa Brasil de Comunicação",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Empresa Brasil de Comunicação",
                "ESPECIE_RECEITA": "Contribuições econômicas"
            },
            {
                "NOME_ORGAO": "Presidência da República",
                "ESPECIE_RECEITA": "Exploração de recursos naturais"
            },
            {
                "NOME_ORGAO": "Presidência da República",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Empresa Brasil de Comunicação",
                "ESPECIE_RECEITA": "Valores Mobiliários"
            },
            {
                "NOME_ORGAO": "Presidência da República",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Empresa Brasil de Comunicação",
                "ESPECIE_RECEITA": "Serviços Administrativos e Comerciais Gerais"
            },
            {
                "NOME_ORGAO": "Fundo de Imprensa Nacional",
                "ESPECIE_RECEITA": "Demais receitas correntes"
            },
            {
                "NOME_ORGAO": "Fundo de Imprensa Nacional",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Presidência da República",
                "ESPECIE_RECEITA": "Receita da indústria extrativa mineral"
            },
            {
                "NOME_ORGAO": "Fundo de Imprensa Nacional",
                "ESPECIE_RECEITA": "RECEITA INDUSTRIAL-INTRA"
            },
            {
                "NOME_ORGAO": "Presidência da República",
                "ESPECIE_RECEITA": "MULTAS E JUROS DE MORA DAS REC.DE CAPITAL"
            }
        ],
        "affected_rows": 1163,
        "last_id": null
    }
}

//? Total de 18 itens
//! Dados mais importantes (5)
//! => Média no e nos, porcentagem no e nos, soma valores no e nos

let media_no = dados.media_no.results;
let media_no_labels = media_no.map(item => item.NO);
let media_no_dados = media_no.map(item => item.MEDIA);

let media_nos = dados.media_nos.results;
let media_nos_labels = media_nos.map(item => item.NOS); //! JÁ FEITO
let media_nos_dados = media_nos.map(item => item.MEDIA);

let mediana_nos = dados.mediana_nos.results;
let mediana_nos_labels = mediana_nos.map(item => item.NOS); //? Fazer como métrica
let mediana_nos_dados = mediana_nos.map(item => item.MEDIANA);

let mediana_no = dados.mediana_orgao.results; //& Não fazer agora
let mediana_no_labels = mediana_no.map(item => item.NO); //! não conta como gráfico
let mediana_no_dados = mediana_no.map(item => item.MEDIANA); //? Fazer como métrica

let no_mais_receitas = dados.no_mais_receitas.results;
let no_mais_receitas_labels = no_mais_receitas.map(item => item.NO);
let no_mais_receitas_dados = no_mais_receitas.map(item => item.QUANTIDADE);

let nos_mais_receitas = dados.nos_mais_receitas.results;
let nos_mais_receitas_labels = nos_mais_receitas.map(item => item.NOS); //? Fazer como métrica
let nos_mais_receitas_dados = nos_mais_receitas.map(item => item.QUANTIDADE);

let porcentagem_no = dados.porcentagem_no.results;
let porcentagem_no_labels = porcentagem_no.map(item => item.NO);
let porcentagem_no_dados = porcentagem_no.map(item => item.PORCENTAGEM);

let porcentagem_nos = dados.porcentagem_nos.results;
let porcentagem_nos_labels = porcentagem_nos.map(item => item.NOS); //! JÁ FEITO
let porcentagem_nos_dados = porcentagem_nos.map(item => item.PORCENTAGEM);

let soma_tipo_receita = dados.soma_tipo_receita.results;
let soma_tipo_receita_labels = soma_tipo_receita.map(item => item.OR);
let soma_tipo_receita_dados = soma_tipo_receita.map(item => item.TOTAL);

let soma_valores_no = dados.soma_valores_no.results;
let soma_valores_no_labels = soma_valores_no.map(item => item.NO);
let soma_valores_no_dados = soma_valores_no.map(item => item.TOTAL);

let soma_valores_nos = dados.soma_valores_nos.results;
let soma_valores_nos_labels = soma_valores_nos.map(item => item.NOS); //? Fazer agora COMO LISTA
let soma_valores_nos_dados = soma_valores_nos.map(item => item.TOTAL);

let tipos_receita_nos = dados.tipos_receita_nos.results;
let tipos_receita_nos_labels = tipos_receita_nos.map(item => item.NOME_ORGAO_SUPERIOR); //* tabela separada
let tipos_receita_nos_dados = tipos_receita_nos.map(item => item.ESPECIE_RECEITA);

let tipos_receitas_no = dados.tipos_receitas_no.results;
let tipos_receitas_no_labels = tipos_receitas_no.map(item => item.NOME_ORGAO); //* tabela separada
let tipos_receitas_no_dados = tipos_receitas_no.map(item => item.ESPECIE_RECEITA);

// new Chart(grafico_media_no, {
//     type: "pie",
//     data: {
//         labels: media_no_labels,
//         datasets: [{
//             data: media_no_dados,
//             backgroundColor: [
//                 '#8E3517', '#CF4000', '#F84C02', '#F8C41B', '#82AB2B'
//             ]
//         }]
//     },
//     options: {
//         responsive: true,
//         plugins: {
//             legend: {position: 'right'},
//             title: {display: true, text: 'Top 5 orgãos por valor total'},
//             tooltip: {
//                 callbacks: {
//                     label: function(context) {
//                         let label = context.label || '';
//                         let value = context.parsed;
//                         let total = context.dataset.data.reduce((a, b) => a + b, 0);
//                         let percentage = ((value / total) * 100).toFixed(2);
//                         return label + ': R$ ' + value.toLocaleString('pt-BR') +
//                                ' (' + percentage + '%)';
//                     }
//                 }
//             }
//         }
//     }
// })

console.log(nos_mais_receitas);

let nos_mais_receitas_nome = nos_mais_receitas[0]['NOS'];
let nos_mais_receitas_total = nos_mais_receitas[0]['QUANTIDADE'];

let mediana_nos_dados_string = mediana_nos_dados[0].toString();
window.onload = function () {
    this.document.getElementById('mediana_nos_paragrafo').innerHTML = 'R$ ' + mediana_nos_dados_string.replaceAll(".", ",");
    this.document.getElementById('nos_mais_receitas_nome').innerHTML = nos_mais_receitas_nome;
    this.document.getElementById('nos_mais_receitas_valor').innerHTML = nos_mais_receitas_total;
}


new Chart('grafico_porcentagem_nos', {
    type: "treemap",
    data: {
        datasets: [{
            tree: porcentagem_nos,
            key: 'PORCENTAGEM',
            groups: ['NOS'],
            spacing: 0,
            borderWidth: 1,
            borderColor: 'black',
            backgroundColor: (ctx) => {
                const cores = [
                    '#8E3517', '#cf4200', '#F84C02', '#F8C41B', '#82AB2B'
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
                        return [porcentagem + '%', nome];
                    }
                    return porcentagem + '%';
                },
                color: 'white',
                font: {
                    family: 'serif',
                    size: 72,
                    weight: 'bold'
                },
                overflow: 'fit'  // Adapta o tamanho
            }
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Porcentagem de participação de cada orgão superior',
                font: {
                    size: 35
                }
            },
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    title: (items) => {
                        return items[0].raw._data.NOS;
                    },
                    label: (item) => {
                        const valor = item.raw.v;
                        const porcentagem = (valor*100).toFixed(2);
                        return 'Participação: ' + porcentagem + '%';
                    }
                }
            }
        }
    }
});

new Chart('grafico_media_nos', {
    type: "bar",
    data: {
        labels: media_nos_labels,
        datasets: [{
            label: 'Média (R$)',
            data: media_nos_dados,
            backgroundColor: [
            'rgba(80, 173, 159, 0.5)',
            'rgba(233, 199, 22, 0.5)',
            'rgba(188, 39, 45, 0.5)',
            'rgba(0, 0, 162, 0.5)',
            'rgba(255, 90, 94, 0.5)'
            ],
            borderColor: [
            'rgba(80, 173, 159, 1)',
            'rgba(233, 199, 22, 1)',
            'rgba(188, 39, 45, 1)',
            'rgba(0, 0, 162, 1)',
            'rgba(255, 90, 94, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Média de valores das receitas nos órgãos superiores (Top 15)',
                font: {
                    size: 18
                }
            },
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        return 'Média: R$ ' + context.parsed.y.toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        });
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return 'R$ ' + value.toLocaleString('pt-BR');
                    }
                }
            },
            x: {
                display: false  // Remove o eixo X inteiro
            }
        }
    }
});