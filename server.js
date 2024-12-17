const express = require('express')

const app = express()

app.get('/',(request,response)=>{
	response.send('welcome to the world of waste')
})

app.listen(4000, '0.0.0.0' ,()=>{
	console.log('server started at port 4000')
})

