'use strict';

module.exports = (sequelize, DataTypes) => {
    // Define sequelize model for the SSL values

    const sslData = sequelize.define('sslvalues', {
        siteURL: DataTypes.STRING,
        serverIP: DataTypes.STRING,
        serverName: DataTypes.STRING,
        statusMessage: DataTypes.STRING,
        certHostname: DataTypes.STRING,
        grade: DataTypes.STRING,
        forced: DataTypes.STRING,
    });

    return sslData;

    console.dir(sslData);

};

