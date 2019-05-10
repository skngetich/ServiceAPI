const assert = require('assert');
const peopleSchema = require('../db/schema').peopleModel;
const bluePeopleSchema = require('../db/schema').bluePeopleModel;
const mongoose = require('mongoose');
const people = require('../axios.js')




let saver;
describe('Saving records', () => {


    before('connect', function(){
        mongoose.connect('mongodb://127.0.0.1:27017/safaricomHackathon', { useNewUrlParser: true, useCreateIndex: true });

        saver= new peopleSchema( {id: 34,name: 'Beru Whitesun lars',
        eyeColor: 'yellow',
        birthYear: '668YY',
        height: '165',
        gender: 'female'
             });

        saver.save().then((done) => done()).catch(err=>{
            return err
        });
    });

    after(function() {
       mongoose.connection.close((res)=>{
           return "closed";
       })
      });

    
      it('find the save record', (done) => {

       
        
        peopleSchema.findOne({ name: "Beru Whitesun lars" })
            .then((item) => {
                assert(item.name === 'Beru Whitesun lars'); 
                done();
            });
    });
    
     
        
           
            
    });


    describe('***************  API REQUEST ********************',()=>{

        it('Gets people record with ID of 1', (done) => {
        
            people.getPeopleById(1).then((data)=>{
                assert(data.id === 1);
        done()
        
        }).catch(err=>{
            return err
        })
        });
        it('Gets All people record with eye color blue of 1', (done) => {
        
            people.getAllPeopleWithBlue().then((data)=>{
                data.map(item=>{
                  const db2=  new bluePeopleSchema(item)
              
                  db2.save().then((saved)=>{
              
                     assert(item.height ===saved.height)
                  }).catch(function(err){
                      console.log('err: ',err)
                  })  
              
                })
              
                  
                   
                 
              })
        });



    })
   





