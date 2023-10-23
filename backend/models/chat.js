const Sequelize = require('sequelize');
const sequelize = require('../util/database')

const Chat = sequelize.define('chat', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    message: Sequelize.STRING,
    groupId: {
        type: Sequelize.INTEGER,
        allowNull: false // Adjust this to your requirements
    }
});

module.exports = Chat;