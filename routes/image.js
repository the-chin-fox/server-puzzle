const express = require('express');
const router = express.Router();
const Image = require('../controllers/imageController')
const Multer = require('../middleware/multer');
const MulterLocal = require('../middleware/multer-lokal');
var tile = require('image-tiler').tile;

router.get('/', Image.getAllImage)
router.get('/:id', Image.getSingleImage)
router.post('/', MulterLocal.single('image'),
  (req, res, next) => {
    var tilePromise = tile(`uploads/${req.localFile}`, `public/images/${req.localFile.split('.').shift()}`, '{z},{x},{y}.png');
    tilePromise.then((result) => {
      console.log('Finished', result);
      next()
    })
    .catch((error) => console.log('Error', error));
  },
  Multer.multer.single('image'),
  Multer.sendUploadToGCS,
  Image.createImage)
router.delete('/:id', Image.deleteImage)

module.exports = router;
