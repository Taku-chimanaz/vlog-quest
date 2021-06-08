const express = require('express');
const handlebars = require('express-handlebars').create({defaultLayout: 'main'});
const path = require('path');
const generalRoutes = require('./routes/generalRoutes')

// Creating the express app
const app = express();
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`));

// setting up the view engine

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars')


// Middlewares

app.use(express.static(path.resolve(__dirname, 'public')))

// Routes
app.use('/', generalRoutes);




