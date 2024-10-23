import express from 'express';
import pkg from 'pg';
import cors from 'cors';

const { Pool } = pkg;

const app = express();
app.use(cors());

const pool = new Pool({
    user: 'eduardo', // Replace with your actual PostgreSQL username
    host: 'localhost',
    database: 'gitquiz',
    password: null, // Use null instead of an empty string
    port: 5432,
    connectionString: 'postgres://eduardo@localhost:/gitquiz'
  });


app.get('/test', (req, res) => {
    res.json({ message: 'Server is working' });
  });

app.get('/questions', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM questions');
    res.json(result.rows);
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: 'An error occurred while fetching questions', details: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});