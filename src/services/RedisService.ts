import {inject, injectable} from "inversify";
import TYPES from "../config/inversify.types";
import {AppLogger} from "../common/AppLogger";
import {Logger} from "winston";
import {IRedisService} from "./interfaces/IRedisService";
import {redisClient} from "../config/redis";


@injectable()
export class RedisService implements IRedisService {
    private readonly logger: Logger;

    constructor(@inject(TYPES.AppLogger) logger: AppLogger) {
        this.logger = logger.getLogger();
    }

    async set(key: string, value: string) {
        await redisClient.set(key, value);
    }

    async get(key: string): Promise<string | null> {
        return await redisClient.get(key);
    }

    async del(key: string) {
        await redisClient.del(key);
    }
}