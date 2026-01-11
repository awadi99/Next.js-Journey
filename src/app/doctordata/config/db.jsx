import mysql from "mysql2/promise"

 export const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"1807",
    database:"hospital_db",
    port :3306
});

try{
    const connection = await db.getConnection();
    console.log("database connected successfully");
    connection.release();
}catch(error){
    console.error("database connection failed",error);
    process.exit(1);
}

