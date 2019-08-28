const exp=require("express")
app=exp()
//import path
const Path=require("path")
console.log(__dirname)
const initDb=require('./dbconfig').initDb
const getDb=require('./dbconfig').getDb
//connecting  angular to server
app.use(exp.static(Path.join(__dirname,'../dist/doctor')))
// usersroutes

 const usersroutes=require('./userroutes')
 app.use("/routes",usersroutes)

 


app.listen(8080,()=>{
    console.log ("server is running on port 8080")
})