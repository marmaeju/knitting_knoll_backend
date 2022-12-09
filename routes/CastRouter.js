const router = require('express').Router()
const controller = require('../controllers/CastController')

router.post('/', controller.CreateCast)
router.get('/', controller.GetAllCasts)
router.get('/:cast_id', controller.GetOneCast)
router.put('/:cast_id', controller.UpdateCast)
// router.delete('/:material_id', controller.DeleteMaterial)

module.exports = router
