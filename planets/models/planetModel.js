import mongoose from 'mongoose';

const planetSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, "Name is required!"] 
  },
  type: { 
    type: String, 
    required: true,
  },
  radius: { 
    type: Number, 
    required: true 
  },
  distanceFromSun: { 
    type: Number,
    required: true 
  },
  moons: { 
    type: [String], 
    required: true 
  },
  discoveryDate: { 
    type: Date, 
    required: true 
  },
  coordinates: { 
    type: String,
    required: true 
  }
}, { timestamps: true });

const planetModel = mongoose.model('Planets', planetSchema);

export default planetModel;