import AppSidebar from "./AppSidebar";
import Backdrop from "../layout/Backdrop";
import AppHeader from "./AppHeader";
import { SidebarProvider, useSidebar } from "../../context/SidebarContext";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { account } from "../../lib/appwrite";
import Loader from "../Loader";

const LayoutContent = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    async function fetchUser() {
      try {
        const appwriteUser = await account.get();
        setUser(appwriteUser);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUser();
  }, []);

  if (isLoading) return <Loader />;

  if (!user) return navigate("/auth/sign-in");

  return (
    <div className="min-h-screen xl:flex">
      <div>
        <AppSidebar />
        <Backdrop />
      </div>
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
        } ${isMobileOpen ? "ml-0" : ""}`}
      >
        <AppHeader />
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};

export default AppLayout;
