function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 12

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        alert('BOM DIA!')
        img.src = './assets/images/foto-manha.png'
        document.body.style.background = '#dbc187'

    } else if (hora >= 12 && hora <= 18) {
        alert('BOA TARDE!')
        img.src = './assets/images/foto-tarde.png'
        document.body.style.background = '#f9b278'

    } else {
        alert('BOA NOITE!')
        img.src = './assets/images/foto-noite.png'
        document.body.style.background = '#684868'
    }
}
