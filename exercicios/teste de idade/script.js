

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value > ano)){
        alert('[ERRO] Verifique os dados e tente novamente!')

    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <10){
                //CRIANÇA
                img.setAttribute('src', './img/BEBE-M.png')
            }else if(idade >=10 && idade <21){
                //JOVEM
                img.setAttribute('src','./img/JOVEM-M.png')
            }else if (idade < 50){
                //ADULTO
                img.setAttribute('src','./img/ADULTO-M.png')
            }else{
                //IDOSO
                img.setAttribute('src','./img/IDOSO-M.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <10){
                //CRIANÇA
                img.setAttribute('src', './img/BEBE-F.png')
            }else if(idade >=10 && idade <21){
                //JOVEM
                img.setAttribute('src', './img/JOVEM-F.png')
            }else if (idade < 50){
                //ADULTO
                img.setAttribute('src', './img/ADULTO-F.png')
            }else{
                //IDOSO
                img.setAttribute('src', './img/IDOSO-F.png')
            }
        }
        res.innerHTML = `Detectamos  ${genero} com ${idade} anos.`
        //ADICIONAR ELEMENTO
        res.appendChild(img)
    }
}

