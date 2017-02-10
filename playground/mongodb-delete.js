const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('UNable to connect to mongodb server');
    }
    //delete many
    db.collection('Todos').deleteMany({text : 'Eat Lunch'}).then((result)=>{
        console.log(result);
    });

    //delete one
    
    //find one and delete**

    // db.close();
});