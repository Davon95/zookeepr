const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');
const zookeepersRoutes = require('../apiRoutes/zookeepersRoutes');
router.use(animalRoutes);
router.use(zookeepersRoutes);

module.exports = router;