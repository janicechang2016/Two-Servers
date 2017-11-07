const http = require("http");

const PORTone = 7000;
const PORTtwo = 7500;

function handleRequestOne(request, response) {

  response.end("Compliment goes here");
}

function handleRequestTwo(request, response) {

  response.end("Insult goes here");
}

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);


serverOne.listen(PORTone, function() {

  console.log("Server listening on: http://localhost:" + PORTone);
});


serverTwo.listen(PORTtwo, function() {

  console.log("Server listening on: http://localhost:" + PORTtwo);
});