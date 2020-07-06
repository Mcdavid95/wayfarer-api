import {
    QueryInterface,
    SequelizeStatic
} from 'sequelize';

export = {
    up: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
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
                type: Sequelize.NUMBER
            },

            created_at: {
                type: Sequelize.TIMESTAMP
            },

            updated_at: {
                type: Sequelize.TIMESTAMP
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },

            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },

    down: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
        return queryInterface.dropTable('Buses');
    }
};
