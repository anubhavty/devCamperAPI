const express = require("express");
const {
  getBootcamps,
  getBootcamp,
  createBootcamps,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");

// const app = express(); won't be using app to make any api reques, use router instead

const router = express.Router();

router.route("/").get(getBootcamps).post(createBootcamps);

router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);
module.exports = router;
