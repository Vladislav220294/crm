import mongoose from 'mongoose';
import { getEnvVar } from './utils/getEnvVar';

const connectDB = async (): Promise<void> => {
    if (mongoose.connection.readyState === 1) {
    return;
  }
    const mongoURI = getEnvVar('MONGODB_URI');
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}
export default connectDB;

