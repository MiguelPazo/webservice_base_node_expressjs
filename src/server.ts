import "reflect-metadata";
import express from "express";
import {InversifyExpressServer} from "inversify-express-utils";
import container from "./config/inversify.config";
import {requestId} from "./filters/RequestId";
import {accessLogs} from "./filters/AccessLogs";
import {AppDataSource} from "./config/typeorm";
import {initRedis} from "./config/redis";

(async () => {
    await AppDataSource.initialize();
    console.log("📦 Connected to MySQL");

    await initRedis();

    let server = new InversifyExpressServer(container);

    server.setConfig((app) => {
        app.use(requestId);
        app.use(accessLogs);
        app.use(express.json());
    });

    let app = server.build();
    app.listen(parseInt(process.env.NODE_PORT || "3000"));
    console.log(`Listen on http://localhost:${process.env.NODE_PORT}`);
})();