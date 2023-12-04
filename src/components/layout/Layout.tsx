import "./layout.css";
import Topnav from "./Topnav";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import BottomNav from "../bottomnav/BottomNav";
import { useAuth } from "../../hooks";


const Layout = () => {
const open = useAuth(state => state.open)
  return (
    <div>
      {/* {open ? <ChangePasswordModal {...{ open }} {...{ close }} /> : null} */}
      <section className={` `}>
        <Sidebar {...{ open }} />
        <div className={`layout__content  ${open ? "sm:pl-60" : "sm:pl-10"} `}>
          <div className={`layout__content-main pl-0 sm:pl-10`}>
            <Topnav />
            <div className="">
              <Outlet />
            </div>
          </div>
        </div>
        <BottomNav />
      </section>
    </div>
  );
};

export default Layout;
