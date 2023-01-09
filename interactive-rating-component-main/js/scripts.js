const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");

var num1 = document.getElementsByClassName("circle")[1];
var num2 = document.getElementsByClassName("circle")[2];
var num3 = document.getElementsByClassName("circle")[3];
var num4 = document.getElementsByClassName("circle")[4];
var num5 = document.getElementsByClassName("circle")[5];



//función que nos enseña la otra cara de la tarjeta
function secondCard() {
    card1.style.display = "none";
    card2.style.display = "block";
}

function optionClicked(num) {
    switch (num) {
        case 1:
            num1.style.backgroundColor = "hsl(25, 97%, 53%)";
            num1.style.color = "hsl(0, 0%, 100%)";
            document.getElementById("finalNum").innerHTML = "1";

            num2.style.backgroundColor = "hsl(216, 12%, 8%)";
            num2.style.color = "hsl(216, 12%, 54%)";
            num3.style.backgroundColor = "hsl(216, 12%, 8%)";
            num3.style.color = "hsl(216, 12%, 54%)";
            num4.style.backgroundColor = "hsl(216, 12%, 8%)";
            num4.style.color = "hsl(216, 12%, 54%)";
            num5.style.backgroundColor = "hsl(216, 12%, 8%)";
            num5.style.color = "hsl(216, 12%, 54%)";
        break;

        case 2:
            num2.style.backgroundColor = "hsl(25, 97%, 53%)";
            num2.style.color = "hsl(0, 0%, 100%)";
            document.getElementById("finalNum").innerHTML = "2";

            num1.style.backgroundColor = "hsl(216, 12%, 8%)";
            num1.style.color = "hsl(216, 12%, 54%)";
            num3.style.backgroundColor = "hsl(216, 12%, 8%)";
            num3.style.color = "hsl(216, 12%, 54%)";
            num4.style.backgroundColor = "hsl(216, 12%, 8%)";
            num4.style.color = "hsl(216, 12%, 54%)";
            num5.style.backgroundColor = "hsl(216, 12%, 8%)";
            num5.style.color = "hsl(216, 12%, 54%)";
        break;

        case 3:
            num3.style.backgroundColor = "hsl(25, 97%, 53%)";
            num3.style.color = "hsl(0, 0%, 100%)";
            document.getElementById("finalNum").innerHTML = "3";

            num1.style.backgroundColor = "hsl(216, 12%, 8%)";
            num1.style.color = "hsl(216, 12%, 54%)";
            num2.style.backgroundColor = "hsl(216, 12%, 8%)";
            num2.style.color = "hsl(216, 12%, 54%)";
            num4.style.backgroundColor = "hsl(216, 12%, 8%)";
            num4.style.color = "hsl(216, 12%, 54%)";
            num5.style.backgroundColor = "hsl(216, 12%, 8%)";
            num5.style.color = "hsl(216, 12%, 54%)";
        break;

        case 4:
            num4.style.backgroundColor = "hsl(25, 97%, 53%)";
            num4.style.color = "hsl(0, 0%, 100%)";
            document.getElementById("finalNum").innerHTML = "4";

            num1.style.backgroundColor = "hsl(216, 12%, 8%)";
            num1.style.color = "hsl(216, 12%, 54%)";
            num2.style.backgroundColor = "hsl(216, 12%, 8%)";
            num2.style.color = "hsl(216, 12%, 54%)";
            num3.style.backgroundColor = "hsl(216, 12%, 8%)";
            num3.style.color = "hsl(216, 12%, 54%)";
            num5.style.backgroundColor = "hsl(216, 12%, 8%)";
            num5.style.color = "hsl(216, 12%, 54%)";
        break;

        case 5:
            num5.style.backgroundColor = "hsl(25, 97%, 53%)";
            num5.style.color = "hsl(0, 0%, 100%)";
            document.getElementById("finalNum").innerHTML = "5";

            num1.style.backgroundColor = "hsl(216, 12%, 8%)";
            num1.style.color = "hsl(216, 12%, 54%)";
            num2.style.backgroundColor = "hsl(216, 12%, 8%)";
            num2.style.color = "hsl(216, 12%, 54%)";
            num3.style.backgroundColor = "hsl(216, 12%, 8%)";
            num3.style.color = "hsl(216, 12%, 54%)";
            num4.style.backgroundColor = "hsl(216, 12%, 8%)";
            num4.style.color = "hsl(216, 12%, 54%)";
        break;

        

    }



}