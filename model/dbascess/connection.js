const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/backend',{useNewUrlParser:true,useUnifiedTopology:true})
const con=mongoose.connection;
con.once('open',function(){
    console.log("connected to database")
})
const chilluschema=new mongoose.Schema({
    data:String,
    data:String,
    data:String,
    important:Boolean
})
const datamodel=mongoose.model('abk',chilluschema);
// await datamodel.create({_id:id});
// const filter={_id:id};
// const update={important:true}
module.exports=datamodel