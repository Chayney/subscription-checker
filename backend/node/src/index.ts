import express from "express";

// DB接続設定
import { AppDataSource } from "./config/appDataSource";
import "reflect-metadata";

// import { todoRouter } from "./routes/todo.route";
import * as dotenv from 'dotenv';

dotenv.config();

export const app = express();

export const start = async () => {
    const PORT = process.env.PORT || 3000;

    AppDataSource.initialize()
        .then(() => {
            app.use(express.json());
            // app.use('/api', todoRouter);

            // テスト実行時サーバー起動しない
            if (process.env.NODE_ENV !== 'test') {
                app.listen(PORT, () => {
                    console.log(`✅ Server is running on http://localhost:${PORT}`);
                });
            }
        })
        .catch((error) => {
            console.error('DB connection error', error);
        });
}

if (process.env.NODE_ENV !== 'test') {
    start();
}