// pages/api/search.js

// utils/database.js
import { pool } from '@/lib/db';


export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { identity_no } = req.body;
        
    const query = `
    SELECT *
    FROM civil_servants
    WHERE identity_no = $1; 
    `;

        const response = await pool.query(query, [identity_no]);
        console.log(response.rows)
        // const results = response.rows.map(row => ({
        //     id: row.id,
        //     name: row.name,
        // }));
        // console.log(results);

        res.status(200).json(response.rows);
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
