import express from 'express';
import WPAPI from 'wpapi' ;
var app = express();
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
  ];
  var tagline = "No programming concept is complete without a cute animal mascot.";

  res.render('pages/index', {
    mascots: mascots,
    tagline: tagline
  });
  var wp = new WPAPI({
      endpoint: 'http://www.devilsparadise.com:8081/index.php?rest_route=/wp/v2/posts',
      username: 'admin',
      password: 'wpAdmin@123',
      transport:'post'
  });
  console.log(wp);
  wp.posts().get({author:'admin'},function( data ) {
    console.log('Got Data'+ JSON.stringify(data));
  });
  wp.posts().create({
      title: 'That Glorious Endevour',
      content: 'The benign tree render ruthless on endless mission',
      status: 'publish'
  },function( response ) {
      console.log( response );
  })
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(8080);
console.log('Server is listening on port 8080');