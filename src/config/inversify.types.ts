const TYPES = {
    // Services
    IUserService: Symbol.for("IUserService"),
    IAuthService: Symbol.for("IAuthService"),
    IRedisService: Symbol.for("IRedisService"),

    //Common
    AppLogger: Symbol.for("AppLogger")
};

export default TYPES;