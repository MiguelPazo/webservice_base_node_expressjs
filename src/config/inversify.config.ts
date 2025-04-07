import "reflect-metadata";
import {Container} from "inversify";
import TYPES from "./inversify.types";
import "./../controllers/_index";
import {IUserService} from "../services/interfaces/IUserService";
import {UserService} from "../services/UserService";
import {AppLogger} from "../common/AppLogger";
import {IRedisService} from "../services/interfaces/IRedisService";
import {RedisService} from "../services/RedisService";
import {IAuthService} from "../services/interfaces/IAuthService";
import {AuthService} from "../services/AuthService";

const container = new Container({autoBindInjectable: true});

// Services
container.bind<IUserService>(TYPES.IUserService).to(UserService).inSingletonScope();
container.bind<IAuthService>(TYPES.IAuthService).to(AuthService).inSingletonScope();
container.bind<IRedisService>(TYPES.IRedisService).to(RedisService).inSingletonScope();

// Common
container.bind<AppLogger>(TYPES.AppLogger).to(AppLogger).inSingletonScope();


export default container;