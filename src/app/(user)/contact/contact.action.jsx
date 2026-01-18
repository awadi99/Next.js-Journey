"use server"

import { db } from "@/app/doctordata/config/db"


const ContactAction = async(fromData)=>{
    

    const {name,email,message} = Object.fromEntries(fromData.entries());

    const res = await db.execute("INSERT INTO contact (name,email,message) VALUES (?, ?, ?)",[name,email,message]);


}

export default ContactAction;