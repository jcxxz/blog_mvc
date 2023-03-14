const withAuth = (req, res, next) => {
    try {
      if (!req.session.userId) {
        throw new Error("User not authenticated");
      } else {
        next();
      }
    } catch (error) {
      console.error(error);
      res.redirect("/login");
    }
  };
  
  module.exports = withAuth;
  