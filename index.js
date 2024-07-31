require("dotenv").config();
const express = require("express");
const connectToDatabase = require("./config/database");
const app = express();
const port = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res) => {
  res.json({
    status: "success",
    message: "Welcome to the API",
  });
});

app.listen(port, async () => {
  await connectToDatabase();
  console.log(`Server is running on port http://localhost:${port}`);
});
