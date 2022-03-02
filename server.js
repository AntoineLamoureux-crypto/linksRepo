const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

//config
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: false}));

//connect to mongo db
mongoose.connect('mongodb+srv://Antoine:123@cluster0.yraw2.mongodb.net/newFood?retryWrites=true&w=majority')

//data schema
const linkSchema = {
    title: String,
    link: String,
}
//data model
const Link = mongoose.model('link', linkSchema)

//read route
app.get('/link/:id', (req, res) => {
    const link = req.params.link;
    Link.find({ 'link': { $in: link } })
    .then(link => res.json(link))
    .catch((err) => res.status(400).json("Error: " + err))
});

app.get('/links', (req, res) => {
  Link.find()
  .then(link => res.json(link))
});

//create route
app.post('/newLink', (req, res) => {
    const newLink = new Link({
        title: req.body.title,
        link: req.body.link,
    });
    newLink
    .save()
    .then(link => console.log(link))
    .catch(err => res.status(400).json("Error  " + err))
});

//delete route
app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    Memory.findByIdAndDelete({ _id: id }, (req, res, err) => {
      if (!err) {
        console.log("Memory deleted");
      } else {
        console.log(err);
      }
    });
  });

//update route
app.put("/put/:id", (req, res) => {
    const updatedLink = {
      title: req.body.title,
      link: req.body.link,
    };
    Link.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: updatedLink },
      (req, res, err) => {
        if (!err) {
          console.log("Link updated");
        } else {
          console.log(err);
        }
      }
    );
  });

app.listen(3001, () =>  {
    console.log(`Express is running on port 3001`)
})