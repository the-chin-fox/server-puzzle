const multer  = require('multer')
// const tiler = require('./tiler-images')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(file);
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    const filename = file.fieldname + '-' + Date.now() + '.' + `${file.originalname.split('.')[1]}`
    req.localFile = filename
    cb(null, filename)
  }
})

const upload = multer({ storage: storage })

module.exports = upload;
