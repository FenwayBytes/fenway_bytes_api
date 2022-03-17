import dotenv from 'dotenv';

dotenv.config();

export const RAVEN_SERVER_URL: string = process.env.RAVEN_SERVER_URL as string;
export const RAVEN_DB_NAME_PLATFORM: string = process.env.RAVEN_DB_NAME_PLATFORM as string;
export const RAVEN_PASSWORD: string = process.env.RAVEN_PASSWORD as string;
export const RAVEN_CERT: string = process.env.RAVEN_CERT as string;
