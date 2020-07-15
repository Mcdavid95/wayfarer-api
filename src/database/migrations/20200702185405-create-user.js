module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            first_name: {
                type: Sequelize.STRING
            },

            last_name: {
                type: Sequelize.STRING
            },

            phone: {
                type: Sequelize.STRING
            },

            is_admin: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },


            password: {
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