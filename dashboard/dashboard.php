<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="dashboard.css">
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <link rel="stylesheet" href="https://cdn.datatables.net/2.3.7/css/dataTables.dataTables.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://cdn.datatables.net/2.3.7/js/dataTables.js"></script>
    <title>Dashboard</title>
</head>

<body>
    <div class="bg-zinc-100 min-h-screen min-w-screen">
        <div id="links" class="min-w-screen bg-white h-10 border-b-2 border-sky-300"></div>

        <div class="flex gap-3 p-2 h-75">
            <div id="mediana_nos" class="bg-white rounded-md shadow-md flex-1 p-4">
                <p class="justify-self-center text-4xl font-mono text-[#666666] mt-[20px]">Mediana dos Orgãos Superiores</p>
                <p id="mediana_nos_paragrafo" class="justify-self-center text-8xl mt-[30px] text-ellipsis text-nowrap"></p>
            </div>
            <div id="nos_mais_receitas" class="bg-white rounded-md shadow-md flex-1 p-4">
                <p class="justify-self-center text-4xl font-mono text-[#666666] mt-[20px] text-nowrap">Orgão superior com mais receitas</p>
                <p id="nos_mais_receitas_nome" class="justify-self-center text-5xl mt-[45px] text-ellipsis text-nowrap font-bold"></p>
                <p id="nos_mais_receitas_valor" class="justify-self-center text-4xl mt-[10px] text-ellipsis text-nowrap"></p>
            </div>
            <div id="soma_valores_nos" class="bg-white rounded-md shadow-md flex-1 p-4">
                <p class="justify-self-center text-4xl font-mono text-[#666666] mt-[5px] text-nowrap">Receita bruta</p>
                <table id="tabela_soma_valores_nos" class="w-full rounded-xl overflow-hidden">
                <thead id="tabela_soma_valores_nos_head" class="bg-gray-100 sticky top-0 collapse">
                    <tr>
                        <th id="nome_tabela_nos" class="px-4 py-2 text-left border-b-2 border-gray-300">
                            Nome
                        </th>
                        <th id="valor_tabela_nos" class="px-4 py-2 text-left border-b-2 border-gray-300">
                            Valor acumulado
                        </th>
                    </tr>
                </thead>
                <tbody id="tabela_soma_valores_nos_body">
                </tbody>
                </table>
            </div>
        </div>

        <div class="flex gap-3 p-2 h-143">
            <div class="bg-white rounded-md shadow-md flex-1 p-4">
                <canvas id="grafico_porcentagem_nos"></canvas>
            </div>
            <div class="bg-white rounded-md shadow-md flex-1 p-4">
                <canvas id="grafico_media_nos"></canvas>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-chart-treemap@2.3.0/dist/chartjs-chart-treemap.min.js"></script>
    <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.js"></script>
    <script src="https://cdn.datatables.net/2.3.7/js/dataTables.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://cdn.datatables.net/2.3.7/js/dataTables.js"></script>
    <script src="dashboard.js"></script>
</body>

</html>