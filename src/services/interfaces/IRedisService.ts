export interface IRedisService {

    set(key: string, value: string);

    get(key: string): Promise<string | null>;

    del(key: string);
}
