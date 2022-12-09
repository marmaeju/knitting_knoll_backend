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

//Read All
const GetAllMaterials = async (req, res) => {
  try {
    const materials = await Material.findAll()
    res.send(materials)
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

module.exports = {
  CreateMaterial,
  GetAllMaterials,
  GetOneMaterial,
  UpdateMaterial
}
