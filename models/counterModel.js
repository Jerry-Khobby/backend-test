var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const counterSchema = new Schema(
  {
  _id: {type: String, required: true},
  seq: { type: Number, default: 0 }
  }
);

counterSchema.index({ _id: 1, seq: 1 }, { unique: true })

const counterModel = mongoose.model('counter', counterSchema);

const autoIncrementModelID = async function (modelName, doc, next) {
  try {
    const counter = await counterModel.findByIdAndUpdate(
      modelName,                           // The ID to find in the counters model
      { $inc: { seq: 1 } },                // The update
      { new: true, upsert: true }         // The options
    );
    
    doc.id = counter.seq;
    next();
  } catch (error) {
    next(error);
  }
}


module.exports = autoIncrementModelID;