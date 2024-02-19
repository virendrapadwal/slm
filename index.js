const express = require('express');
const app = express();
const fs = require('fs-extra');
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/write", (req, res) => {
    fs.writeFileSync("/virendra/test.txt", "Hello virendra");
    res.send("Done");
});

app.post("/maximo", (req, res) => {
    fs.writeFileSync("/virendra/new.txt", JSON.stringify(req.body));
    res.send("Done");
});

app.use(express.static("/virendra"));
app.get("/up", (req, res) => { res.send("Hello"); });

app.listen(PORT, () => { console.info(`server is listening on ${PORT}`); });
