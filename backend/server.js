const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/message', (req, res) => {
    res.json({ text: "Hello from Node.js!" });
});

app.listen(3000, () => {
    console.log("Backend running at http://localhost:3000");
});