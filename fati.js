let nombresecret = Math.floor(matchMedia.random()*10)+1;
let tentative;
let score=0;
do {
    Tentative=parseInt(prompt("devinez un nombre entre 1 et 10:"));
    score++;
    if(tentative<nombresecret){
        console.log("c'est plus grand");
    }else if(tentative>nombresecret){
        console.log("c'est plus petit");
    }else{
        console.log("bravo!")
    }
}while(Tentative!==nombresecret);
console.log("score:",score);
