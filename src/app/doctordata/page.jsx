import React from 'react'
import { db } from './config/db'

 const page = async ()=> {
    try{
    const doctor = await db.execute("select * from doctors");
    console.log(doctor);
    }catch(error){
        console.error(error);
    }
    return (
    <div>page</div>
  )
}
