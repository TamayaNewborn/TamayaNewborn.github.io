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

function isNotValidNum(data, errorSpanId){
    if(isNaN(data)) {
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.remove("hidden");
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

function displayNumbers() {
    //gather all 3 pieces of information & write to console
    let start = parseInt(document.getElementById("txt-start").value);
    let end = parseInt(document.getElementById("txt-end").value);
    //let results = document.getElementById("ex3-number");

    //if either number is not a number show error appropriately
    if(isNotValidNum(start, "error-start") | isNotValidNum(end, "error-end"))return;

    //if endNum is <= startNum show an error appropratiely
    if(start >= end){
        results.innerHTML = "Ending number cannot be greater then the starting";
        return;
    }

    /*
   results.innerHTML = "Counting! <ul>";
    
   for(let i = start; i <= end; i++){
        results.innerHTML += `<li>${i}</li>`;
    }
   
   results.innerHTML += "All Done!</ul>";
    */

    let h3Elem = document.createElement("h3");
    h3Elem.textContent = "Counting:";
    btnCount.after(h3Elem);

    let ulElem = document.createElement("ul");
   // results.append(ulElem);
   h3Elem.after(ulElem);

    for(let i = start; i <= end; i++){
        let liElem = document.createElement("li");
        liElem.textContent = i;
        ulElem.append(liElem);
    }
}

function displayStuff(){
    let h3Elem = document.createElement("cookieInfo");
    h3Elem.textContent = "I Love Cookies";
    btnStuff.after(h3Elem);
    let ulElem = document.createElement("ul");
    h3Elem.after(ulElem);

    let pElem = document.createElement("end-title");
    pElem.textContent = "Cookie Time!";
    btnStuff.after(pElem);
}
    


const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayEmotion;

const btnCount = document.getElementById("btn-count");
btnCount.onclick = displayNumbers;

const btnStuff = document.getElementById("btn-stuff");
btnStuff.onclick = displayStuff;