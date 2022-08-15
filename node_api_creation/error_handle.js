import express  from "express";
const app=express();

let fruits = [
    {id: 1,fruit: 'Apple',price:200 },
    {id: 2,fruit: 'Banana',price:210,},
    {id: 3,fruit: 'Mango',price:250 }
]
//get all fruits
app.get('/api/fruits',(req,res)=>{
   res.send(fruits);
})
app.get('/api/fruits/letter',(req,res)=>{
  const filterItems = (arr, query) => {
    return arr.filter(el => el.query !== -1)}
    res.send(filterItems(fruits,'A'))
    
})
//get particular fruit
app.get('/api/fruits/:id',(req,res)=>{
    
  var getid=parseInt(req.params.id);
  fruits.forEach(item => {
  if(item.id == getid) res.send(item)
  });
  res.send("Id is not matching")

})
//create a new fruit
app.post('/api/fruits/:fruit/:price',(req,res)=>{
  const new_item={id:fruits.length+1,fruit:req.params.fruit,price:req.params.price}
  const new_check=fruits.find(new_item=>{new_item===fruits.fruit})
  if(new_item.fruit.length>3 || new_item.price>20){
    fruits=[...fruits,new_item];
    res.send(fruits);
  }
  else{
    res.send("fruits must be greater than 3 and price must be greater than 20")
  }
  });
      
//update a fruit object
app.put('/api/fruits/:id/:fruit',(req,res)=>{
    const newArr = fruits.map(obj => {
        if (obj.id === parseInt(req.params.id)) {
          return {...obj,fruit:req.params.fruit };
        }
        return obj;
      });
      res.send(newArr)  
})
//delete  a fruit
app.delete('/api/fruits/:id',(req,res)=>{
    for( var i = 0; i < fruits.length; i++){ 
        if ( fruits[i].id === parseInt(req.params.id)) { 
            fruits.splice(i, 1); 
            res.send(fruits);
        }
    }   
})


app.listen(6000,()=>{
    console.log("server is running on 6000");
})