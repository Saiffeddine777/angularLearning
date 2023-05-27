const { Client } = require("../database");

const createClient= async function(firstName,lastName,phoneNumber,email){
   const client = await Client.create({
      firstName :firstName,
      lastName:lastName,
      phoneNumber:phoneNumber,
      email:email
   })
}

module.exports={createClient}
