const express = require('express')
const app = express();
const fs = require('fs-extra');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get("/write",(req,res) => {
    fs.writeFileSync("/virendra/test.txt","Hello virendra");
    res.send("DOne");
})

app.post("/maximo",(req,res) => {

    fs.writeFileSync("/virendra/"+Date.now() + ".txt",req.body);
    res.send("Done");
})
app.use(express.static("/virendra"));
app.get("/up",(req,res)=> { res.send("Hello bsdk")})


app.listen(PORT,()=> { console.info(`server is listening on ${PORT}`)})