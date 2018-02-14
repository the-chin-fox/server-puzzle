const Image   = require('../models/imageModel');
const express = require('express')
const multer  = require('multer')
const upload  = multer({ dest: 'uploads/' })

class ImageController {

  static getAllImage (req, res) {
    Image.find().then((results) => {
      res.status(200).json({
        msg: 'Data images retrieved',
        data: results
      })
    }).catch((err) => {
      res.status(500).json({
        msg: 'Cannot retrieved images'
      })
    })
  }

  static getSingleImage (req, res) {
    Image.findOne({
      _id: req.params.id
    }).then((result) => {
      res.status(200).json({
        msg: 'Data image retrieved',
        data: result
      })
    }).catch((err) => {
      res.status(500).json({
        msg: 'Cannot retrieved image'
      })
    })
  }

  static createImage (req, res) {
    let objImage = new Image ({
      image : req.file.image
    })

    objImage.save().then((result) => {
      res.status(200).json({
        msg: 'Data image created',
        data: result
      })
    }).catch((err) => {
      res.status(500).json({
        msg: 'Cannot create image'
      })
    })
  }

  static deleteImage (req, res) {
    Image.deleteOne({
      _id: req.params.id
    }).then(() => {
      res.status(200).json({
        msg: 'Image deleted'
      })
    }).catch((err) => {
      res.status(500).json({
        msg: 'Cannot delete image'
      })
    })
  }

}

module.exports = ImageController;
