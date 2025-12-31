"use client"
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { User } from 'lucide-react';
import TiltCard from '../card';

export default function page(props) {
    const [userInfo, setInfo] = useState({});
    const searchParams = useSearchParams();
    const name = searchParams.get("name");
    useEffect(() => {
        const fetchData = async () => {
            // const url = `https://api.agify.io/?name=${searchParams}`;
            const url = `https://api.genderize.io/?name=${name}`;
            const res = await axios.get(url);

            setInfo(res.data);
        }
            fetchData();
    }, []);

    console.log([userInfo]);
    return (
        <div className="flex item] justify-center mt-50" style={{ perspective: "1000px" }}>
            <TiltCard>
                <div className="h-100 w-70  rounded-2xl border-none shadow-2xl
     shadow-violet-500 p-5 flex flex-col items-center justify-around 
     bg-slate-800 contrast-145 " >
                    <div className="h-20 w-20 mt-5 p-2 bg-slate-700 shadow-[10px 20px 30px] shadow-violet-500 rounded-full flex justify-center contrast-120 ">
                        <User className="h-15 w-15 object-contain text-white flex justify-center" />
                    </div>
                    <h1 className="font-medium text-2xl -mt-5" > {userInfo.name}</h1>
                    {/* <p className="font-medium text-2xl ">{userInfo.age}</p> */}
                    <p className="font-medium text-2xl ">{userInfo.gender}</p>


                    <p className="font-light text-2xl ">{userInfo.count}</p>
                </div>
            </TiltCard>
        </div>
    )
}
