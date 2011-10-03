
var express = require('express');
var haml = require('haml');
var app = express.createServer();



app.configure(function() {
    app.use(express.static(__dirname + '/public'))
    app.use(express.bodyParser())
    app.register('haml', {
     compile:function(str, options) {
     	return function(locals) {
		return haml.render(str,{locals:locals})
     	}
     }
    });
});

app.get('/', function(req, res) {
    res.render('index.haml')
})

app.get('/home', function(req, res) {
    res.render('index.haml')
})

app.get('/bio', function(req, res) {
    res.render('bio.haml')
})

app.get('/video', function(req, res) {
    res.render('video.haml')
})

app.get('/music', function(req, res) {
    res.render('music.haml')
})

app.get('/contact', function(req, res) {
    res.render('contact.haml', {
        locals: { error: null, form: { name:'', email:'', message:'' } }
    })
})

app.get('/contact/thanks', function(req, res) {
    res.render('contact-thanks.haml')
})

console.log("Listening on http://localhost:8083/")
app.listen(8083)
