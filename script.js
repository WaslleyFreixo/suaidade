function verificar() {
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.getElementById ('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero ='Homem'
            if (idade >= 0 && idade <=4) {
                //bebe
                img.setAttribute('src', 'bebe-h.png')
            } else if (idade >4 && idade <=10) {
                //criança
                img.setAttribute('src', 'crianca-h.png')
            } else if (idade >=11 && idade <=17) {
                //adolescente
                img.setAttribute('src', 'adole-h.png')
            } else if (idade >=18 && idade <=30) {
                //jovem
                img.setAttribute('src', 'jovem-h.png')
            } else if (idade >=31 && idade <60) {
                //adulto
                img.setAttribute('src', 'adulto-h.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-h.png')
            }
        } else { 
            genero = 'Mulher'
            if (idade >= 0 && idade <=4) {
                //bebe
                img.setAttribute('src', 'bebe-m.png')
            } else if (idade >4 && idade <=10) {
                //criança
                img.setAttribute('src', 'crianca-m.png')
            } else if (idade >=11 && idade <=17) {
                //adolescente
                img.setAttribute('src', 'adole-m.png')
            } else if (idade >=18 && idade <=30) {
                //jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade >=31 && idade <60) {
                //adulto
                img.setAttribute('src', 'adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-m.png')
            }
       }
       res.innerText = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
}