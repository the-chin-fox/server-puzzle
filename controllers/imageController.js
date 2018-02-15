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
    let localFolder = req.localFile.split('.').shift()
    let objImage = new Image ({
      image : req.file.cloudStoragePublicUrl,
    })

    objImage.save().then((result) => {
      res.status(200).json({
        msg: 'Data image created',
        data: result,
        imageSlice1 : `http://localhost:3000/images/${localFolder}/2,0,0.png`,
        imageSlice2 : `http://localhost:3000/images/${localFolder}/2,0,1.png`,
        imageSlice3 : `http://localhost:3000/images/${localFolder}/2,0,2.png`,
        imageSlice4 : `http://localhost:3000/images/${localFolder}/2,1,0.png`,
        imageSlice5 : `http://localhost:3000/images/${localFolder}/2,1,1.png`,
        imageSlice6 : `http://localhost:3000/images/${localFolder}/2,1,2.png`,
        imageSlice7 : `http://localhost:3000/images/${localFolder}/2,2,0.png`,
        imageSlice8 : `http://localhost:3000/images/${localFolder}/2,2,1.png`,
        imageSlice9 : `http://localhost:3000/images/${localFolder}/2,2,2.png`
      })
    }).catch((err) => {
      res.status(500).json({
        msg: 'Cannot create image'
      })
    })
  }

  static getImageSlice (req, res) {

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
