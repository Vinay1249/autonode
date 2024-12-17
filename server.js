const express = require('express')

const app = express()

app.get('/',(request,response)=>{
	response.send('welcome to my automated application')
})

app.listen(4000, '0.0.0.0' ,()=>{
	console.log('server started at port 4000')
})

