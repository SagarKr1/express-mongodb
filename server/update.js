const express = require('express');
const db = require('./database/dbCon');

const router = express.Router();

router.put("/put", async (req, res) => {
    let data = req.body;
    console.log(data);
    if (data['title'] != "" && data['publisher'] != "" && data['author'].length != 0 && data['id'] != "") {
        let con = await db.handler();
        let collection = con.collection('book');
        let findData = await collection.findOne({ "id":data['id'] });
        console.log(findData);
        if(findData!=null){
            
            return res.status(200).send(findData);
        }else{
            return res.status(404).send("Data not found");
        }
    } else {
        return res.status(404).send("something went wrong");
    }
})

module.exports = router;