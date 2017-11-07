// //port 7000
// const http = require("http");

// const PORT = 7000;

// function handleRequest(request, response) {

//   response.end("Compliment goes here");
// }

// const server = http.createServer(handleRequest);

// server.listen(PORT, function() {

//   console.log("Server listening on: http://localhost:" + PORT);
// });


//port 7500
const http = require("http");

const PORT = 7500;

function handleRequest(request, response) {

  response.end("Insult goes here");
}

const server = http.createServer(handleRequest);

server.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);
});