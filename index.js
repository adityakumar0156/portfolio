const express = require('express')
const app = express();
const hbs = require('hbs');
const path = require('path')

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use('/static', express.static('public'));

// Simply app.use means “Run this on ALL requests” app.get
//  means “Run this on a GET request, for the given URL”
app.get('/', (req, res) => {
    res.render('home')
})
app.get('/chatapp', (req, res) => {
    res.render('chatapp')
})



app.listen(8000, () => {
    console.log("App is listening on port 8000");
})