function RecentActivity() {
  const activities = [
    {
      time: "09:20",
      title: "OCR ảnh thành công",
    },
    {
      time: "08:45",
      title: "Học 20 từ mới",
    },
    {
      time: "08:10",
      title: "Xem Video AI",
    },
    {
      time: "07:50",
      title: "AI giải thích 确认",
    },
    {
      time: "07:30",
      title: "Ôn tập Flashcard",
    },
  ];

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">

      <h2 className="text-2xl font-bold mb-6">
        📅 Hoạt động gần đây
      </h2>

      {activities.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center py-4 border-b last:border-0"
        >
          <div>
            <div className="font-semibold">
              {item.title}
            </div>

            <div className="text-sm text-gray-400">
              {item.time}
            </div>
          </div>

          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      ))}

    </div>
  );
}

export default RecentActivity;