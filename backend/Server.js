const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const colors = require('colors');
const connectDb = require('./config/db')


const PORT = process.env.PORT || 8000


// connect to db
connectDb();

// initialize express
const app = express();

// parse the body of the request
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// test
app.get('/', (req, res) => {
    res.json({message: 'HELLO'})
})


// use routes
app.use('/discogs/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
