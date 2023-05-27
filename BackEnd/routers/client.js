const { Router } = require("express");
const { makeAClient, getAllClients } = require("../controllers/client");

const clientRouter = Router()

clientRouter.post('/createclient',makeAClient)
clientRouter.get('/getallclients',getAllClients)

module.exports={clientRouter}