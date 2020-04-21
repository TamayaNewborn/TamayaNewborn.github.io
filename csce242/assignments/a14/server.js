const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.static("public"));
app.use(express.json());

let facts = [
    {id:1 , name: "Hannah Montana" , station: "Disney Channel" , seasons: "4" , run: "March 24, 2006 - January 16, 2011" , rating: "4.5/5"},
    {id:2 , name: "That's So Raven" , station: "Disney Channel", seasons: "4" , run: "January 17, 2003 - November 10, 2007" , rating: "4.7/5"},
    {id:3 , name: "Zoey 101" , station: "Nickelodeon", seasons: "4", run: "January 9, 2005 -  May 2, 2008", rating: "4.6/5"},
    {id:4 , name: "Victorious" , station: "Nickelodeon", seasons: "4" , run: " March 27, 2010 - February 2, 2013" , rating: "4.4/5"},
    {id:5 , name: "The Amanda Show" , station: "Nickelodeon", seasons: "3" , run: " October 16, 1999 - September 21, 2002" , rating: "4.5/5"},
    {id:6 , name: "Good Luck Charlie" , station: "Disney Channel", seasons: "4" , run: "April 4, 2010 - February 16, 2014" , rating: "4.6/5"}

];


app.get(`/` , (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get(`/api/shows`, (req,res)=>{
    res.send(facts);
});

app.get(`/api/shows/:id`,(req,res)=>{
    const fact = facts.find(r => r.id == parseInt(req.params.id));

    if(!fact) res.status(404).send("The fact with the given id was not found");

    res.send(fact);
});

app.post(`/api/shows`, (req,res)=>{
    const result = validateFact(req.body);
    
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    
    const fact = {
        id:facts.length+1,
        name:req.body.name,
        station:req.body.station,
        seasons:req.body.seasons,
        run:req.body.run,
        rating:req.body.rating,

    };
    facts.push(fact);
    res.send(fact);
});

app.put(`/api/shows/:id`,(req,res) =>{
    const fact = facts.find(r => r.id == parseInt(req.params.id));

    if(!fact) res.status(404).send("Fact with given id was not found");

    const result = validateFact(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    fact.name = req.body.name;
    fact.station = req.body.station;
    fact.seasons = req.body.seasons;
    fact.run = req.body.run;
    fact.rating = req.body.rating;

    res.send(fact);
});

//will delete a fact 
app.delete(`/api/shows/:id`,(req,res) =>{
    const fact = facts.find(r => r.id === parseInt(req.params.id));

    if(!fact){
        req.status(404).send("This fact with the given id was not found");
    }

    const index = facts.indexOf(fact);
    facts.splice(index,1);

    res.send(fact);
});

//will check requirements of user input
function validateFact(fact){
    const schema = {
        name:Joi.string().min(3).required(),
        station:Joi.string().min(3).required(),
        seasons:Joi.string().min(1).required(),
        run:Joi.string().min(3).required(),
        rating:Joi.string().min(1).required()

    };

    return Joi.validate(fact,schema);
}

app.listen(3000 , ()=>{
    console.log("listening on port 3000");
})