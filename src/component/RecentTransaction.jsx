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
          <table className="w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border p-3">
                  Tenant
                </th>
                <th className="border p-3">
                  Room
                </th>
                <th className="border p-3">
                  Due Date
                </th>
                <th className="border p-3">
                  Paid Amount
                </th>
                <th className="border p-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="border hover:bg-gray-50">
                <td className="border p-3">Suraj</td>
                <td className="border p-3">1</td>
                <td className="border p-3">2025-12-04</td>
                <td className="border p-3">Rs.4000</td>
                <td className="border p-3">
                  <span className="rounded-full bg-[#b9f3ce] px-3 py-1 text-[13px] text-text-primary">
                    Paid
                  </span>
                </td>
              </tr>
              <tr className="border hover:bg-gray-50">
                <td className="border p-3">Sita</td>
                <td className="border p-3">2</td>
                <td className="border p-3">2025-11-20</td>
                <td className="border p-3">Rs.2500</td>
                <td className="border p-3">
                  <span className="rounded-full bg-[#fcd5ce] px-3 py-1 text-[13px] text-text-primary">
                    Unpaid
                  </span>
                </td>
              </tr>
              <tr className="border hover:bg-gray-50">
                <td className="border p-3">Ram</td>
                <td className="border p-3">3</td>
                <td className="border p-3">2025-10-10</td>
                <td className="border p-3">Rs.6000</td>
                <td className="border p-3">
                  <span className="rounded-full bg-[#b9f3ce] px-3 py-1 text-[13px] text-text-primary">
                    Paid
                  </span>
                </td>
              </tr>
              <tr className="border hover:bg-gray-50">
                <td className="border p-3">Alisha</td>
                <td className="border p-3">4</td>
                <td className="border p-3">2025-08-15</td>
                <td className="border p-3">Rs.3200</td>
                <td className="border p-3">
                  <span className="rounded-full bg-[#fcd5ce] px-3 py-1 text-[13px] text-text-primary">
                    Unpaid
                  </span>
                </td>
              </tr>
              <tr className="border hover:bg-gray-50">
                <td className="border p-3">Milan</td>
                <td className="border p-3">5</td>
                <td className="border p-3">2025-09-09</td>
                <td className="border p-3">Rs.5000</td>
                <td className="border p-3">
                  <span className="rounded-full bg-[#b9f3ce] px-3 py-1 text-[13px] text-text-primary">
                    Paid
                  </span>
                </td>
              </tr>
              <tr>
                <td className="border p-3">Rekha</td>
                <td className="border p-3">6</td>
                <td className="border p-3">2025-12-01</td>
                <td className="border p-3">Rs.1500</td>
                <td className="border p-3">
                  <span className="rounded-full bg-[#fcd5ce] px-3 py-1 text-[13px] text-text-primary">
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
