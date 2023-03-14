const deletePostHandler = async function(event) {
    event.preventDefault();
    const postId = document.getElementById('post-id').value;
  
    try {
      await fetch(`/api/post/${postId}`, {
        method: 'DELETE'
      });
      document.location.replace('/dashboard');
    } catch (err) {
      console.log(err);
    }
  }
  
  document.querySelector('#delete-btn').addEventListener('click', deletePostHandler);
  