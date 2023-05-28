module.exports = {
  getUser: (req, res) => {
    console.log("Retrieve user.");
  },

  getUsers: (req, res) => {
    // protected route
    console.log("Retrieve users.");
  },
};
