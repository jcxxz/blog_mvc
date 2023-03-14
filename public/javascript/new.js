const newFormHandler = async function(event) {
    try {
      event.preventDefault();
  
      const title = document.querySelector('input[name="post-title"]').value;
      const body = document.querySelector('textarea[name="post-body"]').value;
  
      const token = localStorage.getItem("token");
      await fetch(`/api/post`, {
        method: "POST",
        body: JSON.stringify({
          title,
          body
        }),
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`
        }
      });
  
      document.location.replace("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };
  
  document
    .querySelector("#new-post-form")
    .addEventListener("submit", newFormHandler);
  