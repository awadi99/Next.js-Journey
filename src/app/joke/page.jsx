"use client"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Image from "next/image";
import jokeImg from "./joke.png";
import Loading from './loading';



export default function Page() {

    const [joke, setJoke] = useState([]);
    const [showJoke, hideJoke] = useState(false);
    const url = "https://v2.jokeapi.dev/joke/Any";
    const fetchdata = async () => {
        try {
            const res = await axios.get(url);
            setJoke(res.data);
        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
     fetchdata();
    }, [])


    return (
        <>
            <div className='flex flex-row justify-center items-center mt-60 contrast-150'>
                < div className=' h-auto w-150 shadow-2xl shadow-violet-800 rounded-2xl p-10 flex flex-col justify-center items-center gap-10 bg-slate-800'>

                    <Image
                        className='rounded-[50%] h-15 w-15'
                        src={jokeImg}
                        width={10}
                        height={10}
                        alt='joke'
                    />

                    <p className='font-medium text-center '>{joke?.setup}</p>

                    {showJoke ? (
                        <button className='bg-slate-700 h-10 w-50 rounded-2xl' onClick={() => hideJoke(false)}>Reveal Punchline</button>
                    ) : (
                        <>
                            <p className='font-medium text-center'>{joke?.delivery}</p>
                            
                            <button className='bg-slate-700 h-10 w-50 rounded-2xl ' onClick={() => hideJoke(true)}>Hide Punchline</button>
                            
                        </>

                    )}

                    <button className='bg-slate-700 h-7 w-20 rounded-2xl mb-10' onClick={fetchdata}>Next </button>
                </div>
            </div>
        </>

    )
}
