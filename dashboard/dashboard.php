<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="dashboard.css">
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <title>Dashboard</title>
</head>

<body>
    <div class="bg-zinc-100 min-h-screen min-w-screen">
        <div id="links" class="min-w-screen bg-white h-10 border-b-2 border-sky-300"></div>

        <div class="flex gap-3 p-2 h-75">
            <div id="grafico_media_no" class="bg-white rounded-md shadow-md flex-1 p-4"></div>
            <div id="grafico_mdia_nos" class="bg-white rounded-md shadow-md flex-1 p-4"></div>
            <div id="grafico_ma_outro" class="bg-white rounded-md shadow-md flex-1 p-4"></div>
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
    <script src="dashboard.js"></script>
</body>

</html>