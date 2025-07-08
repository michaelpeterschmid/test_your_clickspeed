// Wenn der User auf den Button klickt wird der counter um 1 inkrementiert
function increment_counter(){
    // beim ersten mal wird die timer funktion aufgerufen.
    if(counter==0){
        setTimeout(function(){timer();},1000);
    }
    if(seconds > 0){
        counter ++;
        document.getElementById("current_score").innerHTML = counter;
    }                
}

// die timerfunktion ruft sich jede sekunde selbst neu auf bis der sekundenwert = 10 ist.
function timer(){
    seconds --
    document.getElementById("time").innerHTML = seconds;
    if (seconds > 0){
        //setTimeout(function(){timer();},1000);
        setTimeout(timer, 1000);
        //falls der counter nicht mehr kleiner als 10 ist wird die show funktion aufgerufen
    }else{
        show();
    }
}

// Die showfunktion zeigt die Statistiken des Durchgangs
function show(){
    var resultdiv = document.getElementById("result");
    resultdiv.style = "display: block;";
    // hier berechne ich den durchschnittlichen Clickspeed/s
    var clickspeed = counter / 10

    //Ausgehend vom Wert des Clickspeeds wird der Hintegrund und die swiftness Variable gesetzt.
    document.getElementById("clickspeed").innerHTML = "<b>"+clickspeed+"</b>";

    var bild = document.getElementById("img");
    var swiftness = "SLOW";

    if(clickspeed < 5){
        bild.setAttribute("src", "schnecke.png");

    }if(clickspeed >= 5 ){
        bild.setAttribute("src", "maus.png");
        swiftness = "MEDIUM";

    }if(clickspeed >= 10){
        bild.setAttribute("src", "gepard.png");
        swiftness = "FAST";
    }
    document.getElementById("swiftness").innerHTML = "<b>"+swiftness+"</b>";
}

// Falls der user den result div per buttonklick schliesst, werden sämtliche WErte zurückgesetzt.
function set_back(){
    var resultdiv = document.getElementById("result");
    resultdiv.style = "display: none;"
    counter = 0;
    seconds = 10;
    document.getElementById("time").innerHTML = seconds;
    document.getElementById("current_score").innerHTML = counter;
}

var counter = 0;
var seconds = 10;