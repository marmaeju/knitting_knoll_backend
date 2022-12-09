const { Material } = require('../models')

//Create
const CreateMaterial = async (req, res) => {
  try {
    const materialContent = {
      ...req.body
    }
    let material = await Material.create(materialContent)
    res.send(material)
  } catch (error) {
    throw error
  }
}

//Read
const GetAllMaterials = async (req, res) => {
  try {
    const materials = await Material.findAll()
    res.send(materials)
  } catch (error) {
    throw error
  }
}
//Update

//Delete

module.exports = {
  CreateMaterial,
  GetAllMaterials
}
