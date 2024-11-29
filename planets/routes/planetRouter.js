import { updatePlanet, createPlanet, searchPlanet } from "../controllers/planetController.js";
import express from 'express'

const router = express.Router();

router.post("/create",createPlanet);
router.post("/update/:pname",updatePlanet);
router.get("/search/:name",searchPlanet);


export default router