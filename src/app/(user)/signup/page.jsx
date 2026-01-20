"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Signup() {
    const route = useRouter()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        route.push("/");

    };

    return (
        <div className="relative flex items-center justify-center px-4
min-h-[calc(100vh-64px)]">

            {/* Animated background gradient */}
            <motion.div
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 12, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-black to-purple-900 bg-[length:200%_200%]"
            />

            {/* Card Wrapper */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full max-w-md"
            >
                <div className="rounded-3xl p-[1.5px] bg-gradient-to-r from-yellow-400 via-indigo-500 to-purple-600">
                    <div className="bg-[#0f111a] rounded-3xl px-8 py-10 shadow-2xl">

                        {/* Heading */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-center mb-10"
                        >
                            <h2 className="text-4xl font-semibold text-white tracking-wide">
                                Create Account
                            </h2>
                            <p className="text-gray-400 mt-2 text-sm">
                                Start your premium journey
                            </p>
                        </motion.div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* Input Group */}
                            {[
                                { label: "Full Name", name: "name", type: "text" },
                                { label: "Email Address", name: "email", type: "email" },
                                { label: "Password", name: "password", type: "password" },
                            ].map((field, i) => (
                                <motion.div
                                    key={field.name}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + i * 0.15 }}
                                    className="relative"
                                >
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        required
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        className="peer w-full rounded-xl bg-[#151828] px-4 pt-5 pb-2 text-white border border-white/10 outline-none focus:border-yellow-400 transition"
                                    />
                                    <label className="absolute left-4 top-2 text-xs text-gray-400 transition-all peer-focus:text-yellow-400 peer-valid:text-yellow-400">
                                        {field.label}
                                    </label>
                                </motion.div>
                            ))}

                            {/* Button */}
                            <motion.button
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                className="w-full mt-6 py-3 rounded-xl font-semibold tracking-wide text-black
                bg-gradient-to-r from-yellow-400 to-indigo-500 shadow-lg"
                            >
                                Create Account
                            </motion.button>
                        </form>

                        {/* Footer */}
                        <div className="text-center mt-8 text-sm text-gray-400">
                            Already have an account?
                            <span className="text-yellow-400 ml-1 cursor-pointer hover:underline">
                                Sign in
                            </span>
                        </div>

                    </div>
                </div>
            </motion.div>
        </div>
    );
}
