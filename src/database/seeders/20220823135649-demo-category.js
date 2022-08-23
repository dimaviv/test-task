'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'categories',
            [{
                id: 1,
                name: 'Politics',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 2,
                name: 'Travel',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 3,
                name: 'Culture',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 4,
                name: 'Business',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 5,
                name: 'Sport',
                createdAt: new Date(),
                updatedAt: new Date()
            }],
        {});

    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
