const { Router } = require("express");
const { makeAClient, getAllClients, deleteOneClient } = require("../controllers/client");

const clientRouter = Router()

clientRouter.post('/createclient',makeAClient)
clientRouter.get('/getallclients',getAllClients)
clientRouter.delete('/deleteclient/:id',deleteOneClient)

module.exports={clientRouter}