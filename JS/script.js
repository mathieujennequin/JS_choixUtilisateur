var nombre = prompt("Vous ouvrez la porte n°");
switch (nombre) {
    case "1" :
        document.getElementById('orange').style.display = "none";
        document.getElementById("kiwi").innerHTML = "Vous ouvrez une porte et un loup-garou vous attaque!";
        document.getElementById("loupgarou").style.display="block";
        break;

    case "2" :
        document.getElementById('orange').style.display = "none";
        document.getElementById("kiwi").innerHTML = "Vous ouvrez une porte et un vampire vous attaque!";
        document.getElementById("vampire").style.display="block";
        break;

    case "3" :
        document.getElementById('orange').style.display = "none";
        document.getElementById("kiwi").innerHTML = "Vous ouvrez une porte et un squelette vous attaque!";
        document.getElementById("squelette").style.display="block";
        break;

    case "4" :
        document.getElementById('orange').style.display = "none";
        document.getElementById("kiwi").innerHTML = "Vous ouvrez une porte et un fantôme vous attaque!";
        document.getElementById("fantome").style.display="block";
        break;
    default :
        document.getElementById('orange').style.display = "none";
        document.getElementById("kiwi").innerHTML = "Vous n'avez pas entré un nombre correct";
}