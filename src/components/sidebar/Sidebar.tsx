import "./sidebar.css";
// import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AdminIcon, CustomersIcon, DashboardIcon, LoanCalculatorIcon, PersonalBankingIcon, ReportsIcon, StatusIcon } from "../../assets";
// import Accordion from "../Accordion/Accordion";
import { Dispatch, SetStateAction, useCallback } from "react";
import { useWindowDimensions } from "../../hooks";
import {DashboardIcon,  EmployeesIcon } from "../../assets";
interface SidebarProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const location = useLocation()
  const { width } = useWindowDimensions()
  const navigate = useNavigate();

 const logout = useCallback(() => {
      navigate("/");
      // Cookies.remove('Authenticated')
      // Cookies.remove('secret')
      localStorage.clear()
 }, [])


  // const routeList = [
  //   { route: "/dashboard", title: "Dashboard" },
  //   { route: "/customers", title: "Customers" },
  //   { route: "/personal-banking", title: "Personal Banking" },
  //   { route: "/history", title: "Status" },
  //   { route: "/stand-up", title: "Reports" },
  //   { route: "/report", title: "Loan Calculator" },
  //   { route: "/stand-up", title: "Admin" },
  //   // ...(isAuthorised("super-admin")
  //   //   ? [{ route: "/administrator", title: "Administrator" }]
  //   //   : []),
  // ];

  const faqArr = [
    {
      header: "Limited offer?",
      content: `We offer .`,
      route: "/dashboard",
      title: "Dashboard",
    },
    {
      header: "estate developers?",
      content: `property management system.`,
      route: "/customers",
      title: "Customers",
    },
    {
      header: "Government?",
      content: `for our clients.`,
      route: "/personal-banking",
      title: "Personal Banking",
    },
    {
      header: "What offer?",
      content: `accessible and affordable.`,
      route: "/history",
      title: "Status",
    },
    { route: "/stand-up", title: "Reports" },
    { route: "/report", title: "Loan Calculator" },
    { route: "/stand-up", title: "Admin" },
  ];

  const routeList = [
    { route: "/dashboard", title: "Dashboard" },
    { route: "/employees", title: "Employees" },
    { route: "/my-team", title: "My Team" },
    { route: "/hiring", title: "Hiring" },
    { route: "/time-management", title: "Time Management" },
    { route: "/Leave Management", title: "Leave Management" },
    { route: "/Training", title: "Training" },
    { route: "/Documents", title: "Documents" },
    { route: "/Performance", title: "Performance" },
    { route: "/Reports & Analytics", title: "Reports & Analytics" },
    { route: "/Finance", title: "Finance" },
    { route: "/Self Service", title: "Self Service" },
    { route: "/Performance", title: "Performance" },
  ];

  return (
    <section className={`sidebar hidden sm:block bg-white`}>
      <div
        className={` ${open ? "sm:w-60" : "w-max"} flex flex-col justify- transition-all ease-in-out text-white  h- relative duration-300`}
      >
        <div className="px-2 py-10">
          <div className="flex items-center justify-between">
            <img src="/logo.svg" alt="" className={`${!open && 'hidden'}`} />

            <img src="/arrowbreak.svg" onClick={() => setOpen(!open)} alt="arrow" className="cursor-pointer" />
          </div>
        </div>

        <div className={` px-2 pt-6 ${open && " mx-auto"}`}>
          <div
            className={`${
              open && "flex items-center justify-center"
            } inline-flex items-center pb-10 gap-4`}
          >
            {/* <MenuIcon onClick={() => setOpen(!open)} className={`ml-4 cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} />
                        <HomeLogoIcon className={`${!open && "scale-0 hidden"}`} /> */}
            {/* <p className="text-[#BFBFBF] mx-3">MAIN MENU</p> */}
          </div>
          {routeList.map((item, index) => {
            const activeItem = location.pathname.includes(item.route);
            const iconArr = [
              <DashboardIcon key={1} index={activeItem} />,
              <EmployeesIcon key={2} index={activeItem} />,
              // <TransactionsIcon key={3} index={activeItem} />,
              // <ArvopayIcon key={4} index={activeItem} />,
              // <AccountIcon key={5} index={activeItem} />,
            ];
            return (
                <Link
                  to={item.route}
                  key={index}
                  className={`${
                    activeItem && "bg-[#1D8EE6] rounded-xl !text-[#fff]"
                  }
                  flex items-center rounded-xl px- py-3 cursor-pointer mb-3 text-sm px-6 space-x-4 w-mx
                  !text-[#535768] w-full`}
                >
                  <div key={index}> {iconArr[index]}</div>

                  <span
                    className={`${!open && "hidden"} ${
                      width < 1200 ? "" : ""
                    } origin-left duration-200`}
                  >
                    {item.title}
                  </span>
                </Link>
            );
          })}
        </div>

        {/* <div className="flex flex-col items-center justify-center text-black">
          {faqArr.map((item, index) => {
            const activeItem = location.pathname.includes(item?.route);

            const iconArr = [
              " ss",
              // <DashboardIcon key={1} index={activeItem} />,
              // <CustomersIcon key={2} index={activeItem} />,
              // <PersonalBankingIcon key={4} index={activeItem} />,
              // <StatusIcon key={3} index={activeItem} />,
              // <ReportsIcon key={5} index={activeItem} />,
              // <LoanCalculatorIcon key={6} index={activeItem} />,
              // <AdminIcon key={7} index={activeItem} />,
            ];
            return (
              <Accordion
                key={`faq_${index}`}
                heading={
                  <Link
                    to={item.route}
                    key={index}
                    className={`${activeItem && "bg-[#] rounded-[4px]"} ${
                      activeItem ? "text-[#716C81]" : "text-[#716C81]"
                    } hover:text-[#d2d2d2] flex items-center cursor-pointer text-base gap-4`}
                    // className="flex items-center gap-4 js"
                  >
                    <span>{iconArr[index]}</span>
                    <h1 className="font-semibold my-1 text-base text-[#]">
                      {item?.title}
                    </h1>
                  </Link>
                }
              >
                <p className="py-5 text-[#]">{item?.content}</p>
              </Accordion>
            );
          })}
        </div> */}
        {/* <div className={`${" mx-auto px-5"}`}>
          {routeList.map((item, index) => {
            const activeItem = location.pathname.includes(item?.route);

            const iconArr = [
              <DashboardIcon key={1} index={activeItem} />,
              <CustomersIcon key={2} index={activeItem} />,
              <PersonalBankingIcon key={4} index={activeItem} />,
              <StatusIcon key={3} index={activeItem} />,
              <ReportsIcon key={5} index={activeItem} />,
              <LoanCalculatorIcon key={6} index={activeItem} />,
              <AdminIcon key={7} index={activeItem} />,
            ];

            return (
              <Link
                to={item.route}
                key={index}
                className={`${activeItem && "bg-[#] rounded-[4px]"} ${activeItem ? "text-[#716C81]" : "text-[#716C81]"
                  } hover:text-[#d2d2d2] flex items-center rounded-md p-2 cursor-pointer my-4 text-base space-x-7`}
              >
                <div key={index}> {iconArr[index]}</div>

                <span className={` origin-left duration-200`}>
                  {item.title}
                </span>
              </Link>
            );
          })}


        </div> */}
      </div>
    </section>
  );
};
export default Sidebar;
