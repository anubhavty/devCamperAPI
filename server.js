const express = require("express");
const dotenv = require("dotenv");
// const logger = require("./middleware/logger"); custom logger
const morgan = require("morgan");

//Routes files

const bootcamps = require("./routes/bootcamps");

//load env vars

dotenv.config({ path: "./config/config.env" });

const app = express();

//using custom middleware
// app.use(logger);

//dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
