import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/product/:id',(req,res)=>{
   const product = data.products.find((x)=>x.id === req.params.id);
   if(product){
       res.send(product);
   }
   else{
       res.status(404).send({message: 'Product not Found'});
   } 
});

app.get('/api/products',(req,res)=>{
    res.send(data.products);
});

const port = process.env.PORT || 5000;
app.get('/',(req, res)=>{
    res.send('Serve is ready');
});
app.listen(port, ()=>{
console.log(`Serve at http://localhost:${port}`);
});