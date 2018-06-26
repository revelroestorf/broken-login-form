const express = require('express');
const bodyParser = require('body-parser')
const app = express();

// Allow access to everything in /public.
// This is for our stylesheets & images.
app.use(express.static('public'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Views #thepuglifechoseme
app.set('view engine', 'pug')

app.get("/", (req, res) => {
  res.render('login');
});

app.post("/secure", (req, res) => {
  if (req.body.password === 'doggo') {
    res.render('secure');
  }
});

app.listen(3000);
console.log("Lift off!");
