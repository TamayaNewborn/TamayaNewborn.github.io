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

        //let moviesSection = document.createElement("section");
        let h3Elem = document.createElement("h3");
        h3Elem.innerText = movies.title;
        let h2Elem = document.createElement("h2");
        h2Elem.innerText = ` ${movies.title}`;
        moviesSection.append(h2Elem);

        let ulElem = document.createElement("ul");
        moviesSection.append(ulElem);

         //movie image
         let moviesImg = document.createElement("IMG");
         moviesImg.classList.add("moviesImg");
         moviesImg.src = `images/${movies.title}.jpg`;
         moviesImgSection.append(moviesImg);
         moviesSection.append(moviesImgSection);
    
        //director
        let liDirector = document.createElement("li");
        liDirector.innerHTML = `<b> Director: </b> ${movies.director}`;
        ulElem.append(liDirector);

        //actors
        let liActors = document.createElement("li");
        liActors.innerHTML = `<b> Actors:</b> ${movies.actors.join(', ')}`;
        ulElem.append(liActors);

        //year
        let liYear = document.createElement("li");
        liYear.innerHTML = `<b> Year:</b> ${movies.year}`;
        ulElem.append(liYear);

        //genres
        let liGenres = document.createElement("li");
        liGenres.innerHTML = `<b> Genres:</b> ${movies.genres.join(', ')}`;
        ulElem.append(liGenres);

        //description 
        let liDescription = document.createElement("li");
        liDescription.innerHTML = `<b> Description:</b> ${movies.description}`;
        ulElem.append(liDescription);


        return moviesSection;
    }
}

window.onload = function(){
    this.showMovies();
}