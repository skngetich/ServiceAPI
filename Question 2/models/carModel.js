const mongoose = require('mongoose');
let softDelete = require('mongoosejs-soft-delete');
const Schema = mongoose.Schema;

const carSchema = new Schema({
   carMaker:{type:String},
   color:{type:String},
   registrationNumber:{type:String},
   yearOfManufuctring:{type:Date},
   type:{type:String},
   availability:{type:Boolean},
   dateCreated:{type:Date},
   dateUpdated:{
      type:Date,
   default:Date.now()}
});

carSchema.plugin(softDelete);

const carModel = mongoose.model('carModel',carSchema,'carModel');
module.exports = carModel;
