const express = require('express')
const app = express();
const fs = require('fs');




const PORT = process.env.PORT || 4000;
app.get("/write",(req,res) => {
    fs.writeFileSync("/virendra/test.txt","Hello virendra");
    res.send("DOne");
})
app.use(express.static("/virendra"));
app.get("*",(req,res)=> { res.send("Hello bsdk")})


app.listen(PORT,()=> { console.info(`server is listening on ${PORT}`)})