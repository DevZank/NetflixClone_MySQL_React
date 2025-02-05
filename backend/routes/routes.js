module.exports = (server) => {
  const connection = require("../database/connection");

  server.get("/", (require, response) => {
    response.json({ message: "Bem vindo a Netflix" });
  });

  server.get("/movies", (require, response) => {
    const sql = "SELECT * FROM movies;";
    connection.query(sql, (error, res) => {
      if (error) {
        return error;
      }
      console.log("movies: ", res);
      response.json(res);
    });
  });
};
