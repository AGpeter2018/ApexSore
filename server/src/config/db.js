import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}`,  {
            tls: true,
            tlsAllowInvalidCertificates: true,  // For development only
        });
        console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error(`MondoDb connection failed: ${error.message}, error`)
        process.exit(1)
    }
}

export default connectDB