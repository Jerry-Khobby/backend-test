const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");




router.post("/inventory",controller.createInventory)
router.get("/inventory",controller.allItems)
router.get("/inventory/:id",controller.singleItem)
router.put("/inventory/:id",controller.updateItem)
router.delete("/inventory/:id",controller.deleteItem)





module.exports =router;
