const express = require('express')
const app = express();
const PORT = process.env.PORT || 4000;
app.get("*",(req,res)=> { res.send("Hello bsdk")})

app.listen(PORT,()=> { console.info(`server is listening on ${PORT}`)})