Form = function(){
    let x = document.getElementById('FORM').getElementsByTagName('option')
    let y = document.getElementById('FORM').selectedIndex
    switch (x[y].value) {
        case "1":
            console.log("Lago subterrâneo")
            break
        case "2":
            console.log("Geleiras")
            break
        case "3":
            console.log("Selva")
            break
        case "4":
            console.log("Lava")
            break
        case "5":
            console.log("Regiões Desértica")
            break
        case "6":
            console.log("Suítes Reais")
            break
        case "7":
            console.log("Salão do Trono")
            break
        case "0":
            console.log("Catacumbas")
            break
    }
}


audio = function() {
    var Audio = document.getElementById('audio1')
    if (Audio.duration > 0 && !Audio.paused) {
        pauseAudio()
    } else {
        playAudio()
    }
}

function playAudio() {
    var Audio = document.getElementById('audio1')
    Audio.play(); 
  } 

pauseAudio = function(){
    var Audio = document.getElementById('audio1')
    Audio.pause();
}