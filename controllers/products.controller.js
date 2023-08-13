import Product from '../models/product.model.js'
import { uploadImage } from '../utils/cloudinary.js'
import fs from 'fs-extra'

export const getProducts = async (req, res) => {
    try {
        const product = await Product.find()
        if (!product) {
            return res.status(404).json({
                message: 'There are no products'
            })
        }
        res.json(product)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createProducts = async (req, res) => {
    try {
        const { name, description, price, image } = req.body
        const product = new Product({
            name,
            description,
            price,
        })
        if (req.files?.image) {
            const image = await uploadImage(req.files.image.tempFilePath)
            console.log(image)
            product.image = {
                "public_id": image.public_id,
                "secure_url": image.secure_url,
                "format": image.format,
                "resource_type": image.resource_type
            }
            await fs.unlink(req.files.image.tempFilePath)
        }
        await product.save()
        res.json(product)
        console.log('Este es el producto', product)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateProducts = async (req, res) => {
    try {
        const { id } = req.params
        const updateProduct = await Product.findByIdAndUpdate(id, req.body, { new: true })
        return res.json(updateProduct)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).json({
                message: 'Product does not exist'
            })
        }
        return res.json(product)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deleteProducts = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if (!product) {
            return res.status(404).json({
                message: 'Product does not exist'
            })
        }
        return res.json(product)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}