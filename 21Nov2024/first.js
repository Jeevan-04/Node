const fs = require('fs')
console.log("begin\n")
let data = fs.readFileSync("./abc.txt",{encoding:"utf-8"})
console.log(data+"\n")

fs.readFile("./abc.txt",{encoding:"utf-8"},(err,data)=>{
    if(err)
    {
        console.log(err)
    }
    console.log("\n"+data+"\n")
})
console.log("end")

fs.writeFileSync("./xyz.txt","wrote this file and also created if doesnt exist but over write on old lines")

fs.writeFile("./xyz.txt","avengers assemble ",(err)=>{
    if(!err)
    {
        console.log("success")
    }
})

fs.appendFile("./xyz.txt","bring me thanos",(err)=>{
    if(!err)
    {
        console.log("append success")
    }
})

fs.unlink('./xyz.txt', (err) => {
    if (!err)
    {
        console.log("delete file success")
    }
});