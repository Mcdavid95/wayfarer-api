/* eslint-disable @typescript-eslint/no-unused-vars */
module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.createTable('Bookings', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
          },

          trip_id: {
            type: Sequelize.INTEGER,
            references: {
              model: 'Trips',
              key: 'id',
            },
          },

          user_id: {
            type: Sequelize.INTEGER,
            references: {
              model: 'Users',
              key: 'id',
            },
          },

          seat_number: {
              type: Sequelize.INTEGER
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

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Bookings');
  }
};
