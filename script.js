function addNumber(n) {
    let atualVisor = document.getElementById("resultadoVisor").innerHTML
    let historicoVisor = document.getElementById("historicoVisor").innerHTML
    if(n == "*" || n == "/" || n == "-" || n == "+") {
        if(historicoVisor) {
            document.getElementById("historicoVisor").innerHTML = eval(historicoVisor + atualVisor) + n
            document.getElementById("resultadoVisor").innerHTML = ""
        } else {
            document.getElementById("historicoVisor").innerHTML = atualVisor + n
            document.getElementById("resultadoVisor").innerHTML = ""
        }
    }  else {
        mostrar(n)
    }
}

function mostrar(number) {
    document.getElementById("resultadoVisor").innerHTML += number;
}

function limparTela() {
    document.getElementById("resultadoVisor").innerHTML = "";
    document.getElementById("historicoVisor").innerHTML = "";
}

function removerNumero() {
    var result = document.getElementById("resultadoVisor").innerHTML;
    document.getElementById("resultadoVisor").innerHTML = result.substring(0, result.length -1)
}

function calcular() {
    var atualVisor = document.getElementById("resultadoVisor").innerHTML 
    var historicoVisor = document.getElementById("historicoVisor").innerHTML
    console.log(historicoVisor + atualVisor)
    if(atualVisor) {
        document.getElementById("resultadoVisor").innerHTML = eval(historicoVisor + atualVisor)
        document.getElementById("historicoVisor").innerHTML = ""
    }
}