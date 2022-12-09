const router = require('express').Router()
const controller = require('../controllers/StitchController')

router.post('/', controller.CreateStitch)
// router.get('/', controller.GetAllCasts)
// router.get('/:cast_id', controller.GetOneCast)
// router.put('/:cast_id', controller.UpdateCast)
// router.delete('/:cast_id', controller.DeleteCast)

module.exports = router
