const router = require('express').Router()
const controller = require('../controllers/StitchController')

router.post('/', controller.CreateStitch)
router.get('/', controller.GetAllStitches)
router.get('/:stitch_id', controller.GetOneStitch)
router.put('/:stitch_id', controller.UpdateStitch)
router.delete('/:stitch_id', controller.DeleteStitch)

module.exports = router
