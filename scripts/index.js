var numDeRounds = document.getElementById('numDeRounds');//input
var tempoDoRound = document.getElementById('tempoDoRoundInput');//input
var tempointervalo = document.getElementById('tempointervalo');//input

const info = document.getElementById('info');//tabela
const roundAtual = document.getElementById('roundAtual');//td qeu mostra o round atual
const tempoDoRoundDisplay = document.getElementById('tempoDoRound');//td que mostra o tempo do round
const tempoDescansoDisplay = document.getElementById('tempoDescansoDisplay');//td que mostra o tempo de descanso
const temporizador = document.getElementById('temporizador');//td que mostra o tempo rodando
const marcador = document.getElementsByClassName('marcador');

var nrI;
var trI;
var tiI;

var roundAtualIndex
var numeroDeRounds

var tempoDePreparo
var contagemDoRound
var contagemDescanso

var loop;

var vez = "tempo inicial"

function mostrarInfo() {
    nrI = numDeRounds.value//camptura o valor que está dentro do input
    trI = tempoDoRound.value//camptura o valor que está dentro do input
    tiI = tempointervalo.value;//camptura o valor que está dentro do input
    
    if(nrI == 0 || nrI =="" || trI == 0 || trI == 0 || trI == "" || tiI == 0 || tiI == "") {
        alert("preencha todos os campos de maneira correta para continuar!!!");
        info.classList.add("escondido");
    } else {
        zerar();
    }
}

function play() {
    if(vez == "tempo inicial") {
        roundAtualIndex = 1;
        numeroDeRounds = nrI;
        tempoDePreparo = 5;
        contagemDoRound = trI;
        contagemDescanso = tiI;

    }
    loop = setInterval("iniciarCronômetro()", 1000);

    marcador[1].style = "background: #F6150C;"
}

function iniciarCronômetro() {
    //atualizar Round
    roundAtual.innerHTML = `${roundAtualIndex}/${numeroDeRounds}`
    //atualizar tempo
    if(vez == "tempo inicial") {
        renderizarTempo(tempoDePreparo);
        tempoDePreparo--
        if(tempoDePreparo < 0) {
            vez = "round"
        }
    }else if(vez == "round") {
        marcador[0].style = "background: #F6150C;"
        marcador[2].style = "background: linear-gradient(#D4590B, #D4962B);"
        renderizarTempo(contagemDoRound);
        contagemDoRound--
        if(contagemDoRound < 0) {
            vez = "descanso"
            roundAtualIndex++
            contagemDoRound = trI;
            if(roundAtualIndex > numeroDeRounds) {
                zerar();
                vez = "tempo inicial"
                roundAtualIndex = 1;
            }
            roundAtualIndex--
        }
    }else if(vez == "descanso") {
        marcador[0].style = "background: linear-gradient(#D4590B, #D4962B);"
        marcador[2].style = "background: #F6150C;"
        renderizarTempo(contagemDescanso);
        contagemDescanso--
        if(contagemDescanso < 0) {
            contagemDescanso = tiI;
            vez = "round"
            roundAtualIndex++
            if(roundAtualIndex > numeroDeRounds) {
                roundAtualIndex--
            }
        }
    }
    

}

function renderizarTempo(tempo) {
    temporizador.innerHTML = `${tempo} seg`
}



function pause() {
    clearInterval(loop);

}
function zerar() {
    pause();
    var tempoInicial = 5;//tempo de delay antes de começar a rodar o temporizador
    roundAtual.innerHTML = `1/${nrI}`
    tempoDoRoundDisplay.innerHTML = `${trI} seg`
    tempoDescansoDisplay.innerHTML = `${tiI} seg`
    temporizador.innerHTML = tempoInicial + " seg"
    info.classList.remove("escondido");
    var vez = "tempo inicial";
    marcador[0].style = "background: linear-gradient(#D4590B, #D4962B);"
    marcador[2].style = "background: linear-gradient(#D4590B, #D4962B);"
    marcador[1].style = "background: linear-gradient(#D4590B, #D4962B);"
}