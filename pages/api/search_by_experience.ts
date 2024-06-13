// pages/api/search.js

import { pool } from "@/lib/db";

// utils/database.js




export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { ministry, period_from, period_to } = req.body;

        
    const query = `
    SELECT civil_servants.name,civil_servants.identity_no, experience
    FROM civil_servants, jsonb_array_elements(experience_details) AS experience
    WHERE ($1::text IS NULL OR (experience ->> 'ministry') ILIKE $2)
    AND ($3::timestamptz IS NULL OR TO_TIMESTAMP(experience ->> 'period_from', 'YYYY-MM-DD"T"HH24:MI:SS.US') <= $4::timestamptz)
    AND ($5::timestamptz IS NULL OR TO_TIMESTAMP(experience ->> 'period_to', 'YYYY-MM-DD"T"HH24:MI:SS.US') >= $6::timestamptz);
    `;

        const ministryParam = ministry ? `%${ministry}%` : null;
        console.log([ministry, ministryParam, period_to, period_to, period_from, period_from])

        const response = await pool.query(query, [ministry, ministryParam, period_to, period_to, period_from, period_from]);
        console.log(response.rows)
        res.status(200).json(response.rows);
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
