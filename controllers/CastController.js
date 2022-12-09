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
const GetOneMaterial = async (req, res) => {
  try {
    const material = await Material.findByPk(req.params.material_id)
    res.send(material)
  } catch (error) {
    throw error
  }
}

//Update
const UpdateMaterial = async (req, res) => {
  try {
    let material_id = parseInt(req.params.material_id)
    let updatedMaterial = await Material.update(req.body, {
      where: { id: material_id },
      returning: true
    })
    res.send(updatedMaterial)
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
  GetAllCasts
}
