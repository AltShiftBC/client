
<<<<<<< HEAD
const express = require('express')
const multer = require('multer')
const fs = require('fs')
const path = require('path')
const sequelize = require('../src/config/database')
const Video = require('../src/models/video')
const authRoutes = require('../src/routes/authRoutes')
const passport = require('passport')
const expressSession = require('express-session')
const cookieParser = require('cookie-parser')
const Routes = require('./routes/authRoutes')
const cors = require('cors')

require('dotenv').config()

const app = express()
const PORT = 3000

app.use(cors({
  credentials: true,
  methods: ['POST','GET'],
  origin: 'http://localhost:5173'
}))

app.use(express.json())
app.use('/api/auth', authRoutes)
app.use(cookieParser())
app.use(expressSession({secret: '09abcf356-8886ac',saveUninitialized: true, resave: true}))
app.use(passport.initialize())
app.use(passport.session())
// require('./services/passportSevice')
app.use(Routes)

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
=======
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const sequelize = require('../src/config/database');
const Video = require('../src/models/video');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
>>>>>>> 9b60b4c62e8b066a7229c29a723cee81212f5431

const saveVideoToDatabase = async (fileName, filePath, videoData) => {
  try {
    const video = await Video.create({
      filename: fileName,
      filepath: filePath,
      videoData: videoData,
      createdAt: new Date()
<<<<<<< HEAD
    })
    console.log('Video metadata saved to database:', video.id)
    return video.id
  } catch (error) {
    console.error('Error saving video metadata to database:', error)
    throw error
  }
}

app.use('/api/session/',(req, res)=>{
  try{
    if(req.session?.clientEmail) {
      return res.status(200).json({
        status: true,
        message: 'Authenticated'
      })
    }
  
    return res.status(200).json({
      status: false,
      message: 'Unauthenticated'
    })
  } catch(e){
    console.log(e)
    return res.status(200).json({
      status: false,
      message: 'Unauthenticated'
    })
  }
})

app.post('/api/videos/upload', upload.single('video'), async (req, res) => {
  const downloadsPath = path.join(process.env.USERPROFILE, 'Downloads')
  const fileName = `recorded-video-${Date.now()}.webm`
  const filePath = path.join(downloadsPath, fileName)

  fs.writeFile(filePath, req.file.buffer, async (err) => {
    if (err) {
      console.error('Error saving video:', err)
      res.status(500).json({ error: 'Failed to save video' })
    } else {
      try {
        const videoId = await saveVideoToDatabase(fileName, filePath, req.file.buffer)
        res.status(201).json({ message: 'Video saved successfully', filePath: filePath, videoId: videoId })
      } catch (dbError) {
        res.status(500).json({ error: 'Failed to save video metadata to database' })
      }
    }
  })
})

sequelize.sync({ force: true })
  .then(() => {
    console.log('------------------------------')
    console.log('+                             +')
    console.log('Database & tables created!')
    console.log('+                             +')
    console.log('------------------------------')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  .catch(err => console.log('Database Error:', err))
=======
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
    console.log('------------------------------');
    console.log('+                             +');
    console.log('Database & tables created!');
    console.log('+                             +');
    console.log('------------------------------');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.log('Database Error:', err));
>>>>>>> 9b60b4c62e8b066a7229c29a723cee81212f5431
