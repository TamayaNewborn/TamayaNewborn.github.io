async function showBreweries(){
    let response = await fetch('https://api.openbrewerydb.org/breweries');
    let breweriesJSON = await response.json();
    let breweriesSection = document.getElementById("breweries-list");
    
    //loop through the breweries
    for(i in breweriesJSON){
        let brewery = breweriesJSON[i];
        breweriesSection.append(getBreweryItem(brewery));
    }
}

function getBreweryItem(brewery){
    let brewerySection = document.createElement("section");
    brewerySection.classList.add("brewery");

    let aElem = document.createElement("a");
    let h3Elem = document.createElement("h3");
    
    h3Elem.innerText = brewery.name;
    aElem.append(h3Elem);
    aElem.href = brewery.website_url;
    brewerySection.append(aElem);

    let h4Elem = document.createElement("h4");
    h4Elem.textContent = `Type: ${brewery.brewery_type}`;
    brewerySection.append(h4Elem);

    brewerySection.append(getBreweryAddress(brewery));

    return brewerySection;
}

function getBreweryAddress(brewery){
    let pAddress = document.createElement("p");
    pAddress.innerHTML += `Address: ${brewery.street}<br> ${brewery.city}, ${brewery.state}<br> ${brewery.country} ${brewery.postal_code}`;
    return pAddress;
}

window.onload = function(){
    this.showBreweries();
}