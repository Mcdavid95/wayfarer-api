module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            firstname: {
                type: Sequelize.STRING
            },

            lastname: {
                type: Sequelize.STRING
            },

            phone: {
                type: Sequelize.STRING
            },

            email: {
                type: Sequelize.STRING
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
        return queryInterface.dropTable('Users');
    }
};
