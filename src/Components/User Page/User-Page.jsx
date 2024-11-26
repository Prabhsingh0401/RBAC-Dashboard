import { useState } from "react";
import { useLocation } from "react-router-dom";
import PerformanceGraph from "../Performace Graph/Performance-Graph";
import { Sidebar } from "../Sidebar/Sidebar";

export default function UserPage() {
  const location = useLocation();
  const userData = location.state?.userData;
  const [isEditing, setIsEditing] = useState(false);
  const [employeeDetails, setEmployeeDetails] = useState(userData || {
    name: "",
    title: "",
    email: "",
    phone: "",
    empId: "",
    dob: "",
    permissions: [],
  });

  const [editableDetails, setEditableDetails] = useState(employeeDetails);
  const [newPermission, setNewPermission] = useState("");

  // Handle input change for user details
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save changes
  const handleSave = () => {
    setEmployeeDetails(editableDetails);
    setIsEditing(false);
  };

  // Cancel changes
  const handleCancel = () => {
    setEditableDetails(employeeDetails);
    setIsEditing(false);
  };

  // Handle permission changes
  const handlePermissionChange = (permission, index) => {
    const updatedPermissions = [...editableDetails.permissions];
    if (updatedPermissions.includes(permission)) {
      updatedPermissions.splice(index, 1);
    } else {
      updatedPermissions.push(permission);
    }
    setEditableDetails({ ...editableDetails, permissions: updatedPermissions });
  };

  // Handle new permission input change
  const handleNewPermissionChange = (e) => {
    setNewPermission(e.target.value);
  };

  // Add new permission to the list
  const handleAddPermission = () => {
    if (newPermission && !editableDetails.permissions.includes(newPermission)) {
      setEditableDetails((prev) => ({
        ...prev,
        permissions: [...prev.permissions, newPermission],
      }));
      setNewPermission("");
    }
  };

  // Handle permission removal
  const handleRemovePermission = (index) => {
    const updatedPermissions = [...editableDetails.permissions];
    updatedPermissions.splice(index, 1);
    setEditableDetails({ ...editableDetails, permissions: updatedPermissions });
  };

  return (
    <div className="mb-10">
      <div className="flex p-10">
        <Sidebar />
        <div className="px-10">
          <h1 className="text-3xl font-bold">User Page</h1>
          <p className="font-extralight">User Details</p>
        </div>
      </div>
      <div className="lg:flex ml-5 md:ml-[2vw] lg:mt-[-5vh]">
        <div className="ml-[8vw] mb-5 mg:mb-0 lg:w-[350px] md:w-[80vw] bg-white/30 backdrop-blur-lg rounded-[20px] p-6 mt-[1vh] text-left shadow-lg w-[320px]">
          <div
            className="w-[120px] h-[120px] rounded-[50%] bg-cover bg-center mx-auto"
            style={{
              backgroundImage: `url('${userData?.image}')`,
            }}
          ></div>

          <h1 className="mt-6 text-xl font-semibold text-center">
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={editableDetails.name}
                onChange={handleChange}
                className="bg-[#F4F4F4] border border-[#D1D1D1] rounded-[20px] w-full mb-3 px-3 py-1"
              />
            ) : (
              employeeDetails.name
            )}
          </h1>
          <p className="text-center">
            {isEditing ? (
              <input
                type="text"
                name="title"
                value={editableDetails.title}
                onChange={handleChange}
                className="bg-[#F4F4F4] border border-[#D1D1D1] rounded-[20px] w-full px-3 py-1"
              />
            ) : (
              employeeDetails.title
            )}
          </p>

          <div className="mt-6">
            <div className="flex justify-between mb-4">
              <h3 className="font-semibold">Email</h3>
              {isEditing ? (
                <input
                  type="text"
                  name="email"
                  value={editableDetails.email}
                  onChange={handleChange}
                  className="bg-[#F4F4F4] border border-[#D1D1D1] rounded-[20px] w-[180px] px-3 py-1"
                />
              ) : (
                <p>{employeeDetails.email}</p>
              )}
            </div>
            <div className="flex justify-between mb-4">
              <h3 className="font-semibold">Phone</h3>
              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={editableDetails.phone}
                  onChange={handleChange}
                  className="bg-[#F4F4F4] border border-[#D1D1D1] rounded-[20px] w-[180px] px-3 py-1"
                />
              ) : (
                <p>{employeeDetails.phone}</p>
              )}
            </div>
            <div className="flex justify-between mb-4">
              <h3 className="font-semibold">Employee ID</h3>
              {isEditing ? (
                <input
                  type="text"
                  name="empId"
                  value={editableDetails.empId}
                  onChange={handleChange}
                  className="bg-[#F4F4F4] border border-[#D1D1D1] rounded-[20px] w-[180px] px-3 py-1"
                />
              ) : (
                <p>{employeeDetails.empId}</p>
              )}
            </div>
            <div className="flex justify-between mb-4">
              <h3 className="font-semibold">Date of Birth</h3>
              {isEditing ? (
                <input
                  type="date"
                  name="dob"
                  value={editableDetails.dob}
                  onChange={handleChange}
                  className="bg-[#F4F4F4] border border-[#D1D1D1] rounded-[20px] w-[180px] px-3 py-1"
                />
              ) : (
                <p>{employeeDetails.dob}</p>
              )}
            </div>
          </div>

          {!isEditing ? (
            <button
              className="bg-black text-white py-[5px] px-[20px] rounded-[20px] mt-[3vh] w-full"
              onClick={() => setIsEditing(true)}
            >
              EDIT DETAILS
            </button>
          ) : (
            <div className="flex justify-center gap-4 mt-4">
              <button
                className="bg-black text-white py-[5px] px-[20px] rounded-[20px]"
                onClick={handleSave}
              >
                SAVE
              </button>
              <button
                className="bg-gray-300 text-black py-[5px] px-[20px] rounded-[20px]"
                onClick={handleCancel}
              >
                CANCEL
              </button>
            </div>
          )}
        </div>
        <div className="lg:ml-[2vw] ml-8">
          <PerformanceGraph />
          <div className="bg-white/30 h-auto backdrop-blur-lg lg:w-[35vw] w-[80vw] lg:h-auto mt-5 rounded-[20px] shadow-lg">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-4">Permissions</h2>
              <div className="flex gap-2 flex-wrap overflow-auto no-scrollbar">
                {editableDetails.permissions.map((permission, index) => (
                  <div
                    key={index}
                    className="relative flex items-center text-[12px] gap-2 py-1 px-6 bg-[#F4F4F4] border border-[#D1D1D1] rounded-[20px] cursor-pointer"
                  >
                    <div
                      className={`w-3 h-3 rounded-full ${getColorClass(
                        permission
                      )}`}
                    ></div>
                    <span>{permission}</span>
                    {isEditing && (
                      <button
                        onClick={() => handleRemovePermission(index)}
                        className="absolute top-0 right-0 text-xl mr-2 text-red-500"
                      >
                        &times;
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {isEditing && (
                <div className="flex mt-3 gap-4">
                  <input
                    type="text"
                    value={newPermission}
                    onChange={handleNewPermissionChange}
                    placeholder="Add Permission"
                    className="bg-[#F4F4F4] border border-[#D1D1D1] rounded-[20px] px-3 py-2 w-full"
                  />
                  <button
                    onClick={handleAddPermission}
                    className="bg-black text-white py-[5px] px-[20px] rounded-[20px] ml-2"
                  >
                    Add
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getColorClass(permission) {
  switch (permission) {
    case "View Employee Performance":
      return "bg-blue-500";
    case "Monitor Employees":
      return "bg-green-500";
    case "Edit Employee Details":
      return "bg-orange-500";
    default:
      return "bg-gray-500";
  }
}