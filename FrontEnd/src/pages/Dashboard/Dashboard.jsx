import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Footer from "../../component/Dashboard/Footer/Footer";
import Navbar from "../../component/Dashboard/Navbar/Navbar";
import Sidebar from "../../component/Dashboard/Sidebar/Sidebar";
import HomeDashboard from "./HomeDashbourd";
import User from "./User";
import Project from "./Project";
import TableDashboard from "../../component/Ui/TableDashboard/TableDashboard";
import FormDashboard from "../../component/Ui/FormDashboard/FormDashboard";
function Dashboard(){
    const [isDraft, setIsDraft] = useState(false);
    return(
        <>
        <Navbar adminName= "Youstina Atef"/>
        <div className="d-flex">
            <Sidebar isDraft={isDraft}/>
        <main className="flex-grow-1">
        <Routes>
            <Route path="/" element = {<HomeDashboard />}/>
            <Route path="/users" element = {<User />}>
            {/* First Child */}
            <Route index element = {<TableDashboard />}/>
            {/* Second Child */}
           <Route path="add" element = {<FormDashboard setIsDraft={setIsDraft}/>}/>
            </Route>
            <Route path="/projects" element = {< Project />}/>
        </Routes>
        </main>
        </div>
        <Footer />
        </>
    );
}
export default Dashboard;