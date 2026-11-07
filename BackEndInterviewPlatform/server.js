require ('dotenv').config();

const app = require('./app')

const connectDB = require('./config/db')

require('./config-overrides.js');

connectDB

app.listen(process.env.PORT || 3000, () =>{
    console.log('server is listening')
})