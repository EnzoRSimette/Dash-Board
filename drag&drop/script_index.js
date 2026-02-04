// script_index.js - VERSÃO FINAL CORRIGIDA

const espaco = document.querySelector("#espaco");
const espaco_maior = document.querySelector("#espaco_maior");
const imagem = document.querySelector("#imagem");
const input_arquivo = document.querySelector("#input_arquivo");
const arquivo_importado1 = document.querySelector("#arquivo_importado1");

function abrirseletor() {
    input_arquivo.click();
}

function extrairArquivo(event) {
    return event.dataTransfer
        ? event.dataTransfer.files[0]
        : event.target.files[0];
}

function processarArquivo(file) {
    // Validação de arquivo
    if (!file) {
        alert("Nenhum arquivo foi selecionado!");
        return null;
    }

    // Validar extensão CSV
    if (!file.name.toLowerCase().endsWith(".csv")) {
        alert("Coloque apenas arquivos CSV, por favor");
        return null;
    }

    // Atualizar nome do arquivo na interface
    arquivo_importado1.textContent = `${file.name}`;

    // Validar tamanho (100 MB)
    if (file.size >= 104857600) {
        alert("Arquivo é muito grande! Máximo: 100 MB");
        console.error("Arquivo muito grande:", file.size, "bytes");
        return null;
    }

    // Verificar se arquivo tem conteúdo
    if (file.size === 0) {
        alert("Arquivo está vazio!");
        return null;
    }

    console.log("Arquivo aceito:", file.name);
    console.log("Tamanho:", file.size, "bytes");

    // Preparar FormData
    let envelope_para_php = new FormData();
    envelope_para_php.append("arquivo", file);

    // Mostrar indicador de carregamento
    document.body.style.cursor = "wait";
    console.log("Arquivo a ser enviado:", file);
    console.log("FormData criado");
    // Fazer upload
    fetch("./php/normalizador.php", {
        method: "POST",
        body: envelope_para_php,
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        return fetch("./php/data_analysis.php", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
    })
    .then((response) => response.json())
    .then((dados) => {
        console.log(dados);
        sessionStorage.setItem('dados', JSON.stringify(dados)) // Vai despachar os dados para dashboard.js como um objeto com a propriedade detail sendo os dados
    })
    .then(() => window.location.replace("../dashboard/dashboard.php"))
    .catch((error) => {
        console.error("Erro no upload:", error);
        alert("Erro ao enviar arquivo: " + error.message);
    });
}

function handleDrop(event) {
    event.preventDefault();
    processarArquivo(extrairArquivo(event));
}

function handleInput(event) {
    processarArquivo(extrairArquivo(event));
}

function aoarrastarsobre(event) {
    event.preventDefault();
}

// Event Listeners
espaco_maior.addEventListener("dragover", (event) => {
    event.preventDefault();
    imagem.classList.add("dragging");
});

espaco_maior.addEventListener("dragleave", () => {
    imagem.classList.remove("dragging");
});

espaco_maior.addEventListener("drop", (event) => {
    event.preventDefault();
    imagem.classList.remove("dragging");
    handleDrop(event);
});

espaco.addEventListener("click", abrirseletor);
input_arquivo.addEventListener("change", handleInput);

