import express from 'express';
import pkg from 'pg';
import cors from 'cors';

const { Pool } = pkg;
const app = express();
app.use(cors());
app.use(express.json()); 

const pool = new Pool({
    user: 'eduardo',
    host: 'localhost',
    database: 'gitquiz',
    password: '123456',
    port: 5432
})

app.get('/', (req, res) => {
    res.send('Welcome to the GitQuiz API');
});

app.get('/questions', async (req, res) => {
    try {

        const result = await pool.query('SELECT * FROM questions');
        res.status(200).json(result.rows);
   
     } catch (err) {
    
        console.error(err)
        res.status(500).json({error: 'An error occurred while fetching questions'})
    
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})