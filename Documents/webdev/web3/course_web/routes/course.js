const { Router }=require("express");

const courseRoute=Router();


courseRoute.post("/purchase",function(req,res){
    res.json({
        message:"signedup"
    })
})



courseRoute.get("/preview", function(req,res){
   res.json({
    message:"signedup"
   })
})

module.exports={
    courseRoute:courseRoute
}