const upload = document.querySelector(".espaco");
const arquivo_importado = document.querySelector("#arquivo_importado");
const inputinvisivel = document.querySelector("#arquivo");
function abrirseletor() {
    inputinvisivel.click();
}
upload.addEventListener("click", abrirseletor);
function processararquivo() {
    const dados = inputinvisivel.files[0];
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
inputinvisivel.addEventListener("change", processararquivo);
