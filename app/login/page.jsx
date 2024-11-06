"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import image from "../../app/assets/eyelash-2.webp"
import Image from 'next/image';


export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        // Replace this with your authentication logic
        if (username === "admin" && password === "password") {
            router.push("/admin/dashboard");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white ">
            {/* Left Column - Login Form */}
            <div className=" w-[80%] h-auto flex basis-2/3 items-center justify-center p-8 rounded-lg border border-gray-500">
                <div className="w-full max-w-md h-[500px] p-10 flex flex-col  basis-1/2  bg-black">
                    <h2
                        className="text-3xl font-poppins font-bold mb-6 text-center"
                    >
                        ADMIN LOGIN
                    </h2>
                    <form onSubmit={handleLogin} className="space-y-12">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-200 rounded-md focus:outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-200   rounded-md focus:outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 mt-8 mx-auto bg-white text-gray-800 rounded-md font-medium hover:scale-105 hover:bg-gray-300 transition-colors duration-300"
                        >
                            Login
                        </button>
                    </form>
                </div>

            {/* Right Column - Image */}
            <div className="hidden lg:flex h-[500px] items-center  basis-1/2 justify-center">
                <Image
                    src={image}
                    alt="Lavish Clusters Founder"
                    style={{ objectFit: 'cover', objectPosition: 'top', height: "500px" }}
                    className="w-[]"
                />
            </div>
            </div>

        </div>
    );
}
