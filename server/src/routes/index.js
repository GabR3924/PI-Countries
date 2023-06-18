const { Router } = require("express");
const getAllController = require("../controllers/responseController");

const router = Router();

router.get('/countries', getAllController)

module.exports = router;
