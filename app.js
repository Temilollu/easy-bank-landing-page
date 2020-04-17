const hamburg = document.querySelector('.hamburger');
const close= document.querySelector('.close-bar');
const modal = document.querySelector('.main-nav-modal');

function toggleModal(){
    modal.style.display = 'block'
}


hamburg.addEventListener('click',toggleModal)

close.addEventListener('click', () =>{
    modal.style.display = 'none';
})