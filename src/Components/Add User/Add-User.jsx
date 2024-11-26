import React, { useState } from "react";

export default function AddUser({ onAddUser, onClose }) {
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    department: "",
    image: "",
    status: "",
    email: "",
    phone: "",
    empId: "",
    dob: "",
    permissions: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Check for empty fields
    for (const key in formData) {
      if (!formData[key] && key !== "image") {
        alert(`Please fill in the required field: ${key}`);
        return;
      }
    }

    // Validation: Ensure email is valid
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validation: Ensure phone number is valid (numeric only)
    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(formData.phone)) {
      alert("Phone number must contain only numeric characters.");
      return;
    }

    // Validation: Ensure date of birth is not in the future
    const currentDate = new Date();
    const dobDate = new Date(formData.dob);
    if (dobDate > currentDate) {
      alert("Date of Birth cannot be in the future.");
      return;
    }

    const newUser = {
      id: Date.now(),
      ...formData,
    };

    onAddUser(newUser);
    setFormData({
      title: "",
      name: "",
      department: "",
      image: "",
      status: "",
      email: "",
      phone: "",
      empId: "",
      dob: "",
      permissions: "",
    }); // Reset form data after submission
    setIsFormVisible(false);
    alert("User successfully added!");
  };

  return (
    <>
      {isFormVisible && (
        <div className="flex absolute 3xl:mt-[-25vh] 2xl:mt-[-18vh] xl:mt-[-20vh] z-[999] bg-white/90 w-[75vw]  sm:mt-[-20vh] lg:mt-[-18vh] mt-[-30vh] rounded-[20px] p-6">
          <div className="flex flex-col w-[70vw]">
            <div className="mb-2">
              <h1 className="text-3xl font-bold">Add Users</h1>
              <p className="font-extralight">Add users for access control</p>
            </div>

            <form
              className="w-[65vw] md:w-[68vw] lg:w-[70vw] rounded-[20px] frosted-glass"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Left Column */}
                <div>
                  <label className="block mb-1">
                    <span className="text-lg font-semibold">Title:</span>
                    <input
                      type="text"
                      name="title"
                      className="mt-2 w-full p-2 rounded bg-white/20 backdrop-blur-lg border"
                      placeholder="e.g., Regional Manager"
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="block mb-1">
                    <span className="text-lg font-semibold">Name:</span>
                    <input
                      type="text"
                      name="name"
                      className="mt-2 w-full p-2 rounded bg-white/20 backdrop-blur-lg border"
                      placeholder="e.g., Michael Scott"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="block mb-1">
                    <span className="text-lg font-semibold">Department:</span>
                    <input
                      type="text"
                      name="department"
                      className="mt-2 w-full p-2 rounded bg-white/20 backdrop-blur-lg border"
                      placeholder="e.g., Scranton Branch"
                      value={formData.department}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="block mb-1">
                    <span className="text-lg font-semibold">Image URL:</span>
                    <input
                      type="text"
                      name="image"
                      className="mt-2 w-full p-2 rounded bg-white/20 backdrop-blur-lg border"
                      placeholder="e.g., https://example.com/image.jpg"
                      value={formData.image}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="block mb-1">
                    <span className="text-lg font-semibold">Permissions:</span>
                    <textarea
                      name="permissions"
                      className="mt-2 w-full p-2 rounded bg-white/20 backdrop-blur-lg border"
                      placeholder="e.g., View Employee Performance"
                      value={formData.permissions}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                {/* Right Column */}
                <div>
                  <label className="block mb-1">
                    <span className="text-lg font-semibold">Email:</span>
                    <input
                      type="email"
                      name="email"
                      className="mt-2 w-full p-2 rounded bg-white/20 backdrop-blur-lg border"
                      placeholder="e.g., michael@dundermifflin.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="block mb-1">
                    <span className="text-lg font-semibold">Phone:</span>
                    <input
                      type="text"
                      name="phone"
                      className="mt-2 w-full p-2 rounded bg-white/20 backdrop-blur-lg border"
                      placeholder="e.g., 123-456-7890"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="block mb-1">
                    <span className="text-lg font-semibold">Emp ID:</span>
                    <input
                      type="text"
                      name="empId"
                      className="mt-2 w-full p-2 rounded bg-white/20 backdrop-blur-lg border"
                      placeholder="e.g., EMP001"
                      value={formData.empId}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="block mb-1">
                    <span className="text-lg font-semibold">Date of Birth:</span>
                    <input
                      type="date"
                      name="dob"
                      className="mt-2 w-full p-2 rounded bg-white/20 backdrop-blur-lg border"
                      value={formData.dob}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="block mb-1">
                    <span className="text-lg font-semibold">Status:</span>
                    <select
                      name="status"
                      className="mt-2 w-full p-2 rounded bg-white/20 backdrop-blur-lg border"
                      value={formData.status}
                      onChange={handleChange}
                    >
                      <option value="">Select Status</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="py-2 px-4 mr-2 bg-red-500 text-white rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-4 bg-green-500 text-white rounded-md"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
