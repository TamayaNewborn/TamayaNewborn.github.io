async function displayShows(){
    let response = await fetch(`api/shows/`);
    let factsJSON = await response.json();
    let factsDiv = document.getElementById("show-list");
    factsDiv.innerHTML = "";

    for(i in factsJSON){
        let facts = factsJSON[i];
        factsDiv.append(getShowInfo(facts));
    }
}

//click on show and get it's info displayed
function getShowInfo(fact){
    let factsSection = document.createElement("section");
    factsSection.classList.add("fact");

    let aTitle = document.createElement("a");
    aTitle.setAttribute("data-id" , fact.id);
    aTitle.href = "#";
    aTitle.onclick = showShowInfo;
    let h3Elem = document.createElement("h3");
    h3Elem.textContent = fact.name;
    aTitle.append(h3Elem);
    factsSection.append(aTitle);

    return factsSection;
}

async function showShowInfo(){
    let id = this.getAttribute("data-id");
    let response = await fetch(`/api/shows/${id}`);

    if(response.status != 200){
        //display an error
        console.log("Error reciving show");
        return;
    }

    let fact = await response.json();
    document.getElementById("show-id").textContent = fact.id;
    document.getElementById("txt-name").value = fact.name;
    document.getElementById("txt-station").value = fact.station;
    document.getElementById("txt-seasons").value = fact.seasons;
    document.getElementById("txt-run-time").value = fact.run;
    document.getElementById("txt-rating").value = fact.rating;

}

async function addShow(){
    let showName = document.getElementById("txt-add-name").value;
    let showStation = document.getElementById("txt-add-stations").value;
    let showSeasons = document.getElementById("txt-add-seasons").value;
    let showRunTime = document.getElementById("txt-add-run-time").value;
    let showRating = document.getElementById("txt-add-rating").value;

    let show = {"name":showName, "station": showStation,"seasons": showSeasons, "run": showRunTime, "rating": showRating};
    
    let response = await fetch(`/api/shows`,{
        method:"POST",
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        body:JSON.stringify(show),
    });

    if(response.status != 200){
        console.log("ERROR posting data");
        return;
    }

    let result = await response.json();
    console.log(result);
    displayShows();
}

async function editShow(){
    let showId = document.getElementById("show-id").textContent;
    let showName = document.getElementById("txt-name").value;
    let showStation =document.getElementById("txt-station").value;
    let showSeasons =document.getElementById("txt-seasons").value;
    let showRunTime =document.getElementById("txt-run-time").value;
    let showRating =document.getElementById("txt-rating").value;


    let show = {"name": showName , "station": showStation , "seasons": showSeasons, "run": showRunTime, "rating": showRating};

    let response = await fetch(`/api/shows/${showId}`,{       
        method:"PUT",
        headers:{
            'Content-Type':`application/json;charset=utf-8`,
        },
        body: JSON.stringify(show),
    });

    if(response.status != 200){
        console.log("ERROR updating facts");
        return;
    }

    let result = await response.json();
    displayShows();
}

async function deleteShow(){
    let showId = document.getElementById("show-id").textContent;
    
    let response = await fetch(`/api/shows/${showId}`,{
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
    displayShows();
}


function toggleNav() {
    let navItems = document.getElementById("main-nav-items");
    navItems.classList.toggle("hidden");
}

function toggleEdit() {
    let navEdit = document.getElementById("show-details");
    navEdit.classList.toggle("hidden");
}

function toggleAdd() {
    let navEdit = document.getElementById("add-show");
    navEdit.classList.toggle("hidden");
}


window.onload= function(){
    this.displayShows();

    let addBtn = document.getElementById("btn-add-show");
    addBtn.onclick = addShow;

    let editBtn = document.getElementById("btn-edit-show");
    editBtn.onclick = editShow;

    let deleteBtn = document.getElementById("btn-delete-show");
    deleteBtn.onclick = deleteShow;

    const navToggle = document.getElementById("nav-toggle");
    navToggle .onclick = toggleNav;

    const navToggleEdit = document.getElementById("btn-edit");
    navToggleEdit.onclick = toggleEdit;

    const navToggleAdd = document.getElementById("btn-add");
    navToggleAdd.onclick = toggleAdd;
    
}
