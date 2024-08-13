// frontend js post.js contains button listener for the user while viewing a specifc post.  
// if the user is the author of the post, listen to edit post too. 

const addComment = document.querySelector('#add-comment');
const editPost = document.querySelector('#edit-post');

addComment.addEventListener('click', () => {
    window.location.replace(`/comment/${addComment.dataset.pid}`);   
});

if (editPost) {
  editPost.addEventListener('click', () => {
      window.location.replace(`/post/edit/${editPost.dataset.pid}`);   
  });
}

