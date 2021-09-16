import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
require("dotenv").config();

function Display(){
	/*const [conArray,setConArray]=useState([]);
	useEffect(()=>{
		axios.get(`${process.env.REACT_APP_DOMAIN}/get`)
		.then(jsonRes=>setConArray(jsonRes.data))
	},[setConArray])*/


	/*function get(){
		axios.get(`${process.env.REACT_APP_DOMAIN}/get`)
		.then(jsonRes=>setConArray(jsonRes.data))
	}*/
	/*useEffect(()=>{
		axios.get(`${process.env.REACT_APP_DOMAIN}/get`)
		.then(jsonRes=>setConArray(jsonRes.data))
		console.log("content")
	},[setConArray])
	*/
	/*get();
	alert("data send successfully")*/
	return(
		<div>
			 {/*
			  	conArray.map(re=>(
			  		<div  key={re._id}>
			  			<p>{re.date}</p>
			  			<p>{re.content}</p>
			  		</div>
			  	))
			  */console.log("display")}

		</div>
	)
}
export default Display;

