import * as dotenv from "dotenv";
dotenv.config();

console.log(process.env.MONGO_URI);

import mongoose from "mongoose";
import {User} from "../../models/User";


export async function POST(req) {
    const body = await req.json();
    await mongoose.connect(process.env.MONGO_URI);
    const createdUser = await User.create(body);
    return Response.json(createdUser);


}