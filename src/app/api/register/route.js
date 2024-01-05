import { User } from '../../models/User';
import mongoose from 'mongoose';

export async function POST(req) {
    try {
        const body = await req.json();
        // Connect to MongoDB using the provided URI
        await mongoose.connect(process.env.MONGO_URL);
        // Create a new user using the User model
        const createdUser = await User.create(body);
        // Return a JSON response with the created user
        return new Response.json(createdUser); // Use new Response.json()
    } catch (error) {
        // Handle any errors that may occur during the process
        console.error('Error processing request:', error.message);
        // Close the MongoDB connection in case of an error
        await mongoose.connection.close();
        // Return an error response
        return new Response({
            status: 500,
            body: { error: 'Internal Server Error' },
        });
    }
}
