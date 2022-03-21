function mediaFinal() {
    var mediaPrimeiroSemestre = document.getElementById("nota1").valueAsNumber
    var mediaSegundoSemestre = document.getElementById("nota2").valueAsNumber
    var mediaFinal = (mediaPrimeiroSemestre + mediaSegundoSemestre)/2
        media.innerHTML = "Sua média anual é: " +  mediaFinal.toFixed(2) 
}

