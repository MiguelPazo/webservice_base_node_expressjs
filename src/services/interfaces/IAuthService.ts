export interface IAuthService {

    validate(username: string, password: string): Promise<boolean>;
}
