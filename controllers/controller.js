const Inventory = require("../models/inventory");



// first controller , that will save a sample item into the database 
const createInventory = async(req,res)=>{
  const { name, category, quantity, price, supplier } = req.body;
  if (!name || !category || !quantity || !price || !supplier) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  // validate the price 
  try{
    const newInventory = new Inventory({
      name,
      category,
      quantity,
      price,
      supplier,
    })
    await newInventory.save();

    const response ={
      name:newInventory.name,
      category: newInventory.category,
      quantity: newInventory.quantity,
      price:newInventory.price, // Convert Decimal128 to number
      supplier: newInventory.supplier,
      addedDate: newInventory.addedDate.toISOString().split('T')[0], 
    }

    res.status(201).json(response);
  }catch(err){
    console.error(err);
    res.status(500).json({error:'Internal server error'});
  }

}


const allItems = async(req,res)=>{
  try{
    const items = await Inventory.find().sort({id:1});
    if(!items.length){
      console.log("There are no items in the database");
      return res.status(404).json({message:'There are no items available in inventory'});
    }
    res.status(200).json(items);
  }catch(err){
    console.error(err);
return res.status(404).json({error:'There was an error'});
  }
}



module.exports={
  createInventory,
  allItems,
}