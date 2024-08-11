const addComment = document.querySelector('#comment-submit');

addComment.addEventListener('click', () => {
    const commentContent = document.querySelector('#comment-content').value;
    fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ content: commentContent }),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(response => {
        if (response.ok) {
            document.location.replace(`/post/${addComment.dataset.pid}`);
        } else {
            alert('Failed to add comment.');
        }
    })
    .catch(err => {
        console.error(err);
    });
});