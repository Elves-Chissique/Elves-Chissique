
let catering1 =  window.document.querySelector('span#catering1')
let catering2 =  window.document.querySelector('span#catering2')

let cateringFoto =  window.document.querySelector('span#cateringFoto')
let h3 = window.document.querySelector('span.h3')

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

    h3.style.color = "#088080"
    h3.style.transition = '0.5s'

}

function mudarParaFoto(){
    var cateringText =  window.document.querySelector('span#cateringText')
    cateringFoto.style.width = '290px'
    cateringFoto.style.opacity = '1'
    cateringFoto.style.transition = '0.7s'
    cateringFoto.style.hight = '200px'

    cateringText.style.border = 'none'
    cateringText.style.transition = '.3s'
    cateringText.style.width = '290'
    cateringText.style.hight = '0'
    cateringText.style.fontSize = '0px'

    h3.style.color = "#000"
    h3.style.transition = '0.5s'
}