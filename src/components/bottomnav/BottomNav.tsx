import { Link, useLocation } from "react-router-dom";
import { DashboardIcon, EmployeesIcon, ProfileIcon, Settings } from "../../assets";

const BottomNav = () => {
  const location = useLocation();

  const routeList = [
    { route: "/dashboard", title: "Dashboard" },
    { route: "/employees", title: "Employees" },
    { route: "/settings", title: "Settings" },
    { route: "/profile", title: "Profile" },
    // ...(isAuthorised("super-admin")
    //   ? [{ route: "/administrator", title: "Administrator" }]
    //   : []),
  ];

  return (
    <section className="bg-[#ffffff] dark:bg-[#242719] md:hidden px-3 py-1 fixed  bottom-0 w-full shadow-xl flex items-center gap-3 justify-between overflow-x-scroll rounded-tr-3xl rounded-tl-3xl">
      {routeList.map((item, index) => {
        const activeItem = location.pathname.includes(item?.route);
        const iconArr = [
          <DashboardIcon key={1} index={!activeItem} bottom />,
          <EmployeesIcon key={2} index={!activeItem} bottom />,
          <Settings key={3} index={!activeItem} bottom />,
          <ProfileIcon key={4} index={!activeItem} />,
        ];
        return (
          <Link key={index} to={item.route} className={`${activeItem && "text-white rounded-2xl bg-[#1D8EE6 w-max whitespace-nowrap"} flex flex-col justify-evenly flex-1 gap-x-1 items-center px-1 cursor-pointer my-0  text-base space-x-1`}>
            <div className=""> {iconArr[index]}</div>

            <span className={`${activeItem ? "text-[#1D8EE6]" : '!text-[#535768] dark:text-[#ffffff]'} text-[10px]  origin-left duration-200 whitespace-nowrap`}>{item.title}</span>
          </Link>
        )})}
    </section>
  );
};

export default BottomNav;
