const { Router }=require("express");

const userRoute=Router();


userRoute.post("/user/signup",function(req,res){
    res.json({
        message:"signedup"
    })
})


userRoute.post("/user/signin",function(req,res){
    res.json({
        message:"signedup"
    })
})


userRoute.get("/purchase",function(req,res){
    res.json({
        message:"signedup"
    })
})

module.exports={
    userRoute:userRoute
}