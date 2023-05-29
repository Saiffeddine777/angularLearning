const { Router } = require("express");
const { makeAClient, getAllClients, deleteOneClient, updatingEmail, getOneClient } = require("../controllers/client");

const clientRouter = Router()

clientRouter.post('/createclient',makeAClient)
clientRouter.get('/getoneclient/:id',getOneClient)
clientRouter.get('/getallclients',getAllClients)
clientRouter.delete('/deleteclient/:id',deleteOneClient)
clientRouter.put('/updateclient/:id',updatingEmail)

module.exports={clientRouter}