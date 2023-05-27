const { createClient, fintAllClients, deleteClient } = require("../models/client");

const makeAClient = function(req,res){
     const {firstName,lastName,phoneNumber,email} = req.body
     createClient(firstName,lastName,phoneNumber,email)
     .then(results=>{
        console.log(results)
        res.status(200).json(results)
     })
     .catch(err=>{
        console.log(err)
        res.status(500).json(err)
     })
}

const getAllClients = function(req,res){
    fintAllClients()
    .then(results=>{
        console.log(results)
        res.status(200).json(results)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
}

const deleteOneClient=function(req,res){
    const{id}= req.params
    deleteClient(id)
    .then(results=>{
        console.log(results)
        res.status(200).json(results)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
}

module.exports={makeAClient,getAllClients,deleteOneClient}