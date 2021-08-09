module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        firstname: {
            type: Sequelize.STRING,
        },
        lastname: {
            type: Sequelize.STRING,
        },
        username: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        },
        phone: {
            type: Sequelize.STRING,
        },
        avatar: {
            type: Sequelize.STRING,
        },
        google_id: {
            type: Sequelize.STRING,
        },
        google_token: {
            type: Sequelize.STRING,
        },
        line_id: {
            type: Sequelize.STRING,
        },
        line_token: {
            type: Sequelize.STRING,
        },
        created_at: {
            type: Sequelize.DATE,
        },
        updated_at: {
            type: Sequelize.DATE,
        },
    });

    return User;
};