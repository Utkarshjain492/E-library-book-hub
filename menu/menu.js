const nav = document.querySelector('.nav');
nav.addEventListener('click', () => {
    nav.classList.toggle('clicked');
});

let isMoved = false;
function toggleItem(){
    const item = document.getElementById('menu');
    if(isMoved){
        item.style.top = '-100%';
    }
    else{
        item.style.top = '13%';
    }
    isMoved = !isMoved;
    
}


document.getElementById('nav-btn').addEventListener('click', function() {
    const MenuClicked = localStorage.getItem('MenuClicked');
    
    if (MenuClicked === 'true') {
        localStorage.removeItem('MenuClicked');
    } 
    
    else {
        localStorage.setItem('MenuClicked', 'true');
    }
    updateButtonState();
});