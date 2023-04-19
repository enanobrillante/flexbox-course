const navHamburguer = document.querySelector('#navHamburguer');

navHamburguer.addEventListener('click',(e)=>{
    navHamburguer.parentElement.classList.toggle('active');
    
});