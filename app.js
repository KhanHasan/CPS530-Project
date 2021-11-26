const express = require('express')
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, '530frontend/build')));

app.get('/names', (req,res) => {
    res.send("Hasan");
})

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})