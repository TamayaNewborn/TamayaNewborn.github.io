class Dog {
    
    constructor(title , breed , color , age , size , pic) {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic; 
    }

    //will print out "tipsy is a yorkie in the console"
    get details() {
        return `${this.title} is a ${this.breed}`; 
    }  

    get info(){
        let dogSection = document.createElement("section");

        //create title
        let h3Elem = document.createElement("h3");
        h3Elem.innerText = this.title;
        infoSection.append(h3Elem);

        //adding image 
        let imgElem = document.createElement('imgElem'); 
        imgElem.src = `images/${this.pic}`;
        dogSection.append(imgElem);

        let infoSection = document.createElement("info");
        infoSection.append(info);

        //create list
        let ulElem = document.createElement("ul");
        infosection.append(ulElem);
        let liBreedElem = document.createElement("li");
        liBreedElem.innerText = `Breed: ${this.breed}`;
        ulElem.append(liBreedElem);

        let liColorElem = document.createElement("li");
        liColorElem.innerText = `Color: ${this.color}`;
        ulElem.append(liColorElem);

        let liAgeElem = document.createElement("li");
        liAgeElem.innerText = `Age: ${this.age}`;
        ulElem.append(liAgeElem);

        let liSizeElem = document.createElement("li");
        liSizeElem.innerText = `Breed: ${this.size}`;
        ulElem.append(liSizeElem);

        return dogSection;
    }
}


//after the DOM has been loaded
//after all the HTML elements have been rendered
window.onload = function() {
    let myDog  = new Dog("Tipsy" , "Yorkie" , "brown" , 5 , "small" , "puppy1.jpg")
   // console.log(myDog.details);
   let dogListDiv = document.getElementById("dog-list");
   dogListDiv.append(myDog.info)

}