function imgSlider(imagens){
    document.querySelector('.starbucks').src = imagens
}

function trocaCor(cor){
    const circle = document.querySelector('.circle')
    circle.style.background = cor
}

function toggleMenu(){
    const toggleMenu = document.querySelector('.toggle')
    const navigation = document.querySelector('.navigation')
    toggleMenu.classList.toggle('active')
    navigation.classList.toggle('active')
}