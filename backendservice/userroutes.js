const exp=require("express") 
var userroutes=exp.Router()
const bodyparser=require('body-parser')
userroutes.use(bodyparser.json())
const initDb=require('./dbconfig').initDb
const getDb=require('./dbconfig').getDb
dbo=initDb()
//add users
userroutes.post('/adduser',(req,res)=>{
    dbo=getDb()
   
    if(req.body=={})
    {
        res.json({"message":"server didn't recieve data"})
    }
    else 
    {
        dbo.collection("usersdatabasecollection").insertOne(req.body,(err,dataArray)=>
        {
            if (err)
            {
                console.log("error in inserting data")
            }
            else
            {
                res.json({message:"user added successfully",data:dataArray})

            }
        })
    }
})
//add users
userroutes.get('/viewusers',(req,res)=>{
    dbo=getDb()
    dbo.collection("usersdatabasecollection").find().toArray((err,dataArray)=>
        {
            if (err)
            {
                console.log("error in inserting data")
            }
            else
            {
                res.json({message:dataArray})
            }
        })
    })


delete user
userroutes.delete('/delete/:Username',(req,res,next)=>
    {
        console.log(req.params);
       //delete user profile with name as " req .params.name"
        dbo=getDb();
        dbo.collection("usersdatabasecollection").deleteOne({Username:{$eq:req.params.Username}},(err,success)=>
        {
            if (err)
           {
                 next(err)
             }
            else
           {
                dbo.collection("usersdatabasecollection").find().toArray((err,dataArray)=>
            {
               if(err)
                       {
                        next(err)
                       }
             else 
                      {
                         res.json({"message":"user deleted",
                                         data:dataArray  })
                      }
              
                 })
            }
       })

    })

// // update details
// userroutes.put('/updateuserdetails',(req,res,next)=>{
//     console.log(req.body)
//     dbo=getDb()
//     dbo.collection("usersdatabasecollection").update({rollnumber:{$eq:req.body.rollnumber}},{$set:{rollnumber:req.body.rollnumber,
//         username:req.body.username,paidfees:req.body.paidfees,totalfees:req.body.totalfees,pendingfees:req.body.pendingfees}},(err,success)=>{
//         if(err)
//         {
//           next(err)
//         }
//         else{
//           res.json({message:"updated user details successfully"})
//         }
//     })
//   })

//exporting userroutes module
module.exports=userroutes