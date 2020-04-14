async function displayArtists(){
    let response = await fetch(`api/artists/`);
    let factsJSON = await response.json();
    let factsDiv = document.getElementById("artist-list");
    factsDiv.innerHTML = "";

    for(i in factsJSON){
        let facts = factsJSON[i];
        factsDiv.append(getArtistInfo(facts));
    }
}

//click on artist and get it's info displayed
function getArtistInfo(fact){
    let factsSection = document.createElement("section");
    factsSection.classList.add("fact");

    let aTitle = document.createElement("a");
    aTitle.setAttribute("data-id" , fact.id);
    aTitle.href = "#";
    aTitle.onclick = showArtistInfo;
    let h3Elem = document.createElement("h3");
    h3Elem.textContent = fact.name;
    aTitle.append(h3Elem);
    factsSection.append(aTitle);

    return factsSection;
}

async function showArtistInfo(){
    let id = this.getAttribute("data-id");
    let response = await fetch(`/api/artists/${id}`);

    if(response.status != 200){
        //display an error
        console.log("Error reciving artist");
        return;
    }

    let fact = await response.json();
    document.getElementById("artist-id").textContent = fact.id;
    document.getElementById("txt-name").value = fact.name;
    document.getElementById("txt-bday").value = fact.bday;
    document.getElementById("txt-sign").value = fact.sign;
    document.getElementById("txt-hometown").value = fact.hometown;
    document.getElementById("txt-song").value = fact.song;

}

async function addArtist(){
    let artistName = document.getElementById("txt-add-name").value;
    let artistBDay = document.getElementById("txt-add-bday").value;
    let artistSign = document.getElementById("txt-add-sign").value;
    let artistHometown = document.getElementById("txt-add-hometown").value;
    let artistSong = document.getElementById("txt-add-song").value;

    let artist = {"name":artistName, "bday": artistBDay,"sign": artistSign, "hometown": artistHometown, "song": artistSong};
    
    let response = await fetch(`/api/artists`,{
        method:"POST",
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        body:JSON.stringify(artist),
    });

    if(response.status != 200){
        console.log("ERROR posting data");
        return;
    }

    let result = await response.json();
    console.log(result);
    displayArtists();
}

async function editArtist(){
    let artistId = document.getElementById("artist-id").textContent;
    let artistName = document.getElementById("txt-name").value;
    let artistBDay =document.getElementById("txt-bday").value;
    let artistSign =document.getElementById("txt-sign").value;
    let artistHometown =document.getElementById("txt-hometown").value;
    let artistSong =document.getElementById("txt-song").value;


    let artist = {"name": artistName , "bday": artistBDay , "sign": artistSign, "hometown": artistHometown, "song": artistSong};

    let response = await fetch(`/api/artists/${artistId}`,{       
        method:"PUT",
        headers:{
            'Content-Type':`application/json;charset=utf-8`,
        },
        body: JSON.stringify(artist),
    });

    if(response.status != 200){
        console.log("ERROR updating facts");
        return;
    }

    let result = await response.json();
    displayArtists();
}

async function deleteArtist(){
    let artistId = document.getElementById("artist-id").textContent;
    
    let response = await fetch(`/api/artists/${artistId}`,{
        method:"DELETE",
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        }
    });

    if(response.status != 200){
        console.log("Error deleting");
        return;
    }

    let result = await response.json();
    displayArtists();
}


window.onload= function(){
    this.displayArtists();

    let addBtn = document.getElementById("btn-add-artist");
    addBtn.onclick = addArtist;

    let editBtn = document.getElementById("btn-edit-artist");
    editBtn.onclick = editArtist;

    let deleteBtn = document.getElementById("btn-delete-artist");
    deleteBtn.onclick = deleteArtist;
}