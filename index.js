const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

// middlewere
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('local server is running')
});

app.listen(port, ()=>{
    console.log(`Simple CRUD server is running on: ${port}`);
})