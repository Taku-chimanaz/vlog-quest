//   Listeners

const editProfileButton = document.querySelector('.edit-profile-button')
const editProfileOverlay = document.querySelector('.edit-profile-overlay');
const closeOverlayButton = document.querySelector('.close');
const postsButton = document.querySelector('.posts-button');
const likedPostsButton = document.querySelector('.liked-posts-button');
const posts = document.querySelector('.posts')
const likedPosts = document.querySelector('.liked-posts')


// Event Listeners

editProfileButton.addEventListener('click', openEditProfileOverlay);
closeOverlayButton.addEventListener('click', closeEditProfileOverlay)
postsButton.addEventListener('click', showPosts);
likedPostsButton.addEventListener('click', showLikedPosts)


// Fnctions
function openEditProfileOverlay(e){
    e.preventDefault();
    editProfileOverlay.classList.add('edit-profile-overlay-active')
}

function closeEditProfileOverlay(e){
    e.preventDefault(e);
    editProfileOverlay.classList.remove('edit-profile-overlay-active')
}

function showPosts(e){
    e.preventDefault();
    likedPosts.classList.remove('liked-posts-activate')
    posts.classList.remove('post-deactivate')

}

function showLikedPosts(e){
    e.preventDefault();
    posts.classList.add('post-deactivate')
    likedPosts.classList.add('liked-posts-activate')
}