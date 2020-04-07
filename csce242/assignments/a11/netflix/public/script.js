async function getShows(){
    let response = await fetch("http://localhost:3000/api/netflix");
    let showsJSON = await response.json();
    let showsDiv = document.getElementById("show-list");

    for(i in showsJSON){
        let show = showsJSON[i];
        showsDiv.append(getShowItem(show));
    }
}

function getShowItem(show){
    let showSection = document.createElement("section");

    let imgElem = document.createElement("img");
    imgElem.src = "http://localhost:3000/" + show.img;
    showSection.append(imgElem);  

    let h3Elem = document.createElement("h3");
    h3Elem.innerHTML = `<b> <font size =7>${show.name} </font></b>`;
    showSection.append(h3Elem);

    let seasonsP = document.createElement("p");
    seasonsP.innerHTML = `<b><font size = 4> Number of Seasons: </font> </b >${show.seasons}`;
    showSection.append(seasonsP);

    let genreP = document.createElement("p");
    genreP.innerHTML = `<b><font size = 4>Genre: </font> </b >${show.genre}`;
    showSection.append(genreP);

    let starringP = document.createElement("p");
    starringP.innerHTML = `<b><font size = 4> Starring: </font> </b >${show.starring}`;
    showSection.append(starringP);

    let descriptionP = document.createElement("p");
    descriptionP.innerHTML = `<b><font size = 4> Description: </font> </b >${show.description}`;
    showSection.append(descriptionP);

    let ratingP = document.createElement("p");
    ratingP.innerHTML = `<b><font size = 4> Rating: </font> </b >${show.rating}`;
    showSection.append(ratingP);

    return showSection;
}

window.onload = function(){
    getShows();
}