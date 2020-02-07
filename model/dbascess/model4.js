const con=require('./connection')
const getall=async()=>{
    return (await con.find())
}

const insert=async(k)=>{
    let a=await con.create(k)
}
module.exports={getall,insert}