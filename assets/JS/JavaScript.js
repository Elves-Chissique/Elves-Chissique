
let catering3 =  window.document.querySelector('span#catering3')

let cateringFoto =  window.document.querySelector('span#cateringFoto')

catering3.addEventListener('mouseover',mudarParaTexto)
catering3.addEventListener('mouseout',mudarParaFoto)


function mudarParaTexto(){
    var cateringText =  window.document.querySelector('span#cateringText')
    cateringText.style.display = 'table-cell'
    cateringFoto.style.width = '0px'
    cateringFoto.style.hight = '0px'
    cateringFoto.style.opacity = '0'
    cateringFoto.style.border = 'none'
    cateringFoto.style.transition = '0.5s'


    cateringText.style.fontSize = '12pt'
    cateringText.style.backgroundColor = 'rgba(0,0,0,0.7)'
    cateringText.style.transition = '0.3s'
    cateringText.style.width = '290px'
    cateringText.style.hight = '300px'
    cateringText.style.opacity = '1'
    cateringText.style.border = '2px solid #088080'

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
}