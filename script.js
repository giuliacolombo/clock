function carregar() {
var msg = window.document.getElementById ('msg')
var img = window.document.getElementById ('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `It's now  ${hora} o'clock`
if (hora >= 0 && hora <12){
    //bom dia!
    img.src= 'manha.png'
    document.body.style.background = '#b6794a'
} else if (hora >= 12 && hora <= 18){
    //boa tarde!
    img.src= 'tarde.png'
    document.body.style.background = '#be6649'
} else {
    //boa noite!
    document.body.style.background = '#1b2222'
    img.src= 'noite.png'
}
}