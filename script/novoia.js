document.getElementById("relat").addEventListener("click", mostrar);

function mostrar() {
    const nome = document.getElementById("nome").value.trim();
    const estatura = parseFloat(document.getElementById("estatura").value);
    const massa = parseFloat(document.getElementById("massa").value);

    if (!nome || !estatura || !massa) {
        alert("Formulário não foi preenchido completamente. Tente outra vez.");
        return;
    }

    const imc = calcularIMC(estatura, massa);
    const faixaEtaria = classificarIMC(imc);

    const resp = document.getElementById("saida");
    resp.innerHTML = `
        <p id="resp_p">
            Olá, <i>${nome}!</i> Seu índice de massa corpórea é: <strong><i>${imc}</i></strong>, e sua classificação da faixa etária foi: <strong><i>${faixaEtaria}</i></strong>. Espero ter te deixado satisfeito com esse resultado.
        </p>
    `;
}

function calcularIMC(estatura, massa) {
    const imc = (massa / (estatura * estatura)) * 10000;
    return imc.toFixed(1);
}

function classificarIMC(imc) {
    if (imc <= 18.5) return "Abaixo do normal";
    if (imc <= 24.9) return "Normal";
    if (imc <= 29.9) return "Sobrepeso";
    if (imc <= 34.9) return "Obesidade grau I";
    if (imc <= 39.9) return "Obesidade grau II";
    return "Obesidade grau III";
}
