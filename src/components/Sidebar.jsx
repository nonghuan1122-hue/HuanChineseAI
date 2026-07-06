import {
  FaHome,
  FaBook,
  FaVideo,
  FaCamera,
  FaVolumeUp,
  FaHeart,
  FaRobot,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

const menus = [
  { icon: <FaHome />, text: "Dashboard", path: "/" },
  { icon: <FaBook />, text: "Từ vựng", path: "/vocabulary" },
  { icon: <FaVideo />, text: "Video AI", path: "/video" },
  { icon: <FaCamera />, text: "OCR", path: "/ocr" },
  { icon: <FaVolumeUp />, text: "Reader", path: "/reader" },
  { icon: <FaRobot />, text: "AI Chat", path: "/ai" },
  { icon: <FaHeart />, text: "Ôn tập", path: "/review" },
  { icon: <FaChartBar />, text: "Thống kê", path: "/statistics" },
  { icon: <FaCog />, text: "Cài đặt", path: "/settings" },
];

function Sidebar() {
  return (
    <aside
      className="
        w-72
        h-[calc(100vh-32px)]
        m-4
        bg-white
        rounded-[30px]
        border
        border-gray-100
        shadow-[0_10px_35px_rgba(0,0,0,0.05)]
        flex
        flex-col
        overflow-hidden
        sticky
        top-4
      "
    >
      {/* Logo */}
      <div className="px-8 pt-8 pb-6 border-b border-gray-100">

        <h1 className="text-3xl font-bold text-blue-600">
          🇨🇳 Huan AI
        </h1>

        <p className="text-gray-400 mt-2">
          Chinese Learning System
        </p>

      </div>

      {/* Menu */}
      <div className="flex-1 px-4 py-5">

        {menus.map((item) => (

          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `
              w-full
              flex
              items-center
              gap-4
              px-5
              py-4
              mb-3
              rounded-2xl
              transition-all
              duration-300
              ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:translate-x-2"
              }
            `
            }
          >
            <span className="text-xl">
              {item.icon}
            </span>

            <span className="font-semibold">
              {item.text}
            </span>

          </NavLink>

        ))}

      </div>

      {/* User */}
      <div className="border-t border-gray-100 p-6">

        <div className="flex items-center gap-4">

          <div
            className="
              w-14
              h-14
              rounded-full
              bg-blue-600
              text-white
              flex
              items-center
              justify-center
              font-bold
              text-xl
            "
          >
            H
          </div>

          <div>

            <h3 className="font-bold text-gray-800">
              Huan
            </h3>

            <p className="text-gray-400 text-sm">
              Chinese Learner
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;