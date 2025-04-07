import "reflect-metadata";
import container from "../../src/config/inversify.config";
import TYPES from "../../src/config/inversify.types";
import {expect} from "chai";
import {IUserService} from "../../src/services/interfaces/IUserService";
import {IAuthService} from "../../src/services/interfaces/IAuthService";


describe('AuthService.test', () => {

    const authService = container.get<IAuthService>(TYPES.IAuthService);

    it("validateTest", async () => {
        const result = await authService.validate("user1", "pass1");
        console.log(result);
        expect(result).eq(true);
    });
});
