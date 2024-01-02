import "./layout.css";
import Topnav from "./Topnav";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import BottomNav from "../bottomnav/BottomNav";
import { useAuth } from "../../hooks";
import { useState } from "react";
import { ClickOutside } from "../../hooks/useClickOutside";
import { SupportIcon } from "../../assets";
import CustomerSupport from "./CustomerSupport";


const Layout = () => {
const open = useAuth(state => state.open)
const [openCustomer, setOpenCustomer] = useState<boolean>(false);

  return (
    <div>
      {/* {open ? <ChangePasswordModal {...{ open }} {...{ close }} /> : null} */}
      <section className={`bg-blck `}>
        <Sidebar {...{ open }} />
        <div className={`layout__content  ${open ? "md:pl-60" : "md:pl-10"} `}>
          <div className={`layout__content-main pl-0 md:pl-10`}>
            <Topnav />
            <div className="overflow-y-hidden">
              <Outlet  />
            </div>
          </div>
        </div>
        <BottomNav />
      </section>

      <div onClick={() => setOpenCustomer(true)} className="fixed bottom-14 md:bottom-4 right-6 md:right-11 cursor-pointer">
        <SupportIcon />
      </div>

      <ClickOutside onclickoutside={() => setOpenCustomer(false)}>
        {openCustomer && (
          <CustomerSupport />
        )}
      </ClickOutside>
    </div>
  );
};

export default Layout;
