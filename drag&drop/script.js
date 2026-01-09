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

function validarEExibir () {
    if (!arquivo_importado.name.endsWith(".xlsx")) {
        alert("Coloque apenas arquivos xlsx, por favor");
        return;
    }
    arquivo_importado.textContent = `${dados.name}`;
    if (dados) {
        console.log("Arquivo existe");
    } else {
        console.log("Arquivo não existe");
    }
    if (dados.size >= 524288000) {
        alert("Arquivo é muito grande!");
        console.clear();
    } else {
        console.log("Arquivo aceito!");
    }
    console.log(dados);
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
    const arquivosSoltos = validarEExibir(event.dataTransfer.files[0]);
    arquivo_importado.textContent = `${arquivosSoltos.name}`;
    console.log("Você soltou o arquivo:", arquivosSoltos.name);
}

validarEExibir.addEventListener("change", processararquivo);
