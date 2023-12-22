import {model, Schema, models} from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type:String,
        required: true,
        unique: true,
        validate: pass => {
            if (!pass?.length || pass.length < 5) {
                new Error('password must be at least 5 characters');
                return false;
            }
        },
    },
}, {timestamps: true});

UserSchema.post('validate', function(user){
    const notHashedPassword = user.password;
    const salt = bcrypt.genSalt(10);
    user.password = bcrypt.hashSync(notHashedPassword, salt);
});

export const User = models?.User || model('User', UserSchema)