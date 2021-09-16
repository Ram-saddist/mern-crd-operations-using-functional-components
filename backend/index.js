const express= require('express');
const app= express();
const cors= require("cors");
const mongoose=require("mongoose");
const Content=require("./contentSchema")
const bodyParser = require('body-parser')
const Pusher = require("pusher");
const port =2005;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//mongo connection
mongoose.connect()//give pusher details in thses keys


//pusher connection
const pusher = new Pusher({
  appId: "",
  key: "",
  secret: "",
  cluster: "",
  useTLS:  //give pusher details in thses keys
});

app.get('/',(req,res)=>{
	res.send("working")
})

app.post("/create",async (req,res)=>{
	const {date,content}=req.body;
	const newContent= new Content({
		date,
		content
	});
	await newContent.save().then(c=>{
		pusher.trigger("content", "insert", 
				{
				  date:c.date,
				  content:c.content
				}
			);
		return res.json({success:true})
	});
})


app.delete('/delete/:id',(req,res)=>{
	const id=req.params.id;
	Content.findByIdAndRemove(id).exec();
})

app.get("/get",async(req,res)=>{
	await Content.find()
	.then(found=>res.json(found))
})

app.listen(port,()=>console.log("running on port 2005"))