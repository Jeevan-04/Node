const fs = require('fs')

// let data = fs.readFileSync('./products.json',{encoding:"utf-8"})
// let products = JSON.parse(data)


fs.readFile('./products.json',{encoding:"utf-8"}, (err, data) => {
    if (err)
    {
        console.log(err)
    }
    let products = JSON.parse(data)
    console.log(products)
    products.push(newProduct)
    for(let i=0;i<products.length;i++)
    {
        console.log(products[i].name)
    }
    fs.writeFile('./products.json',JSON.stringify(products),(err)=>{
        if (!err)
        {
            console.log("successfully added")
        }
    })
});

let newProduct = {
    id:11,
    name:"Mandukyopanishad shankara bhashya",
    price:2.00,
    category:"upanishad",
    publication:"Gita Press Gorakhpur"
}