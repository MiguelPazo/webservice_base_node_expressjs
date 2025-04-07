"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("../src/config/typeorm");
before(async () => {
    console.log('📦 Connections to MySQL...');
    await typeorm_1.AppDataSource.initialize();
    console.log('📦 Connections to Redis...');
    await typeorm_1.AppDataSource.initialize();
});
after(async () => {
    console.log('🔌 Closing connection to MySQL...');
    await typeorm_1.AppDataSource.destroy();
});
//# sourceMappingURL=setup.js.map