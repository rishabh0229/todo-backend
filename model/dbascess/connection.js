const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/backend',{useNewUrlParser:true,useUnifiedTopology:true})
const con=mongoose.connection;
con.once('open',function(){
    console.log("connected to database")
})
const chilluschema=new mongoose.Schema({
    data:String,
    data:String,
    data:String
})
const datamodel=mongoose.model('abk',chilluschema);
module.exports=datamodel