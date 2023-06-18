function carregar() {
    var msg = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} hora.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src =  'foto-manhã.png'
        document.body.style.background = '#9D6F61'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src =  'foto-tarde.png'
        document.body.style.background = '#DCBB9F'
    } else {
        // BOA NOITE!
        img.src =  'foto-noite.png'
        document.body.style.background = '#020507'
    }
}