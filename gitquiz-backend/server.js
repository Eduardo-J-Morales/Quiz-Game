import express from 'express';
import pkg from 'pg';
import cors from 'cors';

const { Pool } = pkg;

const app = express();

const pool = new Pool({
    connectionString: 'postgresql://eduardo@localhost/gitquiz'
  });


app.get('/test', (req, res) => {
    res.json({ message: 'Server is working' });
  });

app.get('/questions', async (req, res) => {
  try {
    console.log('Attempting to fetch questions from database...');
    const result = await pool.query('SELECT * FROM questions');
    console.log('Questions fetched:', result.rows);
    res.json(result.rows);
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: 'An error occurred while fetching questions', details: err.message });
  }
});

app.use(cors({
  origin: 'http://localhost:5173' // or whatever port your Svelte app is running on
}));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
