const express = require('express');
const handlebars = require('express-handlebars').create({defaultLayout: 'main'});
const path = require('path')

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


app.get('/', (req,res) =>{
    res.render('index', { style: 'css/main.css', script: 'js/index.js', title: 'Vlog Quest'})
});

app.get('/profile', (req, res) => {
    res.render('profile', { style: 'css/profile.css', script: 'js/profile.js', title: 'User Profile'});
});

app.get('/user-dashboard', (req,res)=>{

    res.render('userdash', { style: 'css/userdash.css', script: 'js/userdash.js', title: 'User Dashboard'})
});

app.get('scheduled-posts', (req, res)=>{
    
    res.render('scheduled-post', { style: 'css/sheduled-posts.css', script: 'js/scheduled-post.js', title: 'User Dashboard'})
})



