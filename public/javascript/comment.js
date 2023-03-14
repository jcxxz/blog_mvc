const commentFormHandler = async (event) => {
    try {
      event.preventDefault();
    
      const postId = document.querySelector('input[name="post-id"]').value;
      const body = document.querySelector('textarea[name="comment-body"]').value;
  
      if (body) {
        const response = await fetch('/api/comment', {
          method: 'POST',
          body: JSON.stringify({
            postId,
            body,
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        if (response.ok) {
          document.location.reload();
        } else {
          throw new Error('Failed to add comment');
        }
      }
    } catch (err) {
      console.error(err);
    }
  };
    
  document.querySelector('#new-comment-form').addEventListener('submit', commentFormHandler);
  