const express = require("express");
const router = express.Router();

const ClicksController = require("../controllers/clicks");

router.post("/", ClicksController.Create);
router.post("/update", ClicksController.UpdateClick);



module.exports = router;