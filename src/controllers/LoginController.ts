import {Request, Response} from "express";
import {controller, httpGet, interfaces, request, response} from "inversify-express-utils";


@controller("/login")
export class LoginController implements interfaces.Controller {

    @httpGet("/")
    private async getOne(@request() req: Request, @response() res: Response): Promise<any> {
        return res.status(200).send({foo: "bar"})
    }
}