import {NextFunction, Request, Response} from "express";
import {AppLogger} from "../common/AppLogger";


export function accessLogs(req: Request, res: Response, next: NextFunction) {
    const start = process.hrtime();

    res.on("finish", () => {
        const [seconds, nanoseconds] = process.hrtime(start);
        const duration = (seconds * 1e3 + nanoseconds / 1e6).toFixed(2);

        const {method, originalUrl} = req;
        const {statusCode} = res;

        new AppLogger().getLogger().info({
            message: `${method} ${originalUrl} ${statusCode} ${duration}`
        });
    });

    next();
}