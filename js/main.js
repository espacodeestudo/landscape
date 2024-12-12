const Header = document.querySelector('header');


window.addEventListener('scroll', function(){
    if(this.scrollY > 0){
        Header.classList.add('Header-fixed')
    }else{
        Header.classList.remove('Header-fixed')
    }
})
