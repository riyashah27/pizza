const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let Pizza=new Schema
(
    {
        orderId:{type:Number},
        orderName:{type:String},
        price:{type:Number},
        orderType:{type:String}
    },
    {
        collection:'pizzadb'
    }
);
module.exports=mongoose.model("Pizza",Pizza);