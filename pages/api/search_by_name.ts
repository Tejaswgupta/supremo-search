// pages/api/search.js

// utils/database.js
import { pool } from '@/lib/db';


export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name } = req.body;
        
    const query = `
    SELECT *
    FROM civil_servants
    WHERE name ILIKE $1; 
    `;

        const response = await pool.query(query, [`%${name}%`]);
        console.log(response.rows)
        res.status(200).json(response.rows);
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
