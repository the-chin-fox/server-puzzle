const express = require('express');
const router = express.Router();
const Image = require('../controllers/imageController')

router.get('/', Image.getAllImage)
router.get('/:id', Image.getSingleImage)
router.post('/', Image.createImage)
router.delete('/:id', Image.deleteImage)

module.exports = router;
