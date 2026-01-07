import mysql from "mysql2/promise"


export const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"9099",
    database:"hospital_db"
});

try{
    const connection = await db.getConnection();
    console.log("database connected successfully");
    connection.release();
}catch(error){
    console.error("database connection failed",error);
    process.exit(1);
}
