import mongoose from 'mongoose';

// schema for products

const productSchema = mongoose.Schema({
    title:{type:String,required:true},
    author:{type:String,required:true},
    language:{type:String,required:true},
    year_of_publication:{type:Date,required:true},
    publisher:{type:String,required:true}
},
{timestamps:true})

const productModel = mongoose.model('products',productSchema)

export default productModel