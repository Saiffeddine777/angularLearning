const { Sequelize, DataTypes } = require("sequelize");
const config = require("./config");

const { host, dialect, port, username, password, database } = config.development;
const sequelize = new Sequelize(database, username, password, {
  host: host,
  port: port,
  dialect: dialect,
});


const Client = sequelize.define(
  'Client', 
  {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);


sequelize
  .sync()
  .then(() => {
    console.log("Database Synchronized");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = { Client };
