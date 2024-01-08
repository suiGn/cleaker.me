// app/routes.js
// module.exports = function(app){
//     // HOME PAGE (with login links) ========

app.get('/', function(req, res){
    res.render('index.ejs'); // load the index.ejs file
});

// LOGIN ===============================
// login form
app.get('/login', function(req, res){
    // render the page and pass in any flash data if it exists
    res.render('login.ejs', {message: req.flash('loginMessage')});
});


