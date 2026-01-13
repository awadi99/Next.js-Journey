import { db } from "@/app/doctordata/config/db";

const StaticPage = async () =>{
  const [doctors] = await db.execute("select * from doctors");
  console.log(doctors);

  return (
    <>
    <div>
      <h1 className="text-center font-medium text-3xl">Static Page Doctor Name </h1>
      <ul className="p-10 list-disc list-inside">
        {
          doctors.map((doctors)=>{
            return <li key={doctors.doctor_id} >
                {doctors.doctor_name}
            </li>
          })
        }
      </ul>
    </div>
    </>
  )
}

export default StaticPage;
