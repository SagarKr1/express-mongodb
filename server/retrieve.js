const express = require('express');
const db = require('./database/dbCon');

const router = express.Router();

router.get("/get",async (req,res)=>{
    let dbCon = await db.handler();
    let collection = dbCon.collection('book');
    let getData =await collection.find({}).toArray();
    console.log(getData);
    await db.close();
    res.status(200).send(getData);
})

module.exports = router;