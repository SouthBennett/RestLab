import express from "express";
import * as wineController from "../controllers/wine.controller.js";

const router = express.Router();

// router.get("/", (req, res) => {
//     res.render("default", {
//         title: "MVC Starter App",
//         subtitle: "Express + EJS + Static Assets"
//     });
// });

// Get all wines
router.get("/wines", wineController.getAllWines);

// Get wine by id
router.get("/wines/:id", wineController.getWineById);

export default router;