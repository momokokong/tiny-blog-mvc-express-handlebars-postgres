// button listner for edit post.  Note that the post_id is coming from editPost.dataset.pid
const editPost = document.querySelector('#edit-post');

editPost.addEventListener('click', () => {
    const newContent = document.querySelector('#post-content').value;
    const newtitle = document.querySelector('#post-title').value;
    fetch(`/api/posts/${editPost.dataset.pid}`, {
        method: 'PUT',
        body: JSON.stringify({ title: newtitle, content: newContent }),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(response => {
        if (response.ok) {
            document.location.replace(`/post/${editPost.dataset.pid}`);
        } else {
            alert('Failed to add comment.');
        }
    })
    .catch(err => {
        console.error(err);
    });
});