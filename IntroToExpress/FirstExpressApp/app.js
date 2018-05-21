let express = require("express");
let app = express();

app.get("/", function(req, res) {
    res.send("Hellooooo!!");
});

app.get("/bye", function(req, res) {
   res.send("CYA!"); 
});

app.get("/dog", function(req, res) {
    console.log("wooo");
    res.send("WAN");
});

app.get("/r/:subredditName", function(req, res) {
    console.log(req.params);
    res.send("welcome to the " + req["params"]["subredditName"] + " subreddit!!");
})

app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
    console.log(req.params);
    res.send("welcome to a comments page!!");
})

app.get("*", function(req, res) {
    console.log(req.params);
    res.send("KIAS"); 
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Server has started on https://web-dev-bootcamp-marshmallowsunshinecafe.c9users.io");  
});