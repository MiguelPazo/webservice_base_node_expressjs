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
import {IAuthService} from "./interfaces/IAuthService";


@injectable()
export class AuthService implements IAuthService {
    private readonly logger: Logger;
    private userEntity = AppDataSource.getRepository(UserEntity);

    constructor(
        @inject(TYPES.AppLogger) logger: AppLogger,
    ) {
        this.logger = logger.getLogger();
    }

    async validate(username: string, password: string): Promise<boolean> {
        try {
            let user = await this.userEntity.findOne({
                where: {user: username, pass: password}
            });

            return Promise.resolve(user != null);
        } catch (err) {
            this.logger.error(err);
        }

        return Promise.resolve(false);
    }
}