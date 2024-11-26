import { UserCard } from "../User Card/User-Card";
import DashboardTop from "./DashboardTop";

export default function Dashboard () {
    return(
        <div className="mb-10">
        <DashboardTop></DashboardTop>
        <UserCard></UserCard>
        </div>
    )
}