function TodayCard() {
  return (
    <div
      className="
      mt-10
      rounded-3xl
      p-8
      text-white
      bg-gradient-to-r
      from-blue-600
      to-indigo-600"
    >
      <h2 className="text-3xl font-bold">
        🚀 Hôm nay
      </h2>

      <p className="mt-6">
        📚 Ôn 42 từ
      </p>

      <p className="mt-3">
        🎥 Xem 3 video
      </p>

      <p className="mt-3">
        📸 OCR 5 ảnh
      </p>

      <button
        className="
        mt-8
        bg-white
        text-blue-600
        px-8
        py-3
        rounded-xl
        font-bold
        hover:scale-105
        duration-300"
      >
        Bắt đầu học
      </button>
    </div>
  );
}

export default TodayCard;