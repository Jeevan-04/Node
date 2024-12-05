import express from 'express';
import { createUser } from '../controllers/authController.js';
import {login} from '../controllers/authController.js';
import authMiddleware from '../middleware/authmiddleware.js';
import {testMiddleWare} from '../controllers/authController.js';

const router = express.Router()


router.post('/register',createUser)
router.post("/login",login)
router.get("/test",authMiddleware,testMiddleWare)




export default router