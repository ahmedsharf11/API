const requestify = require('requestify');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose
  .connect(
      'mongodb://localhost:27017/movieApp', { useNewUrlParser: true }
      )
      .then(()=> console.log('MongoDB Connected'))
      .catch(err=> console.log(err));


 const movieSchema = new mongoose.Schema({
   movies: [String]
 });
const MovieModel = mongoose.model('MovieModel', movieSchema);

const ApiKey = '12d3fcc309133ab90e8527018e2ed454&fbclid=IwAR2KUdDoAoq4fk3l8TQGW4JLCMqCjQzZ_hjO3sjz7KGg0SlN7g_fJQcbzJY';

requestify.get('https://api.themoviedb.org/3/movie/now_playing?api_key='+ApiKey)
  .then(function(response) {

      const results = response.getBody().results.map(obj => obj.title);

      let query = new MovieModel({movies: results});
      query.save();

  }
);

// Route handler
app.get('/', (req, res)=>{
  MovieModel.findOne().sort('-created_at').exec(function(err, movies) { console.log(movies); res.send(movies) });
})

app.listen(3000);
//
// const fun  = function(){
//
// }
//
// const fun = () => {
//
// }
//
// map(obj => obj.title)
//
// map( object =>
// object.title
// )
