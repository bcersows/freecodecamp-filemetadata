var express = require('express')
  , router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

router.post('/upload', upload.single('myupload'), function (req, res) {
    if ( req.file ) {
        var ret = {
            name: req.file.originalname,
            size: req.file.size,
            sizeType: "Byte"
        };
        res.send(ret);
    } else {
        res.send({err: "No file sent."});
    }
});
router.get('/', function (req, res) {
    res.render(__dirname + '/views/filemetadata', {foo:"bar"});
});
    
module.exports = router;