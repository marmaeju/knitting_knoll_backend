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
const UpdateCast = async (req, res) => {
  try {
    let cast_id = parseInt(req.params.cast_id)
    let updatedCast = await Cast.update(req.body, {
      where: { id: cast_id },
      returning: true
    })
    res.send(updatedCast)
  } catch (error) {
    throw error
  }
}

//Delete
const DeleteCast = async (req, res) => {
  try {
    let cast_id = parseInt(req.params.cast_id)
    await Cast.destroy({ where: { id: cast_id } })
    res.send({ message: `Deleted material with an id of ${cast_id}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateStitch,
  GetAllStitches,
  GetOneStitch
}
