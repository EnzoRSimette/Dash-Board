const upload = document.querySelector(".espaco");
const imagem = upload.querySelector(".imagem");
const arquivo_importado = document.querySelector("#arquivo_importado");
const inputinvisivel = document.querySelector("#arquivo");
upload.addEventListener("dragover", aoarrastarsobre);
upload.addEventListener("drop", aosoltar);

function abrirseletor() {
    inputinvisivel.click();
}

upload.addEventListener("click", abrirseletor);

function validarEExibir(file) {
    // Accept either a passed file or the file from the hidden input
    const arquivo = file || inputinvisivel.files[0];

    if (!arquivo) {
        console.log("Nenhum arquivo selecionado");
        return null;
    }

    if (!arquivo.name || !arquivo.name.toLowerCase().endsWith(".xlsx")) {
        alert("Coloque apenas arquivos xlsx, por favor");
        return null;
    }

    // Show file name in the UI
    arquivo_importado.textContent = arquivo.name;

    console.log("Arquivo existe");

    if (typeof arquivo.size === 'number' && arquivo.size >= 524288000) {
        alert("Arquivo é muito grande!");
        console.clear();
        return null;
    } else {
        console.log("Arquivo aceito!");
    }

    console.log(arquivo);
    return arquivo;
}

function aoarrastarsobre(event) {
    event.preventDefault();
    console.log("O arquivo está pairando sobre a div");
}

upload.addEventListener("dragover", (event) => {
    event.preventDefault();
    imagem.classList.add("dragging");
});

upload.addEventListener("dragleave", () => {
    imagem.classList.remove("dragging");
});

upload.addEventListener("drop", () => {
    imagem.classList.remove("dragging");
});

function aosoltar(event) {
    event.preventDefault();
    const file = event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files[0];
    const arquivosSoltos = validarEExibir(file);
    if (arquivosSoltos) {
        arquivo_importado.textContent = arquivosSoltos.name;
        console.log("Você soltou o arquivo:", arquivosSoltos.name);
    }
}

inputinvisivel.addEventListener("change", (e) => {
    const file = e.target && e.target.files && e.target.files[0];
    const validated = validarEExibir(file);
    if (validated) {
        arquivo_importado.textContent = validated.name;
    }
});
