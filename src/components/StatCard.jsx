function StatCard({ title, value, color }) {
  return (
    <div
      className="
      bg-white
      rounded-[30px]
      border
      border-gray-100
      p-8
      shadow-[0_8px_30px_rgba(0,0,0,.04)]
      hover:shadow-[0_18px_40px_rgba(0,0,0,.08)]
      hover:-translate-y-1
      transition-all
      duration-300
      "
    >
      <p className="text-gray-400 text-lg">
        {title}
      </p>

      <h2 className={`text-5xl font-bold mt-6 ${color}`}>
        {value}
      </h2>
    </div>
  );
}

export default StatCard;