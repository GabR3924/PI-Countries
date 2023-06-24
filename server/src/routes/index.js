const { Router } = require("express");
const {getAllController, createA} = require("../controllers/responseController");

const router = Router();

router.get('/countries', getAllController)

router.post('/new.activity', createA)

module.exports = router;
