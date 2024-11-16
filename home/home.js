let fullHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener("scroll", function(){
    src = pageYOffset;

    progress = (src/fullHeight) * 100;
    document.getElementById("bar").style.width = `${progress}vw`
});

const element = document.getElementById('slogan');

let oldTextArray = ['Unlock Your Potential, Embrace Education.', 'Learn, Grow, Succeed.', 'Catch the Wave of Education.', 'Committed To Excellence In Education.', 'Education is the Key to a Brighter Destiny.'];
let newTextArray = ['Learn, Grow, Succeed.', 'Catch the Wave of Education.', 'Committed To Excellence In Education.', 'Education is the Key to a Brighter Destiny.', 'Unlock Your Potential, Embrace Education.'];

let textIndex = 0;

let oldTextErased = false;

let oldTextEraser = 0;

let newTextCounter = 0;

function intervalFunction(){

    let oldText = oldTextArray[textIndex];
    let newText = newTextArray[textIndex];
    
    if (!oldTextErased) {
        element.textContent = oldText.slice(0, oldText.length - oldTextEraser);

        oldTextEraser++;

        if (oldTextEraser === oldText.length) {
            oldTextErased = true;
            oldTextEraser = 0;
        }
    } 
    
    else{
        element.textContent = newText.slice(0, newTextCounter + 1);

        newTextCounter++;

        if (newTextCounter === newText.length){
            
            setTimeout(() => {
                clearInterval(intervalId);

                oldTextErased = false;
                newTextCounter = 0;

                textIndex = (textIndex + 1) % oldTextArray.length;

                intervalId = setInterval(intervalFunction, 100);
            
            }, 3000);
        }
    }
}

setTimeout(() => {
    intervalId = setInterval(intervalFunction, 100);
}, 3000);



function updateStatus(){
    const MenuClicked = localStorage.getItem('MenuClicked');
    const menu = document.getElementById('animateMenu');
    const list = document.getElementById('animateList');
    
    if(MenuClicked === 'true'){
        menu.classList.add('animatedMenu');
        list.classList.add('animatedList');
    } 
    
    else{
        menu.classList.remove('animatedMenu');
        list.classList.remove('animatedList');
    }
}
localStorage.removeItem('MenuClicked');
updateStatus();

window.addEventListener('storage', function(event){
    if(event.key === 'MenuClicked'){
        updateStatus();
    }
});