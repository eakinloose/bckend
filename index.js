const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const register = require("../backend/routes/register");
const login = require("../backend/routes/login");

const products = require("../backend/products");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/register", register);
app.use("/api/login", login);

app.get("/", (req, res) => {
   res.send("welcome");
});

app.get("/products", (req, res) => {
   res.send(products);
});

const port = process.env.PORT;
const uri = process.env.DB_URI;

app.listen(port, console.log(`server started on ${port}`));

mongoose
   .connect(uri, {
      useNewUrlParser: true,
      UseUnifiedTopology: true,
   })
   .then(() => console.log("mongoDB connected"))
   .catch(() => console.log("mongoDB connection failed"));
