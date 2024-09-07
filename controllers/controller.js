const Inventory = require("../models/inventory");
const mongoose = require("mongoose");



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


    // a for loop or a map function to loop through each and present it in this format 

    const responseData = items.map(item => ({
      id: item.id,
      name: item.name,
      category: item.category,
      quantity: item.quantity,
      price: item.price, // Convert Decimal128 to number if needed
      supplier: item.supplier,
      addedDate:item.addedDate.toISOString().split('T')[0],
    }));

    res.status(200).json(responseData);
  }catch(err){
    console.error(err);
return res.status(404).json({error:'There was an error'});
  }
}

const singleItem =async(req,res)=>{
  const {id} = req.params;
  try{
    // find the first the item with it id first 
    const item = await Inventory.findOne({id});
    if(!item){
      return res.status(404).json({ message: 'No item of this id available' });
    }
    const responseData={
      id: item.id,
      name:item.name,
      category: item.category,
      quantity: item.quantity,
      price:item.price, // Convert Decimal128 to number
      supplier: item.supplier,
      addedDate: item.addedDate.toISOString().split('T')[0], 
    }
    res.status(200).json(responseData);
  }catch(err){
    console.error(err);
    return res.status(500).json({ error: 'There was an error' });
  }
}

// update a single book in the database 
const updateItem = async( req,res)=>{
  const {id} = req.params;
  try{
const item = await Inventory.findOneAndUpdate({ id:id },req.body,{new:true});
if(!item){
  return res.status(404).json({erro:'Item with this id is not found'});
}
const responseData={
  id:item.id,
  name:item.name,
  category: item.category,
  quantity: item.quantity,
  price: item.price, // Convert Decimal128 to number if needed
  supplier: item.supplier,
  addedDate:item.addedDate.toISOString().split('T')[0],
}
res.status(200).json(responseData);

  }catch(err){
    console.error(err);
    return res.status(500).json({ error: 'There was an error' });
  }
}


const deleteItem = async(req,res)=>{
  const {id} =req.params;
  try{
    const item= await Inventory.findOneAndDelete({ id: id });
    if(!item){
      return res.status(404)
      .json({ error: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  }catch(err){
    res.status(500)
    .json({ error: err.message });
  }
}


module.exports={
  createInventory,
  allItems,
  singleItem,
  updateItem,
  deleteItem,
}