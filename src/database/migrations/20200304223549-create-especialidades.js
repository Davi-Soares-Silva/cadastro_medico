module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('especialidades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome:{
        allowNull: false,
        type: Sequelize.STRING
      },
      created_at:{
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at:{
        allowNull: false,
        type: Sequelize.DATE
      },
    }),

  down: queryInterface => queryInterface.dropTable('especialidades'),
};
