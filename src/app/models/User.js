import bcrypt from "bcrypt";
import { model, Schema, models } from "mongoose";


const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: {
        type: String,
        required: true,
        unique: true,
        validate: pass => {
            if (!pass?.length || pass.length < 5) {
                throw new Error('Password must be at least 5 characters');
            }
        },
    },
}, { timestamps: true });

UserSchema.post('validate', async function (user) {
    const notHashedPassword = user.password;
    const salt = await bcrypt.genSalt(9);
    user.password = await bcrypt.hash(notHashedPassword, salt);
});
export const User = models?.User || model('User', UserSchema);
