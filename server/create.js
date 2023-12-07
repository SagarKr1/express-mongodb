const express = require('express');
const db = require('./database/dbCon');

const router = express.Router();

router.post("/post",async (req,res)=>{
    console.log(req.body);
    let data = req.body;
    let con = await db.handler();
    let collection = con.collection('book');
    let id =await "id" + Math.floor(Math.random() * (999999999 - 100000000 + 1) + 100000000);
    if(data['title']!="" && data['publisher']!="" && data['author'].length!=0){
        let object = {
            "id":id,
            "title":data['title'],
            "author":data['author'],
            "publisher":data['publisher'],
            "description":data['description'],
            "timestamp":Date.now()
        }
        console.log(object);
        let inst = await collection.insertOne(object);
        console.log(inst);
        await db.close();
        return res.status(200).send("data inserted successfully");
    }else{
        await db.close();
        return res.status(404).send("Something went wrong");
    }

})

module.exports = router;