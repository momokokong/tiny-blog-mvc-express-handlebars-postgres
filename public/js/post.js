const addComment = document.querySelector('#add-comment');

addComment.addEventListener('click', () => {
    window.location.replace(`/comment/${addComment.dataset.pid}`);   
});