
import { Outlet } from "react-router-dom";

function UserDashboard(){
    return(
        <>
        <section className="py-4">
          <Outlet />
        </section>
        </>
    );
}
export default UserDashboard;