const videoService = require('../services/videoService');

exports.uploadVideo = async (req, res) => {
    try {
        const video = await videoService.saveVideo(req.file);
        res.status(201).json(video);
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllVideos = async (req, res) => {
    try {
        const videos = await videoService.getAllVideos();
        res.status(200).json(videos);
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getVideoById = async (req, res) => {
    try {
        const video = await videoService.getVideoById(req.params.id);
        if(video) {
            res.status(200).json(video);
        } else {
            res.status(404).json({ message: 'Video not found' });
        }
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
};
