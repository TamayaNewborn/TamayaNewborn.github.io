const express = require("express");
const app = express();
app.use(express.static('public'));

app.get('/',(req, res) => {
    res.sendfile(__dirname+ "/index.html");
});

app.get('/api/cakes' , (reg,res)=>{
    cakes = ["red velvet" , "black forest" , "cheese cake"];
    res.send(cakes);
});

app.listen(3000 , ()=>{
    console.log("listening on port 3000 ")
});