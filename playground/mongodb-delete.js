const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('UNable to connect to mongodb server');
    }
    //delete many
    // db.collection('Todos').deleteMany({text : 'Eat Lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //delete one
    // db.collection('Todos').deleteOne({text : 'Eat Lunch'}).then((result)=>{
    //     console.log(result);
    // });
    //find one and delete**
    db.collection('Todos').findOneAndDelete({completed : false}).then((result)=>{
        console.log(result);
    });
    // db.close();
});