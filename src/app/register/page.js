"use client";

import {useState} from "react";
export default function RegisterPage() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [creatingUser, setCreatingUser] = useState(false);
    const [userCreated, setUserCreated] = useState(false);

    const handleFormSubmit = async ev => {
        ev.preventDefault();
        setCreatingUser(true);

        await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'},
        });
        setCreatingUser(false);
    };

        return (
            <section className="mt-8">
                <h1 className="text-center text-primary text-4xl">
                    Register
                </h1>
                <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                    <input type="email" placeholder="email" value={email}
                           disabled={creatingUser}
                           onChange={ev => setEmail(ev.target.value)}/>
                    <input type="password" placeholder="password" value={password}
                           disabled={creatingUser}
                           onChange={ev => setPassword(ev.target.value)}/>
                    <button type="submit" disabled={creatingUser}>
                        Register
                    </button>
                    <div className="my-4 text-center text-gray-500 text-sm">
                        or login with provider
                    </div>
                    <button className="flex gap-4 justify-center">
                        <img src={'/google-logo.png'} alt={' '} width={24} height={24}/>
                        login with google
                    </button>
                </form>
            </section>
        );

    }
