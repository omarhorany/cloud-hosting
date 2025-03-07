import Link from "next/link";
import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineArticle } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";

const AdminSideBar = () => {
  return (
    <div className="w-full p-4 text-white rounded-lg ">
      {/* Dashboard Link */}
      <Link
        href="/admin"
        className="flex items-center text-lg lg:text-2xl gap-3 p-2 font-semibold hover:text-purple-400 transition"
      >
        <CgMenuGridR size={30} className="text-purple-500" />
        <span className="hidden lg:block">Dashboard</span>
      </Link>

      {/* Menu Items */}
      <ul className="mt-8 flex flex-col lg:items-start space-y-4">
        <li>
          <Link
            href="/admin/articles-table"
            className="flex items-center gap-3 p-3 text-lg rounded-md hover:bg-purple-500 hover:text-gray-900 transition"
          >
            <MdOutlineArticle size={24} />
            <span className="hidden lg:block">Articles</span>
          </Link>
        </li>

        <li>
          <Link
            href="/admin/comments-table"
            className="flex items-center gap-3 p-3 text-lg rounded-md hover:bg-purple-500 hover:text-gray-900 transition"
          >
            <FaRegComments size={24} />
            <span className="hidden lg:block">Comments</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSideBar;
