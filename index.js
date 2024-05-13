const express =require('express');
const app =express();
const {connectMongoDb} =require('./connection')
const userRouter =require('./routes/user')
const {logReqText}=require('./middleware/index')
const path=require('path')

connectMongoDb('mongodb://localhost:27017/first-db')
.then(()=>console.log('mongo db connected'))
app.set('view engine','ejs')
app.set('views',path.resolve('./views'))
app.use(express.urlencoded({extended :false}))
app.use(logReqText('log.txt'))

app.use('/api/user', userRouter)
app.listen('8000',()=>console.log("server start"))