/* eslint-disable @typescript-eslint/no-unused-vars */
module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.createTable('Trips', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
          },

          route_id: {
            type: Sequelize.INTEGER,
            references: {
              model: 'Routes',
              key: 'id',
            },
          },

          bus_id: {
            type: Sequelize.INTEGER,
            references: {
              model: 'Buses',
              key: 'id',
            },
          },

          trip_date: {
              type: Sequelize.DATE
          },

          fare: {
              type: Sequelize.FLOAT
          },
          created_at: {
              allowNull: false,
              type: Sequelize.DATE,
              defaultValue: Sequelize.fn('NOW')
          },

          updated_at: {
              allowNull: false,
              type: Sequelize.DATE,
              defaultValue: Sequelize.fn('NOW')
          }
      });
  },

  down: async (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Trips');
  }
};
