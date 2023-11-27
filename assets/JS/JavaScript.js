
let catering1 =  window.document.querySelector('span#catering1')
let catering2 =  window.document.querySelector('span#catering2')

let cateringFoto =  window.document.querySelector('span#cateringFoto')
var cateringText =  window.document.querySelector('span#cateringText')
let cateringFoto2 =  window.document.querySelector('span#cateringFoto2')
var cateringText2 =  window.document.querySelector('span#cateringText2')
let cateringH1 = window.document.querySelector('span#cateringH1')
let cateringH2 = window.document.querySelector('span#cateringH2')

/*Adicionando o Eventos e funções para a primeira div*/
catering1.addEventListener('mouseover',mudarParaTexto)
catering1.addEventListener('mouseout',mudarParaFoto)

function mudarParaTexto(){
    var cateringText =  window.document.querySelector('span#cateringText')
    cateringFoto.style.width = '0px'
    cateringFoto.style.hight = '0px'
    cateringFoto.style.opacity = '0'
    cateringFoto.style.border = 'none'
    cateringFoto.style.transition = '0.5s'


    cateringText.style.fontSize = '13.1pt'
    cateringText.style.backgroundColor = 'rgba(0,0,0,0.7)'
    cateringText.style.transition = '0.3s'
    cateringText.style.width = '290px'
    cateringText.style.hight = '300px'
    cateringText.style.opacity = '1'
    cateringText.style.border = '2px solid #088080'

    cateringH1.style.color = "#088080"
    cateringH1.style.transition = '0.5s'

}

function mudarParaFoto(){
    cateringFoto.style.width = '290px'
    cateringFoto.style.opacity = '1'
    cateringFoto.style.transition = '0.7s'
    cateringFoto.style.hight = '200px'

    cateringText.style.border = 'none'
    cateringText.style.transition = '.3s'
    cateringText.style.width = '290'
    cateringText.style.hight = '0'
    cateringText.style.fontSize = '0px'

    cateringH1.style.color = "#000"
    cateringH1.style.transition = '0.5s'
}


/*Adicionando o Eventos e funções para a segunda div*/
catering2.addEventListener('mouseover',mudarParaTexto2)
catering2.addEventListener('mouseout',mudarParaFoto2)

function mudarParaTexto2(){
    cateringFoto2.style.width = '0px'
    cateringFoto2.style.hight = '0px'
    cateringFoto2.style.opacity = '0'
    cateringFoto2.style.border = 'none'
    cateringFoto2.style.transition = '0.5s'


    cateringText2.style.fontSize = '13.1pt'
    cateringText2.style.backgroundColor = 'rgba(0,0,0,0.7)'
    cateringText2.style.transition = '0.3s'
    cateringText2.style.width = '290px'
    cateringText2.style.hight = '300px'
    cateringText2.style.opacity = '1'
    cateringText2.style.border = '2px solid #088080'

    cateringH2.style.color = "#088080"
    cateringH2.style.transition = '0.5s'

}

function mudarParaFoto2(){
    cateringFoto2.style.width = '290px'
    cateringFoto2.style.opacity = '1'
    cateringFoto2.style.transition = '0.7s'
    cateringFoto2.style.hight = '200px'

    cateringText2.style.border = 'none'
    cateringText2.style.transition = '.3s'
    cateringText2.style.width = '290'
    cateringText2.style.hight = '0'
    cateringText2.style.fontSize = '0px'

    cateringH2.style.color = "#000"
    cateringH2.style.transition = '0.5s'
}