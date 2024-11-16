let fullHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener("scroll", function(){
    src = pageYOffset;

    progress = (src/fullHeight) * 100;
    document.getElementById("bar").style.width = `${progress}vw`
});