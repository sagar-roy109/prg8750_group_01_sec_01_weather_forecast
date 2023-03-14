const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/user-routes');
const cookieParser =  require('cookie-parser');
const cors = require('cors');
const app = express();
app.use(cors({credentials: true, origin:"http://localhost:3000"}));
app.use(cookieParser());

app.use(express.json())
app.use('/api', router);


const password = 'wS6wCjW3iFoOCjOS';

// connect to db
mongoose.connect(`mongodb+srv://sagar:${password}@weatherapp.rezxpzt.mongodb.net/?retryWrites=true&w=majority`)
.then(
	app.listen(3003,()=>{
		console.log("Listening port 3003 & Connected to DB");
	})
)
.catch((err)=>{
	console.log(err)
})




