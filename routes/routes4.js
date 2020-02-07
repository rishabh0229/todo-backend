const express=require('express')
const router=express.Router()
const xyz=require('../model/dbascess/model4')


router.get('/insert/:dat',async(req,res)=>{
    let dat=(req.params.dat)
    let k={}
    k.data=dat
    await xyz.insert(k)
    res.send("its true")
})

router.get('/data',async(req,res)=>{
    let j=await xyz.getall()
    res.send(j)
})
module.exports=router