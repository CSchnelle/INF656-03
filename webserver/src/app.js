const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");


app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

//app.com
app.get("", (req, res) => {
    res.render("index", {
      title: "Stargaze Club",
      name: "Cat",
    });
  });

//app.com/help
app.get("/help", (req, res) => {
    res.render("help", {
      title: "Help Page",
      name: "Cat Schnelle",
      email: "cschnelle@tutanota.de",
    });
});

//app.com/about
app.get("/about", (req, res) => {
    res.render("about", { title: "About Page", name: "Cat" });
});

//app.com/weather
app.get("/weather", (req, res) => {
    res.send({  
      location: "Austin,TX",
      temperature: 76,
      seeing: 5,
      humidity: 71,
    });
});

app.get("/help/*", (req, res) => {
    res.send("Help article is not found!");
});

app.get("*", (req, res) => {
    res.render("404", {
      title: "404",
      name: "Sam",
      errorMessage: "Page not found!",
    });
});
  
app.listen(3000, ()=>{
    console.log('Server is up and running on port 3000')
});
