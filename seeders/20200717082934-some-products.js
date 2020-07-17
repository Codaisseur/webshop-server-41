"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("products", [
      {
        name: "Football",
        price: 10,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rugby balle",
        price: 10,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "hiking gear",
        price: 30,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Knife",
        price: 8,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Spoon",
        price: 2,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
