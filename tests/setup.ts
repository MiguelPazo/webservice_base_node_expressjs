import {AppDataSource} from '../src/config/typeorm';
import {initRedis, disconnectRedis} from "../src/config/redis";


export const mochaHooks = {
    beforeAll: async () => {
        await AppDataSource.initialize();
        console.log("📦 Connected to MySQL");

        await initRedis();
    },

    afterAll: async () => {
        await AppDataSource.destroy();
        console.log("📦 Disconnected to MySQL");
        await disconnectRedis();
    }
};