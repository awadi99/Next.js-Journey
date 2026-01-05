import axios from "axios";
import { User } from "lucide-react";
import TiltCard from "./card";
import { resolve } from "styled-jsx/css";
import { Suspense } from "react";

const FetchData = async (props) => {
    const searchParams = await props.searchParams;
    const username = searchParams.name;

    const url = `https://api.genderize.io/?name=${username}`;
    // const url =`https://api.agify.io/?name=${username}`
    const res = await axios.get(url);
    const data = res.data;

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 3000)
    })

    return (
        <>
            <div className="flex flex-row justify-around items-center p-20 w-full h-full">

                <div className="font-medium text-center w-80">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Suscipit impedit atque rerum distinctio saepe repellat totam
                        officiis ab alias unde eius quasi amet placeat debitis ad dignissimos,
                        molestias corporis excepturi!</h1>
                </div>

                <Suspense>
                    <div className="flex item] justify-center mt-50" style={{ perspective: "1000px" }}>
                        <TiltCard>
                            <div className="h-100 w-70  rounded-2xl border-none shadow-2xl
             shadow-violet-500 p-5 flex flex-col items-center justify-around 
             bg-slate-800 contrast-145 " >
                                <div className="h-20 w-20 mt-5 p-2 bg-slate-700 shadow-[10px 20px 30px] shadow-violet-500 rounded-full flex justify-center contrast-120 ">
                                    <User className="h-15 w-15 object-contain text-white flex justify-center" />
                                </div>
                                <h1 className="font-medium text-2xl -mt-5" > {data.name}</h1>
                                <p className="font-medium text-2xl ">{data.age}</p>
                                <p className="font-medium text-2xl -mt-10">{data.gender}</p>


                                <p className="font-light text-2xl ">{data.count}</p>
                            </div>
                        </TiltCard>
                    </div>
                </Suspense>
            </div>

        </>
    );
};

export default FetchData;
