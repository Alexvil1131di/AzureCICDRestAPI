'use strict';
import express from 'express';
var app = express();
import fetch from 'node-fetch';

app.get('/randomFact', (req, res) => {
   fetch('https://catfact.ninja/fact')
   .then(res => res.json())
   .then(data => res.status(200).json({randomFact: data}))
   .catch(err => {
      console.log(err);
      res.status(500).json({error: err});
   })
}) 

app.get('/randomFacts', (req, res) => {
   fetch('https://catfact.ninja/facts')
   .then(res => res.json())
   .then(data => res.status(200).json({randomFacts: data}))
   .catch(err => {
      console.log(err);
      res.status(500).json({error: err});
   })
})

app.get('/randomBreeds', (req, res) => {
   fetch('https://catfact.ninja/breeds')
   .then(res => res.json())
   .then(data => res.status(200).json({randomBreeds: data}))
   .catch(err => {
      console.log(err);
      res.status(500).json({error: err});
   })
}) 

app.set("port", process.env.PORT || 4000);

app.get('/', function (req, res) {
   res.writeHead(200, { 'Content-Type': 'application/json' });
   var response = { "response": "This is GET method." }
   console.log(response);
   res.end(JSON.stringify(response));
})

app.get('/:id', function (req, res) {
   res.writeHead(200, { 'Content-Type': 'application/json' });
   var response = { "response": "This is GET method with id=" + req.params.id + "." }
   console.log(response);
   res.end(JSON.stringify(response));
})

app.post('/', function (req, res) {
   res.writeHead(200, { 'Content-Type': 'application/json' });
   var response = { "response": "This is POST method." }
   console.log(response);
   res.end(JSON.stringify(response));
})

app.put('/', function (req, res) {
   res.writeHead(200, { 'Content-Type': 'application/json' });
   var response = { "response": "This is PUT method." }
   console.log(response);
   res.end(JSON.stringify(response));
})

app.delete('/', function (req, res) {
   res.writeHead(200, { 'Content-Type': 'application/json' });
   var response = { "response": "This is DELETE method." }
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(app.get("port"), function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Node.js API app listening at http://%s:%s", host, port)

})

export default app;

