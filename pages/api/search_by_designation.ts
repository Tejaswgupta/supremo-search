// pages/api/search.js

import { pool } from "@/lib/db";

// utils/database.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { ministry, designation } = req.body;

    const query = `
SELECT civil_servants.name, civil_servants.identity_no, experience
FROM civil_servants, jsonb_array_elements(civil_servants.experience_details) AS experience
WHERE ($1::text IS NULL OR (experience ->> 'ministry') ILIKE '%' || $1 || '%')
AND ($2::text IS NULL OR (experience ->> 'designation') ILIKE '%' || $2 || '%')
ORDER BY jsonb_extract_path_text(experience, 'period_to')::date ASC;
    `;

    // ORDER BY jsonb_extract_path_text(experience, 'period_to')::date ASC;

    console.log([
      ministry,
      ministry ? `%${ministry}%` : null,
      designation ? `%${designation}%` : null,
    ]);

    const response = await pool.query(query, [ministry, designation]);
    console.log(response.rows);
    res.status(200).json(response.rows);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
