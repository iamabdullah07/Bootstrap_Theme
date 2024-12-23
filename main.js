const nav = document.querySelector('header');
window.addEventListener('scroll', () =>{
    if(window.scrollY >=40){
  nav.classList.add('white');
}else{
    nav.classList.remove('white');
}
});