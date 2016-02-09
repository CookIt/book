var _ = require('lodash')
var random_name = require('node-random-name');
var Firebase = require('firebase');

var ref = new Firebase('https://cookit.firebaseio.com');
var usersRef = ref.child("providers");


// San Francisco
var city_location = {
  lat: 37.78,
  lon: -122.41
}

var specialties = ['American', 'Mexican', 'Chinese', 'Japanese', 'Indian', 'Breakfast', 'Coctails', 'Dessert'];
var ratings = [1, 2, 2, 3, 3, 3, 4, 4, 5];
var types = ['Standard', 'Premium']


var radius = 0.03

// simualate a random person entering, staying for a duration, and leaving
function simulate(){

  // generate a random person with a random name,
  // random location, and random duration
  var name = random_name();
  var duration = 1 + 15 * Math.random();
  var lat = city_location.lat + radius * (Math.random() - 0.5) * 2;
  var lon = city_location.lon + radius * (Math.random() - 0.5) * 2;
  var price = Math.floor(Math.random() * (1000 - 20 + 1)) + 20; // Int ranges between 20 and 1000
  var rating = ratings[Math.floor(Math.random() * (8 - 0 + 1))];
  var specialty = specialties[Math.floor(Math.random() * (7 - 0 + 1))];
  var type = types[Math.floor(Math.random() * (1 - 0 + 1))];
  
  var person = {
    name: name,
    duration: duration,
    lat: lat,
    lon: lon,
    price: price,
    rating: rating,
    specialty: specialty,
    type: type
  }

  // simulate this person entering
  enter(person)

  // simulate this person leaving after 'duration' seconds
  setTimeout(function(){
    leave(person)
  }, duration * 1000)

}

function enter(person){
  console.log('enter', person)
  
  var personRef = usersRef.child(person.name);

  personRef.set({
    lat: person.lat,
    lon: person.lon,
    name: person.name,
    price: person.price,
    rating: person.rating,
    specialty: person.specialty,
    type: person.type
  });
}

function leave(person){
  console.log('leave', person)
  var personRef = usersRef.child(person.name);

  personRef.remove();
}

function clear(){
  usersRef.remove()
}

clear()

// run each second
setInterval(simulate, 2000)
