

document.getElementById("optionRevuelto").addEventListener("click", optionRevuelto);
document.getElementById("optionInvencible").addEventListener("click", optionInvencible);

let userSelection = null;

document.getElementById("optionRevuelto").addEventListener("click", function(){
    userSelection = "revuelto";
});
document.getElementById("optionInvencible").addEventListener("click", function(){
    userSelection = "invencible";
});

const car = document.getElementById("car");
const revuelto = document.getElementById("revuelto");
const invencible = document.getElementById("invencible");
const title = document.getElementById("title");
const tree1 = document.getElementById("tree1");
const tree2 = document.getElementById("tree2");
const tree3 = document.getElementById("tree3");
const road = document.getElementById("road");
const yellowLine = document.getElementById("yellowLine");
const screen = document.getElementById("screen");
const sun = document.getElementById("sun");

let tree1translationX = 0;
let tree1translationY = 0;
let tree1scaleX = 0;
let tree1scaleY = 0;
let tree2translationX = 0;
let tree2translationY = 0;
let tree2scaleX = 0;
let tree2scaleY = 0;
let tree3translationX = 0;
let tree3translationY = 0;
let tree3scaleX = 0;
let tree3scaleY = 0;
let sunTranslationX = 0;
let carTranslationX = 0;
let score = 0;
let gameInterval;
let meteoriteInterval;

function optionRevuelto(){
    car.style.display = ("flex");
    invencible.style.display = ("none");
    title.style.display = ("none");
    road.style.visibility = ("visible");
    tree1.style.display = ("flex");
    tree2.style.display = ("flex");
    tree3.style.display = ("flex");
    screen.style.backgroundColor = ("#33859d");
    sun.style.visibility = ("visible");
    meteorite();
};

function optionInvencible() {
    car.style.display = ("flex");
    revuelto.style.display = ("none");
    title.style.display = ("none");
    road.style.visibility = ("visible");
    tree1.style.display = ("flex");
    tree2.style.display = ("flex");
    tree3.style.display = ("flex");
    screen.style.backgroundColor = ("#33859d");
    sun.style.visibility = ("visible");
    meteorite();
};

function applyTransform() {
    tree1.style.transform = `translate(${tree1translationX}px, ${tree1translationY}px)`;
    tree1.style.transform = `scale(${tree1scaleX}px, ${tree1translationY}px)`;
    tree2.style.transform = `translate(${tree2translationX}px, ${tree2translationY}px)`;
    tree2.style.transform = `scale(${tree2scaleX}px, ${tree2scaleY}px)`;
    tree3.style.transform = `translate(${tree3translationX}px, ${tree3translationY}px)`;
    tree3.style.transform = `scale(${tree3scaleX}px, ${tree3scaleY}px)`;
    sun.style.transform = `translateX(${sunTranslationX}px)`;
    invencible.style.transform = `translateX(${carTranslationX}px)`;
    revuelto.style.transform = `translateX(${carTranslationX}px)`;
    if (tree2translationX <= -500){
        tree1.style.transform = "translate(0px, 0px)";
        tree1.style.transform = "scale (0px, 0px)";
        tree2.style.transform = "translate(0px, 0px)";
        tree2.style.transform = "scale (0px, 0px)";
        tree3.style.transform = "translate(0px, 0px)";
        tree3.style.transform = "scale (0px, 0px)";
        tree1.style.transition = "none";
        tree2.style.transition = "none";
        tree3.style.transition = "none";
        tree1translationX = 0;
        tree1translationY = 0;
        tree1scaleX = 0;
        tree1scaleY = 0;
        tree2translationX = 0;
        tree2translationY = 0;
        tree2scaleX = 0;
        tree2scaleY = 0;
        tree3translationX = 0;
        tree3translationY = 0;
        tree3scaleX = 0;
        tree3scaleY = 0;
    };
};

document.addEventListener("keydown", function(event) {
    switch(event.key) {
        case "ArrowLeft":
            left();
            break;
        case "ArrowUp":
            forward();
            break;
        case "ArrowRight":
            right();
            break;
        }
});

function forward() {
    tree1translationX += 20;
    tree1translationY -= 4;
    tree1scaleX += 1.4;
    tree1scaleY += 1.4;
    tree2translationX -= 10;
    tree2translationY -= 2.5;
    tree2scaleX += 1.4;
    tree2scaleY += 1.4;
    tree3translationX += 20;
    tree3translationY -= 5;
    tree3scaleX += 1.4;
    tree3scaleY += 1.4;
    sunTranslationX += 5;
    tree1.style.transition = "ease 1s";
    tree2.style.transition = "ease 1s";
    tree3.style.transition = "ease 1s";
    if(userSelection == "revuelto"){
        revuelto.src = "img/revuelto.svg";
    } else if (userSelection == "invencible"){
        invencible.src = "img/invencible.svg";
    };
    applyTransform();
};

