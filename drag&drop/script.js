const upload = document.querySelector(".espaco");
const imagem = upload.querySelector(".imagem");
const arquivo_importado = document.querySelector("#arquivo");
const arquivo_importado1 = document.querySelector("#arquivo_importado");
const inputinvisivel = document.querySelector("#arquivo");

function abrirseletor() {
    inputinvisivel.click();
}

upload.addEventListener("click", abrirseletor);

function validarEExibir() {
    if (!arquivo_importado.name.endsWith(".xlsx")) {
        alert("Coloque apenas arquivos xlsx, por favor");
        return;
    }
    if (dados) {
        console.log("Arquivo existe");
    } else {
        console.log("Arquivo não existe");
    }
    if (dados.size >= 5242880) {
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

function validarEExibir_dragndrop(event) {
    event.preventDefault();
    const arquivosSoltos = event.dataTransfer.files[0];
    if (!arquivosSoltos.name.endsWith(".xlsx")) {
        alert("Coloque apenas arquivos xlsx, por favor");
        return;
    }
    if (arquivosSoltos) {
        console.log("Arquivo existe");
    } else {
        console.log("Arquivo não existe");
    }
    if (arquivosSoltos.size >= 5242880) {
        alert("Arquivo é muito grande!");
        console.clear();
    } else {
        console.log("Arquivo aceito!");
    }
    console.log(arquivosSoltos);
    console.log("Você soltou o arquivo:", arquivosSoltos.name);
}


function aosoltar(event) {


    validarEExibir_dragndrop(arquivosSoltos);

}

upload.addEventListener("dragover", aoarrastarsobre);
upload.addEventListener("drop", validarEExibir_dragndrop);
