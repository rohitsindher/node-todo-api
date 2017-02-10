const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('UNable to connect to mongodb server');
    }
    console.log('connected to mongodb server');
    db.collection('Todos').insertOne({
        text : 'Some thing to do',
        completed : false
    },(err,result)=>{
        if(err){
            return console.log('unable to insert todo',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });

    db.collection('Users').insertOne({
        name : 'Rohit',
        age  : 22,
        location : 'noida' 
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert to Users',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });

    

    db.close();
});