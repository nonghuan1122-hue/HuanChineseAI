import StatCard from "../components/StatCard";
import QuickAction from "../components/QuickAction";
import TodayCard from "../components/TodayCard";
import ProgressCard from "../components/ProgressCard";
import MenuCard from "../components/MenuCard";
import WelcomeBanner from "../components/WelcomeBanner";
import RecentActivity from "../components/RecentActivity";
function Dashboard() {
  return (
    <div className="p-8">

      <WelcomeBanner />

      {/* Thống kê */}
      <div className="grid grid-cols-4 gap-6 mt-8">

        <StatCard
          title="Tổng từ"
          value="2,580"
          color="text-blue-600"
        />

        <StatCard
          title="Hôm nay"
          value="42"
          color="text-green-600"
        />

        <StatCard
          title="Độ nhớ"
          value="92%"
          color="text-red-500"
        />

        <StatCard
          title="Video"
          value="18"
          color="text-purple-600"
        />

      </div>

      {/* Chức năng nhanh */}
      <h2 className="text-2xl font-bold mt-12 mb-6">
        🚀 Chức năng nhanh
      </h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">

        <QuickAction
          emoji="📚"
          title="Từ vựng"
        />

        <QuickAction
          emoji="🎥"
          title="Video AI"
        />

        <QuickAction
          emoji="📸"
          title="OCR"
        />

        <QuickAction
          emoji="🔊"
          title="Reader"
        />

        <QuickAction
          emoji="🤖"
          title="AI Chat"
        />

        <QuickAction
          emoji="📖"
          title="Hanzi"
        />

        <QuickAction
          emoji="❤️"
          title="Ôn tập"
        />

        <QuickAction
          emoji="📈"
          title="Thống kê"
        />

      </div>

      {/* Hôm nay */}
      <TodayCard />

      {/* Tiến độ */}
      <ProgressCard />
<div className="grid grid-cols-3 gap-8 mt-10">

  <div className="col-span-2">

    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">

      <MenuCard
        title="🎥 Miraa AI"
        desc="Dịch video tiếng Trung tự động"
        icon="🎥"
        color="bg-red-100"
      />

      <MenuCard
        title="📖 Hanzi"
        desc="Giải thích chữ Hán"
        icon="📖"
        color="bg-green-100"
      />

      <MenuCard
        title="📸 OCR"
        desc="Quét ảnh"
        icon="📸"
        color="bg-yellow-100"
      />

      <MenuCard
        title="🎬 OCR Video"
        desc="Tách phụ đề"
        icon="🎬"
        color="bg-purple-100"
      />

      <MenuCard
        title="🔊 Reader"
        desc="Đọc phát âm"
        icon="🔊"
        color="bg-blue-100"
      />

      <MenuCard
        title="🤖 AI Chat"
        desc="Hỏi AI"
        icon="🤖"
        color="bg-pink-100"
      />

    </div>

  </div>

  <RecentActivity />

</div>
      {/* Công cụ AI */}
      <div className="mt-10">

        <h2 className="text-3xl font-bold mb-8">
          🚀 Công cụ AI
        </h2>

<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          <MenuCard
            title="🎥 Miraa AI"
            desc="Dịch video tiếng Trung tự động"
            icon="🎥"
            color="bg-red-100"
          />

          <MenuCard
            title="📖 Hanzi"
            desc="Giải thích chữ Hán chi tiết"
            icon="📖"
            color="bg-green-100"
          />

          <MenuCard
            title="📸 OCR"
            desc="Quét ảnh lấy từ vựng"
            icon="📸"
            color="bg-yellow-100"
          />

          <MenuCard
            title="🎬 OCR Video"
            desc="Tách phụ đề trong video"
            icon="🎬"
            color="bg-purple-100"
          />

          <MenuCard
            title="🔊 Reader"
            desc="Đọc phát âm tự nhiên"
            icon="🔊"
            color="bg-blue-100"
          />

          <MenuCard
            title="🤖 AI Chat"
            desc="Giải thích mọi từ vựng"
            icon="🤖"
            color="bg-pink-100"
          />

        </div>

      </div>

    </div>
  );
}

export default Dashboard;