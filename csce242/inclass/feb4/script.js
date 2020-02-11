function showBoy(){
    console.log("Boyfunctions");
    let title = document.getElementById("title");
    title.innerHTML = "Boy";
    let item1 = document.getElementById("item-1");
    item1.innerHTML = " trucks";
    let item2 = document.getElementById("item-2");
    item2.innerHTML = " toys";
    let item3 = document.getElementById("item-3");
    item3.innerHTML = " sports";
}

function showGirl(){
    let title = document.getElementById("title");
    title.innerHTML = "Girl";
    let item1 = document.getElementById("item-1");
    item1.innerHTML = " sparkles";
    let item2 = document.getElementById("item-2");
    item2.innerHTML = " pink";
    let item3 = document.getElementById("item-3");
    item3.innerHTML = " dolls";
}

function sadFace(){
    let btnSad = document.getElementById("btn-sad");
    btnSad.src = "sadface.jpg.jp2";
}

function happyFace(){
    let btnHappy = document.getElementById("btn-happy");
}

let btnBoy = document.getElementById("btn-boy");
btnBoy.onclick = showBoy;

let btnGirl = document.getElementById("btn-girl");
btnGirl.onclick = showGirl;

let btnSad = document.getElementById("btn-sad");
btnSad.onclick = sadFace;



