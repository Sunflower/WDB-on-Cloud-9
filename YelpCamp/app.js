var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Salmon Creek",
//         image: "https://cdn.shopify.com/s/files/1/2468/4011/products/campsite_1_600x.png?v=1524622915",
//         description: "help me pulp fiction"
//     }, function(err, campground) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(campground);
//         }
//     }
// );

// Campground.create(
//     {
//         name: "False Creek",
//         image: "https://i2-prod.cambridge-news.co.uk/incoming/article12958592.ece/ALTERNATES/s1200/Campsites.jpg",
//         description: "Come down and"
//     }, function(err, campground) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(campground);
//         }
//     }
// );

// Campground.create(
//     {
//         name: "Salmon False",
//         image: "https://www.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg",
//         description: "take me away"
//     }, function(err, campground) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(campground);
//         }
//     }
// );

app.get("/campgrounds", function(req, res) {
    var campgrounds = Campground.find({}, function(err, allCampgrounds){
        if (err) {
            console.log(err);
        } else {
            res.render("index", {campgrounds:allCampgrounds});
        }
    });
});

app.post("/campgrounds", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {name: name, image: image, description: description};
    Campground.create(newCampground, function(err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            console.log("Created a new campground!!!");
            res.redirect("/campgrounds");
        }
    })
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new"); 
});

app.get("/campgrounds/:id", function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground) {
       if (err) {
           //console.log("Couldn't find!");
           console.log(err);
       } else {
           res.render("show", {campground: foundCampground});
       }
    });
     
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("YelpCamp has started!! Check it out at https://web-dev-bootcamp-marshmallowsunshinecafe.c9users.io");
});