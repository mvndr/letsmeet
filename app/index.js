var express =  require('express');
var app =  express();
app.get('/', function(req, resp){
    resp.send('Hello World');
});

app.listen(3000);