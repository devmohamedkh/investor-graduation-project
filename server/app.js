const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./utils/helpers/db");
require("dotenv").config();
const app = express();
const { handleError } = require("./utils/helpers/errorHelper");
const multer = require("multer");
const uplodeImge = require("./utils/helpers/uplodeImge");

//=====================
// MIDDLEWARE
//=====================
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//=====================
// ROUTES
//=====================
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use("/api/projects", require("./routes/project"));
app.use("/api/invistors", require("./routes/invistor"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/invistements", require("./routes/invistement"));

// 404 error
app.use((req, res, next) => {
  res.status(404).json({
    status: "error",
    statusCode: 404,
    massage: "404 - page not found!",
  });
});
// error handeler mid
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  handleError(err, res);
});

connectDB();

app.listen(process.env.PORT, () =>
  console.log(
    `app listening on port port! \nhttp://localhost:${process.env.PORT}`
  )
);
