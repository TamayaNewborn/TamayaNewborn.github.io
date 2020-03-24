class Toys {

    constructor(name, price, age, rating, pic){
        this.name = name;
        this.price = price; 
        this.age = age; 
        this.rating = rating;
        this.pic = pic;
    }

    get details(){
        return `${this.name} is a ${this.price}`;
    }

    get item(){
        let toySection = document.createElement("section");
        toySection.classList.add("toy");

        //create picture
        let imgElem = document.createElement("img");
        imgElem.src= `images/${this.pic}`;
        toySection.append(imgElem);

        let infoSection = document.createElement("section");
        toySection.append(infoSection);

        //create title
        let h3Elem = document.createElement("h3");
        h3Elem.innerText = this.name;
        infoSection.append(h3Elem);

        //create list
        let ulElem = document.createElement("ul");
        infoSection.append(ulElem);
        let liPriceElem = document.createElement("li");
        liPriceElem.innerText = `Price: ${this.price}`;
        ulElem.append(liPriceElem);

        let liAgeElem = document.createElement("li");
        liAgeElem.innerText = `Age: ${this.age}`;
        ulElem.append(liAgeElem);

        let liRatingElem = document.createElement("li");
        liRatingElem.innerText = `Rating: ${this.rating}`;
        ulElem.append(liRatingElem);

        return toySection;
    }

}

//After the DOM has been loaded
//After all the HTML elemnts have been rendered
window.onload = function(){
    let toys = [];
    toys.push(new Toys("Barbie Doll", "20.99", "4-10", "5 stars",  "barbie.jpg"));
    let toyListDiv = document.getElementById("toy-list");

    for(let i in toys){
        toyListDiv.append(toys[i].item);
    }

}

window.onload = function(){
    let toys1 = [];
    toys1.push(new Toys("Barbie Doll", "20.99", "4-10", "5 stars","bratz.jpg"));
    let toyListDiv1 = document.getElementById("toy1-list");

    for(let i in toys1){
        toyListDiv1.append(toys1[i].item);
    }

}

window.onload = function(){
    let toys2 = [];
    toys2.push(new Toys("Barbie Doll", "20.99", "4-10", "5 stars", "Webp.net-resizeimage.jpg"));
    let toyListDiv2 = document.getElementById("toy2-list");

    for(let i in toys2){
        toyListDiv2.append(toys2[i].item);
    }

}

