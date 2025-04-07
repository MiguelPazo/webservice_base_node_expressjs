import {Request, Response} from "express";
import {controller, httpGet, interfaces, request, response} from "inversify-express-utils";
import {inject} from "inversify";
import TYPES from "../config/inversify.types";
import {AppLogger} from "../common/AppLogger";
import {Logger} from "winston";


@controller("/")
export class IndexController implements interfaces.Controller {
    private readonly logger: Logger;

    constructor(@inject(TYPES.AppLogger) logger: AppLogger) {
        this.logger = logger.getLogger();
    }

    @httpGet("")
    private async index(@request() req: Request, @response() res: Response): Promise<any> {
        this.logger.info("Hello world index")
        return res.status(200).send({foo: "bar"})
    }
}