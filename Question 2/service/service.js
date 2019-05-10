const mongoose =require('mongoose');
const moment = require('moment')
const carDb =require('../models/carModel');



exports.setCarDetails = function(req,res,next){

    
const {carMaker,color,registrationNumber,yearOfManufuctring,type,availability} = req.body;

     

    let carDetails= new carDb({
        carMaker,
        color,
        registrationNumber,
        yearOfManufuctring,
        type,
        availability,
        dateCreated:Date.now()
    });

        carDetails.save(function(err){
            console.log(err)
            if (err) {
                return next(err);
            }
            
            
        })
        res.send({message:"Saved successfully"})

        next()
    }
    
    
    

exports.getCarModel=function(req,res,next){
    const {color,carMaker} = req.body;

    if(color=== undefined && carMaker=== undefined){
        res.send({error:"Please provide color and make of the car"})

    }
    else{
    carDb.find({color,carMaker},function(err, data){
        if (err) return next(err);
        console.log(data)
        if(data === {}){
            res.send({info:"We could not find what you are looking for"})
        }else{
            res.send({data});
        }

        
    })}}

exports.getblueCarModel=function(req,res,next){

    carDb.find({color:"blue"},function(err, data){
        if (err) return next(err);
        res.send(data);


})}
exports.updateCarModel=function(req,res,next){
    const{id,availability,color} = req.body;
    carDb.findByIdAndUpdate({_id:id},{availability,dateUpdated:Date.now(),color},function(err, data){
        if (err) return next(err);
        res.send({message:"Document updated"});


})}
exports.softDeleteUnavailable=function(req,res,next){
    
    carDb.deleteMany({availability:false},function(err){
        if (err) return next(err);
        res.send({message:"Documents deleted"});


})}
exports.validateReq  = function(req,res,next){

const {carMaker,color,registrationNumber,yearOfManufuctring,type,availability,dateCreated,dateUpdated} = req.body;

   
    
    next()
    }
