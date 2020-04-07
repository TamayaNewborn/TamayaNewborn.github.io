const express = require("express");
const app = express();
app.use(express.static("public"));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/netflix' , (req,res)=>{
    shows = [];
    shows[0] = {
        name: "You",
        seasons: "2",
        genre: "Crime TV Dramas",
        starring: "Penn Badgley, Elizabeth Lail, Victoria Pedretti, Shay Mitchell",
        description: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        rating: "9/10",
        img:"images/you.jpg"
    }

    shows[1] = {
        name: "Jane The Virgin",
        seasons: "5",
        genre: "Romantic TV Dramas",
        starring: "Gina Rodriguez, Justin Baldoni, Yael Grobglas, Jaime Camil",
        description: " After vowing to remain chaste until marraige, Jane Villanueva learns she's pregnant due to a medical slip-up and has to rethink her future.",
        rating: "7.8/10",
        img:"images/jane.jpg"
    }

    shows[2] = {
        name: "Last Chance U",
        seasons: "4",
        genre: "Sports Documentaries",
        starring: "Buddy Stevens, Jason Brown",
        description: "Elite athletes with difficult pasts turns to junior college football for a last shot at turning their lives around and achieving their dreams.",
        rating: "8.5/10",
        img:"images/lastchance.jpg"
    }

    shows[3] = {
        name: "Gossip Girl",
        seasons: "6",
        genre: "Teen Drama",
        starring: "Blake Lively, Leighton Meester, Penn Badgley, Ed Westwick",
        description: "Rich, unreasonably attractive private school students do horrible, scandalous things to eachother. Repeatedly.",
        rating: "8.5/10",
        img:"images/gossip.jpg"
    }

    shows[4] = {
        name: "The Sinner",
        seasons: "2",
        genre: "Crime TV Dramas",
        starring: "Jessica Biel, Bill Pullman, Christopher Abbott, Dohn Norwood",
        description: "When a chilling murder sends shockwaves through a small town, a haunted hunt for answers unravels a web of sinister secrets.",
        rating: "8.7/10",
        img:"images/sinner.jpg"
    }

    shows[5] = {
        name: "Dead To Me",
        seasons: "1",
        genre: "TV Dramas",
        starring: "Christina Applegate, Linda Cardellini, James Marsden, Max Jenkins",
        description: "A hotheaded widow searching for the hit-and-run driver who mowed down her husband befriends an eccentric optimist who isn't quite what she seems.",
        rating: "8.1/10",
        img:"images/dead.jpg"
    }

    res.json(shows);
})


app.listen(3000, () =>{
    console.log("listening on port 3000");
});