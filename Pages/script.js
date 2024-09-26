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