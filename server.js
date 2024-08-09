// importing packages
const express = require('express');
const app = express(); //create application
const http = require('http').Server(app);
const fs = require('fs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/www')); // allows serving files

// create server on port 8888
let server = http.listen(8888,function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log("Server successfully running!");
    console.log("Address: "+host + "     Port: "+port);
})

// server route for an ‘account’ page
app.get('/account', (req, res) => {
    res.sendFile(__dirname + '/www/account.html');
});

// server route for homepage of app (login form)
app.get('/',function(req,res){
    res.sendFile(__dirname+"/www/form.html");
})

// server endpoint to test a users credentials and pass back some information
app.post('/api/login', function(req,res){
    fs.readFile('usercredentials.json',function(err,data){
        let list_details = JSON.parse(data);
        let response = {"valid": false};
        if (list_details.some(recorded => 
            (recorded.email===req.body.email && recorded.password===req.body.password)
        )){
            response.valid = true
        }
        res.json(response);
    })
})




