function QuickAction({ title, emoji }) {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      border
      border-gray-200
      p-6
      text-center
      hover:shadow-xl
      hover:-translate-y-1
      duration-300
      cursor-pointer"
    >
      <div className="text-5xl">
        {emoji}
      </div>

      <h2 className="mt-5 font-bold text-lg">
        {title}
      </h2>
    </div>
  );
}

export default QuickAction;