

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

var Answer = -1
checkAnswer = function() {
    let result = document.getElementById("result")
    let x = document.getElementById('FORM').getElementsByTagName('option')
    let y = document.getElementById('FORM').selectedIndex
    let userAnswer = x[y].value
    console.log(userAnswer === Answer)
    if (userAnswer === Answer) {
        result.textContent = "Correto! 🎉";
        result.style.color = "green";
    } else {
        result.textContent = "Incorreto. Tente novamente!";
        result.style.color = "red";
    }
}

Start = function() {
        var img = document.getElementById("quiz")
        Answer = Math.floor(Math.random() * 22)
        Answer = Answer.toString()
        console.log("resposta:" + Answer)
    switch (Answer){
        case "0":
            img.src="../Images/Momonga.jpeg"
            break
        case "1":
            img.src="../Images/Albedo.jpeg"
            break
        case "2":
            img.src="../Images/Shalltear.jpeg"
            break
        case "3":
            img.src="../Images/Aura.jpeg"
            break
        case "4":
            img.src="../Images/Mare.jpeg"
            break
        case "5":
            img.src="../Images/Cocytus.jpeg"
            break
        case "6":
            img.src="../Images/Demiurge.jpeg"
            break
        case "7":
            img.src="../Images/Gargantua.jpeg"
            break

        case "8":
            img.src="Seres/S1_Portrait.webp"
            break
        case "9":
            img.src="Seres/S3_Portrait.webp"
            break
        case "10":
            img.src="Seres/S4_Portrait.webp"
            break
        case "11":
            img.src="Seres/S7_Portrait.webp"
            break
        case "12":
            img.src="Seres/S8_Portrait.webp"
            break
        case "13":
            img.src="Seres/S10_Portrait.webp"
            break
        case "14":
            img.src="Seres/S11_Portrait.webp"
            break
        case "15":
            img.src="Seres/S12_Portrait.webp"
            break
        case "16":
            img.src="Seres/S14_Portrait.webp"
            break
        case "17":
            img.src="Seres/S16_Portrait.webp"
            break
        case "18":
            img.src="Seres/S20_Portrait.webp"
            break
        case "19":
            img.src="Seres/S22_Portrait.webp"
            break
        case "20":
            img.src="Seres/S23_Portrait.webp"
            break
        case "21":
            img.src="Seres/S29_Portrait.png"
            break
        case "22":
            img.src="Seres/S30_Portrait.webp"
            break
    }
}

function toggleVideo(row) {
    // Esconder qualquer outro vídeo que esteja expandido
    var allVideos = document.querySelectorAll('.video-container');
    allVideos.forEach(function(videoRow) {
        videoRow.style.display = 'none';
        videoRow.previousElementSibling.classList.remove('expanded');
    });

    // Exibir o vídeo correspondente à linha clicada
    var videoRow = row.nextElementSibling;
    if (videoRow.style.display === 'table-row') {
        videoRow.style.display = 'none';
        row.classList.remove('expanded');
    } else {
        videoRow.style.display = 'table-row';
        row.classList.add('expanded');
    }
}