var numDeRounds = document.getElementById('numDeRounds');
var tempoDoRound = document.getElementById('tempoDoRound');
var tempointervalo = document.getElementById('tempointervalo');
var tempoInicial = 5;

const info = document.getElementById('info');

function mostrarInfo() {
    let nrI = numDeRounds.value
    let trI = tempoDoRound.value
    let tiI = tempointervalo.value
    
    if(nrI == 0 || nrI =="" || trI == 0 || trI == 0 || trI == "") {
        alert("preencha todos os campos de maneira correta para continuar!!!");
        info.classList.add("escondido");
    } else {
        zerar();
    }
}

function start() {
    let pauseZerarbotão = document.getElementsByClassName('pauseZerar');
    pauseZerarbotão[0].classList.remove('escondido');
    pauseZerarbotão[1].classList.remove('escondido');
}
function pause() {

}
function zerar() {
    let nrI = numDeRounds.value;
    let trI = tempoDoRound.value;
    let tiI = tempointervalo.value;
    let roundAtual = document.getElementById('roundAtual');
    let roundAtualindex = 0;
    let cronômetro = document.getElementById('cronômetro');
    let descansoDisplay = document.getElementById('descansoDisplay');

    roundAtual.innerHTML = `${roundAtualindex}/${nrI} | ${trI} seg`
    cronômetro.innerHTML = `Inicia em: ${tempoInicial} seg`
    descansoDisplay.innerHTML = `Intervalo ${tiI} seg`
    info.classList.remove("escondido");
}