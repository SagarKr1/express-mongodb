const express = require('express');
const db = require('./database/dbCon');

const router = express.Router();

router.put("/put", async (req, res) => {
    let data = req.body;
    console.log(data);
    if (data['title'] != "" && data['publisher'] != "" && data['author'].length != 0 && data['id'] != "") {
        let con = await db.handler();
        let collection = con.collection('book');
        let findData = await collection.findOne({ "id": data['id'] });
        console.log(findData);
        if (findData != null) {
            let newData = {
                $set: {
                    "title": data['title'],
                    "author": data['author'],
                    "publisher": data['publisher'],
                    "description": data['description']
                }
            }
            console.log(newData);
            await collection.updateOne({ "id": data['id'] },newData);
            return res.status(200).send("update successfully");
        } else {
            return res.status(404).send("Data not found");
        }
    } else {
        return res.status(404).send("something went wrong");
    }
})

module.exports = router;