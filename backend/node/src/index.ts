import express from "express";
import cors from "cors";

// DB接続設定
// import { AppDataSource } from "./config/appDataSource";
import "reflect-metadata";

import * as dotenv from 'dotenv';
import { subscriptionRouter } from "./routes/subscription.route";

// backendディレクトリ直下の.env参照
// dotenv.config({ path: '/env' });

export const app = express();

export const start = async () => {
    const PORT = Number(process.env.PORT) || 8080;
    const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

    try {
        // await AppDataSource.initialize();

        // CORS設定
        app.use(cors({
            origin: FRONTEND_URL,
            credentials: true,
        }));

        app.use(express.json());

        app.use('/api', subscriptionRouter);

        // テスト実行時サーバー起動しない
        if (process.env.NODE_ENV !== 'test') {
            app.listen(PORT, '0.0.0.0', () => {
                console.log(`✅ Server is running on http://localhost:${PORT}`);
            });
        }

    } catch (error) {
        console.error('DB connection error', error);
    }
};

if (process.env.NODE_ENV !== 'test') {
    start();
}