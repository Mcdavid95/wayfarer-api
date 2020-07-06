import {
    QueryInterface,
    SequelizeStatic
} from 'sequelize';

export = {
    up: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
        return queryInterface.createTable('Trips', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            bus_id: {
                type: Sequelize.NUMBER
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
        return queryInterface.dropTable('Trips');
    }
};
