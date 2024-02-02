import dotenv from 'dotenv';

dotenv.config()

export interface ExploserviceDBType {
    URI: string | undefined;
    USER: string | undefined;
    PASSWORD: string | undefined;
}

export default {
    jwtSecret: process.env.JWT_SECRET || 'somesecrettoken',
    ExploserviceDB: {
        URI: process.env.EXPLOSERVICE_MONGODB_URI,
        USER: process.env.EXPLOSERVICE_MONGODB_USER,
        PASSWORD: process.env.EXPLOSERVICE_MONGODB_PASSWORD
    },
    ExploagroDB: {
        URI: process.env.EXPLOAGRO_MONGODB_URI || 'mongodb://localhost:27017/exploagro',
        USER: process.env.EXPLOAGRO_MONGODB_USER,
        PASSWORD: process.env.EXPLOAGRO_MONGODB_PASSWORD
    }
}