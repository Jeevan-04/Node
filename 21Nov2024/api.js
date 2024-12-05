// const http = require('http');

// const server = http.createServer((req ,res)=>{
//     console.log(req)
//     res.end("हा प्रतिसाद आहे")
// })

// server.listen(8000,()=>{
//     console.log("server up and running")
// })
const fs = require('fs')
const url = require('url');
const http = require('http');
let productString = fs.readFileSync("./products.json",{encoding:"utf-8"});

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    console.log(req.method);
    console.log(req.url);
    const parsedUrl = url.parse(req.url,true);
    console.log(parsedUrl);
    if(parsedUrl.pathname === "/users" && req.method === "GET")
    {
        res.end("Users Fetched")
    }
    else if(parsedUrl.pathname === "/" && req.method === "GET")
    {
        res.end("हा प्रतिसाद आहे");
    }
    else if(parsedUrl.pathname === "/" && req.method === "POST")
    {
        res.end("हा प्रतिसाद आहे");
    }
    else if(parsedUrl.pathname === "/users" && req.method === "POST")
    {
        res.end("Users Created")
    }
    else if(parsedUrl.pathname === "/products" && req.method === "GET" && parsedUrl.query.id === undefined)
    {
        // fs.readFile("./products.json",{encoding:"utf-8"},(err,ProductString)=>{
        //     res.end(ProductString)
        // })
        res.end(productString)
    }
    else if(parsedUrl.pathname === "/products" && req.method === "GET" && parsedUrl.query.id!= null)
    {
        let id = parsedUrl.query.id;
        let products = JSON.parse(productString);
        let product = products.find((product)=>{
            return product.id === Number(id);
        })
        res.end(JSON.stringify(product))
    }
    else{
        res.end("404 Not Found")
    }
});

server.listen(8000, () => {
    console.log("Server up and running");
});