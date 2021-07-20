const cards = document.querySelectorAll(".cards__single");

function flipCard() {
this.classList.toggle("flip");
this.setAttribute("state", "flipped");
this.removeEventListener("click", flipCard);
}

cards.forEach((card) => card.addEventListener("click", flipCard));

//You can see full tutorial here
//https://www.ricardomoreira.io/blog/2020-06-15-flip-cards-with-javascript


function flipBack() {
const backs = document.querySelectorAll(".cards__single");
backs.forEach((c) => 
{
	if(c.getAttribute("state")=="flipped")
	{
	c.classList.toggle("flip");
	c.setAttribute("state", "back");
	c.addEventListener("click", flipCard);
 }
});

}


function flipBackAddOn() {
const addonbacks = document.querySelectorAll('[class^="cards__single_"]');
addonbacks.forEach((xc) => 
{
	if(xc.getAttribute("state")=="flipped")
	{
	xc.classList.toggle("flip");
	xc.setAttribute("state", "back");
	xc.addEventListener("click", flipCard);
 }
});

}