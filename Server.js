const boardRouter = require('./routes/boardRouter.js');
const express = require('express');
const app = express();

app.use(express.static(__dirname +'/public'));
app.use(express.urlencoded({extended:true}));
app.use('/board',boardRouter);

app.listen(4000,()=>{
	    console.log('server Open');
})
