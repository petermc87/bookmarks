const express = require('express')

const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/bookmarks')


//Index --> /api/bookmarks/
router.get('/', dataController.index, apiController.index)
//Create --> /api/bookmarks/
router.post('/', dataController.create, apiController.show)
//Show --> /api/bookmarks/:id
router.get('/:id', dataController.show, apiController.show)
//Update --> /api/bookmarks/:id
router.put('/:id', dataController.update, apiController.show)
//Delete --> /api/bookmarks/:id
router.delete('/:id', dataController.destroy, apiController.show)

module.exports = router