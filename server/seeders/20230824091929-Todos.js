'use strict';
const bcrypt = require('bcrypt')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     
     await queryInterface.bulkInsert('Todos', [{
      name: "Buat JS",
      users_id: 1,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),  
      }], {});
  
  },

async down (queryInterface, Sequelize) {
await queryInterface.bulkDelete('Todos', null, {});
     
  }
};
