const { Client } = require("../database");

const createClient= async function(firstName,lastName,phoneNumber,email){
   const client = await Client.create({
      firstName :firstName,
      lastName:lastName,
      phoneNumber:phoneNumber,
      email:email
   })
   return client
}

const fintAllClients = async function(){
    const results = await Client.findAll()
    return results
}

module.exports={createClient,fintAllClients}
