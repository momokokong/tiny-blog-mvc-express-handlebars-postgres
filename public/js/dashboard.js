// button listners on the /dashboard that redirect the user to add a new post

const addPost = document.querySelector('#add-post');

addPost.addEventListener('click', () => {
    window.location.replace(`/post`);   
});