// Variável global para armazenar os números sorteados
let sorteados = [];

function sortear() {
    // Pega os valores inseridos pelo usuário
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const de = parseInt(document.getElementById("de").value);
    const ate = parseInt(document.getElementById("ate").value);
    const resultado = document.getElementById("resultado");
    const btnReiniciar = document.getElementById("btn-reiniciar");

    // Valida se todos os campos foram preenchidos corretamente
    if (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    // Valida se o número inicial é menor que o número final
    if (de >= ate) {
        alert("O número inicial deve ser menor que o número final.");
        return;
    }

    // Valida se é possível sortear a quantidade desejada dentro do intervalo
    if (quantidade > (ate - de + 1)) {
        alert("Quantidade maior que o intervalo disponível.");
        return;
    }

    // Limpa a lista de números sorteados
    sorteados = [];

    // Sorteia números únicos até atingir a quantidade desejada
    while (sorteados.length < quantidade) {
        const numero = Math.floor(Math.random() * (ate - de + 1)) + de;

        // Verifica se o número já foi sorteado
        if (!sorteados.includes(numero)) {
            sorteados.push(numero);
        }
    }

    // Exibe o resultado dos números sorteados na tela
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(", ")}</label>`;

    // Habilita o botão de reiniciar
    btnReiniciar.classList.remove("container__botao-desabilitado");
    btnReiniciar.classList.add("container__botao");
    btnReiniciar.disabled = false;
}

function reiniciar() {
    // Limpa a lista de sorteados e os campos de entrada
    sorteados = [];
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";

    // Redefine o texto de resultado
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;

    // Desabilita o botão de reiniciar novamente
    const btnReiniciar = document.getElementById("btn-reiniciar");
    btnReiniciar.classList.add("container__botao-desabilitado");
    btnReiniciar.disabled = true;
}
