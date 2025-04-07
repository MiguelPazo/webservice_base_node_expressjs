import {NextFunction, Request, Response} from "express";
import {
    controller,
    httpDelete,
    httpGet,
    httpPost,
    interfaces,
    queryParam,
    request,
    requestParam,
    response
} from "inversify-express-utils";
import {inject} from "inversify";
import {IUserService} from "../services/interfaces/IUserService";
import TYPES from "../config/inversify.types";


@controller("/user")
export class UserController implements interfaces.Controller {

    constructor(
        @inject(TYPES.IUserService) private userService: IUserService
    ) {
    }

    @httpGet("/get")
    private async getOne(@request() req: Request, @response() res: Response): Promise<any> {
        let result = await this.userService.getOne(req.query.id);

        if (result != null) {
            return res.status(200).send(result)
        } else {
            return res.status(500).send({message: "Internal error"})
        }
    }

    @httpGet("/list")
    private async list(@response() res: Response, @queryParam("start") start: number, @queryParam("count") count: number): Promise<any> {
        let result = await this.userService.fetchAll(start, count);

        if (result != null) {
            return res.status(200).send(result)
        } else {
            return res.status(500).send({message: "Internal error"})
        }
    }

    @httpPost("/create")
    private async create(@request() req: Request, @response() res: Response) {
        let result = await this.userService.create(req.body);

        if (result != null) {
            return res.status(200).send(result)
        } else {
            return res.status(500).send({message: "Internal error"})
        }
    }

    @httpDelete("/:id")
    private async delete(@requestParam("id") id: string, @response() res: Response): Promise<void> {
        let result = await this.userService.delete(id);

        if (result != null) {
            return res.status(200).send(result)
        } else {
            return res.status(500).send({message: "Internal error"})
        }
    }
}