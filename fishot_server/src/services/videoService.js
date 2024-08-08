const Video = require('../models/video');

exports.saveVideo = async (file) => {
  const video = await Video.create({
    filename: file.originalname,
    videoData: file.buffer,
    duration: 0 // Implement duration calculation as needed
  });
  return video;
};

exports.getAllVideos = async () => {
  return await Video.findAll();
};

exports.getVideoById = async (id) => {
  return await Video.findByPk(id);
};
