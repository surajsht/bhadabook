import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/FireConfig";

const TenantModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: "",
    roomNo: "",
    contact: "",
    joinDate: new Date(),
    status: "Status",
    email: "",
    address: "",
    rentAmount: "",
  });

  const resetForm = () => {
    setFormData({
      name: "",
      roomNo: "",
      contact: "",
      joinDate: new Date(),
      status: "Status",
      email: "",
      address: "",
      rentAmount: "",
    });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, joinDate: date });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "tenants"), {
        ...formData,
      });

      alert("Tenant added successfully!");
      onClose();
      resetForm();
    } catch (error) {
      console.error("Error adding tenant: ", error);
      alert("Failed to add tenant.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className="relative w-full max-w-2xl rounded-3xl bg-white p-10 shadow-xl ring-1 ring-gray-300">
        <header className="mb-8 flex items-center justify-between border-b border-gray-200 pb-4">
          <h2 id="modal-title" className="text-3xl font-semibold text-gray-900">
            Add New Tenant
          </h2>
          <button
            onClick={() => {
              onClose();
              resetForm();
            }}
            aria-label="Close modal"
            className="text-gray-400 transition hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-xl border border-gray-300 px-5 py-3 text-lg placeholder-gray-400 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="text"
              name="roomNo"
              placeholder="Room No"
              value={formData.roomNo}
              onChange={handleChange}
              className="rounded-xl border border-gray-300 px-5 py-3 text-lg placeholder-gray-400 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact No."
              value={formData.contact}
              onChange={handleChange}
              className="rounded-xl border border-gray-300 px-5 py-3 text-lg placeholder-gray-400 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <div className="w-full">
              <DatePicker
                selected={formData.joinDate}
                onChange={handleDateChange}
                className="w-full rounded-xl border border-gray-300 px-5 py-3 text-lg placeholder-gray-400 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="rounded-xl border border-gray-300 px-5 py-3 text-lg text-gray-600 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="Status" disabled hidden>
                Status
              </option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Left">Left</option>
            </select>

            <input
              type="number"
              name="rentAmount"
              placeholder="Rent Amount"
              value={formData.rentAmount}
              onChange={handleChange}
              className="rounded-xl border border-gray-300 px-5 py-3 text-lg placeholder-gray-400 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <textarea
            name="address"
            placeholder="Full Address"
            value={formData.address}
            onChange={handleChange}
            rows="4"
            className="w-full resize-none rounded-xl border border-gray-300 px-5 py-3 text-lg placeholder-gray-400 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={() => {
                onClose();
                resetForm();
              }}
              className="rounded-xl border border-gray-300 px-6 py-3 text-lg font-medium text-gray-700 transition hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-700 focus:ring-4 focus:ring-blue-400"
            >
              Add Tenant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TenantModal;
