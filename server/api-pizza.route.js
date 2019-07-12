const express=require('express');
const app=express();
const apiPizzaRouter=express.Router();


let Pizza=require('./pizza');


apiPizzaRouter.route('/allOrder').get((req,res)=>{
    Pizza.find((err,data)=>{
        if(err)
        {
            res.send("Failure");
        }
        res.send(data);
    });
});

apiPizzaRouter.route('/admin/allOrder').get((req,res)=>{
    Pizza.find((err,data)=>{
        if(err)
        {
            res.send("Failure");
        }
        res.send(data);
    });
});


apiPizzaRouter.route('/:orderId').get((req,res)=>{
    let p_orderId=req.params.p_orderId;
    Pizza.find({orderId:p_orderId},(err,data)=>{
        if(err)
        {
            res.send("Fail to load data for"+p_orderId);
        }
        res.send(data);
    });
});

apiPizzaRouter.route('/oname/:orderName').get((req,res)=>{
    let p_orderName=req.params.orderName;
    Pizza.find({orderName:p_orderName},(err,data)=>{
        if(err)
        {
            res.send("Fail to load data for"+p_orderName);
        }
        res.send(data);
    });
});

apiPizzaRouter.route('/admin/addOrder').post((req,res)=>{
    let body_pizza=new Pizza(req.body);
    body_pizza.save().then(
        ()=>res.send("New Order added to database"),
        (err)=>res.send("Fail to add new order")
    );
});


apiPizzaRouter.route('/admin/delete/:orderId').delete((req,res)=>{
    let p_orderId=req.params.orderId;
    Pizza.findOneAndDelete({orderId:p_orderId},(err,data)=>{
        if(err)
        {
            res.send("Fail to delete data for"+p_orderId);
        }
        res.send(p_orderId+ ":removed");
    });
});


apiPizzaRouter.route('/admin/update/:orderId/:price').put((req,res)=>{
    let p_orderId=req.params.orderId;
    let p_price=req.params.price;
    Pizza.findOneAndUpdate({orderId:p_orderId},{price:p_price},(err,data)=>
    {
        if(err)
        {
            res.send("Fail to update");
        }
        res.send("Updated record for " +p_orderId+ " as " +p_price);
    });
});

module.exports=apiPizzaRouter;
