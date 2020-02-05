const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const PORT = 3001

app.post('/', (req, res) => {
    res.send()
})

app.listen(PORT, () => {
    console.log("Server is running on", PORT)
})