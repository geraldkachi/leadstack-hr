import "./sidebar.css";
// import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AdminIcon, CustomersIcon, DashboardIcon, LoanCalculatorIcon, PersonalBankingIcon, ReportsIcon, StatusIcon } from "../../assets";
// import Accordion from "../Accordion/Accordion";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useAuth, useWindowDimensions } from "../../hooks";
import { DashboardIcon, DocumentsIcon, EmployeesIcon, FinanceIcon, HiriingArrow, HiringIcon, LeaveManagementIcon, MyTeamIcon, PerformanceIcon, ReportsAnalyticsIcon, SelfServiceIcon, TimeManagementIcon, TrainingIcon } from "../../assets";
import { Accordion, HiringPop } from "..";
interface SidebarProps {
  open: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}
const Sidebar = ({ open }: SidebarProps) => {

  const [state, setState] = useState(false);
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
      header: "Government?",
      content: `content for clients.`,
      route: "/Finance",
      title: "Finance",
    },
    {
      header: "What offer?",
      content: `content for clients..`,
      route: "/Self Service",
      title: "Self Service",
    },
  ];

  const routeList = [
    { route: "/dashboard", title: "Dashboard" },
    { route: "/employees", title: "Employees" },
    { route: "/my-team", title: "My Team" },
    // { route: "/hiring", title: "Recruitment & Hiring" },
    // { route: "/time-management", title: "Time Management" },
    // { route: "/leave-management", title: "Leave Management" },
    // { route: "/training", title: "Training" },
    // { route: "/documents", title: "Documents" },
    // { route: "/performance", title: "Performance" },
    // { route: "/reports-analytics", title: "Reports & Analytics" },
    // { route: "/finance", title: "Finance" },
    // { route: "/self-service", title: "Self Service" },
  ];
  const routeList2 = [
    { route: "/time-management", title: "Time Management" },
    { route: "/leave-management", title: "Leave Management" },
    { route: "/training", title: "Training" },
    { route: "/documents", title: "Documents" },
    { route: "/performance", title: "Performance" },
    { route: "/reports-analytics", title: "Reports & Analytics" },
    { route: "/finance", title: "Finance" },
    { route: "/self-service", title: "Self Service" },
  ]
  const activeItem2 = location.pathname.includes("/hiring");
  const openDraw = useAuth(state => state.openDraw)


  return (
    <section className={`sidebar  ${openDraw && '!block px-1 w-max'} hidden sm:block bg-white overflow-y-scroll no-scrollbar`}>
      <div
        className={` ${open ? "sm:w-[280px] ease-in-out duration-500" : "w-20 ease-in-out duration-500"} overflow-y-scroll flex flex-col justify- transition-all ease-in-out text-white  h- relative duration-300`}
      >
        <div className="px-2 py-5">
          <div className={`${open ? "justify-between" : 'justify-center'} flex items-center`}>
            <img src="/logo.svg" alt="" className={`${!open && 'hidden'}`} />

            <img src="/arrowbreak.svg"
             onClick={() => useAuth.setState({open: !open})}
            //  onClick={() => setOpen(!open)}
              alt="arrow" className="cursor-pointer" />
          </div>
        </div>

        <div className={`flex flex-col justify-center items-center px-0 md:px-4 pt-2 ${open ? "ease-in-out duration-500" : "ease-in-out duration-500"}`}>
          <div
            className={`${open && "flex items-center w-full ease-in-out duration-500"
              } inline-flex items-center pb-3 ease-in-out duration-500`}
          >
            <p className={`${!open ? "hidden" : "!text-start sm:block text-[#BFBFBF] mx-2 lg:block text-xs  md:text-lg"}`}>MAIN MENU</p>
          </div>
          {routeList.map((item, index) => {
            const activeItem = location.pathname.includes(item.route);
            const iconArr = [
              <DashboardIcon key={1} index={activeItem} />,
              <EmployeesIcon key={2} index={activeItem} />,
              <MyTeamIcon key={3} index={activeItem} />,
              <HiringIcon key={4} index={activeItem} />,
              <TimeManagementIcon key={5} index={activeItem} />,
              <LeaveManagementIcon key={6} index={activeItem} />,
              <TrainingIcon key={7} index={activeItem} />,
              <DocumentsIcon key={8} index={activeItem} />,
              <PerformanceIcon key={9} index={activeItem} />,
              <ReportsAnalyticsIcon key={10} index={activeItem} />,
              <FinanceIcon key={11} index={activeItem} />,
              <SelfServiceIcon key={12} index={activeItem} />,
            ];
            return (
              <Link
                to={item.route}
                key={index}
                className={`${activeItem && "bg-[#1D8EE6] rounded-xl !text-[#fff]"
                  }
                  ${!open && 'text-center flex items-center justify-center'}
                  flex items-center gap-2 rounded-xl px-6 py-3 cursor-pointer mb-1 text-xs 
                  !text-[#535768] w-full`}
              >
                <div key={index}> {iconArr[index]}</div>

                <span
                  className={`${!open && "hidden"} ${width < 1200 ? "" : ""
                    } origin-left ease-in-out duration-500 whitespace-nowrap`}
                >
                  {item.title}
                </span>
              </Link>
            );
          })}
          {/* hiring */}
          <>
            <span
              // to={''}
              className={`${activeItem2 && "bg-[#1D8EE6] rounded-xl !text-[#fff]"
                }
                  ${!open ? 'text-center flex items-center justify-center' : "justify-between"}
                  flex items-center  gap-2 rounded-xl px-6 py-3 cursor-pointer mb-1 text-xs 
                  !text-[#535768] w-full relative`}
              onClick={() => setState(prev => !prev)}
            >
              <div className="flex items-center gap-2">
                <HiringIcon key={4} index={activeItem2} />

                <span
                  className={`${!open && "hidden"} ${width < 1200 ? "" : ""
                    } origin-left ease-in-out duration-500 whitespace-nowrap`}>Recruitment & Hiring</span>
              </div>

              <HiriingArrow key={4} index={activeItem2} className={` ${!open && 'hidden'}`} />
              <span className={`${!open && 'hidden'}   "ml-4"`}><HiringPop {...{ state, setState }} /> </span>
            </span>
          </>
          {routeList2.map((item, index) => {
            const activeItem = location.pathname.includes(item.route);
            const iconArr = [
              // <DashboardIcon key={1} index={activeItem} />,
              // <EmployeesIcon key={2} index={activeItem} />,
              // <MyTeamIcon key={3} index={activeItem} />,
              // <HiringIcon key={4} index={activeItem} />,
              <TimeManagementIcon key={5} index={activeItem} />,
              <LeaveManagementIcon key={6} index={activeItem} />,
              <TrainingIcon key={7} index={activeItem} />,
              <DocumentsIcon key={8} index={activeItem} />,
              <PerformanceIcon key={9} index={activeItem} />,
              <ReportsAnalyticsIcon key={10} index={activeItem} />,
              <FinanceIcon key={11} index={activeItem} />,
              <SelfServiceIcon key={12} index={activeItem} />,
            ];
            return (
              <Link
                to={item.route}
                key={index}
                className={`${activeItem && "bg-[#1D8EE6] rounded-xl !text-[#fff] pb-4 border-b border-red-600"
                  }
                  ${!open && 'text-center flex items-center justify-center'}
                  flex items-center gap-2 rounded-xl px-6 py-3 cursor-pointer mb-1 text-xs 
                  !text-[#535768] w-full`}
              >
                <div key={index}> {iconArr[index]}</div>

                <span
                  className={`${!open && "hidden"} ${width < 1200 ? "" : ""
                    } origin-left ease-in-out duration-500 whitespace-nowrap`}
                >
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col items-center justify-center text-black">
          <div
            className={`${open && "flex items-center w-full ease-in-out duration-500"
              } inline-flex items-center pb-3 ease-in-out duration-500`}
          >

            <p className={`${!open ? "hidden" : "!text-start sm:block text-[#BFBFBF] mx-2 lg:block text-xs  md:text-lg"}`}>SUPPORT</p>
          </div>
          {faqArr.map((item, index) => {
            const activeItem = location.pathname.includes(item?.route);
            const iconArr = [
              // <DashboardIcon key={1} index={activeItem} />,
              // <DashboardIcon key={2} index={activeItem} />,
              <img src="/finance.svg" alt="" />,
              <img src="/self-service.svg" alt="" />
            ];
            return (
              <>
                <Accordion key={`faq_${index}`} heading={
                  <Link
                    to={item.route}
                    key={index}

                    className={`${activeItem && "bg-[#] rounded-[4px]"} ${activeItem ? "text-[#716C81]" : "text-[#716C81]"
                      } flex items-center cursor-pointer text-base gap-4 px-4 `}
                  // className="flex items-center gap-4 js"
                  >
                    <span>{iconArr[index]}</span>
                    <h1 className={`${!open && "hidden"} "font-semibold my-1 text-base text-[#]"`}>{item?.title}</h1>
                  </Link>
                }>
                  <p className={` "py-5 text-[#]"`}>{item?.content}</p>
                </Accordion>
              </>
            )
          })}

          <p className={`${!open ? "hidden" : "sm:block text-[#BFBFBF] mx-2 lg:block text-xs  text-start md:text-lg"}`}>ACCOUNT</p>
          <div className={`${"bg-[#] px-2 rounded-xl !text-[#535768] mb-6 px-2"}
                  ${!open && 'px-2 text-center flex items-center justify-center'}
                  flex items-center gap-2 rounded-xl px-6 py-3 cursor-pointer mb-1 text-xs 
                  !text-[rgb(83,87,104)] w-full`}
            onClick={logout}>
            <div><img src="/signnout.svg" alt="singout" /></div>

            <span className={`${!open && "hidden"} ${width < 1200 ? "" : ""} origin-left ease-in-out duration-500`}>Logout</span>
          </div>
        </div>

      </div>
    </section>
  );
};
export default Sidebar;
