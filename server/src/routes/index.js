const { Router } = require("express");
const {getAllController, getActivitiesController, createActivitieController} = require("../controllers/responseController");

const router = Router();

router.get('/countries', getAllController)

router.get('/activities', getActivitiesController)

router.post('/new/activity', createActivitieController)

module.exports = router;
