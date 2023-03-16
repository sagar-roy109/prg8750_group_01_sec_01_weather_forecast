const express = require("express");
const mongoose = require("mongoose");
const app = new express();
const cors = require("cors");
const bcrypt = require("bcryptjs");
app.use(cors());
app.use(express.json());
require('./Users');
const User = mongoose.model("Users");
const password = 'wS6wCjW3iFoOCjOS';
const url = `mongodb+srv://sagar:${password}@weatherapp.rezxpzt.mongodb.net/?retryWrites=true&w=majority`;

const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "kjhagdjhasgdibadkj%%*&^&^%ajhsdbajhds";




// Mongo Db Connect
mongoose.connect(url,{
	useNewUrlParser: true,
})
.then(()=>{
	app.listen(5001,()=>{
		console.log("Server started at 5001 & Connected to DB");
	})
})
.catch(e=>{
	console.log(e);
})


// Register

app.post("/register", async(req,res)=>{

	const {fname, lname, email, password} = req.body;
	const checkUser = await User.findOne({email});
	const encPass = await bcrypt.hash(password,10);
	if(checkUser){
		return res.send({error : "User exist"});

	}
	try{
		await User.create({
			fname,
			lname,
			email,
			password: encPass
		});
		res.send({status:"ok"});
	}catch(err){
		console.log(err);
		res.send({status:"error"});
	}
})


//login

app.post("/login", async(req,res)=>{
	const {email, password} = req.body;
	const checkUser = await User.findOne({email});
	if(!checkUser){
		return res.send({error : "User not exist"});
	}
	if(await bcrypt.compare(password, checkUser.password)){
		const token = jwt.sign({email: checkUser.email},JWT_SECRET_KEY);
		if(res.status(201)){
			return res.json({status : "ok", data: token});
		}else{
			return res.json({error: "error"})
		}
	}
	res.json({status: "error", error: "Password not correct"});

})





// user details after login

app.post("/user-details",(req,res)=>{
	const {token} = req.body;

		try{
			const user = jwt.verify(token, JWT_SECRET_KEY);
			const userEmail = user.email;
			User.findOne({
				email:userEmail
			})
			.then(data=>{
				res.send({data:data, status:"ok"})
			})
		}catch(err){
			console.log(err)
		}
})
