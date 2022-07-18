const express = require('express')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
    res.send("LinkedIn API starter")
})

app.listen(process.env.PORT, () => console.log(`Server listening on PORT ${process.env.PORT}`))