import {
  FaSearch,
  FaVolumeUp,
  FaHeart,
  FaStar,
} from "react-icons/fa";

const words = [
  {
    hanzi: "确认",
    pinyin: "què rèn",
    meaning: "Xác nhận",
    level: "HSK4",
  },
  {
    hanzi: "学习",
    pinyin: "xué xí",
    meaning: "Học",
    level: "HSK1",
  },
  {
    hanzi: "公司",
    pinyin: "gōng sī",
    meaning: "Công ty",
    level: "HSK2",
  },
  {
    hanzi: "材料",
    pinyin: "cái liào",
    meaning: "Nguyên liệu",
    level: "HSK5",
  },
];

function Vocabulary() {
  return (
    <div>

      <h1 className="text-4xl font-bold">
        📚 Kho từ vựng
      </h1>

      <div className="relative mt-8">

        <FaSearch className="absolute left-6 top-5 text-gray-400"/>

        <input
          className="
            w-full
            h-16
            rounded-full
            bg-white
            pl-14
            pr-6
            shadow-sm
            outline-none
          "
          placeholder="Tìm tiếng Trung, Pinyin hoặc tiếng Việt..."
        />

      </div>

      <div className="mt-10 bg-white rounded-[30px] shadow-sm overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-50">

            <tr className="text-left">

              <th className="p-6">Hán tự</th>
              <th>Pinyin</th>
              <th>Nghĩa</th>
              <th>HSK</th>
              <th>Yêu thích</th>
              <th>Nghe</th>

            </tr>

          </thead>

          <tbody>

            {words.map((item,index)=>(

              <tr
                key={index}
                className="border-t hover:bg-blue-50 duration-300"
              >

                <td className="p-6 text-3xl font-bold">
                  {item.hanzi}
                </td>

                <td>{item.pinyin}</td>

                <td>{item.meaning}</td>

                <td>

                  <span className="bg-blue-100 px-3 py-1 rounded-full">

                    {item.level}

                  </span>

                </td>

                <td>

                  <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer"/>

                </td>

                <td>

                  <FaVolumeUp className="text-blue-600 cursor-pointer"/>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Vocabulary;