import chatModel from "../models/chatModel.js"

export async function letsChat(req,res){
    let chat =req.body 

    try{
        await chatModel.create(chat)
        res.status(201).send({message:"Chat created"})
    }
    catch(err)
    {
        console.log(err)
        res.status(500).send({message:"Some Problem"})
    }
}

export async function getConversation(req,res){
    let loggedid = req.params.loggedid
    let friendid = req.params.friendid

    // let loggedmsgs = await chatModel.find({sender:loggedid,receiver:friendid})
    // let friendmsgs = await chatModel.find({sender:friendid,receiver:loggedid})
    
    // let conversation = [...loggedmsgs,...friendmsgs]

    // console.log(loggedmsgs[0].message)

    try{

        let conversation = await chatModel.find(
            {$or:[
                {sender:loggedid,receiver:friendid},
                {sender:friendid,receiver:loggedid}
            ]}
        ).sort({createdAt:1})

        res.send(conversation)
    }
    catch(err)
    {
        console.log(err)
        res.status(500).send({message:"Some Problem"})
    }

    // console.log(req.body.sender)

}



//component, state, use effect