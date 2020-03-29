async function showMovies(){
    let response = await fetch('https://portiaportia.github.io/csce242/json/movies.json');
    let moviesJSON = await response.json();
    let moviesSection = document.getElementById("movies-list");

    for(i in moviesJSON){
        let movies = moviesJSON[i];
        moviesSection.append(getMovieItem(movies));
    }

    function getMovieItem(movies){
        let moviesSection = document.createElement("section");
        moviesSection.classList.add("movies");
        let moviesImgSection = document.createElement("section");

        //movie image
        let moviesImg = document.createElement("IMG");
         moviesImg.classList.add("moviesImg");
         moviesImg.src = ` https://portiaportia.github.io/csce242/json/images ${movies.img}`;
         moviesImgSection.append(moviesImg);
         moviesSection.append(moviesImgSection);
    
        //let moviesSection = document.createElement("section");
        let h3Elem = document.createElement("h3");
        h3Elem.innerText = movies.title;
        let h2Elem = document.createElement("h2");
        h2Elem.innerHTML = `<center> ${movies.title}</center>`;
        moviesSection.append(h2Elem);

        let ulElem = document.createElement("ul");
        moviesSection.append(ulElem);  
         
        //director
        let pDirector = document.createElement("p");
        pDirector.innerHTML = `<b> Director: </b> ${movies.director}`;
        ulElem.append(pDirector);

        //actors
        let pActors = document.createElement("p");
        pActors.innerHTML = `<b> Actors:</b> ${movies.actors.join(', ')}`;
        ulElem.append(pActors);

        //year
        let pYear = document.createElement("p");
        pYear.innerHTML = `<b> Year:</b> ${movies.year}`;
        ulElem.append(pYear);

        //genres
        let pGenres = document.createElement("p");
        pGenres.innerHTML = `<b> Genres:</b> ${movies.genres.join(', ')}`;
        ulElem.append(pGenres);

        //description 
        let pDescription = document.createElement("p");
        pDescription.innerHTML = `<b> Description:</b> ${movies.description}`;
        ulElem.append(pDescription);


        return moviesSection;
    }
}

window.onload = function(){
    this.showMovies();
}