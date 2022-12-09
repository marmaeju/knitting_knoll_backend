const router = require('express').Router()
const controller = require('../controllers/MaterialController')

router.post('/', controller.CreateMaterial)
router.get('/', controller.GetAllMaterials)
router.get('/:material_id', controller.GetOneMaterial)
router.put('/:material_id', controller.UpdateMaterial)

module.exports = router
