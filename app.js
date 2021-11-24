const express = require('express')
const app = express();
const path = require('path')

app.user(express.static(path.join(__dirname, '530frontend/build')));

app.get('/names', (req,res) => {
    res.send("Hasan Khan");
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})