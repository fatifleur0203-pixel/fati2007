let div = document.createElement("div");
div.id = "container";
document.body.appendChild(div);
let p = document.createElement("p");
p.textContent = "ceci est un paragraphe" ;
div.appendChild(p);
p.textContent = "Bonjour  Je suis Fatima Zahra Assarou";
div.addEventListener("click", function(){
    p.textContent = "un clic a ete detecte";
});
