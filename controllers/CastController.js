const { Cast } = require('../models')

//Create
const CreateCast = async (req, res) => {
  try {
    const castContent = {
      ...req.body
    }
    let cast = await Cast.create(castContent)
    res.send(cast)
  } catch (error) {
    throw error
  }
}

//Read All
const GetAllCasts = async (req, res) => {
  try {
    const casts = await Cast.findAll()
    res.send(casts)
  } catch (error) {
    throw error
  }
}

//Read One
const GetOneCast = async (req, res) => {
  try {
    const cast = await Cast.findByPk(req.params.cast_id)
    res.send(cast)
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
const DeleteMaterial = async (req, res) => {
  try {
    let material_id = parseInt(req.params.material_id)
    await Material.destroy({ where: { id: material_id } })
    res.send({ message: `Deleted material with an id of ${material_id}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateCast,
  GetAllCasts,
  GetOneCast,
  UpdateCast
}
