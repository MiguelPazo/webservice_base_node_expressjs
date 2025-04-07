import {v4 as uuidv4} from "uuid";
import {NextFunction, Request, Response} from "express";
import asyncLocalStorage from "./../context/RequestContext";


export function requestId(req: Request, res: Response, next: NextFunction) {
    const store = new Map<string, any>();
    const requestId = uuidv4();

    store.set("requestId", requestId);

    asyncLocalStorage.run(store, () => {
        next();
    });
}