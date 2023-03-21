const express = require("express");
const mongoose = require("mongoose");
const app = new express();
const cors = require("cors");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");



app.use(cors());
app.use(express.json());
app.set("view engine","ejs");
app.use(express.urlencoded({extended: false}));



require('./Users');
const User = mongoose.model("Users");
require('./postmodel');
const Post = mongoose.model("Post");

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
		return res.send({status : "User exist"});
	}
	try{
		await User.create({
			fname,
			lname,
			email,
			password: encPass
		});
		res.send({status:"Registration Successful Please login !"});
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
			return res.json({status : "ok", data: token, admin:checkUser.admin});
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
			const user = jwt.verify(token, JWT_SECRET_KEY,(err, res)=>{
				if(err){
					return "Token Expired";
				}
				return res;
			});

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


// forget password

app.post('/forgot-password', async (req, res)=>{

	const {email} = req.body;

	try{
		const oldUser = await User.findOne({email});
		if(!oldUser){
			return res.json({status:"User not exist"});
		}
		const secret =  JWT_SECRET_KEY + oldUser.password
		const token = jwt.sign({email: oldUser.email, id:oldUser._id}, secret, {expiresIn: "5m"})
		const link = `http://localhost:5001/reset-password/${oldUser._id}/${token}`;

		// sent email
		var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "toshar109@gmail.com",
        pass: "dzzwiywmxbbmxvwq",
      },
    });

    var mailOptions = {
      from: "youremail@gmail.com",
      to: `${oldUser.email}`,
      subject: "Password Reset",
      text: link,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        res.json({status:"Email sent please check your email"});
      }
    });

		console.log(link);
	}catch(err){
		console.log(err);
	}
})


app.get("/reset-password/:id/:token", async(req, res)=>{
	const {id, token } = req.params;
	console.log(req.params)
	const oldUser = await User.findOne({_id:id});
		if(!oldUser){
			return res.json({status:"User not exist"});
		}
		const secret =  JWT_SECRET_KEY + oldUser.password;
		try{
		const verify = jwt.verify(token,secret);
		res.render("index", {email: verify.email, status:"Not verifeid"});
		}catch(err){
			res.send("Not verified");
		}

})


app.post("/reset-password/:id/:token", async(req, res)=>{
	const {id, token } = req.params;
	const {password} =  req.body;
	const oldUser = await User.findOne({_id:id});
		if(!oldUser){
			return res.json({status:"User not exist"});
		}
		const secret =  JWT_SECRET_KEY + oldUser.password;
		try{
		const verify = jwt.verify(token,secret);
		const encpass = await bcrypt.hash(password,10);
		await User.updateOne({_id:id}, {$set:{password:encpass}})
		// res.send({status:"Password Updated"});
		res.render("index", {email: verify.email, status:"verified"});
		}catch(err){
			res.send("Not verified");
		}

})







/**** POST ADD FROM ADMIN */


// add post
app.post("/add-post", async(req,res)=>{

	const {title} = req.body;

	try{
		await Post.create({
			title
		});
		res.send({status:"Post Added"});
	}catch(err){
		console.log(err);
		res.send({status:"error"});
	}
})


// read post

app.get("/all-post", async(req,res)=>{


	try{
		const posts=  await Post.find({}, { __v:0});
		res.send({status:"All post found", posts:posts});
	}catch(err){
		console.log(err);
		res.send({status:"error"});
	}
})


// Post delete

app.get('/post-delete/:id',async(req,res)=>{

	const id = req.params.id;

	try{
	 await Post.deleteOne({_id: id});
		res.json({status:"Post Deleted"});
	}catch(err){
		console.log(err);
		res.send({status:"error"});
	}
})
