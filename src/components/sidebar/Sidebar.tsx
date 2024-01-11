import "./sidebar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useAuth, useWindowDimensions } from "../../hooks";
import { DashboardIcon, DocumentsIcon, EmployeesIcon, FinanceIcon, HelpIcon, HiriingArrow, HiringIcon, LeaveManagementIcon, MyTeamIcon, PerformanceIcon, ReportsAnalyticsIcon, SelfServiceIcon, Settings, TimeManagementIcon, TrainingIcon } from "../../assets";
import { HiringPop } from "..";
import Accordion from "../Accordion/Accordion";
interface SidebarProps {
  open: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}
const Sidebar = ({ open }: SidebarProps) => {

  const [_, setState] = useState(false);
  const navigate = useNavigate();
  const location = useLocation()
  const { width } = useWindowDimensions()

  const activehire = location.pathname.includes("/hiring");
  const openDraw = useAuth(state => state.openDraw)
  const theme = useAuth(state => state.theme)

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

  const hireArr = [
    {
      header: "Recruitment & Hiring",
      content: <>
        <div className="flex flex-col items-start justify-start list-none opacity-100  bg-[#1D8EE6] transition-all dark:from-[#ffffff] dark:vai-[#292929] shadow-3xl rounded-md w-full z-20 shadow-md py-2">
          <Link to="/hiring/overview" className={`${location.pathname.includes("/hiring/overview") ? 'text-[#ffffff] ' : "text-[#FFFFFF99] "} cursor-pointer flex items-center gap-4 p-2 text-xs w-full`} onClick={() => setState(false)}>
            <span>•</span>
            <span>Overview</span>
          </Link>

          <Link to="/hiring/job-portal" className={`${location.pathname.includes("/hiring/job-portal") ? 'text-[#ffffff] ' : "text-[#FFFFFF99] "} cursor-pointer flex items-center gap-4 p-2 text-xs w-full`} onClick={() => setState(false)}>
            <span>•</span>
            <span >Job Portal</span>
          </Link>
          <Link to="/hiring/application" className={`${location.pathname.includes("/hiring/application") ? 'text-[#ffffff] ' : "text-[#FFFFFF99] "} cursor-pointer flex items-center gap-4 p-2 text-xs w-full`} onClick={() => setState(false)}>
            <span>•</span>
            <span >Application</span>
          </Link>
        </div>
      </>,
      route: "/hiring/overview" || "/hiring/job-portal" || "/hiring/application",
      title: "Recruitment & Hiring",
    },
  ];
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

  return (
    <section className={`sidebar dark:bg-[#161819]  ${openDraw && '!block px-1 w-max'} hidden md:block overflow-y-scroll no-scrollbar`}>
      <div
        className={` ${open ? "sm:w-[280px] ease-in-out duration-500" : "w-20 ease-in-out duration-500"} overflow-y-hidden flex flex-col justify- transition-all ease-in-out text-white  h- relative duration-300 mx-auto`}
      >
        <div className="px-2 py-5">
          <div className={`${open ? "justify-between" : 'justify-center'} flex items-center`}>
            {theme === 'light' ?
              <img src="/homelogo.svg" alt="" className={`${!open && 'hidden'}`} />
              :
              <img src="/logo.svg" alt="" className={`${!open && 'hidden'}`} />
            }

            <img src="/arrowbreak.svg"
              onClick={() => useAuth.setState({ open: !open })}
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
                style={{ width: 'max' }}
                to={item.route}
                key={index}
                className={`${activeItem && "bg-[#1D8EE6] rounded-xl !text-[#fff]"
                  }
                  ${!open ? 'text-center flex items-center justify-center' : "w-full"}
                  flex items-center gap-2 rounded-xl px-6 py-3 cursor-pointer mb-1 text-xs
                  !text-[#535768]`}
                onClick={() => useAuth.setState({ openDraw: false })}
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
            {hireArr.map((item, index) => {
              const activeItem = location.pathname.includes(item?.route);
              const iconArr = [
                <HiringIcon key={0} index={activeItem} />,

              ];
              return (
                <>
                  <Accordion key={`hire ${index}`} activeClass={`${activeItem && 'bg-[#1D8EE6]'}`} heading={
                    <span
                      // to={item.route}
                      key={index}
                      className={`${activeItem ? "text-[#716C81] bg-[#] rounded-[4px]" : "text-[#716C81]"
                        } flex items-center cursor-pointer gap-2 px-0  text-xs`}
                        onClick={() => {
                          if (!open) {
                            useAuth.setState({ open: !open })
                            setState(false)
                          }
                          setState(prev => !prev)
                        }
                        }
                    >
                      <span
                      // onClick={() => {
                      //   if (!open) {
                      //     useAuth.setState({ open: !open })
                      //     setState(false)
                      //   }
                      //   setState(prev => !prev)
                      // }
                      // }
                      >{iconArr[index]}</span>
                        <h1 className={`${!open && "hidden"} "font-semibold my-1 text-xs text-[#]  text-xs"`}>{item?.title}</h1>
                    </span>
                  }>
                    {item?.content}
                  </Accordion>
                </>
              )
            })}
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
                className={`${activeItem && "bg-[#1D8EE6] rounded-xl !text-[#fff]"
                  }
                  ${!open ? 'text-center flex items-center justify-center' : 'w-full'}
                  flex items-center gap-2 rounded-xl px-6 py-3 cursor-pointer mb-1 text-xs
                  !text-[#535768] truncate`}
                onClick={() => useAuth.setState({ openDraw: false })}
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

        <div className={`flex flex-col justify-center items-center  md:px-4 ${open ? "ease-in-out duration-500" : "ease-in-out duration-500"}`}>
          {/* <div className="flex flex-col items-center justify-center text-black"> */}
          <div
            className={`${open && "flex items-center w-full ease-in-out duration-500"
              } inline-flex items-center pb-3 ease-in-out duration-500`}
          >

            <p className={`${!open ? "hidden" : "!text-start sm:block text-[#BFBFBF] mx-2 lg:block text-xs  md:text-lg"}`}>Self Service</p>
          </div>


          <div
            className={`${open && "flex items-center w-full ease-in-out duration-500"
              } inline-flex items-center pb-0 ease-in-out duration-500`}
          >
            <Link to='/help' className={`${location.pathname.includes('/help') && "bg-[#1D8EE6] rounded-xl !text-[#fff]"
              }
                  ${!open ? 'text-center flex items-center justify-center' : 'w-full'}
                  flex items-center gap-2 rounded-xl px-6 py-3 cursor-pointer mb-1 text-xs
                  !text-[#535768]`}
              onClick={() => useAuth.setState({ openDraw: false })}
            >
              <HelpIcon index={location.pathname.includes('/help')} />

              <span className={`${!open && "hidden"} ${width < 1200 ? "" : ""} origin-left ease-in-out duration-500`}>Help</span>
            </Link>
          </div>

          {/* <div className="pb-5"> */}

          <div
            className={`${open && "flex items-center w-full ease-in-out duration-500"
              } inline-flex items-center pb-0 ease-in-out duration-500`}
          >
            <Link to="/settings" className={`${location.pathname.includes('/settings') && "bg-[#1D8EE6] rounded-xl !text-[#fff]"
              }
                  ${!open ? 'text-center flex items-center justify-center' : 'w-full'}
                  flex items-center gap-2 rounded-xl px-6 py-3 cursor-pointer mb-1 text-xs
                  !text-[#535768]`}
              onClick={() => useAuth.setState({ openDraw: false })}
            >
              <Settings index={location.pathname.includes('/settings')} />

              <span className={`${!open && "hidden"} ${width < 1200 ? "" : ""} origin-left ease-in-out duration-500`}>Settings</span>
            </Link>
          </div>


        </div>

        <div className={`flex flex-col justify-center items-center  md:px-4 ${open ? "ease-in-out duration-500" : "ease-in-out duration-500"}`}>
          {/* <div className="flex flex-col items-center justify-center text-black"> */}
          <div
            className={`${open && "flex items-center w-full ease-in-out duration-500"
              } inline-flex items-center pb-3 ease-in-out duration-500`}
          >

            <p className={`${!open ? "hidden" : "!text-start sm:block text-[#BFBFBF] mx-2 lg:block text-xs  md:text-lg"}`}>SUPPORT</p>
          </div>

          <div
            className={`${open && "flex items-center w-full ease-in-out duration-500"
              } inline-flex items-center pb-0 ease-in-out duration-500`}
          >
            <Link to='/help' className={`${location.pathname.includes('/help') && "bg-[#1D8EE6] rounded-xl !text-[#fff]"
              }
                  ${!open ? 'text-center flex items-center justify-center' : 'w-full'}
                  flex items-center gap-2 rounded-xl px-6 py-3 cursor-pointer mb-1 text-xs
                  !text-[#535768]`}
              onClick={() => useAuth.setState({ openDraw: false })}
            >
              <HelpIcon index={location.pathname.includes('/help')} />

              <span className={`${!open && "hidden"} ${width < 1200 ? "" : ""} origin-left ease-in-out duration-500`}>Help</span>
            </Link>
          </div>


          <div
            className={`${open && "flex items-center w-full ease-in-out duration-500"
              } inline-flex items-center pb-0 ease-in-out duration-500`}
          >
            <Link to="/settings" className={`${location.pathname.includes('/settings') && "bg-[#1D8EE6] rounded-xl !text-[#fff]"
              }
                  ${!open ? 'text-center flex items-center justify-center' : 'w-full'}
                  flex items-center gap-2 rounded-xl px-6 py-3 cursor-pointer mb-1 text-xs
                  !text-[#535768]`}
              onClick={() => useAuth.setState({ openDraw: false })}
            >
              <Settings index={location.pathname.includes('/settings')} />

              <span className={`${!open && "hidden"} ${width < 1200 ? "" : ""} origin-left ease-in-out duration-500`}>Settings</span>
            </Link>
          </div>


          <div
            className={`${open && "flex items-center w-full ease-in-out duration-500"
              } inline-flex items-center pb-3 ease-in-out duration-500`}
          >
            <p className={`${!open ? "hidden" : "!text-start sm:block text-[#BFBFBF] mx-2 lg:block text-xs  md:text-lg"}`}>ACCOUNT</p>
          </div>
          <div className={`${"bg-[#] px-2 rounded-xl !text-[#535768] mb-16"}
                  ${!open ? 'px-2 text-center flex items-center justify-center' : 'w-full'}
                  flex items-center gap-2 rounded-xl px-6 py-3 cursor-pointer mb-1 text-xs
                  !text-[rgb(83,87,104)]`}
            onClick={logout}>
            <div><img src="/signnout.svg" className="w-8" alt="singout" /></div>

            <span className={`${!open && "hidden"} ${width < 1200 ? "" : ""} origin-left ease-in-out duration-500`}>Logout</span>
          </div>
          {/* </div> */}

        </div>

      </div>
    </section>
  );
};
export default Sidebar;


