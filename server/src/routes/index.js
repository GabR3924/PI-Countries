const { Router } = require("express");
const {getAllController, getActivitiesController, createActivitieController, getByIdController, deleteActivieController} = require("../controllers/responseController");

const router = Router();

router.get('/countries', getAllController)

router.get('/countries/:id', getByIdController )

router.get('/activities', getActivitiesController)

router.post('/new/activity', createActivitieController)

router.delete('/activities/delete/:id', deleteActivieController)

module.exports = router;
