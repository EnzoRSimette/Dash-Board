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
    <div class="bg-zinc-100 min-h-screen min-w-screen"> <!-- dark:bg-slate-800 -->
        <div id="links" class="min-w-screen bg-white h-10 border-b-2 border-sky-300"></div>
        <div class="grid-cols-3 gap-x-3 p-2 grid-flow-col flex h-75 grow">
            <div id="grafico_media_no" class="bg-white rounded-md shadow-md flex-1"></div>
            <div id="grafico_mdia_nos" class="bg-white rounded-md shadow-md flex-1"></div>
            <div id="grafico_ma_outro" class="bg-white rounded-md shadow-md flex-1"></div>
        </div>
        <div class="grid-cols-2 gap-x-3 p-2 grid-flow-col flex h-143 grow">
            <div id="grafico1" class="bg-white rounded-md shadow-md flex-1">
                <!-- <canvas id="grafico_porcentagem_nos"> -->

                </canvas>
            </div>
            <div id="grafico2" class="bg-white rounded-md shadow-md flex-1"></div>
        </div>
    </div>
    <!-- <script src="https://cdn.jsdelivr.net/npm/chart.js"></script> -->
    <script src="C:\laragon\www\node_modules\chart.js\dist\chart.umd.min.js"></script>
    <script src="C:\laragon\www\node_modules\chartjs-chart-treemap\dist\chartjs-chart-treemap.min.js"></script>
    <script src="dashboard.js"></script>
</body>

</html>