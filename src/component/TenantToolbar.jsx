import { IoSearch } from "react-icons/io5";

const TenantToolbar = () => {
  return (
    <div className="container">
      <div className="mt-12 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search tenant..."
            className="w-full rounded border border-gray-300 py-2 pl-10 pr-4 focus:outline-blue-500"
          />
          <IoSearch className="absolute left-3 top-1/2 translate-y-[-50%] text-xl dark:text-black" />
        </div>

        <select className="ml-auto w-full rounded border border-gray-300 px-4 py-2 focus:outline-blue-500 dark:text-black md:w-48">
          <option>All Status</option>
          <option>Active</option>
          <option>Pending</option>
          <option>Left</option>
        </select>

        <button className="w-full rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 md:w-auto">
          + Add Tenant
        </button>
      </div>
    </div>
  );
};

export default TenantToolbar;
