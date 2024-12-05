import planetModel from "../models/planetModel.js";

export async function createPlanet(req,res)
{
    let planets = req.body
    try{
        await planetModel.create(planets)
        res.send({message:"Planet Added Successfully !"})
    }
    catch(err)
    {
        console.log(err)
        res.status(500).send({message:"Some Problem"})
    }
}

export async function updatePlanet(req,res)
{
    const planetName = req.params.pname;
    const newUpdates = req.body;
    try {
        const updatedPlanet = await planetModel.findOneAndUpdate(
            { name: planetName },
            { $set: newUpdates },  
            { new: true }
          );
          if (!updatedPlanet) {
            return res.status(404).send({ message: "Planet not found" });
          }
          res.status(200).send({
            message: "Planet updated successfully!",
            planet: updatedPlanet
          });
      
        } 
        catch (err) {
          console.log(err);
          res.status(500).send({ message: "Some Problem" });
        }
}

export async function searchPlanet(req,res)
{
    const name = req.params.name
    try{
        let planet = await planetModel.find({name:{$regex:name,$options:'i'}})
        res.send(planet)
    }
    catch(err)
    {
        console.log(err)
        res.status(500).send({message:"Some Problem"})
    }
}