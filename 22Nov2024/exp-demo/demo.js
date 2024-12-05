async function doSomething()
{
    return 23
}



// 1
doSomething()
.then((data)=>{

})
.catch((err)=>{

})



// 2
async function handlePromise()
{
    let data = await doSomething()
}


//1 and 2 are same 