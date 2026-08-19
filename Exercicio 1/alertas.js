function mostrarAlerta(){
    alert("Olá, seja bem-vindo!");
}

function mostrarConfirmar(){
    let confirmacao = confirm("Você deseja continuar?");

    if(confirmacao == true){
        alert("Seja bem-vindo!");
    }else{
        alert("Até mais!");
    }
}

function mostrarNome(){
    let nome = prompt("Digite seu nome:");
    alert("Olá, " + nome + "!");
}

