

import pg from 'pg';
const { Pool } = pg


export const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'postgres',
    password: 'EHyg5DpRJ8sd8CtJ2hXsa8RZmPTXRyfJ621',
    port: 5433,
});
