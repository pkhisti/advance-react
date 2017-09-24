import express from 'express';
import config from './config.js';

const app = express();
app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index',{ansvalue:23});
});



app.listen(config.port,function listenHandler(){
    //ES6 templates
    console.info(`Running on port ${config.port}`);
});