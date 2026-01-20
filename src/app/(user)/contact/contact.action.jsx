"use server"

import { db } from "@/app/doctordata/config/db"
import { redirect } from "next/navigation";


const ContactAction = async(fromData)=>{
    try{
    const {name,email,message} = Object.fromEntries(fromData.entries());

    const res = await db.execute("INSERT INTO contact (name,email,message) VALUES (?, ?, ?)",[name,email,message]);
    redirect("/");
    }
    catch (err){
        if(err.message=="NEXT_REDIRECT")throw err
        console.error(err);

    }

}

export default ContactAction;