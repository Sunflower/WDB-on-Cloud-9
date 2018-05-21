let express = require("express");
let app = express();
let bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

let friends = ["K", "C", "B"];

app.get("/", function(req, res) {
    res.render("home"); 
});

app.get("/friends", function(req, res) {
    res.render("friends", {friends: friends}); 
});

app.post("/addFriend", function(req, res) {
    let myFriend = req.body.myFriend;
    friends.push(myFriend);
    //res.send("You have reached the post route"); 
    res.redirect("/friends");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server listening!!");
})