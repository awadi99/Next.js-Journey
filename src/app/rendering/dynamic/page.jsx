import { db } from "@/app/doctordata/config/db";

const dynamic = 'force-dynamic';

const Dynamic = async () => {
  const [doctors] = await db.execute("select * from doctors");
  console.log(doctors);

  return (
    <>
      <h1 className="font-medium text-4xl text-center">Dynamic Page Doctors data</h1>
      <div className="p-10">
        <ul>
          {
            doctors.map((doctors) => (
              <li className="list-disc list-inside p-1" key={doctors.doctor_id}>Doctor Name =: {doctors.doctor_name}</li>
            ))
          }
        </ul>
      </div>
    </>
  )
}


export default Dynamic;