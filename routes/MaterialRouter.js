const router = require('express').Router()
const controller = require('../controllers/MaterialController')

router.post('/', controller.CreateMaterial)
router.get('/', controller.GetAllMaterials)

module.exports = router
