


USE `lo46eby3afk4iyxh`;

CREATE TABLE sslvalues (
    id int NOT NULL,
    siteURL: varchar(500),
    serverIP: varchar(500),
    serverName: varchar(500),
    statusMessage: varchar(500),
    certHostname: varchar(500),
    grade: varchar(500),
	forced: boolean,
    createdAt DATETIME,
    updatedAt DATETIME,
    PRIMARY KEY (id)
);
