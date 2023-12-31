import * as dotenv from "dotenv";
dotenv.config();

import { DataSource } from "typeorm";
import { News } from "./models/News.entity";

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DB_URL,
    synchronize: true,
    entities: [News],
});