//window.addEventListener("dados", (e) => {
    // vai detectar o objeto dados e pegar as propriedades dele como dados
    //let dados = e.detail;
    let dados = {
    "soma_valores_nos": {
        "status": "SUCESS",
        "message": "sucess",
        "query": "SELECT NOME_ORGAO_SUPERIOR NOS, ROUND(SUM(VALOR_REALIZADO), 2) TOTAL FROM dados GROUP BY NOS ORDER BY TOTAL DESC LIMIT 5",
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
            }
        ],
        "affected_rows": 5,
        "last_id": null
    },
    "soma_valores_no": {
        "status": "SUCESS",
        "message": "sucess",
        "query": "SELECT NOME_ORGAO `NO`, ROUND(SUM(VALOR_REALIZADO), 2) TOTAL FROM dados GROUP BY `NO` ORDER BY TOTAL DESC LIMIT 5",
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
            }
        ],
        "affected_rows": 5,
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
        "query": "SELECT NOME_ORGAO_SUPERIOR NOS, ROUND(AVG(VALOR_REALIZADO), 2) MEDIA FROM dados GROUP BY NOS ORDER BY MEDIA DESC LIMIT 5",
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
            }
        ],
        "affected_rows": 5,
        "last_id": null
    },
    "media_no": {
        "status": "SUCESS",
        "message": "sucess",
        "query": "SELECT NOME_ORGAO `NO`, ROUND(AVG(VALOR_REALIZADO), 2) MEDIA FROM dados GROUP BY `NO` ORDER BY MEDIA DESC LIMIT 5",
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
            }
        ],
        "affected_rows": 5,
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
        "query": "WITH org_total AS (SELECT NOME_ORGAO_SUPERIOR NOS, ROUND(SUM(VALOR_REALIZADO), 2) TOTAL FROM dados GROUP BY NOS ORDER BY TOTAL DESC) SELECT NOS, TOTAL/SUM(TOTAL) OVER () AS PORCENTAGEM FROM org_total LIMIT 5;",
        "results": [
            {
                "NOS": "Ministério da Fazenda",
                "PORCENTAGEM": 0.9035500650830313
            },
            {
                "NOS": "Ministério da Previdência Social",
                "PORCENTAGEM": 0.05645321919007985
            },
            {
                "NOS": "Ministério de Minas e Energia",
                "PORCENTAGEM": 0.009926358121280754
            },
            {
                "NOS": "Ministério do Trabalho e Emprego",
                "PORCENTAGEM": 0.009434662491173843
            },
            {
                "NOS": "Ministério da Ciência, Tecnologia e Inovaç",
                "PORCENTAGEM": 0.0044679130901209545
            }
        ],
        "affected_rows": 5,
        "last_id": null
    },
    "porcentagem_no": {
        "status": "SUCESS",
        "message": "sucess",
        "query": "WITH org_total AS (SELECT NOME_ORGAO `NO`, ROUND(SUM(VALOR_REALIZADO), 2) TOTAL FROM dados GROUP BY `NO` ORDER BY TOTAL DESC) SELECT `NO`, TOTAL/SUM(TOTAL) OVER () AS PORCENTAGEM FROM org_total LIMIT 5;",
        "results": [
            {
                "NO": "Ministério da Fazenda - Unidades com vínculo direto",
                "PORCENTAGEM": 0.9029644432928383
            },
            {
                "NO": "Fundo do Regime Geral da Previdência Social",
                "PORCENTAGEM": 0.05513119895282654
            },
            {
                "NO": "Fundo de Amparo ao Trabalhador",
                "PORCENTAGEM": 0.009320950646370564
            },
            {
                "NO": "Agência Nacional do Petróleo, Gás Natural e Biocombustíveis",
                "PORCENTAGEM": 0.00864476680751059
            },
            {
                "NO": "Fundo Nacional de Desenvolvimento Científico e Tecnológico",
                "PORCENTAGEM": 0.004309144548761455
            }
        ],
        "affected_rows": 5,
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
let media_nos_labels = media_nos.map(item => item.NOS);
let media_nos_dados = media_nos.map(item => item.MEDIA);

let mediana_nos = dados.mediana_nos.results;
let mediana_nos_labels = mediana_nos.map(item => item.NOS); // não conta como gráfico
let mediana_nos_dados = mediana_nos.map(item => item.MEDIANA);

let mediana_no = dados.mediana_orgao.results;
let mediana_no_labels = mediana_no.map(item => item.NO); // não conta como gráfico
let mediana_no_dados = mediana_no.map(item => item.MEDIANA);

let no_mais_receitas = dados.no_mais_receitas.results;
let no_mais_receitas_labels = no_mais_receitas.map(item => item.NO);
let no_mais_receitas_dados = no_mais_receitas.map(item => item.QUANTIDADE);

let nos_mais_receitas = dados.nos_mais_receitas.results;
let nos_mais_receitas_labels = nos_mais_receitas.map(item => item.NOS);
let nos_mais_receitas_dados = nos_mais_receitas.map(item => item.QUANTIDADE);

let porcentagem_no = dados.porcentagem_no.results;
let porcentagem_no_labels = porcentagem_no.map(item => item.NO);
let porcentagem_no_dados = porcentagem_no.map(item => item.PORCENTAGEM);

let porcentagem_nos = dados.porcentagem_nos.results;
let porcentagem_nos_labels = porcentagem_nos.map(item => item.NOS);
let porcentagem_nos_dados = porcentagem_nos.map(item => item.PORCENTAGEM);

let soma_tipo_receita = dados.soma_tipo_receita.results;
let soma_tipo_receita_labels = soma_tipo_receita.map(item => item.OR);
let soma_tipo_receita_dados = soma_tipo_receita.map(item => item.TOTAL);

let soma_valores_no = dados.soma_valores_no.results;
let soma_valores_no_labels = soma_valores_no.map(item => item.NO);
let soma_valores_no_dados = soma_valores_no.map(item => item.TOTAL);

let soma_valores_nos = dados.soma_valores_nos.results;
let soma_valores_nos_labels = soma_valores_nos.map(item => item.NOS);
let soma_valores_nos_dados = soma_valores_nos.map(item => item.TOTAL);

let tipos_receita_nos = dados.tipos_receita_nos.results;
let tipos_receita_nos_labels = tipos_receita_nos.map(item => item.NOME_ORGAO_SUPERIOR); // tabela separada
let tipos_receita_nos_dados = tipos_receita_nos.map(item => item.ESPECIE_RECEITA);

let tipos_receitas_no = dados.tipos_receitas_no.results;
let tipos_receitas_no_labels = tipos_receitas_no.map(item => item.NOME_ORGAO); // tabela separada
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


new Chart('grafico_porcentagem_nos', {
    type: "treemap",
    data: {
        datasets: [{
            tree: porcentagem_nos,
            key: 'PORCENTAGEM',
            groups: ['NOS'],
            spacing: 0,
            borderWidth: 2,
            borderColor: 'black',
            backgroundColor: (ctx) => {
                const cores = [
                    '#8E3517', '#CF4000', '#F84C02', '#F8C41B', '#82AB2B'
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
                text: 'Participação dos 5 maiores orgãos superiores',
                font: {
                    size: 40
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