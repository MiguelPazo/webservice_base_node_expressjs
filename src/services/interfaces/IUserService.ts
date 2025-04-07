export interface IUserService {

    getOne(user: string): Promise<any>;

    fetchAll(start: number, count: number): Promise<any>;

    create(user: string): Promise<any>;

    delete(user: string): Promise<any>;
}
