var express =require('express');
var router =express.Router();

const ctrlActor = require('../Controllers/actorController');

router.get('/actors',ctrlActor.getActors);
router.post('/actors',ctrlActor.newActor);
router.get('/actors/:actorid',ctrlActor.getSingleActor);
router.put('/actors/:actorid',ctrlActor.updateActor);
router.delete('/actors/:actorid',ctrlActor.deleteActor);


module.exports=router;