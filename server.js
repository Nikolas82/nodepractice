const express = require('express')

const app = express();


app.use('*', (req,res) => {
    console.log('Hello');
    res.send('<h1>Hello</h1>')
})

const listener = app.listen(4444, () => {
    console.log(`Server running in port ${listener.address().port}`);
})

