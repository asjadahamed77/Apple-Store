import phoneModel from "../models/phoneModel.js";


// ADD PHONE
const addPhone = async (req, res) => {
  try {
    // Extract request body
    const {
      phoneName,
      phoneColor,
      phoneWarranty,
      phoneStorage,
      phoneAvailability,
      phoneFeatures,
    } = req.body;

    // Extract uploaded images from multer (if images are uploaded via multer)
    const phoneImage = req.files ? req.files.map(file => file.path) : req.body.phoneImage;

    // Create a new phone instance
    const newPhone = new phoneModel({
      phoneName,
      phoneColor,
      phoneWarranty,
      phoneImage,  // Uploaded image paths or image URLs
      phoneStorage: JSON.parse(phoneStorage),  // Ensure that storage is parsed as an array
      phoneAvailability: phoneAvailability === 'true' ? 'yes' : 'no',  // Normalize yes/no availability
      phoneFeatures: {
        phoneFeature1: phoneFeatures?.phoneFeature1 || '',
        phoneFeature2: phoneFeatures?.phoneFeature2 || '',
        phoneFeature3: phoneFeatures?.phoneFeature3 || '',
        phoneFeature4: phoneFeatures?.phoneFeature4 || '',
        phoneFeature5: phoneFeatures?.phoneFeature5 || '',
        phoneFeature6: phoneFeatures?.phoneFeature6 || '',
      },
    });

    // Save the phone to the database
    const savedPhone = await newPhone.save();

    // Send a success response
    res.json({ success: true, message: "Phone Added", data: savedPhone });

  } catch (error) {
    // Log and send an error response
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};



// VIEW PHONE
const viewPhone = async(req,res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// EDIT PHONE

const editPhone = async(req,res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// REMOVE PHONE
const removePhone = async(req,res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// GET PHONE 
const getPhone = async(req,res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export { addPhone,
        editPhone,
        getPhone,
        viewPhone,
        removePhone
 }