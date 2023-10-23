const Sequelize = require ('sequelize');

const sequelize = new Sequelize('chat app','root','Akshay@1234',{
    dialect:'mysql',
    host:'localhost'
})
 module.exports = sequelize;