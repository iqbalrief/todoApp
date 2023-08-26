'use strict';
const bcrypt = require('bcrypt')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     
     await queryInterface.bulkInsert('Users', [{
      name: "Users",
      email: "users@gmail.com",
      password: await bcrypt.hash("admin", 10),
      createdAt: new Date(),
      updatedAt: new Date(),
      }], {});
  
  },

async down (queryInterface, Sequelize) {
await queryInterface.bulkDelete('Users', null, {});
     
  }
};
