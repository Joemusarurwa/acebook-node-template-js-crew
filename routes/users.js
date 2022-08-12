const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users");

router.get("/new", UsersController.New);
router.post("/", UsersController.Create);
router.get("/:id", UsersController.Profile)
router.post("/req.params.body", UsersController.Comments)

module.exports = router;
