const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.static("public"));
app.use(express.json());

let facts = [
    {id:1 , name: "Drake" , bday: "October 24, 1986" , sign: "Scorpio" , hometown: "Toranto,Canada" , song: "After Dark"},
    {id:2 , name: "Beyonce" , bday: "September 4,1981", sign: "Virgo" , hometown: "Houston, Texas" , song: "Countdown"},
    {id:3 , name: "The Weeknd" , bday: "February 16, 1990", sign: "Aquarius", hometown: "Toranto,Canada", song: "Wicked Games"},
    {id:4 , name: "Kehlani" , bday: "April 24,1995", sign: "Taurus" , hometown: "Oakland, California" , song: "Nights Like This"},
    {id:5 , name: "Jacquees" , bday: "April 15,1994", sign: "Aries" , hometown: "Decatur, Georiga" , song: "Come Thru"},
    {id:6 , name: "Ariana Grande" , bday: "June 26,1993", sign: "Cancer" , hometown: "Boca Raton, Florida" , song: "Best Mistake"}

];


app.get(`/` , (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get(`/api/artists`, (req,res)=>{
    res.send(facts);
});

app.get(`/api/artists/:id`,(req,res)=>{
    const fact = facts.find(r => r.id == parseInt(req.params.id));

    if(!fact) res.status(404).send("The fact with the given id was not found");

    res.send(fact);
});

app.post(`/api/artists`, (req,res)=>{
    const result = validateFact(req.body);
    
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    
    const fact = {
        id:facts.length+1,
        name:req.body.name,
        bday:req.body.bday,
        sign:req.body.sign,
        hometown:req.body.hometown,
        song:req.body.song,

    };
    facts.push(fact);
    res.send(fact);
});

app.put(`/api/artists/:id`,(req,res) =>{
    const fact = facts.find(r => r.id == parseInt(req.params.id));

    if(!fact) res.status(404).send("Fact with given id was not found");

    const result = validateFact(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    fact.name = req.body.name;
    fact.bday = req.body.bday;
    fact.sign = req.body.sign;
    fact.hometown = req.body.hometown;
    fact.song = req.body.song;

    res.send(fact);
});

//will delete a fact 
app.delete(`/api/artists/:id`,(req,res) =>{
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
        bday:Joi.string().min(3).required(),
        sign:Joi.string().min(3).required(),
        hometown:Joi.string().min(3).required(),
        song:Joi.string().min(3).required()

    };

    return Joi.validate(fact,schema);
}

app.listen(3000 , ()=>{
    console.log("listening on port 3000");
})