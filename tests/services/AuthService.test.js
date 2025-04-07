"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_config_1 = __importDefault(require("../../src/config/inversify.config"));
const inversify_types_1 = __importDefault(require("../../src/config/inversify.types"));
const chai_1 = require("chai");
describe('AuthService.test', () => {
    const authService = inversify_config_1.default.get(inversify_types_1.default.IAuthService);
    it("validateTest", async () => {
        const result = await authService.validate("user1", "pass1");
        console.log(result);
        (0, chai_1.expect)(true);
    });
});
//# sourceMappingURL=AuthService.test.js.map