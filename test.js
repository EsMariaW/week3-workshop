const express = require('express');
const app = express(); //create application
const http = require('http').Server(app);
const fs = require('fs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/www')); // allows serving files

let myObject = {
    "email": "Mallory_Beahan63@gmail.com",
    "password": "EEjjK2xWmIanNBe"
}

fs.readFile('usercredentials.json',function(err,data){
    let list_details = JSON.parse(data)
    console.log(list_details)
    let response = {"valid": false};
    if (list_details.some(recorded => 
        (recorded.email===myObject.email && recorded.password=== myObject.password)
    )){
        response.valid = true;
    }
    console.log(response);
});
