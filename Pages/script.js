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

playAudio = function() {
    var Audio = document.getElementById('audio1')
    Audio.play(); 
  } 

pauseAudio = function(){
    var Audio = document.getElementById('audio1')
    Audio.pause();
}

createBuild = function() {
    const name = document.getElementById('name').value;
    const race = document.getElementById('race').value;
    const characterClass = document.getElementById('class').value;
    const skills = document.getElementById('skills').value;
    const equipment = document.getElementById('equipment').value;

    const result = `
      <h2>Build do Personagem</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Raça:</strong> ${race}</p>
      <p><strong>Classe:</strong> ${characterClass}</p>
      <p><strong>Habilidades:</strong> ${skills}</p>
      <p><strong>Equipamentos:</strong> ${equipment}</p>
    `;

    document.getElementById('buildResult').innerHTML = result;
  }

secret = function(){
    var Audio = document.getElementById('audio1')
    if (Audio.duration > 0 && !Audio.paused) {
        location.replace("Pages/build.html")
    } else {
        alert("nada aqui")
    }
}

