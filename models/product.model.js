import mongoose from 'mongoose'

const productScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    description: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    image: {
        public_id: String,
        secure_url: String,
        format: String,
        resource_type: String
    }
}, { timestamps: true })

export default mongoose.model("Product", productScheme)