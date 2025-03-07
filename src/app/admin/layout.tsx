import AdminSideBar from "./AdminSideBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "this is adminn dashboard",
};

interface AdminDashBoardLayoutProps {
  children: React.ReactNode;
}
const AdminDashBoardLayout = ({ children }: AdminDashBoardLayoutProps) => {
  return (
    <div className="overFlow-height flex items-center justify-start w-full">
      <div className="overFlow-height w-15 lg:w-1/5 bg-gray-800 text-white p-1 lg:p-5 ">
        <AdminSideBar />
      </div>

      <div className="overFlow-height flex-1 w-full lg:w-4/5  p-4">
        {children}
      </div>
    </div>
  );
};

export default AdminDashBoardLayout;
