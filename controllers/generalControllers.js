const index = (req, res) => {
    res.render('index', { style: 'css/main.css', script: 'js/index.js', title: 'Vlog Quest'});
};

const profile = (req, res) => {
    res.render('profile', { style: 'css/profile.css', script: 'js/profile.js', title: 'User Profile'});
};

const userDashboard = (req, res) => {
    res.render('userdash', { style: 'css/userdash.css', script: 'js/userdash.js', title: 'User Dashboard'});  
};

const scheduledPosts = (req, res)=>{
    res.render('scheduled-post', { style: 'css/sheduled-posts.css', script: 'js/scheduled-post.js', title: 'User Dashboard'});
};

module.exports = {
    index,
    profile,
    userDashboard,
    scheduledPosts
}

