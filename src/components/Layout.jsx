import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const [openSidebar, setOpenSidebar] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 800) {
      return setOpenSidebar(false);
    }
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setOpenSidebar(false);
      } else if (window.innerWidth > 800) {
        setOpenSidebar(true);
      }
    };

    window.addEventListener("resize", handleResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar setOpenSidebar={setOpenSidebar} />

      <Sidebar open={openSidebar} />

      <main
  className={`
    pt-15 transition-all duration-300
    ${openSidebar ? "pl-64" : "pl-0 lg:pl-64"}
    h-screen overflow-y-auto no-scrollbar
  `}
>
  <div className="p-6 min-h-full">
    {children}
  </div>
</main>


      {/* <main
        className={`pt-15 transition-all duration-300 
        ${openSidebar ? "pl-64" : "pl-0 lg:pl-64"}`}
      >
        <div className="p-6">{children}</div>
      </main> */}
    </div>
  );
}
