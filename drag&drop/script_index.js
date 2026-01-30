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
    const payload = { action: 'all_data' }

    // Mostrar indicador de carregamento (opcional - adicione no HTML se quiser)
    // document.body.style.cursor = 'wait';

    // Fazer upload
    fetch("./php/normalizador.php", {
        method: "POST",
        body: envelope_para_php,
    })
    .then(() => {fetch('./php/data_analysis.php'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    }})
    .then((response) => {
        console.log("Resposta recebida - Status:", response.status);

        // Verificar se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro HTTP ${response.status}: ${response.statusText}`);
        }

        return
    })
    // .then((data) => {
    //     console.log("Resposta do servidor:", data);

    //     // Verificar se houve sucesso no processamento
    //     // O normalizador.php retorna "SUCCESS" quando dá certo
    //     if (data.includes("SUCCESS") || data.includes("Data imported")) {
    //         console.log("Upload e processamento concluídos com sucesso");

    //         // Redirecionar para o dashboard APENAS se deu certo
    //         window.location.replace("../dashboard/dashboard.php");
    //     } else if (data.includes("ERRO")) {
    //         // Se houver erro explícito, mostrar ao usuário
    //         console.error("Erro no servidor:", data);
    //         alert("Erro ao processar arquivo. Verifique o console (F12) para mais detalhes.");
    //     } else {
    //         // Resposta inesperada
    //         console.warn("Resposta inesperada do servidor:", data);
    //         alert("Processamento concluído, mas a resposta foi inesperada. Verifique o console.");
    //     }
    // })
    .catch((error) => {
        console.error("Erro no upload:", error);
        alert("Erro ao enviar arquivo: " + error.message + "\n\nVerifique sua conexão e tente novamente.");
    })
}

function handleDrop(event) {
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
});

espaco.addEventListener("click", abrirseletor);
input_arquivo.addEventListener("change", handleInput);
espaco_maior.addEventListener("dragover", aoarrastarsobre);
espaco_maior.addEventListener("drop", handleDrop);