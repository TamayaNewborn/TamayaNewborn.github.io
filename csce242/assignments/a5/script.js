function finalCalc() {
    //gather all 3 pieces of information & write to console
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const productName = document.getElementById("product-name").value;
    const productCount = document.getElementById("product-count").value;
    const productPrice = document.getElementById("product-price").value;

    /*
    var field1 = document.getElementById("product-price").value;
    var field2 = document.getElementById("product-count").value;
    var result = parseFloat(field1)*parseFloat(field2).value;

    if(!isNaN(result))
    {
        document.getElementById("answer").innerHTML= "the answer is " +result;
    }
    */

    /*
    let price = parseFloat(document.getElementById("product-price").value)
    /*parseInt(...) 
    let tax = document.getElementById("tax-span").textContent() /*--maybe parsens--
    */
    
    let displayP = document.getElementById("ex1-result");
    displayP.innerHTML = `${firstName} ${lastName} ordered ${productCount} ${productName}(s)`;

}

const btnDisplay = document.getElementById("calc-btn");
btnDisplay.onclick = finalCalc;
