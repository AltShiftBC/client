const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');
const upload = require('../utils/fileUpload');

router.post('/upload', upload.single('video'), videoController.uploadVideo);
router.get('/', videoController.getAllVideos);
router.get('/:id', videoController.getVideoById);

module.exports = router;
