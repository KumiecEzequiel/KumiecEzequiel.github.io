window.addEventListener("scroll", function () {
    var header = this.document.querySelector(".head");

    header.classList.toggle("abajo", this.window.scrollY > 0);

})

/*ESCRITURA ANIMADA*/
const typed = new Typed('.typed', {
    strings: ['<i class="escritura">Desarrollador de Software</i>',
        '<i class="escritura">Desarrollador web</i>',
        '<i class="escritura">Programador</i>'
    ],
    stringsElement: '#title',
    typeSpeed: 75,
    startDelay: 300,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html',
});


/*El boton va para arriba */
document.getElementById("button-up").addEventListener("click", scrollUp);


function scrollUp() {

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 15));
    }
}

/*El boton desaparece */
buttonUp = document.getElementById("button-up");

window.onscroll = function () {

    var scroll = document.documentElement.scrollTop;

    if (scroll > 100) {
        buttonUp.style.transform = "scale(1)";
    } else if (scroll < 100) {
        buttonUp.style.transform = "scale(0)";
    }

}

/*Esto es para que cuando toco en el navbar por ejemplo inicio scrolee de manera mas linda*/

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        })
    });
});

/*ESTO ES PARA EL NAVBAR CUANDO SE ACHICA*/

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')


toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fas fa-sort-up'
    : 'fas fa-bars'  
}



/*====================ENVIO DE MENSAJES============================*/

// const $form = document.querySelector('#form')
// const $buttonMailto = document.querySelector('#trucazo')

// $form.addEventListener('submit', handleSubmit)

// function handleSubmit(event){
//     event.preventDefault()
//     const form = new FormData(this)

//     console.log(form.get('nombre'))
//     $buttonMailto.setAttribute('href', `mailto:kumiecezequiel@gmail.com?subject=${form.get('name')}${form.get('asunto')}${form.get('email')}&body=${form.get('mensaje')}`)
// }


/*IMAGEN QUE SE MUEVE SOLO EN LOS PROYECTOS*/

const slider = document.querySelector("#slider");

let sliderSection = document.querySelectorAll(".slider__section");

let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnRight = document.querySelector("#btn-right");
const btnLeft = document.querySelector("#btn-left");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function moverDerecha(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend',sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function moverIzquierda(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin',sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function(){
    moverDerecha();
})

btnLeft.addEventListener('click', function(){
    moverIzquierda();
})

/*para que sea automatico*/

// setInterval(function() {
//     moverDerecha();
// }, 5000);