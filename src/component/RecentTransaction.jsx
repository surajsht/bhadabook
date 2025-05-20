import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RecentTransaction = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="container mt-12">
      <div className="flex flex-col gap-6 md:flex-row md:justify-between">
        <h2 className="font-poppins text-2xl font-semibold">
          Recent Transaction
        </h2>

        <div>
          <DatePicker
            className="border-2 border-gray-300 px-2 py-1 outline-none dark:text-text-primary"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
      </div>

      <div className="relative mt-8">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Tenant
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Room
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Due Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Paid Amount
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="border-b">
                <td className="px-6 py-4">Suraj</td>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">2025-12-04</td>
                <td className="px-6 py-4">Rs.4000</td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-[#b9f3ce] px-3 py-1 text-[13px]">
                    Paid
                  </span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-4">Sita</td>
                <td className="px-6 py-4">2</td>
                <td className="px-6 py-4">2025-11-20</td>
                <td className="px-6 py-4">Rs.2500</td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-[#fcd5ce] px-3 py-1 text-[13px]">
                    Unpaid
                  </span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-4">Ram</td>
                <td className="px-6 py-4">3</td>
                <td className="px-6 py-4">2025-10-10</td>
                <td className="px-6 py-4">Rs.6000</td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-[#b9f3ce] px-3 py-1 text-[13px]">
                    Paid
                  </span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-4">Alisha</td>
                <td className="px-6 py-4">4</td>
                <td className="px-6 py-4">2025-08-15</td>
                <td className="px-6 py-4">Rs.3200</td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-[#fcd5ce] px-3 py-1 text-[13px]">
                    Unpaid
                  </span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-4">Milan</td>
                <td className="px-6 py-4">5</td>
                <td className="px-6 py-4">2025-09-09</td>
                <td className="px-6 py-4">Rs.5000</td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-[#b9f3ce] px-3 py-1 text-[13px]">
                    Paid
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4">Rekha</td>
                <td className="px-6 py-4">6</td>
                <td className="px-6 py-4">2025-12-01</td>
                <td className="px-6 py-4">Rs.1500</td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-[#fcd5ce] px-3 py-1 text-[13px]">
                    Unpaid
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentTransaction;
