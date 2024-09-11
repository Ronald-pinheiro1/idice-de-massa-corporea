 let resp = document.getElementById("saida")
 let nome = document.getElementById("nome")
 let estatura = document.getElementById("estatura")
 let massa = document.getElementById("massa")


function mostrar(){
    
    let nom = String(nome.value)
    let stat =Number(estatura.value)
    let mass = Number(massa.value)
    
    if(nom.length== 0 || stat == 0 || mass == 0 ){
        return alert("Formulário não foi preenchido\ncompletemnete. tente outra vez.")
    }
    resp.innerText=""

    return resp.innerHTML+=`<p id="resp_p">Ola, <i>${nom}!</i> seu indice de massa corpoôrea é: <strong><i>${calcular()}</i></strong>, e sua classificação da faxaétaria foi:<strong><i>${faixetaria(calcular())}.</i></strong> Espero ter te deixado satisfeito com esse resultado.</i></p>`
}

function calcular(){
        let stat =Number(estatura.value)
        let mass = Number(massa.value)
        let result = (mass/(stat*stat))*10000
         return result.toFixed(1)
}

function faixetaria(){
    if(arguments[0] <= 18.5){
       return "Abaixo do normal"
    }else if(arguments[0] >=18.5 && arguments[0] <= 24.9){
        return "Normal"
    }else if(arguments[0] >=25.0 && arguments[0] <= 29.9){
        return "Sobrepeso"
    }else if(arguments[0] >=30.0 && arguments[0] <= 34.9){
        return "Obesidade grau I"
    }else if(arguments[0] >= 35.0 && arguments[0] <= 39.9){
        return "Obesidade grau II"
    }else if(arguments[0] >= 40){
        return "Obesidades grau III"
    }
}