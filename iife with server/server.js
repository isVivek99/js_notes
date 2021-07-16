((express, server, bodyParser, fs)=>{

    server.use(bodyParser.urlencoded({extended:true}))
    server.get('/', (req,res)=>{
        fs.readFile("./templates/home.html", "utf8", (err,result)=>{
            res.send(result.toString())
        })
    })

    server.listen(8000, (err)=>{
        console.log(err || "server is ready to use at 8000...")
    })

})(
    require("express"),
    require("express")(),
    require("body-parser"),
    require("fs")
)