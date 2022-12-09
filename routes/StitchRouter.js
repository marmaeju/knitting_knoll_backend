const router = require('express').Router()
const controller = require('../controllers/StitchController')

router.post('/', controller.CreateStitch)
router.get('/', controller.GetAllStitches)
router.get('/:stitch_id', controller.GetOneStitch)
// router.put('/:cast_id', controller.UpdateCast)
// router.delete('/:cast_id', controller.DeleteCast)

module.exports = router
