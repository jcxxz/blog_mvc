const signupFormHandler = async function(event) {
    event.preventDefault();
  
    try {
      const usernameEl = document.querySelector("#username-input-signup");
      const passwordEl = document.querySelector("#password-input-signup");
      const response = await fetch("/api/user", {
        method: "post",
        body: JSON.stringify({
          username: usernameEl.value,
          password: passwordEl.value
        }),
        headers: { "Content-Type": "application/json" }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      document.location.replace("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };
  
  document
    .querySelector("#signup-form")
    .addEventListener("submit", signupFormHandler);
  