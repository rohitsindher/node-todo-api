const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('UNable to connect to mongodb server');
    }
    db.collection('Todos').findOneAndUpdate({
        _id : new ObjectID('589d8ec2583f836ac8af6e9b')
    },{
        $set:{
            completed : true
        }
    },{
        returnOriginal : false
    }).then((result)=>{
        console.log(result)
    });
    // db.close();
});