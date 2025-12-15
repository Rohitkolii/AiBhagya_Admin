import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUsers, FaChevronDown } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { MdAdsClick } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { MdCategory } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";

export default function Sidebar({ open }) {
  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      icon: <BiSolidCategory />,
      route: "/",
    },
    {
      name: "Report Categories",
      icon: <MdCategory />,
      route: "/reports-categories",
    },
    {
      name: "Reports",
      icon: <BiSolidReport />,
      route: "/reports",
    },
    {
      name: "Users",
      icon: <FaUsers />,
      submenu: [
        { name: "Users Reports", route: "/users-report" },
        { name: "Add User", route: "/users/add" },
      ],
    },
    {
      name: "Payment Report",
      icon: <FaMoneyBill1Wave />,
      route: "/payment-reports",
    },
    {
      name: "Ads Report",
      icon: <MdAdsClick />,
      route: "/ads-reports",
    },
  ];

  return (
    <aside
      className={`bg-white shadow h-screen fixed left-0 top-16 transition-all duration-300 
      ${open ? "w-64" : "w-0 lg:w-64"} overflow-hidden`}
    >
      <nav className="p-4 text-gray-700">
        {menuItems.map((item, i) => {
          const isActive = location.pathname === item.route;
          const isSubmenuActive =
            item.submenu?.some((sub) => location.pathname === sub.route);

          return (
            <div key={i}>
              {/* MENU ITEM */}
              <div
                onClick={() => {
                  if (item.submenu) {
                    setOpenMenu(openMenu === i ? null : i);
                  }
                }}
                className={`flex items-center justify-between px-3 py-2 rounded cursor-pointer 
                  ${item.submenu
                    ? "hover:bg-gray-100"
                    : !isActive && "hover:bg-gray-100 hover:text-primary"
                  }
                  ${
                    (isActive || isSubmenuActive) &&
                    !item.submenu &&
                    "bg-primary text-white"
                  }
                  ${isSubmenuActive && item.submenu && "bg-gray-100"}
                `}
              >
                {/* LEFT PART */}
                <div className="flex items-center gap-3 w-full">
                  {item.icon}

                  {/* If NO submenu → clickable Link */}
                  {!item.submenu ? (
                    <Link className="block w-full" to={item.route}>{item.name}</Link>
                  ) : (
                    <span>{item.name}</span>
                  )}
                </div>

                {/* submenu arrow */}
                {item.submenu && (
                  <FaChevronDown
                    className={`transition ${
                      openMenu === i ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {/* SUBMENU ITEMS */}
              {item.submenu && openMenu === i && (
                <div className="ml-10 mt-1 flex flex-col gap-1 text-sm">
                  {item.submenu.map((sub, j) => {
                    const isSubActive = location.pathname === sub.route;

                    return (
                      <Link
                        key={j}
                        to={sub.route}
                        className={`py-1 px-2 rounded 
                          ${
                            isSubActive
                              ? "bg-primary text-white"
                              : "text-gray-600 hover:text-primary hover:bg-gray-100"
                          }`}
                      >
                        {sub.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
