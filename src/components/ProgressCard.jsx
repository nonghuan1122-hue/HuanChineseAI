function ProgressCard() {
  return (
    <div className="bg-white rounded-3xl shadow-md p-8 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        📚 Tiến độ học
      </h2>

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-blue-50 rounded-2xl p-6">
          <div className="text-4xl font-bold text-blue-600">2580</div>
          <div className="text-gray-500 mt-2">Tổng từ</div>
        </div>

        <div className="bg-green-50 rounded-2xl p-6">
          <div className="text-4xl font-bold text-green-600">42</div>
          <div className="text-gray-500 mt-2">Đang học</div>
        </div>

        <div className="bg-orange-50 rounded-2xl p-6">
          <div className="text-4xl font-bold text-orange-500">20</div>
          <div className="text-gray-500 mt-2">Từ mới</div>
        </div>

        <div className="bg-red-50 rounded-2xl p-6">
          <div className="text-4xl font-bold text-red-500">92%</div>
          <div className="text-gray-500 mt-2">Đã nhớ</div>
        </div>

      </div>

    </div>
  );
}

export default ProgressCard;