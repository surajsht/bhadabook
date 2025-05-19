import Navbar from "../../component/Navbar";
import { FaUser } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { RiWallet3Fill } from "react-icons/ri";

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-[72rem] mx-auto mt-12">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 rounded-xl border-2 py-10 px-6">
            <div className="mb-3 flex items-center gap-4">
              <div className="relative rounded-full p-3 before:absolute before:inset-0 before:z-0 before:rounded-full before:bg-slate-300 before:opacity-25">
                <FaUser className="text-xl text-primary" />
              </div>
              <span className="font-poppins text-2xl font-semibold">1888</span>
            </div>
            <span className="text-lg"> Total Tenants </span>
          </div>

          <div className="flex-1 rounded-xl border-2 py-10 px-6">
            <div className="mb-3 flex items-center gap-4">
              <div className="relative rounded-full p-3 before:absolute before:inset-0 before:z-0 before:rounded-full before:bg-slate-300 before:opacity-25">
                <FaEuroSign className="text-xl text-primary" />
              </div>
              <span className="font-poppins text-2xl font-semibold">
                Rs.1888
              </span>
            </div>
            <span className="text-lg"> Total Collected </span>
          </div>

          <div className="flex-1 rounded-xl border-2 py-10 px-6">
            <div className="mb-3 flex items-center gap-4">
              <div className="relative rounded-full p-3 before:absolute before:inset-0 before:z-0 before:rounded-full before:bg-slate-300 before:opacity-25">
                <FaRegClock className="text-xl text-primary" />
              </div>
              <span className="font-poppins text-2xl font-semibold">
                Rs.1888
              </span>
            </div>
            <span className="text-lg"> Total Pending </span>
          </div>

          <div className="flex-1 rounded-xl border-2 py-10 px-6">
            <div className="mb-3 flex items-center gap-4">
              <div className="relative rounded-full p-3 before:absolute before:inset-0 before:z-0 before:rounded-full before:bg-slate-300 before:opacity-25">
                <RiWallet3Fill className="text-xl text-primary" />
              </div>
              <span className="font-poppins text-2xl font-semibold">
                Rs.1888
              </span>
            </div>
            <span className="text-lg"> Total Advance </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
