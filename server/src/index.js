import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import app from './app.js';



// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });

console.log('Environment loaded from:', envPath);
console.log('MongoDB URL exists:', !!process.env.MONGODB_URL);
console.log('PORT:', process.env.PORT);

const startServer = async () => {
    try {
        // Set mongoose options BEFORE connecting
        mongoose.set('strictQuery', false);
        
        // Connect to MongoDB
        console.log('Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGODB_URL, {
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 45000,
            connectTimeoutMS: 30000,
        });

        console.log(`✅ MongoDB Connected: ${mongoose.connection.host}`);
        
        // Ensure connection is ready
        if (mongoose.connection.readyState !== 1) {
            throw new Error('MongoDB connection not ready');
        }
        
        console.log('✅ MongoDB is ready to accept operations');

        const PORT = process.env.PORT || 5000;
        
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`);
        });

        app.on('error', (error) => {
            console.error(`Server error: ${error.message}`);
        });

    } catch (error) {
        console.error('❌ Server startup failed:', error);
        process.exit(1);
    }
};

// Handle connection errors
mongoose.connection.on('error', (err) => {
    console.error('MongoDB error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

startServer();