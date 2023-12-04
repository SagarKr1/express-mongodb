const express = require('express');
let { ObjectId } = require('mongodb');
const db = require('./database/dbCon');

const router = express.Router();

router.put("/put", async (req, res) => {
    let data = req.body;
    console.log(data);
    if (data['title'] != "" && data['publisher'] != "" && data['author'].length != 0 && data['id'] != "") {
        let con = await db.handler();
        let collection = con.collection('book');
        let id = new ObjectId(data['id'])
        let findData = await collection.findOne({ "_id":id });
        console.log(findData);
        if(findData!=null){
            res.status(200).send(findData);
        }else{
            res.status(404).send("Data not found");
        }
        res.status(200).send(findData);
    } else {
        res.status(404).send("something went wrong");
    }
})

module.exports = router;