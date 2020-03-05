//let width = 100;


function showToys() {
    const toys = ["drum", "ball", "car", "bike"];
    let toysResults = document.getElementById("toys-results");
    toysResults.innerHTML = "";
    let ulElem = document.createElement("ul");
    toysResults.append(ulElem);
    

    //loop through and display as a ul li list 
    for(let i in toys) {
        let liElem = document.createElement("li");
        liElem.textContent = toys[i];
        ulElem.append(liElem);

        //highlight everyother line in the li 
        if(i % 2) {
            liElem.classList.add("highlight");
        } 
    } 
}

let color = "red";

function toysToggle() {
    let toysResults = document.getElementById("toys-results");
    toysResults.classList.toggle("hidden");
    toysResults.style.backgroundColor = color;

    if(color == "pink" && !toysResults.classList.contains("hidden")) {
        color = "green";
    }
    else if(color == "green" && !toysResults.classList.contains("hidden")) {
        color = "pink";
    }

}

showToys();

//list showing every 2 seconds
setInterval(toysToggle, 2000);

/*
const btnToys = document.getElementById("btn-toys");
btnToys.onclick = toysToggle;
*/