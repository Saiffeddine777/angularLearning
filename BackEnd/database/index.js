const { Sequelize,DataTypes } = require("sequelize");
const config = require("./config")
const{host,dialect,port,username,password,database}=config.development
const sequelize = new Sequelize(database,username,password,{
    host:host,
    port:port,
    dialect:dialect
})

const Client = sequelize.define('Client',{
    firstName:{
        type: DataTypes.STRING
    },
    lastName:{
        type:DataTypes.STRING   //defining the columns
    },
    phoneNumber:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    },
    {
    timestamps:true      // defining some of the optinal columns
    })
// creating a instance that consume that configuration from config js

sequelize.sync()
   .then(()=>{
    console.log("Database Synchronized")
   })
   .catch((err)=>{
    console.error(err)
   })

module.exports={Client}