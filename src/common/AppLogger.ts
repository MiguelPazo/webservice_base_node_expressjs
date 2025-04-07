import {injectable} from "inversify";
import {createLogger, transports, format, Logger} from "winston";
import asyncLocalStorage from "./../context/RequestContext";


@injectable()
export class AppLogger {

    private readonly logger: Logger;

    public constructor() {
        if (process.env.NODE_ENV === "production") {
            this.logger = createLogger({
                level: "info",
                format: format.combine(
                    format.timestamp(),
                    format((info) => {
                        const store = asyncLocalStorage.getStore();
                        const requestId = store?.get("requestId");
                        if (requestId) {
                            info.requestId = requestId;
                        }
                        return info;
                    })(),
                    format.json()
                ),
                transports: [
                    new transports.Console()
                ],
            });
        } else {
            this.logger = createLogger({
                level: "info",
                format: format.timestamp(),
                transports: [
                    new transports.Console({
                        format: format.combine(
                            format.colorize(),
                            format.printf(({timestamp, level, message}) => {
                                const store = asyncLocalStorage.getStore();
                                const requestId = store?.get("requestId");
                                const base = requestId ? `[${requestId}]` : "";
                                return `${timestamp} ${base} ${level}: ${message}`;
                            })
                        ),
                    }),
                    new transports.File({
                        filename: "storage/logs/app.log",
                        format: format.combine(
                            format.printf(({timestamp, level, message}) => {
                                const store = asyncLocalStorage.getStore();
                                const requestId = store?.get("requestId");
                                const base = requestId ? `[${requestId}]` : "";
                                return `${timestamp} ${level}: ${base} ${message}`;
                            })
                        ),
                    }),
                ],
            });
        }
    }

    getLogger(): Logger {
        return this.logger;
    }
}
