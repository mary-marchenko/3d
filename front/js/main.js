// const card = document.querySelector(".card");
// const topElement = document.getElementById("top");
//
// topElement.addEventListener("mousemove", (event) => {
//     const centerX = window.innerWidth / 2;
//     const centerY = window.innerHeight / 2;
//
//     const rotateY = -(centerX - event.pageX) / 30;
//     const rotateX = (centerY - event.pageY) / 10;
//
//     card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
// });

const card = document.querySelector(".card");
let angle = 0;

function animateCard() {
    angle += 2.5; // Швидкість руху
    const rotateX = Math.sin(angle * (Math.PI / 180)) * 10; // Коливання по X
    const rotateY = Math.cos(angle * (Math.PI / 180)) * 10; // Коливання по Y

    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;

    requestAnimationFrame(animateCard);
}

animateCard();
