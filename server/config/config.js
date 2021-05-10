require("dotenv").config();

module.exports = config = {
	mysql: {
		host: "localhost",
		port: 3306,
		user: "root",
		database: process.env.MYSQL_DATABASE,
		password: process.env.MYSQL_PASSWORD,
	},
};
