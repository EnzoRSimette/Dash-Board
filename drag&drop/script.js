// Nota adicional: Futuramente, com tempo, adicionar um loop for para cada arquivo uplodado, isso vai fazer resetar a cada arquivo e dai a pessoa não precisa resetar a página
const upload = document.querySelector(".espaco");
const imagem = upload.querySelector(".imagem");
const input_arquivo = document.querySelector("#input_arquivo");
const arquivo_importado1 = document.querySelector("#arquivo_importado1");
const inputinvisivel = document.querySelector("#arquivo");

function abrirseletor() {
    input_arquivo.click();
}

function validarEExibir(event) {
    event.preventDefault();
    const arquivosupload = event.target.files[0];
    if (!arquivosupload.name.endsWith(".xlsx")) {
        alert("Coloque apenas arquivos xlsx, por favor");
        return null;
    } else {
        arquivo_importado1.textContent = `${arquivosupload.name}`;
    }
    if (arquivosupload) {
        console.log("Arquivo existe");
    } else {
        console.log("Arquivo não existe");
    }
    if (arquivosupload.size >= 5242880) {
        alert("Arquivo é muito grande!");
        console.clear();
        return null;
    } else {
        console.log("Arquivo aceito!");
    }
    console.log(arquivosupload);
}

function validarEExibir_dragndrop(event) {
    event.preventDefault();
    const arquivosSoltos = event.dataTransfer.files[0];
    if (!arquivosSoltos.name.endsWith(".xlsx")) {
        alert("Coloque apenas arquivos xlsx, por favor");
        return null;
    } else {
        arquivo_importado1.textContent = `${arquivosSoltos.name}`;
    }
    if (arquivosSoltos) {
        console.log("Arquivo existe");
    } else {
        console.log("Arquivo não existe");
    }
    if (arquivosSoltos.size >= 5242880) {
        alert("Arquivo é muito grande!");
        console.clear();
        return null;
    } else {
        console.log("Arquivo aceito!");
    }
    console.log(arquivosSoltos);
    console.log("Você soltou o arquivo:", arquivosSoltos.name);
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

upload.addEventListener("click", abrirseletor);
input_arquivo.addEventListener("change", validarEExibir);
upload.addEventListener("dragover", aoarrastarsobre);
upload.addEventListener("drop", validarEExibir_dragndrop);
