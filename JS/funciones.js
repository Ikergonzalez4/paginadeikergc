let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 5600;

window.addEventListener("resize", function() {
    width = sliderIndividual[0].clientWidth;
})

setInterval(function() {
    slides();
}, intervalo);



function slides() {
    slider.style.transform = "translate(" + (-width * contador) + "px)";
    slider.style.transition = "transform .8s";
    contador++;

    if (contador == sliderIndividual.length) {
        setTimeout(function() {
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador = 1;
        }, 5600)
    }
}

function checknext() {
    if (document.querySelector(".last:checked")) {
        document.querySelector(".first").checked = true;
    } else {
        document.querySelector(".nav:checked").nextElementSibling.checked = true;
    }
}

setInterval(function() {
    checknext();
}, 3000);

/*let menuToggle = document.querySelector('.menu-toggle')
let menuToggleIcon = document.querySelector('.menu-toggle i')
let menu = document.getElementById('menu')

menuToggle .addEventListener('click' , e=>{
    menu.classList.toggle('show');
});*/