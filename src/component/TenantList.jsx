const tenantData = [
  {
    id: 1,
    name: "Sandeep Sharma",
    roomNo: "A-101",
    phone: "9800000001",
    status: "Active",
    joinDate: "2024-01-12",
    advance: 10000,
    rent: 7000,
  },
  {
    id: 2,
    name: "Aayush Thapa",
    roomNo: "A-102",
    phone: "9800000002",
    status: "Pending",
    joinDate: "2024-03-01",
    advance: 5000,
    rent: 7500,
  },
  {
    id: 3,
    name: "Rojina Shrestha",
    roomNo: "B-201",
    phone: "9800000003",
    status: "Active",
    joinDate: "2023-11-20",
    advance: 15000,
    rent: 8000,
  },
  {
    id: 4,
    name: "Sanjog Karki",
    roomNo: "B-202",
    phone: "9800000004",
    status: "Left",
    joinDate: "2023-05-05",
    advance: 8000,
    rent: 6500,
  },
  {
    id: 5,
    name: "Bimala Rai",
    roomNo: "C-301",
    phone: "9800000005",
    status: "Active",
    joinDate: "2024-02-18",
    advance: 12000,
    rent: 7200,
  },
  {
    id: 6,
    name: "Anish Tamang",
    roomNo: "C-302",
    phone: "9800000006",
    status: "Pending",
    joinDate: "2024-04-10",
    advance: 7000,
    rent: 7000,
  },
  {
    id: 7,
    name: "Sabina Gurung",
    roomNo: "D-401",
    phone: "9800000007",
    status: "Active",
    joinDate: "2023-12-25",
    advance: 9000,
    rent: 7500,
  },
  {
    id: 8,
    name: "Subash Lama",
    roomNo: "D-402",
    phone: "9800000008",
    status: "Left",
    joinDate: "2023-06-10",
    advance: 6000,
    rent: 6500,
  },
  {
    id: 9,
    name: "Meena Shakya",
    roomNo: "E-501",
    phone: "9800000009",
    status: "Active",
    joinDate: "2024-03-05",
    advance: 11000,
    rent: 7800,
  },
  {
    id: 10,
    name: "Kiran Basnet",
    roomNo: "E-502",
    phone: "9800000010",
    status: "Pending",
    joinDate: "2024-04-01",
    advance: 5000,
    rent: 7000,
  },
  {
    id: 11,
    name: "Rupesh Kunwar",
    roomNo: "F-601",
    phone: "9800000011",
    status: "Active",
    joinDate: "2023-10-20",
    advance: 13000,
    rent: 8000,
  },
  {
    id: 12,
    name: "Aarati Joshi",
    roomNo: "F-602",
    phone: "9800000012",
    status: "Left",
    joinDate: "2023-08-15",
    advance: 7000,
    rent: 6800,
  },
  {
    id: 13,
    name: "Dipen Shrestha",
    roomNo: "G-701",
    phone: "9800000013",
    status: "Active",
    joinDate: "2024-01-30",
    advance: 12000,
    rent: 7500,
  },
];

const TenantList = () => {
  return (
    <div className="container mt-10">
      <table className="w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border p-3">Name</th>
            <th className="border p-3">Room No</th>
            <th className="border p-3">Contact</th>
            <th className="border p-3">Join Date</th>
            <th className="border p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {tenantData.map((tenant) => (
            <tr key={tenant.id} className="border hover:bg-gray-50">
              <td className="border p-3">{tenant.name}</td>
              <td className="border p-3">{tenant.roomNo}</td>
              <td className="border p-3">{tenant.phone}</td>
              <td className="border p-3">{tenant.joinDate}</td>
              <td className="border p-3">
                <span
                  className={`rounded px-2 py-1 text-sm ${
                    tenant.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {tenant.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TenantList;
