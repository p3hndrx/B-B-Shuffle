const cards = document.querySelectorAll(".cards__single");

function flipCard() {
this.classList.toggle("flip");
//this.setAttribute("class", "flipped");
this.removeEventListener("click", flipCard);
}

cards.forEach((card) => card.addEventListener("click", flipCard));

//You can see full tutorial here
//https://www.ricardomoreira.io/blog/2020-06-15-flip-cards-with-javascript