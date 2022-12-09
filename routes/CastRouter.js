const router = require('express').Router()
const controller = require('../controllers/CastController')

router.post('/', controller.CreateCast)
router.get('/', controller.GetAllCasts)
router.get('/:cast_id', controller.GetOneCast)
router.put('/:cast_id', controller.UpdateCast)
router.delete('/:cast_id', controller.DeleteCast)

module.exports = router
