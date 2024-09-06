const mongoose = require("mongoose");
const Schema = mongoose.Schema; 
const autoIncrementModelID = require("./counterModel");

// Define the Inventory Schema


// for the prices 

const Inventory = new Schema({
  id:{
    type:Number,
    unique:true,
    min:1
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Schema.Types.Decimal128,
    required: true,
    get:getMoney,
  },
  supplier: {
    type: String,
    required: true,
  },
  addedDate: {
    type: Date,
    default: Date.now
  }
});

function getMoney(value){
  if(typeof value!==  'undefined'){
    return parseFloat(value.toString());
  }
  return value;
}

Inventory.pre("save",function(next){
  if(!this.isNew){
    next();
    return;
  }
  autoIncrementModelID('activities',this,next);
})

// Create the Inventory model
module.exports  = mongoose.model('Inventory', Inventory);

