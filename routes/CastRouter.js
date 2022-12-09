const router = require('express').Router()
const controller = require('../controllers/CastController')

router.post('/', controller.CreateCast)
router.get('/', controller.GetAllCasts)
// router.get('/:material_id', controller.GetOneMaterial)
// router.put('/:material_id', controller.UpdateMaterial)
// router.delete('/:material_id', controller.DeleteMaterial)

module.exports = router
