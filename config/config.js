import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.DB_DEV_PORT,
  dbconfig: {
    server: 'localhost',
    port: 1433,
    pool: {
      max: 5,
      min: 1,
      idleTimeoutMillis: 30000,
    },
    options: {
      encrypt: false,
      datebase: 'database_finalexam',
      trustServerCertificate: true,
    },
    authentication: {
      type: 'default',
      options: {
        userName: 'quasar',
        password: 'znptldpfmdlaalek',
      },
    },
  },
};