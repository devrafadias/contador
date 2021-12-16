var contador;
var isContagemPausada = true;
function iniciarContador(countDownDate, display) {
    contador = setInterval(function() {
        var now = new Date().getTime();
        var timeleft = countDownDate - now;
        let seconds = Number(timeleft / 1000);
        var d = Math.floor(seconds / (3600*24));
        var h = Math.floor(seconds % (3600*24) / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var s = Math.floor(seconds % 60);
        
        var dDisplay = d > 0 ? d : "0";
        var hDisplay = h > 0 ? h : "0";
        var mDisplay = m > 0 ? (m < 10 ? "0" : "") + m : "00";
        var sDisplay = s > 0 ? (s < 10 ? "0" : "") + s : "00";

        document.querySelector('#days').textContent = dDisplay;
        document.querySelector('#hours').textContent = hDisplay;
        document.querySelector('#minutes').textContent = mDisplay;
        document.querySelector('#seconds').textContent = sDisplay;

        if(d == 0 && h == 0 && m == 0 && s == 0) {
            pararContador();
        }
    }, 1000);
}

function pararOuIniciarContador() {
    if(isContagemPausada === false) {
        if(confirm("Tem certeza que deseja parar o contador?")) {
            clearInterval(contador);
            isContagemPausada = true;
            document.querySelector('#btnParar').textContent = "Retormar a contagem";
        }
    } else {
        isContagemPausada = false;    
        let timeleft = localStorage.getItem("timeleft");
        var display = document.querySelector('#timer');
        iniciarContador(timeleft, display);
        document.querySelector('#btnParar').textContent = "Parar contagem";
    }
}

function iniciarContagem() {
    let timeleft = localStorage.getItem("timeleft");
    var display = document.querySelector('#timer');
    iniciarContador(timeleft, display);
}

window.onload = function () {
    pararOuIniciarContador(); 
};

document.querySelector("#btnReiniciar").addEventListener("click", () => window.location.href = "index.html");

document.querySelector("#btnParar").addEventListener("click", () => pararOuIniciarContador());