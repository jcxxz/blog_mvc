const editFormHandler = async function(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const postId = formData.get("post-id");
    const title = formData.get("post-title");
    const body = formData.get("post-body");
    
    try {
      const response = await fetch(`/api/post/${postId}`, {
        method: "PUT",
        body: JSON.stringify({ title, body }),
        headers: { "Content-Type": "application/json" }
      });
      
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        throw new Error("Failed to update post.");
      }
    } catch (err) {
      console.error(err);
    }
  };
  
  document.querySelector("#edit-post-form").addEventListener("submit", editFormHandler);
  