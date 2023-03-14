const logout = async () => {
    try {
      await fetch("/api/user/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });
      document.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };
  
  document.querySelector("#logout-link").addEventListener("click", logout);
  