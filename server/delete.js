const express = require('express');
const db = require('./database/dbCon');

const router = express.Router();

router.delete("/delete",async (req,res)=>{
    let data = req.body;
    console.log(data);
    let con = await db.handler();
        let collection = con.collection('book');
        let findData = await collection.findOne({ "id": data['id'] });
        console.log(findData);
        if (findData != null) {
            await collection.deleteOne({ "id": data['id'] });
            await db.close();
            return res.status(200).send("Data deleted successfully");
        }else{
            await db.close();
            return res.status(404).send("Data not found");
        }
})

module.exports = router;