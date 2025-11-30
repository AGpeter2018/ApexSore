import express from 'express'
import cors from 'cors'
import router from './routes/product-collection-route.js';

const app = express()
// Middleware
app.use(express.json())

app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], // Vite frontend
    credentials: true  
}));

app.use(express.urlencoded({extended: true}))

// Routes
app.use('/api/collections', router)


export default app