//changing of quotes
const quotes = [ "Whatever you do, do it well - Walt Disney" ,
                "Never let your emotions over power your intelligence - Drake" , 
                "Happiness comes from you. No one else can make you happy. You make you happy - Beyonce" , 
                "Love is composed of a single soul inhabiting two bodies - Aristole" , 
                 "Never let the fear of striking out keep you from playing the game - Babe Ruth"];

let viewQuotes = document.getElementById("view-quotes");

function displayQuotes() {
    var x = 1;
    viewQuotes.innerHTML =`${quotes[x]}`;
    x++;
    if(x >= quotes.length) {
        x = 0;
      }
  }
  viewQuotes.innerHTML = `${quotes[0]}`;
  setInterval(displayQuotes, 2000);  //change every 2 seconds
  
//creation of rainbow
function redLine() {
    let redLine = document.getElementById("view-rainbow");
    red.innerHTML = "red";
    redLine.append(red);
  }

  function orangeLine() {
    let orangeLine = document.getElementById("view-rainbow");
    orange.innerHTML = "orange";
    orangeLine.append(orange);
  }

  function yellowLine() {
    let yellowLine = document.getElementById("view-rainbow");
    yellow.innerHTML = "yellow";
    yellowLine.append(yellow);
  }

  function greenLine() {
    let greenLine = document.getElementById("view-rainbow");
    green.innerHTML = "green";
    greenLine.append(green);
  }

  function blueLine() {
    let blueLine = document.getElementById("view-rainbow");
    blue.innerHTML = "blue";
    blueLine.append(blue);
  }

  function indigoLine() {
    let indigoLine = document.getElementById("view-rainbow");
    indigo.innerHTML = "indigo";
    indigoLine.append(indigo);
  }

  function violetLine() {
    let violetLine = document.getElementById("view-rainbow");
    let violet = document.createElement("p");
    violet.id = "violet";
    violet.innerHTML = "violet";
    violetLine.append(violet);
  
  }
  function rainbowTimer() {
    setTimeout(redLine, 1000);
    setTimeout(orangeLine, 2500);
    setTimeout(yellowLine, 4000);
    setTimeout(greenLine, 5500);
    setTimeout(blueLine, 7000);
    setTimeout(indigoLine, 8500);
    setTimeout(violetLine, 10000);
  }
  let displayRainbow = document.getElementById("btn-rainbow")
  displayRainbow.onclick = rainbowTimer;

 
