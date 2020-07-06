module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('Trips', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            bus_id: {
              type: Sequelize.INTEGER,
              references: {
                model: 'Buses',
                key: 'id',
              },
            },

            origin: {
                type: Sequelize.STRING
            },

            destination: {
                type: Sequelize.STRING
            },

            trip_date: {
                type: Sequelize.DATE
            },

            status: {
                type: Sequelize.STRING
            },

            fare: {
                type: Sequelize.FLOAT
            },

            seats: {
                type: Sequelize.JSONB
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
