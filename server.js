const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json());

// Middleware para manejar CORS (Cross-Origin Resource Sharing)



app.get('/', function(req, res){
    res.send("funciona el servidor")
})

const PORT= process.env.PORR || 3002
app.listen(PORT,()=>{
    console.log('listening on port '+PORT);
})