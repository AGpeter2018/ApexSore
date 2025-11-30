
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './server/.env' });

console.log('Testing MongoDB connection and write...');

mongoose.connect(process.env.MONGODB_URL, {
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000,
}).then(async () => {
    console.log('✅ Connected');
    
    // Try a simple write
    const TestModel = mongoose.model('Test', new mongoose.Schema({ name: String }));
    
    const doc = await TestModel.create({ name: 'test' });
    console.log('✅ Write successful:', doc);
    
    await TestModel.deleteOne({ _id: doc._id });
    console.log('✅ Delete successful');
    
    process.exit(0);
}).catch(err => {
    console.error('❌ Error:', err.message);
    process.exit(1);
});
