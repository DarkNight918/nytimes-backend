const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");

// Router
const newsRouter = require("./routes/news");

dotenv.config();

// Start express
const app = express();
app.use(cors());

app.use(async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// API
app.use("/", newsRouter);

const port = process.env.PORT || 5000;

// Start the Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
