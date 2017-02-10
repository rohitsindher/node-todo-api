var mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
    text : {
        type: String,
        required : true,
        minlength:1,
        trim:true
        
    },
    completed : {
        type : Boolean,
        default : false
    },
    completedAt : {
        type : Number,
        default : null
    }
});

var User = mongoose.model('User',{
    email :{ 
        type:String,
        required : true,
        trim : true,
        minlength : 1
    }
});

// var newTodo = new Todo({
//     text : 'Cook dinner'
// });

// newTodo.save().then((doc)=>{
//     console.log('Saved todo',doc);
// },(e)=>{
//     console.log('Unable to do todo');
// });

var user = new User({
    email : 'rohit@example.com'
});

user.save().then((doc)=>{
    console.log('User saved',doc);
},(e)=>{
    console.log('Unable to save user ',e);
});