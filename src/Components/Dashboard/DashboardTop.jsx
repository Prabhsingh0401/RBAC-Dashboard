import { NavLink } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";

export default function DashboardTop () {
    return(
        <div className="flex p-10">
        <Sidebar></Sidebar>
        <div className="px-10">
            <div className="flex lg:mb-5">
            <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="font-extralight">Manage all users</p>
            </div>
            <div className="lg:absolute lg:block hidden right-8">
            </div>
            </div>
            
            <div className="flex justify-between">
            {/* <div className="inline lg:flex">
            <button className="bg-black text-white py-[5px] px-[20px] rounded-[20px] mt-[3vh]">
              ACTIVE USERS
            </button>
            <button className="bg-white border border-gray-400 text-black py-[5px] px-[10px] rounded-[20px] md:ml-2 lg:ml-2 mt-3 lg:mt-[3vh]">
              INACITVE USERS
            </button>
            </div> */}
            <div className="hidden absolute right-10 sm:hidden lg:flex">
                <div className="text-center">
                    <div>
                    <p className="text-l">Requests</p>
                    <p className="text-3xl">32</p>
                    </div>
                </div>
                <div className="text-center ml-10">
                    <div>
                    <p className="text-l">Users</p>
                    <p className="text-3xl">50</p>
                    </div>
                </div>
                <div className="text-center ml-10">
                    <div>
                    <p className="text-l">Ongoing Tasks</p>
                    <p className="text-3xl">20</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}