const express = require('express')
const app = express()
const PORT = 3000

app.get('/', function (request, response) {
    console.log("Someone has come into the server. Brace yourselves.")
    response.send("Server is up and running smoothly")
})



app.listen(PORT, function(){
    console.log(`Running server on port ${PORT}`)
})