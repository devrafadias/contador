function iniciarContagem() {
    let dataContagem = document.querySelector("#dataContagem").value;
    if(!dataContagem) {
        alert("Informe uma data para iniciar a contagem");
        return;
    }
    let parteData = dataContagem.split("-");
    let ano = Number(parteData[0]); //ano
    let mes = (Number(parteData[1]) - 1); //mes
    let dia = Number(parteData[2]); //dia

    let countDownDate = new Date(ano, mes, dia).getTime();
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    if(timeleft > 0) {
        localStorage.setItem("timeleft", countDownDate);
        window.location.href = "contador.html";
    } else {
        alert("Deve ser informado uma data maior do que a data atual!");
    }
}

document.querySelector("#btnInicarContagem").addEventListener("click", () => iniciarContagem());