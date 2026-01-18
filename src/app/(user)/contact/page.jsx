"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ToastContainer, toast ,Slide} from 'react-toastify';
import ContactAction from "./contact.action.jsx";


// export const metadata = {
//     title: "User | Contact",
//     description: "This is User contact page",
//     keywords: ["contact", "nextjs", "user page"],
// };

const inputAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15 },
    }),
};





function Contact() {

    const [data, sendData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleValue = (e) => {

        e.preventDefault();
        const { name, value } = e.target;
        sendData((prev) => ({
            ...prev,
            [name]: value,
        }));

    };


    const SendValue = (e) => {
        e.preventDefault();
        console.log("From Data :", data);
        
        toast.success("Message sent successfully ");
        sendData({
            name: "",
            email: "",
            message: ""
        });
        


    }

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-4">


            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-30 blur-3xl"
            />

            <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-pink-500 to-purple-700 opacity-30 blur-3xl"

            />


            <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl"

            >
                <div className="p-8 text-white">


                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl font-extrabold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                    >
                        Let’s Talk 💬
                    </motion.h1>

                    <p className="text-center text-gray-300 mt-2 mb-8 text-sm">
                        Have an idea? Let’s build it together.
                    </p>


                    <form className="space-y-5" action={ContactAction} >

                        {/* Name */}
                        <motion.input
                            custom={1}
                            variants={inputAnimation}
                            initial="hidden"
                            animate="visible"
                            whileFocus={{ scale: 1.04 }}
                            type="text"
                            placeholder="Your Name"
                            className="w-full rounded-xl bg-black/40 px-4 py-3 border border-white/20 outline-none focus:border-purple-400 transition"
                            name="name"
                            value={data.name}
                            onChange={handleValue}
                        />


                        <motion.input
                            custom={2}
                            variants={inputAnimation}
                            initial="hidden"
                            animate="visible"
                            whileFocus={{ scale: 1.04 }}
                            type="email"
                            placeholder="Your Email"
                            className="w-full rounded-xl bg-black/40 px-4 py-3 border border-white/20 outline-none focus:border-purple-400 transition"
                            name="email"
                            value={data.email}
                            onChange={handleValue}
                        />


                        <motion.textarea
                            custom={3}
                            variants={inputAnimation}
                            initial="hidden"
                            animate="visible"
                            whileFocus={{ scale: 1.04 }}
                            rows="4"
                            placeholder="Your Message"
                            className="w-full rounded-xl bg-black/40 px-4 py-3 border border-white/20 outline-none focus:border-purple-400 transition"
                            name="message"
                            value={data.message}
                            onChange={handleValue}
                        />


                        <motion.button
                            custom={4}
                            variants={inputAnimation}
                            initial="hidden"
                            animate="visible"
                            whileHover={{
                                scale: 1.07,
                                boxShadow: "0px 0px 30px rgba(168,85,247,0.7)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="relative w-full rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 py-3 font-bold tracking-wide text-white overflow-hidden"
                        >
                            <span className="relative z-10">Send Message </span>
                        </motion.button>

                    </form>
                </div>
            </motion.div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Slide}
            />
        </div>



    );
}

export default Contact;
