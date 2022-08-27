require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
//const cors = require("cors");
const app = express();

app.use(express.json());
//app.use(cors());

//Middlewares
app.use("/books", router); //localhost:5000/books

//Credencials
// const dbUser = process.env.DB_USER
// const dbPass = encodeURIComponent(process.env.DB_PASSWORD)

//String de Conexão
//mongodb+srv://mbfreitas0:<password>@book-store.7gzcdtv.mongodb.net/?retryWrites=true&w=majority

//Credencials
const dbUser = process.env.DB_USER;
const dbPass = encodeURIComponent(process.env.DB_PASSWORD);

// mongodb+srv://mbfreitas0:<password>@crud.z1syy6i.mongodb.net/?retryWrites=true&w=majority
mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPass}@book-store.7gzcdtv.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    //app.listen(3001)
    console.log("Conexão ao banco efetuado com sucesso !");
  })
  .catch((err) => console.log(err));

app.listen(5001, () => {
  console.log("Server running on port 5000...");
});
