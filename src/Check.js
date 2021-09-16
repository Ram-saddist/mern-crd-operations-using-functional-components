import React from 'react'
import axios from 'axios'
require("dotenv").config();

export default class Check extends React.Component{
	constructor(){
		super();
		this.state={
			date:'',
			content:'',
			conArray:[]
		}
	}
	get=_=>{
		axios.get(`${process.env.REACT_APP_DOMAIN}/get`)
		.then(jsonRes=>this.setState({conArray:jsonRes.data}))
	}
	componentDidMount(){
		this.get();
	}
	handleChange=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	handleClick=(e)=>{
		e.preventDefault();
		const newContent={
			date:this.state.date,
			content:this.state.content
		}
		console.log(newContent)
		//fetch(`${process.env.REACT_APP_DOMAIN}/create?${newContent}`)
		
		axios.post(`${process.env.REACT_APP_DOMAIN}/create`,newContent)
		alert()
		this.get();
		this.setState({
			date:'',
			content:''
		}) 
	} 
	render(){
		const {date,content}=this.state;
		return(
		<div>
		  <form>
			<input type="text"
				value={date}
				name="date"
				onChange={this.handleChange} 
				name="date" 
				placeholder="Enter date"/><br/>
			<input type="text" 
				name="content"
				value={content}
				onChange={this.handleChange} 
				name="content" 
				placeholder="Enter note"/><br/>
			<button onClick={this.handleClick}>Send</button>
		  </form>
		  {
			  	this.state.conArray.map(re=>(
			  		<div  key={re._id}>
			  			<p>{re.date}</p>
			  			<p>{re.content}</p>
			  		</div>
			  	))
		  }
		</div>
		)
	}
}