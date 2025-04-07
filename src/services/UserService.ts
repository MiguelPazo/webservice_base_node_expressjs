import {inject, injectable} from "inversify";
import {IUserService} from "./interfaces/IUserService";
import * as console from "node:console";
import {UserEntity} from "../entities/UserEntity";
import {AppDataSource} from "../config/typeorm";
import TYPES from "../config/inversify.types";
import {AppLogger} from "../common/AppLogger";
import {Logger} from "winston";
import {IRedisService} from "./interfaces/IRedisService";
import {v4 as uuidv4} from "uuid";


@injectable()
export class UserService implements IUserService {
    private readonly logger: Logger;
    private userEntity = AppDataSource.getRepository(UserEntity);
    private redisService: IRedisService;

    constructor(
        @inject(TYPES.AppLogger) logger: AppLogger,
        @inject(TYPES.IRedisService) redisService: IRedisService
    ) {
        this.logger = logger.getLogger();
        this.redisService = redisService;
    }

    async delete(user: string): Promise<any> {
        try {
            this.logger.info(`delete ${user}`);

            return Promise.resolve({foo: "bar"});
        } catch (err) {
            this.logger.error(JSON.stringify({
                message: `delete ${user}`,
                result: err
            }));
        }

        return Promise.resolve(null);
    }

    async fetchAll(start: number, count: number): Promise<any> {
        try {
            this.logger.info(`fetchAll ${start} and ${count}`);
            let result = await this.userEntity.find();
            this.logger.info(JSON.stringify(result, null, 2))

            await this.redisService.set("demo", uuidv4());

            let result2 = await this.redisService.get("demo");
            this.logger.info(`redis: key=demo value=${result2}`);

            return Promise.resolve(result);
        } catch (err) {
            this.logger.error(JSON.stringify({
                message: `fetchAll ${start} and ${count}`,
                result: err
            }));
        }

        return Promise.resolve(null);
    }

    async getOne(user: string): Promise<any> {
        try {
            this.logger.info(`find ${user}`);
            return Promise.resolve({foo: "bar"});
        } catch (err) {
            this.logger.error(JSON.stringify({
                message: `find ${user}`,
                result: err
            }));
        }

        return Promise.resolve(null);
    }

    async create(user: string): Promise<any> {
        try {
            this.logger.info(`update ${user}`);
            return Promise.resolve({foo: "bar"});
        } catch (err) {
            this.logger.error(JSON.stringify({
                message: `update ${user}`,
                result: err
            }));
        }

        return Promise.resolve(null);
    }
}