// <span
// className={`${activeItem2 && "bg-[#1D8EE6] rounded-xl !text-[#fff]"
//   }
//     ${!open ? 'text-center flex items-center justify-center' : "w-full"}
//     flex items-center justify-between  gap-2 rounded-xl px-6 py-3 cursor-pointer mb-1 text-xs
//     !text-[#535768] relative`}
// onClick={() => {
//   if (!open) {
//     useAuth.setState({ open: !open })
//     setState(false)
//   }
//   setState(prev => !prev)
// }
// }
// >
// <div className="flex items-center gap-2">
//   <HiringIcon key={4} index={activeItem2} className={`${open && ''}`} onClick={() => {
//     setState(prev => !prev)
//   }} />

//   <span
//     className={`${!open && "hidden"} ${width < 1200 ? "" : ""
//       } origin-left ease-in-out duration-500 whitespace-nowrap`}>Recruitment & Hiring</span>
// </div>

// <div className={` ${!open && 'hidden'}`} >
//   <HiriingArrow key={4} index={activeItem2} />
//   {/* <span className={`${!open && state === false && 'hidden'}   "ml-4"`}><HiringPop {...{ state, setState }} /> </span> */}
// </div>

// {state && <>
//   {/* <div className="flex flex-col items-start justify-start list-none top-10 opacity-100 absolute -left-2 bg-[#1D8EE6] dark:bg-gradient-to-t transition-all m-2 dark:from-[#ffffff] dark:vai-[#292929] shadow-3xl rounded-md w-[150px] md:w-full z-20 shadow-md py-2"> */}
//   <div className="flex flex-col items-start justify-start list-none top-10 opacity-100 absolute -left-2 bg-[#1D8EE6] transition-all m-2 dark:from-[#ffffff] dark:vai-[#292929] shadow-3xl rounded-md w-[150px] md:w-full z-20 shadow-md py-2">
//     <Link to="/hiring/overview" className="text-white cursor-pointer flex items-center gap-4 p-2 text-xs w-full" onClick={() => setState(false)}>
//       <span>•</span>
//       <span>Overview</span>
//     </Link>

//     <Link to="/hiring/job-portal" className="text-white cursor-pointer flex items-center gap-4 p-2 text-xs w-full" onClick={() => setState(false)}>
//       <span>•</span>
//       <span >Job Portal</span>
//     </Link>
//     <Link to="/hiring/application" className="text-white cursor-pointer flex items-center gap-4 p-2 text-xs w-full" onClick={() => setState(false)}>
//       <span>•</span>
//       <span >Application</span>
//     </Link>
//   </div>
// </>
// }
// </span>
