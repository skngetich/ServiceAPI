const mongoose = require('mongoose');
const peopleModel = require('./db/schema');
const people = require('./axios.js')


mongoose.connect('mongodb://127.0.0.1:27017/safaricomHackathon', { useNewUrlParser: true, useCreateIndex: true });
mongoose.connection.on('error', error => console.log(error));
mongoose.connection.on('open', () => console.log("DB COnnected"));
mongoose.Promise = global.Promise;


 
people.getPeopleById(1).then((data)=>{
        const db =  new peopleModel.peopleModel(data)

    db.save().then((item)=>{

        // console.log('SAVED',item);
    }).catch(function(err){
        console.log('err: ',err)
    })   

}).catch(err=>{
    console.log(err);
})


people.getAllPeopleWithBlue().then((data)=>{
  data.map(item=>{
    const db2=  new peopleModel.bluePeopleModel(item)

    db2.save().then((item)=>{

        console.log('SAVED',item);
    }).catch(function(err){
        console.log('err: ',err)
    })  

  })

    
     
   
})











