const express = require('express');
const userRouter = require('./Routes/userRoutes');
// require('./config/worker.js')
// Worker

const app = express();


const { databaseconnect } = require('./config/db');
databaseconnect

app.use(express.json())
app.use(express.urlencoded())



app.use('/user', userRouter)


app.listen(5000, () => {
    console.log('server is running on posrt no 5000')
})