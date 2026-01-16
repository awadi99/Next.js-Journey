import { db } from "@/app/doctordata/config/db";
import { notFound } from "next/navigation";
import { cache } from "react";

export const dynamic = "force-dynamic";


// const Dynamic = async () => {
//   const doctors = await getData();
//   return (
//     <>
//       <h1 className="font-medium text-4xl text-center">Dynamic Page Doctors data</h1>
//       <div className="p-10">
//         <ul>
//           {
//             doctors.map((doctors) => (
//               <li className="list-disc list-inside p-1" key={doctors.doctor_id}>Doctor Name =: {doctors.doctor_name}</li>
//             ))
//           }
//         </ul>
//       </div>

//       {/* <DoctorsList doctors={doctors}/> */}
//     </>
//   )
// }



// export default Dynamic;

//  const DoctorsList = async ()=>{
//   const doctors = await getData();
//   return (
//     <>
//     <h1 className="font-medium text-4xl text-center">Dynamic Page Doctors data</h1>
//     <div className="p-10">
//       <ul>
//         {
//           doctors.map((doctors) => (
//             <li className="list-disc list-inside p-1" key={doctors.doctor_id}>Doctor Name =: {doctors.doctor_name}</li>
//           ))
//         }
//       </ul>
//     </div>
//   </>
//   )
// } 


const SingleDoctor = async ({params}) => {
  const {id} =  await params;

  const [row] = await db.execute(` SELECT * FROM doctors WHERE doctor_id = ?`,[id]);

  const doctors=row[0];


  if(!doctors){
    return notFound();
  }
  return(
  <div className="flex justify-center items-center">
  <div className="mt-50 max-w-md rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-black p-[1px] shadow-xl">
    <div className="rounded-3xl bg-slate-900 p-6 text-white">

      {/* Header */}
      <div className="flex items-center gap-4 mb-5">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-xl font-bold">
          Dr
        </div>

        <div>
          <h2 className="text-2xl font-bold">{doctors.doctor_name}</h2>
          <p className="text-cyan-400 text-sm font-medium">{doctors.specialization}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/10 mb-4" />

      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
        <div>
          <p className="text-gray-400">Experience</p>
          <p className="font-semibold">{doctors.experience} Year</p>
        </div>

        <div>
          <p className="text-gray-400">Status</p>
          <p className="font-semibold text-green-400">{doctors.status}</p>
        </div>

        <div>
          <p className="text-gray-400">Mobile</p>
          <p className="font-semibold">{doctors.mobile_no}</p>
        </div>

        <div>
          <p className="text-gray-400">License</p>
          <p className="font-semibold">{doctors.license_no}</p>
        </div>
      </div>

      {/* Address */}
      <div className="mt-4 text-sm">
        <p className="text-gray-400">Address</p>
        <p className="font-medium text-gray-200">{doctors.address}</p>
      </div>

      {/* Email */}
      <div className="mt-3 text-sm">
        <p className="text-gray-400">Email</p>
        <p className="font-medium text-cyan-400 break-all">
          {doctors.email}
        </p>
      </div>

      {/* Button */}
      <button className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 font-semibold tracking-wide hover:scale-[1.03] transition">
        View Profile
      </button>
    </div>
  </div>
  </div>
  )
}

export default SingleDoctor;


const getData = cache(async () => {
  const [doctors] = await db.execute("select * from doctors");
  console.log("fetching data");
  // console.log(doctors);
  return doctors;
});