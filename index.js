const express = require('express');
const create = require('./server/create');
const retrieve = require('./server/retrieve');
const update = require('./server/update');
const deletes = require('./server/delete');

const app = express();

app.use(express.json())

app.use(express.urlencoded({
    extended: true
}))


app.use('/create',create);
app.use('/update',update);
app.use('/delete',deletes);
app.use('/',retrieve);


app.listen(8000,()=>console.log("http://localhost:8000"));
