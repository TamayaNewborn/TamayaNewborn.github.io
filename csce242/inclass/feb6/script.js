function displayEmotion() {
    //gather all 3 pieces of information & write to console
    const firstName = document.getElementById("txt-first-name").value;
    const favColor = document.getElementById("txt-fav-color").value;
    const emotion = document.getElementById("txt-emotion").value;

    let displayP= document.getElementById("ex1-result");
    let displayEmotion = document.getElementById("ex1-emotion");

    /*
    let price = parseFloat(document.getElementById("txt-price").value)
    parseInt(...)
    let tax = document.getElementById("tax-span").textContent() --maybe parsens--
    */

    //clear all errors before

    //validate data
    const firstError = isBlank(firstName, "error-name");
    const secondError = isBlank(favColor, "error-fav-color");
    const thridError = isBlank(emotion, "error-emotion");

    if(firstError || secondError || thridError) return;
    
    /* displayP.innerHTML = `${firstName} your fav color is ${favColor}`; */

    //display results
    displayP.innerHTML = `Welcome ${firstName} <br />
                         you are ${emotion} today`;
    displayEmotion.innerHTML = `${getEmoji(emotion)}`;
    displayEmotion.classList.remove("red" , "green" , "blue" , "yellow");
    displayEmotion.classList.add(favColor.toLowerCase());

}

function isBlank(data , errorSpanId){
    if(data.trim() == ""){
        let errorSpan = document.getElementById(errorSpanId); //another acceptable line just add errorSpanID up top
        errorSpan.classList.remove("hidden"); //if left blank from the hidden word blank beside it 
        return true;
    }
    return false;
}

function getEmoji(emotion){
    const emoCI = emotion.toLowerCase();

    if(emoCI == "happy"){
        return ":)";
    }
    else if(emoCI== "sad"){
        return ":(";
    }
    else if(emoCI == "silly"){
        return ":p";
    }
    else if(emoCI == "angry"){
        return "<:|";
    }
    return "";
}

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayEmotion;