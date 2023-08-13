import mongoose from "mongoose";

const musicCardScheme = new mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    autor: {
        type: String,
        require: true,
        trim: true
    },
    foto: {
        secure_url: String,
        public_id: String
    },
    musica: {
        public_id: String,
        secure_url: String,
    },
    /*     qr: {
            public_id: String,
            secure_url: String,
        }, */
    texto: {
        type: String,
        require: true
    }
}, { timestamps: true })

export default mongoose.model('MusicCard', musicCardScheme)