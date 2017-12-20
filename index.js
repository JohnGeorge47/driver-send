var fs=require('fs');
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var url = 'mongodb://localhost:27017/schooldata';

const csv=require('csvtojson');
var data=[]
csv({includeColumns:[3,7,8]}).fromFile('primaryschool.csv').on('json',(jsonObj)=>{


  data.push(jsonObj);





    })
.on('done',(error)=>{

             var insertDocuments=function(db,callback){

        var collection=db.collection('schooldetails');
        collection.insertMany(data,function(err,result){

            console.log('succesful');
            callback(result);
        })




        }






        MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected correctly to server");
        insertDocuments(db, function(){

        db.close();


  })
    });













});

