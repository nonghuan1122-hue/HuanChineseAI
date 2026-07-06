import {
  FaSearch,
  FaBell,
  FaMoon,
  FaUserCircle,
} from "react-icons/fa";

function Header() {
  return (
    <header
      className="
        h-20
        bg-white
        rounded-[30px]
        border
        border-gray-100
        shadow-[0_10px_35px_rgba(0,0,0,0.05)]
        px-8
        flex
        items-center
        justify-between
      "
    >
      {/* Search */}
      <div className="relative w-[520px]">

        <FaSearch
          className="
            absolute
            left-6
            top-1/2
            -translate-y-1/2
            text-gray-400
            text-lg
          "
        />

        <input
          type="text"
          placeholder="Tìm từ vựng, Hanzi, Video AI..."
          className="
            w-full
            h-14
            rounded-full
            bg-gray-100
            pl-14
            pr-6
            text-base
            outline-none
            transition-all
            duration-300
            focus:bg-white
            focus:ring-2
            focus:ring-blue-500
          "
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        <button
          className="
            w-12
            h-12
            rounded-full
            bg-gray-100
            hover:bg-blue-50
            hover:text-blue-600
            transition
            flex
            items-center
            justify-center
          "
        >
          <FaBell />
        </button>

        <button
          className="
            w-12
            h-12
            rounded-full
            bg-gray-100
            hover:bg-blue-50
            hover:text-blue-600
            transition
            flex
            items-center
            justify-center
          "
        >
          <FaMoon />
        </button>

        <div
          className="
            flex
            items-center
            gap-3
            bg-gray-50
            rounded-full
            px-3
            py-2
            hover:bg-gray-100
            transition
            cursor-pointer
          "
        >

          <FaUserCircle className="text-5xl text-blue-600" />

          <div>

            <div className="font-bold">
              Huan
            </div>

            <div className="text-sm text-gray-500">
              Chinese Learner
            </div>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Header;