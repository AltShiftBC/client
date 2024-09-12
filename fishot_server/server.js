
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const sequelize = require('./src/config/database');
const Video = require('./src/models/video');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const saveVideoToDatabase = async (fileName, filePath, videoData) => {
  try {
    const video = await Video.create({
      filename: fileName,
      filepath: filePath,
      videoData: videoData,
      createdAt: new Date()
    });
    console.log('Video metadata saved to database:', video.id);
    return video.id;
  } catch (error) {
    console.error('Error saving video metadata to database:', error);
    throw error;
  }
};

app.post('/api/videos/upload', upload.single('video'), async (req, res) => {
  const downloadsPath = path.join(process.env.USERPROFILE, 'Downloads');
  const fileName = `recorded-video-${Date.now()}.webm`;
  const filePath = path.join(downloadsPath, fileName);

  fs.writeFile(filePath, req.file.buffer, async (err) => {
    if (err) {
      console.error('Error saving video:', err);
      res.status(500).json({ error: 'Failed to save video' });
    } else {
      try {
        const videoId = await saveVideoToDatabase(fileName, filePath, req.file.buffer);
        res.status(201).json({ message: 'Video saved successfully', filePath: filePath, videoId: videoId });
      } catch (dbError) {
        res.status(500).json({ error: 'Failed to save video metadata to database' });
      }
    }
  });
});

sequelize.sync({ force: true })
  .then(() => {
    console.log('Database & tables created!');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.log('Database Error:', err));
