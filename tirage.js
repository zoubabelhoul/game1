let scoreHumain = 0;
let scoreOrdinateur = 0;

function tirerDe() {
    return Math.floor(Math.random() * 6) + 1;
}

function jouer() {

    let humain = tirerDe();
    let ordinateur = tirerDe();

    document.getElementById("tirageHumain").textContent = humain;
    document.getElementById("tirageOrdinateur").textContent = ordinateur;

    let message = document.getElementById("message");

    if (humain > ordinateur) {
        scoreHumain += 1;
        message.textContent = "✅ Vous avez gagné ce tour";
    } 
    else {
        scoreHumain -= 0.25;

        if(scoreHumain < 0){
            scoreHumain = 0;
        }

        scoreOrdinateur += 1;
        message.textContent = "❌ Vous avez perdu ce tour";
    }

    document.getElementById("scoreHumain").textContent = scoreHumain;
    document.getElementById("scoreOrdinateur").textContent = scoreOrdinateur;

    if(scoreHumain >= 10 || scoreOrdinateur >= 10){

        if(scoreHumain >= 10){
            alert("🏆 L'humain a gagné !");
        }
        else{
            alert("🏆 L'ordinateur a gagné !");
        }

        reinitialiser();
    }
}

function reinitialiser(){

    scoreHumain = 0;
    scoreOrdinateur = 0;

    document.getElementById("scoreHumain").textContent = "0";
    document.getElementById("scoreOrdinateur").textContent = "0";

    document.getElementById("tirageHumain").textContent = "-";
    document.getElementById("tirageOrdinateur").textContent = "-";

    document.getElementById("message").textContent = "";
}