function left() {
    if(userSelection == "revuelto"){
        revuelto.src = "img/revueltoLeft.svg";
    } else if(userSelection == "invencible") {
        invencible.src = "img/invencibleLeft.svg";
    };
    tree1.style.transition = "ease 1s";
    tree2.style.transition = "ease 1s";
    tree3.style.transition = "ease 1s";
    tree1translationX += 20;
    tree1translationY -= 4;
    tree1scaleX += 1.4;
    tree1scaleY += 1.4;
    tree2translationX -= 10;
    tree2translationY -= 2.5;
    tree2scaleX += 1.4;
    tree2scaleY += 1.4;
    tree3translationX += 20;
    tree3translationY -= 5;
    tree3scaleX += 1.4;
    tree3scaleY += 1.4;
    sunTranslationX += 5;
    carTranslationX -= 30;
    applyTransform();
};

function right(){
    if(userSelection == "invencible"){
        invencible.src = "img/invencibleRight.svg";
    } else if(userSelection == "revuelto") {
        revuelto.src = "img/revueltoRight.svg";
    };
    tree1.style.transition = "ease 1s";
    tree2.style.transition = "ease 1s";
    tree3.style.transition = "ease 1s";
    tree1translationX += 20;
    tree1translationY -= 4;
    tree1scaleX += 1.4;
    tree1scaleY += 1.4;
    tree2translationX -= 10;
    tree2translationY -= 2.5;
    tree2scaleX += 1.4;
    tree2scaleY += 1.4;
    tree3translationX += 20;
    tree3translationY -= 5;
    tree3scaleX += 1.4;
    tree3scaleY += 1.4;
    sunTranslationX += 5;
    carTranslationX += 30;
    applyTransform();
};

function meteorite(){
    const meteorite = document.getElementById("meteorite");
    const screen = document.getElementById("screen");
    const copies = 100;
    const interval = 2000;
    function startFalling(clone) {
        let topPosition = 0;
        const fallInterval = setInterval(() => {
            topPosition += 3; // Velocidad de caída, ajusta según sea necesario
            meteorite.style.display = "block";
            meteorite.style.top = `${topPosition}px`;
            clone.style.top = `${topPosition}px`;
            if (topPosition >= 800) {
                clearInterval(fallInterval);
                clone.style.display = 'none';
                meteorite.style.display = "none";
            }
            checkCollision(meteorite);
        }, 50); // Intervalo de actualización, ajusta según sea necesario
    };
    function checkCollision(meteorite) {
        const meteoriteRect = meteorite.getBoundingClientRect();
        const selectedElement = document.getElementById(userSelection);
        const carRect = selectedElement.getBoundingClientRect();
        let collisionPadding = 50; // Reducir el área de colisión en 50px desde cada lado
        const adjustedCarRect = {
            top: carRect.top + collisionPadding + collisionPadding,
            bottom: carRect.bottom - collisionPadding,
            left: carRect.left + collisionPadding + collisionPadding + collisionPadding,
            right: carRect.right - collisionPadding - collisionPadding - collisionPadding
        };
        if (meteoriteRect.bottom >= adjustedCarRect.top &&
            meteoriteRect.top <= adjustedCarRect.bottom &&
            meteoriteRect.right >= adjustedCarRect.left &&
            meteoriteRect.left <= adjustedCarRect.right) {
            gameOver();
        }
        winner();
    };
    function gameOver() {
        clearInterval(gameInterval);
        clearInterval(meteoriteInterval);
        alert("GAME OVER. Tu puntaje es "+`${score}`);
        document.location.reload();
    };
    for (let i = 0; i < copies; i++) {
        setTimeout(() => {
            const clone = meteorite.cloneNode(true);
            clone.id = "";
            clone.style.left = `${getRandomPosition()}px`;
            screen.appendChild(clone);
            startFalling(clone);
        }, i * interval);
    }
    gameInterval = setInterval(() => {
        score += 1;
        document.getElementById("score").textContent = `Score: ${score}`;
    }, 1000);
};

function winner(){
    if(score == 210){
        alert("¡Ganaste! Felicidades, tu puntaje es "+`${score}`);
        document.location.reload();
    }
};

function getRandomPosition(){
    const maxWidth = 1200;
    return Math.random()*maxWidth;
}




