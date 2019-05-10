const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const peopleSchema = new Schema({
    id:{
        type:Number
    },
   name: {
    type: String,
    required: [true, 'Name is required.'],
    default:'hidden'

   },
   eyeColor:{
       type:String,
       default:'hidden'

   },
   birthYear:{
       type:String,
       default:'hidden'
   },
   height:{
    type:String,
    default:'hidden'
  
},gender:{
    type:String,
    default:'hidden'
}
 

   
  });


  const peopleModel = mongoose.model('peopleModel', peopleSchema,'peopleModel');
  const bluePeopleModel = mongoose.model('bluePeopleModel', peopleSchema,'bluePeopleModel');

  
  module.exports = {
      peopleModel,bluePeopleModel
    };