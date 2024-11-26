import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AddUser from "../Add User/Add-User";

export function UserCard() {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Regional Manager",
      name: "Michael Scott",
      department: "Scranton Branch",
      image: "https://www.nbc.com/sites/nbcblog/files/2022/07/the-office-how-to-watch.jpg",
      bgColor: "bg-light-blue-50",
      hoverColor: "hover:bg-light-blue-100",
      status: "active",
      email: "michael@dundermifflin.com",
      phone: "123-456-7890",
      empId: "EMP001",
      dob: "1965-03-15",
      permissions: [
        "View Employee Performance",
        "Monitor Employees",
        "Edit Employee Details",,
        "Conduct Performance Reviews",
      ],
    },
    {
      id: 2,
      title: "HR Representative",
      name: "Toby Flenderson",
      department: "Human Resources",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKN3h9oC5c9D26ynFhot1NqMwP3sLh_DYuMA&s",
      bgColor: "bg-yellow-100",
      hoverColor: "hover:bg-yellow-200",
      status: "inactive",
      email: "toby@dundermifflin.com",
      phone: "123-456-7891",
      empId: "EMP002",
      dob: "1971-11-23",
      permissions: [
        "View Employee Performance",
        "Edit Employee Details",
        "Manage Employee Benefits",
        "Onboard New Employees",
      ],
    },
    {
      id: 3,
      title: "Assistant to the Regional Manager",
      name: "Dwight Schrute",
      department: "Sales",
      image: "https://www.myany.city/sites/default/files/styles/scaled_cropped_medium__260x260/public/field/image/node-related-images/sample-dwight-k-schrute.jpg?itok=8TfRscbA",
      bgColor: "bg-light-green-50",
      hoverColor: "hover:bg-light-green-100",
      status: "active",
      email: "dwight@dundermifflin.com",
      phone: "123-456-7892",
      empId: "EMP003",
      dob: "1970-01-20",
      permissions: [
        "Manage Sales Performance",
        "Monitor Sales Targets",
        "Conduct Sales Training",
        "Supervise Sales Team",
      ],
    },
    {
      id: 4,
      title: "Sales Representative",
      name: "Jim Halpert",
      department: "Sales",
      image: "https://pbs.twimg.com/profile_images/3171824697/ef75d90df2e65ce326acf30262df5918_400x400.jpeg",
      bgColor: "bg-pink-100",
      hoverColor: "hover:bg-pink-200",
      status: "inactive",
      email: "jim@dundermifflin.com",
      phone: "123-456-7893",
      empId: "EMP004",
      dob: "1978-10-01",
      permissions: [
        "Manage Sales Accounts",
        "Track Sales Leads",
        "Close Sales Deals",
        "Assist with Customer Relations",
      ],
    },
    {
      id: 5,
      title: "Receptionist",
      name: "Pam Beesly",
      department: "Reception",
      image: "https://boo-prod.b-cdn.net/database/profiles/1665985551133442b368b367602261f6d66d61f1777f8.jpg",
      bgColor: "bg-light-blue-50",
      hoverColor: "hover:bg-light-blue-100",
      status: "active",
      email: "pam@dundermifflin.com",
      phone: "123-456-7894",
      empId: "EMP005",
      dob: "1979-03-25",
      permissions: [
        "Answer Phone Calls",
        "Schedule Meetings",
        "Handle Incoming Mail",
        "Assist with Office Supplies",
        "Welcome Visitors",
      ],
    },
  ]);

  const [filter, setFilter] = useState("all");
  const [showAddUser, setShowAddUser] = useState(false);

  const filteredCards =
    filter === "all" ? cards : cards.filter((card) => card.status === filter);

  // Function to add a new user
  const addUser = (newUser) => {
    setCards((prevCards) => [...prevCards, newUser]);
    setShowAddUser(false); // Close the form after submission
  };

  return (
    <div className="ml-[9vw] relative">
      {showAddUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50"></div>
      )}

      {/* Filter buttons */}
      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-2 mb-4 lg:flex lg:gap-4 w-[80vw]">
      <button
        className={`py-2 px-4 rounded-[20px] ${filter === "all" ? "bg-black text-white" : "bg-gray-200 text-black"}`}
        onClick={() => setFilter("all")}
      >
        See All
      </button>
      <button
        className={`py-2 px-4 rounded-[20px] ${filter === "active" ? "bg-black text-white" : "bg-white text-black"}`}
        onClick={() => setFilter("active")}
      >
        Active Users
      </button>
      <button
        className={`py-2 px-4 rounded-[20px] ${filter === "inactive" ? "bg-black text-white" : "bg-white text-black"}`}
        onClick={() => setFilter("inactive")}
      >
        Inactive Users
      </button>

      {/* Add New User Button */}
      <button
        className="py-2 px-4 rounded-[20px] bg-green-500 text-white"
        onClick={() => setShowAddUser(true)}
      >
        Add New User
      </button>
    </div>

      {/* Add User Component */}
      {showAddUser && <AddUser onAddUser={addUser} onClose={() => setShowAddUser(false)} />}

      {/* User Cards */}
      <div className="grid grid-cols-1 w-[80vw] md:grid-cols-1 lg:grid-cols-3 gap-3">
        {filteredCards.map((card) => (
          <NavLink to={`/user/${card.id}`} key={card.id} state={{ userData: card }}>
            <div
              className={`${card.bgColor} w-[80vw] h-[25vh] lg:w-[26vw] lg:h-[30vh] rounded-[20px] p-4 border shadow-lg transform transition-transform duration-300 hover:scale-105 ${card.hoverColor} frosted-glass`}
            >
              <h1 className="text-[18px] absolute md:text-[25px] lg:text-[18px] sm:text-[23px] font-bold">
                {card.title}
              </h1>
              <div className="flex sm:mt-10 md:mt-1 lg:mt-9 mt-6">
                <div
                  className="rounded-[50%] md:w-[14vw] md:h-[12vh] w-[12vw] h-[13vw] lg:w-[5vw] lg:h-[5vw] md:mt-[10vh] bg-center sm:mt-[9vh] mt-[10vh] bg-no-repeat bg-cover"
                  style={{
                    backgroundImage: `url('${card.image}')`,
                  }}
                ></div>
                <div className="px-5">
                  <h2 className="mt-[10vh] text-[15px] lg:font-bold lg:text-[18px] md:text-2xl font-thin">
                    {card.name}
                  </h2>
                  <p className="text-[15px] lg:text-[14px] lg:mt-[-1vh] md:text-2xl font-thin">
                    {card.department}
                  </p>
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
