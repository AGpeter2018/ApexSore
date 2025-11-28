import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], // Vite frontend
    credentials: true  
}));

app.use(express.json())

export default app