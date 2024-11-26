import React, { useState } from "react";
import AddUser from "../Add User/Add-User";
import { UserCard } from "../User Card/User-Card";

export default function UserMain() {
  const [users, setUsers] = useState([
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

  const addUserHandler = (newUser) => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserCard users={users} />
    </div>
  );
}
