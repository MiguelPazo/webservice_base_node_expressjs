"use strict";

process.env.NODE_ENV = "local"
process.env.NODE_PORT = "3031"
process.env.BASE_URL = "http://localhost:3031"

process.env.MYSQL_HOST = "127.0.0.1"
process.env.MYSQL_PORT = "3808"
process.env.MYSQL_USERNAME = "root"
process.env.MYSQL_PASSWORD = ""
process.env.MYSQL_DATABASE = "demo"

process.env.REDIS_HOST = "127.0.0.1"
process.env.REDIS_PORT = "6379"

module.exports = {
    require: ["ts-node/register", "./tests/setup.ts"],
    extension: ["ts"],
    spec: "tests/**/*.test.ts",
    timeout: 100000,
    recursive: true,
    reporter: "spec",
};
