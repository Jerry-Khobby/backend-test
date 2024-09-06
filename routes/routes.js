const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");




router.post("/inventory",controller.createInventory)
router.get("/inventory",controller.allItems)
router.get("/inventory/:id")
router.put("/inventory/:id")
router.delete("/inventory/:id")





module.exports =router;
