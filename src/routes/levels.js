const express = require('express')
const router = express.Router()
const levelsController = require('../controllers/levelsController')

router.get('/level1', levelsController.getLevel1)
router.get('/level2', levelsController.getLevel2)
router.get('/level3', levelsController.getLevel3)
router.get('/level4', levelsController.getLevel4)
router.get('/level5', levelsController.getLevel5)
router.get('/hidden/level6', levelsController.getLevel6)
router.get('/final', levelsController.getFinal)

module.exports = router
