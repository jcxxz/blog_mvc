const loginFormHandler = async function(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const username = formData.get("username-input-login");
    const password = formData.get("password-input-login");
  
    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (!response.ok) {
        throw new Error("Failed to log in.");
      }
  
      document.location.replace("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };
  
  document
    .querySelector("#login-form")
    .addEventListener("submit", loginFormHandler);
  