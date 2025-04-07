import {createClient} from "redis";

export const redisClient = createClient({
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});

redisClient.on("error", (err) => {
    console.error("❌ Redis error:", err);
});

export async function initRedis() {
    await redisClient.connect();
    console.log("📡 Redis connected");
}

export async function disconnectRedis() {
    await redisClient.disconnect();
    console.log("📡 Redis disconnected");
}