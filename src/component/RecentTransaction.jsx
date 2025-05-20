import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RecentTransaction = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="container mt-12">
      <div className="flex items-center justify-between">
        <h2 className="font-poppins text-2xl font-semibold">
          Recent Transaction
        </h2>

        <div>
          <DatePicker
            className="border-2 border-gray-300 px-2 py-1 outline-none"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
      </div>

      <div className="relative mt-8 overflow-x-auto">
        <table className="w-full">
          <tr className="border-b border-t border-gray-200">
            <th className="py-3 pr-6 text-left"> Tenant </th>
            <th className="py-3 pr-6 text-left"> Room </th>
            <th className="py-3 pr-6 text-left"> Due Date </th>
            <th className="py-3 pr-6 text-left"> Paid Amount </th>
            <th className="py-3 pr-6 text-left"> Status </th>
          </tr>

          <tr className="border-b border-gray-200">
            <td className="py-4 pr-6"> Suraj </td>
            <td className="py-4 pr-6"> 1 </td>
            <td className="py-4 pr-6"> 2025-12-04 </td>
            <td className="py-4 pr-6"> Rs.4000 </td>
            <td className="py-4 pr-6">
              <span className="rounded-full bg-[#b9f3ce] px-3 py-1 text-[14px]">
                Paid
              </span>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-4 pr-6"> Sita </td>
            <td className="py-4 pr-6"> 2 </td>
            <td className="py-4 pr-6"> 2025-11-20 </td>
            <td className="py-4 pr-6"> Rs.2500 </td>
            <td className="py-4 pr-6">
              <span className="rounded-full bg-[#fcd5ce] px-3 py-1 text-[14px]">
                Unpaid
              </span>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-4 pr-6"> Ram </td>
            <td className="py-4 pr-6"> 3 </td>
            <td className="py-4 pr-6"> 2025-10-10 </td>
            <td className="py-4 pr-6"> Rs.6000 </td>
            <td className="py-4 pr-6">
              <span className="rounded-full bg-[#b9f3ce] px-3 py-1 text-[14px]">
                Paid
              </span>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-4 pr-6"> Alisha </td>
            <td className="py-4 pr-6"> 4 </td>
            <td className="py-4 pr-6"> 2025-08-15 </td>
            <td className="py-4 pr-6"> Rs.3200 </td>
            <td className="py-4 pr-6">
              <span className="rounded-full bg-[#fcd5ce] px-3 py-1 text-[14px]">
                Unpaid
              </span>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-4 pr-6"> Milan </td>
            <td className="py-4 pr-6"> 5 </td>
            <td className="py-4 pr-6"> 2025-09-09 </td>
            <td className="py-4 pr-6"> Rs.5000 </td>
            <td className="py-4 pr-6">
              <span className="rounded-full bg-[#b9f3ce] px-3 py-1 text-[14px]">
                Paid
              </span>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-4 pr-6"> Rekha </td>
            <td className="py-4 pr-6"> 6 </td>
            <td className="py-4 pr-6"> 2025-12-01 </td>
            <td className="py-4 pr-6"> Rs.1500 </td>
            <td className="py-4 pr-6">
              <span className="rounded-full bg-[#fcd5ce] px-3 py-1 text-[14px]">
                Unpaid
              </span>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-4 pr-6"> Ramesh </td>
            <td className="py-4 pr-6"> 7 </td>
            <td className="py-4 pr-6"> 2025-07-22 </td>
            <td className="py-4 pr-6"> Rs.2800 </td>
            <td className="py-4 pr-6">
              <span className="rounded-full bg-[#b9f3ce] px-3 py-1 text-[14px]">
                Paid
              </span>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-4 pr-6"> Sunita </td>
            <td className="py-4 pr-6"> 8 </td>
            <td className="py-4 pr-6"> 2025-06-30 </td>
            <td className="py-4 pr-6"> Rs.4200 </td>
            <td className="py-4 pr-6">
              <span className="rounded-full bg-[#fcd5ce] px-3 py-1 text-[14px]">
                Unpaid
              </span>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-4 pr-6"> Aakash </td>
            <td className="py-4 pr-6"> 9 </td>
            <td className="py-4 pr-6"> 2025-05-05 </td>
            <td className="py-4 pr-6"> Rs.3500 </td>
            <td className="py-4 pr-6">
              <span className="rounded-full bg-[#b9f3ce] px-3 py-1 text-[14px]">
                Paid
              </span>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-4 pr-6"> Nisha </td>
            <td className="py-4 pr-6"> 10 </td>
            <td className="py-4 pr-6"> 2025-04-18 </td>
            <td className="py-4 pr-6"> Rs.3900 </td>
            <td className="py-4 pr-6">
              <span className="rounded-full bg-[#fcd5ce] px-3 py-1 text-[14px]">
                Unpaid
              </span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default RecentTransaction;
