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
var types = ['standard', 'premium']


var radius = 0.03

// simualate a random person entering, staying for a duration, and leaving
function simulate(){

  // generate a random person with a random name,
  // random location, and random duration
  var name = random_name();
  var duration = 1 + 15 * Math.random();
  var lat = city_location.lat + radius * (Math.random() - 0.5) * 2;
  var lon = city_location.lon + radius * (Math.random() - 0.5) * 2;

  // Max - Min + 1 since decimal is blocked off + Min Val
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

}

function enter(person){
  console.log('enter', person)
  var typeRef = usersRef.child(person.type);
  var personRef = typeRef.child(person.name);

  personRef.set({
    lat: person.lat,
    lon: person.lon,
    name: person.name,
    price: person.price,
    rating: person.rating,
    specialty: person.specialty,
    type: person.type
  });

  moveForDuration(person)

}

// Will move the person once a second for the duration he/she is around for
// Once the person has less than a second left - will wait for that time and call leave()
function moveForDuration(person){
  if (person.duration > 1.){
    setTimeout(function(){
      move(person)
    }, 1000)
  }
  else {
    setTimeout(function(){
      leave(person)
    }, person.duration * 1000)
  }
}

// Will move the person's latitude and longitude by a small random amount
// Decrements the person's duration and then calls moveForDuration()
function move(person){
  var typeRef = usersRef.child(person.type);
  var personRef = typeRef.child(person.name);

  var latChange = (Math.floor(Math.random() * (3)) - 1) * 0.01;
  var lonChange = (Math.floor(Math.random() * (3)) - 1) * 0.01;
  person.duration = person.duration - 1.0
  person.lon = person.lon + lonChange
  person.lat = person.lat + latChange

  personRef.update({
    lat: person.lat,
    lon: person.lon
  });

  console.log('move', person)
  moveForDuration(person)
}

function leave(person){
  console.log('leave', person)
  var typeRef = usersRef.child(person.type);
  var personRef = typeRef.child(person.name);

  personRef.remove();
}

function clear(){
  usersRef.remove()
}

clear()

// run each second
setInterval(simulate, 2000)
