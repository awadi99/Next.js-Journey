import { db } from "../doctordata/config/db";
import {HospitalAction} from "./hospital.actions";


const Hospital = async () => {
  const [hospitals] = await db.execute("SELECT * FROM hospitals");

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center gap-10 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-black contrast-130">

      {/* Background lights */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-cyan-400/20 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-fuchsia-600/20 rounded-full blur-[160px]" />

      {/* FORM */}
      <form
        action={HospitalAction}
        className="relative z-10 w-[380px] rounded-2xl border border-white/15 bg-white/10 backdrop-blur-2xl p-10 shadow-[0_30px_70px_rgba(0,0,0,0.6)]"
      >
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-white">
            Hospital Registration
          </h1>
          <p className="mt-1 text-xs text-slate-300">
            Medical institution details
          </p>
        </div>

        {/* Hospital ID */}
        <div className="group relative mb-6">
          <input
            type="number"
            name="hospital_id"
            required
            className="peer w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-sm text-white outline-none focus:border-cyan-400"
          />
          <label className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-cyan-400 peer-focus:bg-slate-950 peer-focus:px-2 transition-all">
            Hospital ID
          </label>
        </div>

        {/* Hospital Name */}
        <div className="group relative mb-6">
          <input
            type="text"
            name="hospital_name"
            required
            className="peer w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-sm text-white outline-none focus:border-cyan-400"
          />
          <label className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-cyan-400 peer-focus:bg-slate-950 peer-focus:px-2 transition-all">
            Hospital Name
          </label>
        </div>

        {/* State */}
        <div className="group relative mb-6">
          <input
            type="text"
            name="state"
            required
            className="peer w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-sm text-white outline-none focus:border-cyan-400"
          />
          <label className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-cyan-400 peer-focus:bg-slate-950 peer-focus:px-2 transition-all">
            State
          </label>
        </div>

        {/* Department */}
        <div className="group relative mb-6">
          <input
            type="text"
            name="department"
            required
            className="peer w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-sm text-white outline-none focus:border-cyan-400"
          />
          <label className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-cyan-400 peer-focus:bg-slate-950 peer-focus:px-2 transition-all">
            Department
          </label>
        </div>

        {/* Established Year */}
        <div className="group relative mb-6">
          <input
            type="number"
            name="established_year"
            required
            className="peer w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-sm text-white outline-none focus:border-cyan-400"
          />
          <label className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-cyan-400 peer-focus:bg-slate-950 peer-focus:px-2 transition-all">
            Established Year
          </label>
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-500 py-2.5 text-sm font-medium text-slate-900 hover:scale-[1.03]"
        >
          Submit
        </button>
      </form>

      {/* RECORDS SECTION */}
      <div className="relative z-10 w-[700px] max-h-[300px] overflow-y-auto rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

        <h2 className="mb-4 text-lg font-semibold text-white">
          Hospital Records
        </h2>

        {hospitals.length > 0 ? (
          <table className="w-full text-sm text-slate-200">
            <thead className="sticky top-0 bg-slate-900/80 backdrop-blur">
              <tr>
                <th className="p-2 text-left">ID</th>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">State</th>
                <th className="p-2 text-left">Department</th>
                <th className="p-2 text-left">Year</th>
              </tr>
            </thead>
            <tbody>
              {hospitals.map((hospital) => (
                <tr
                  key={hospital.hospital_id}
                  className="border-t border-white/10 hover:bg-white/5"
                >
                  <td className="p-2">{hospital.hospital_id}</td>
                  <td className="p-2">{hospital.hospital_name}</td>
                  <td className="p-2">{hospital.state}</td>
                  <td className="p-2">{hospital.department}</td>
                  <td className="p-2">{hospital.established_year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-slate-400 text-sm">
            No hospital records found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Hospital;
