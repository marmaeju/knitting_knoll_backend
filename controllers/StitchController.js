const { Stitch } = require('../models')

//Create
const CreateStitch = async (req, res) => {
  try {
    const stitchContent = {
      ...req.body
    }
    let stitch = await Stitch.create(stitchContent)
    res.send(stitch)
  } catch (error) {
    throw error
  }
}

//Read All
const GetAllStitches = async (req, res) => {
  try {
    const stitches = await Stitch.findAll()
    res.send(stitches)
  } catch (error) {
    throw error
  }
}

//Read One
const GetOneStitch = async (req, res) => {
  try {
    const stitch = await Stitch.findByPk(req.params.stitch_id)
    res.send(stitch)
  } catch (error) {
    throw error
  }
}

//Update
const UpdateStitch = async (req, res) => {
  try {
    let stitch_id = parseInt(req.params.stitch_id)
    let updatedStitch = await Stitch.update(req.body, {
      where: { id: stitch_id },
      returning: true
    })
    res.send(updatedStitch)
  } catch (error) {
    throw error
  }
}

//Delete
const DeleteStitch = async (req, res) => {
  try {
    let stitch_id = parseInt(req.params.stitch_id)
    await Stitch.destroy({ where: { id: stitch_id } })
    res.send({ message: `Deleted material with an id of ${stitch_id}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateStitch,
  GetAllStitches,
  GetOneStitch,
  UpdateStitch,
  DeleteStitch
}
