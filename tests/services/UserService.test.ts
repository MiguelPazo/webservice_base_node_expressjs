import "reflect-metadata";
import container from "../../src/config/inversify.config";
import TYPES from "../../src/config/inversify.types";
import {expect} from "chai";
import {IUserService} from "../../src/services/interfaces/IUserService";


describe('UserService.test', () => {

    const userService = container.get<IUserService>(TYPES.IUserService);

    it("fetchAllTest", async () => {
        const result = await userService.fetchAll(10, 1);
        console.log(result);
        expect(result.length).greaterThan(0);
    });
});
