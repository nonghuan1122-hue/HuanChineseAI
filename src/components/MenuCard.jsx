function MenuCard({ title, desc, icon, color }) {
  return (
    <div
      className="
      bg-white
      rounded-[30px]
      border
      border-gray-100
      p-8
      shadow-[0_8px_30px_rgba(0,0,0,0.04)]
      hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]
      hover:-translate-y-1
      transition-all
      duration-300
      cursor-pointer
      "
    >
      <div
        className={`
        w-20
        h-20
        rounded-[24px]
        flex
        items-center
        justify-center
        text-5xl
        ${color}
        `}
      >
        {icon}
      </div>

      <h2 className="mt-7 text-2xl font-bold text-gray-800">
        {title}
      </h2>

      <p className="mt-3 text-gray-500 leading-7">
        {desc}
      </p>

      <button
        className="
        mt-8
        px-6
        py-3
        rounded-full
        bg-blue-600
        text-white
        font-semibold
        hover:bg-blue-700
        transition
        "
      >
        Mở ngay →
      </button>
    </div>
  );
}

export default MenuCard;