const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users");

router.get("/new", UsersController.New);
router.post("/", UsersController.Create);
router.get("/:id", UsersController.Profile)
router.get("/:id", UsersController.Profile)
// router.post("/:id", UsersController.Images)

module.exports = router;
