function changePic() {
    console.log("Turn Face Function");
    
    if (btn.innerHTML == "images/walking_man.png") 
        {
            btn.innerHTML == "images/running_man.png";
        } 

                    
}



function isBlank(data, errorSpanId){
    if(data.trim() == "") {
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.remove("hidden");
        return true;
    }
    return false;
}

/* filling thermometer function */
function thermFill(){
    //gather information
    const fundsAmount = document.getElementById("txt-funds").value;

    //validate
    const firstError = isBlank(fundsAmount, "error-funds");
    if(firstError) return;

    //display results

}

const btnMan = document.getElementById("btn-man");
btnMan.onclick = changePic;

