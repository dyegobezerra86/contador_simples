let valor = 0;

function ligar() {
    // Ao ligar, o valor é resetado para 0
    valor = 0; 
    document.getElementById('count').innerHTML = valor;
}

function anterior() {
    document.getElementById('count').innerHTML = --valor;
}

function desligar() {
    // Ao desligar, o valor também é resetado para 0
    valor = 0;
    document.getElementById('count').innerHTML = ''; // Limpa a tela
}

function proximo() {
    document.getElementById('count').innerHTML = ++valor;
}