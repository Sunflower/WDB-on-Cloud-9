let express = require("express");
let app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!!");
});

app.get("/speak/:animal", function(req, res) {
    let sounds = {
        "pig": "OINK",
        cow: "MOO",
        dog: "WOOF WOOF",
    }
    
    let animal = req.params.animal.toLowerCase();
    
    let sound = sounds[animal];
    
    res.send("The " + animal + " says " + sound + "!!");
});

app.get("/repeat/:word/:times", function(req, res) {
    let word = req.params.word;
    let n = Number(req.params.times);
    
    let result = []
    for (let i = 0; i < n; i++) {
        result.push(word);
    }
    
    let resultString = result.join(" ");
    
    res.send(resultString);
});


app.get("*", function(req, res) {
    res.send("Sorry, page not found!!");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started on https://web-dev-bootcamp-marshmallowsunshinecafe.c9users.io");  
});