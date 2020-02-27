function displayInfo() {
    //gather all 3 pieces of information & write to console
    const name1 = document.getElementById("txt-name1").value;
    const age1 = document.getElementById("txt-age1").value;
    const name2 = document.getElementById("txt-name2").value;
    const age2 = document.getElementById("txt-age2").value;
    const name3 = document.getElementById("txt-name3").value;
    const age3 = document.getElementById("txt-age3").value;

    
    let displayP = document.getElementById("ex1-result");


    //validate data
    const firstError = isBlank(name1, "error-name1");
    const secondError = isBlank(age1, "error-age1");
    const thirdError = isBlank(name2, "error-name2");
    const fourthError = isBlank(age2, "error-age2");
    const fifthError = isBlank(name3, "error-name3");
    const sixthError = isBlank(age3, "error-age3");


    if(firstError || secondError || thirdError || fourthError || fifthError || sixthError) return;

 

    //display results
    displayP.innerHTML = ` ${songName} by ${artistName}`;

}

function isBlank(data, errorSpanId){
    if(data.trim() == "") {
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.remove("hidden");
        return true;
    }

    return false;
}

function orderAges(){
if(age1 > age2 && age3){
    displayP.innerHTML = `${name1}`;
}
}

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = orderAges;


function toggleNav() {
    let navItems = document.getElementById("main-nav-items");
    navItems.classList.toggle("hidden");
}

const navToggle = document.getElementById("nav-toggle");
navToggle .onclick = toggleNav;