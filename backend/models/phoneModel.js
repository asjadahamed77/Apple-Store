import mongoose from "mongoose";

const phoneSchema = new mongoose.Schema({
  phoneName: { type: String, required: true },
  phoneColor: { type: String, required: true },
  phoneWarranty: { type: String, required: true },
  phoneImage: {type:Array, required:true},
  
  // phoneStorage with price corresponding to each storage option
  phoneStorage: [
    {
      storage: { type: String, required: true },  
      price: { type: Number, required: true },   
    }
  ],

  phoneAvailability: { 
    type: String, 
    required: true, 
  
  },
  
  phoneFeatures: {
    phoneFeature1: { type: String },
    phoneFeature2: { type: String },
    phoneFeature3: { type: String },
    phoneFeature4: { type: String },
    phoneFeature5: { type: String },
    phoneFeature6: { type: String },
  },
  date : {type:Number, required:true}
});

// Use existing model if it exists or create a new one
const phoneModel = mongoose.models.phone || mongoose.model("phone", phoneSchema);

export default phoneModel;
