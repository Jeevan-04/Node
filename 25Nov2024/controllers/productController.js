// import bcrypt from 'bcryptjs';
import express, { Router } from 'express'
import productModel from '../models/productModel.js';


const router = express.Router()


router.post("/", async (req, res) => {
    const product = req.body;
    try {
        await productModel.create(product);
        res.status(201).send({ message: "product Created" });
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Some Problem" });
    }
});






export default Router