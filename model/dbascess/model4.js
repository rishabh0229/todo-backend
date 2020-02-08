const con=require('./connection')
const getall=async()=>{
    return (await con.find())
}

const insert=async(k)=>{
    let a=await con.create(k)
}

const maketrue=async(id)=>{
    const filter={_id:id};
    const update={important:true};
    await con.findOneAndUpdate(filter, update);
}
module.exports={getall,insert,maketrue}