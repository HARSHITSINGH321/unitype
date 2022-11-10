const mongoose = require("mongoose");

var mongoURL= 'mongodb+srv://kirtiman:7844031985@cluster0.gzk1p9v.mongodb.net/test'

mongoose.connect(mongoURL , {
    useUnifiedTopology : true ,
    useNewUrlParser : true 
})

var connection = mongoose.connection;

connection.on('error',()=>{
    console.log('Connection failed');
})
connection.on('connected',()=>{
    console.log('Connection successful');
})
