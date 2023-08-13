import musicCardModel from '../models/musicCard.model.js'
import musicCard from '../models/musicCard.model.js'
import { uploadImage } from '../utils/cloudinary.js'
import fs from 'fs-extra'

export const getMusicCards = async (req, res) => {
    try {
        const musicCard = await musicCardModel.find()
        if (!musicCard) {
            return res.status(404).json({
                message: 'There are no music cards'
            })
        }
        res.json(musicCard)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createMusicCard = async (req, res) => {
    try {
        const { nombre, autor, musica, texto, foto } = req.body
        const music = new musicCardModel({
            nombre: nombre,
            texto: texto,
            autor: autor
        })
        if (req.files.foto) {
            const foto = await uploadImage(req.files.foto.tempFilePath)
            music.foto = {
                "public_id": foto.public_id,
                "secure_url": foto.secure_url,
            }
            await fs.unlink(req.files.foto.tempFilePath)
        }
        if (req.files.musica) {
            const musica = await uploadImage(req.files.musica.tempFilePath)
            music.musica = {
                "public_id": musica.public_id,
                "secure_url": musica.secure_url,
            }
            await fs.unlink(req.files.musica.tempFilePath)
        }
        await music.save()
        res.json(music)
        console.log('Este es la musica', music)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getMusicCard = async (req, res) => {
    try {
        console.log(req.params.id)
        const music = await musicCardModel.findById(req.params.id)
        res.json(music)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}