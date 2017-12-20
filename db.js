var MongoClient= require('mongodb').MongoClient;
var url='mongodb://localhost:27017/schooldata';


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var query =  "district_name";
  db.collection("schooldetails").distinct(query,function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
