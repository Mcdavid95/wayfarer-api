module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('Buses', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            number_plate: {
                type: Sequelize.STRING
            },

            manufacturer: {
                type: Sequelize.STRING
            },

            model: {
                type: Sequelize.STRING
            },

            year: {
                type: Sequelize.STRING
            },

            capacity: {
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
        return queryInterface.dropTable('Buses');
    }
};
