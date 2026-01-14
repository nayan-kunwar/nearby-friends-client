"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setToken } from "@/lib/auth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const login = async () => {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            }
        );

        const data = await res.json();
        setToken(data.token);
        router.push("/dashboard");
    };

    return (
        <div className="p-6 max-w-sm mx-auto">
            <h1 className="text-xl mb-4">Login</h1>

            <input
                placeholder="Email"
                className="border p-2 w-full mb-2"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                className="border p-2 w-full mb-4"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                className="bg-black text-white px-4 py-2 w-full"
                onClick={login}
            >
                Login
            </button>
        </div>
    );
}
