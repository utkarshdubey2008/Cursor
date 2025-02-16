document.addEventListener("click", function(event) {
    let circle = document.createElement("div");
    circle.classList.add("click-effect");
    
    document.body.appendChild(circle);
    
    let x = event.pageX;
    let y = event.pageY;
    
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    setTimeout(() => {
        circle.remove();
    }, 600);
});