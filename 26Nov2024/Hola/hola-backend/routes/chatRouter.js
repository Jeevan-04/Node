import express from 'express'
import { getConversation, letsChat } from '../controllers/chatController.js'

const router = express.Router()


router.post("/",letsChat)
router.get("/:loggedid/:friendid",getConversation)



export default router