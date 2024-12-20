const port = process.env.PORT || 4000
const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const { type } = require('os');
const { log, error } = require('console');

const connect = require('./library/db.js')
const loginRouter = require('./router/login.js');
const signupRouter = require('./router/signup.js')
const productRouter = require('./router/productRoutes.js')
const adminLoginRouter = require('./router/adminLoginRoutes.js')
const adminSignupRouter = require('./router/adminSignupRoutes.js')
const WebhookRouter = require('./router/Whook.js');
const reviewRouter = require ('./router/ReviewRoutes.js')
const reviewController = require('./controller/ReviewController');
const orderRouter = require('./router/OrderRoutes');
const userRouter = require('./router/dashboard.js')

app.use(logger('dev'));
app.use('/', WebhookRouter);
app.use(express.json());
app.use(
    cors({
    //   credentials: true,
      origin: "*",
    })
  );


app.get('/', (req,res)=>{
    res.send('App berjalan')
})

app.use('/images', express.static('upload/images'))
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/reviews', reviewRouter);
app.use('/profile', userRouter)
app.use('/api', orderRouter); 
app.use('/', productRouter);
app.use('/adminLogin', adminLoginRouter);
app.use('/adminSignup', adminSignupRouter);


app.listen(port, async(err)=>{
    if(!err){
        //Koneksi ke database mongoDB
        await connect ();
        console.log("Server berjalan pada port " +port)
    }
    else
    {
        console.log("Server tidak berjalan"+err)
    }
})
