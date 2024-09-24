import multer from 'multer';

// Set up storage for images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Set the destination for storing images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Ensure unique filenames
  }
});

// Multer middleware for handling single/multiple file uploads
const upload = multer({ storage: storage });

export default upload;
