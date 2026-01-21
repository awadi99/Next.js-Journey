"use server"
import { db } from "../doctordata/config/db"
import { revalidatePath } from "next/cache";
export const HospitalAction = async (formData) => {
    try {
        const data = Object.fromEntries(formData);
        const {hospital_id, hospital_name, state, department, established_year}=data;
        await db.execute(
            `INSERT INTO hospitals 
             (hospital_id, hospital_name, state, department, established_year)
             VALUES (?, ?, ?, ?, ?)`,
            [hospital_id, hospital_name, state, department, established_year]
        );
        revalidatePath("/hospital")
    } catch (err) {
        if (err.message == "NEXT_REDIRECT") throw err;
        console.error(err);

    }
}
