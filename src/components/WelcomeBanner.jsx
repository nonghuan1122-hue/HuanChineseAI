function WelcomeBanner() {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 p-10 text-white shadow-xl">

      <h1 className="text-5xl font-bold">
        👋 Xin chào Huan
      </h1>

      <p className="mt-5 text-xl text-blue-100">
        Hôm nay bạn có 42 từ cần ôn và 3 video cần xem.
      </p>

      <div className="flex gap-5 mt-8">

        <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:scale-105 duration-300">
          🚀 Bắt đầu học
        </button>

        <button className="bg-blue-700 px-8 py-3 rounded-xl font-bold hover:bg-blue-800 duration-300">
          📚 Kho từ vựng
        </button>

      </div>

    </div>
  );
}

export default WelcomeBanner;