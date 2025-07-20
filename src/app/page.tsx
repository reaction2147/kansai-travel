import { Plane, MapPin, Calendar, Users, Clock, Banknote } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            2025 關西旅遊計劃書
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Flight Information */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-500 rounded-xl">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">航班資訊</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Taiwan Family Flight */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-blue-500" />
                <h3 className="text-lg font-semibold text-gray-800">台灣家人（8人）</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="font-medium text-green-800 mb-2">去程：2025/10/1（週三）</p>
                  <p className="text-sm text-gray-600">華航 CI152</p>
                  <p className="text-sm text-gray-600">起飛：09:00 桃園國際機場 → 抵達：12:50 關西國際機場</p>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="font-medium text-orange-800 mb-2">回程：2025/10/9（週四）</p>
                  <p className="text-sm text-gray-600">華航 CI153</p>
                  <p className="text-sm text-gray-600">起飛：14:00 關西國際機場 → 抵達：15:55 桃園國際機場</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <Banknote className="w-4 h-4 text-blue-600" />
                    <p className="font-medium text-blue-800">每人票價：NT$12,900</p>
                  </div>
                </div>
              </div>
            </div>

            {/* UK Flight */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-purple-500" />
                <h3 className="text-lg font-semibold text-gray-800">老公與 Jasper（英國出發）</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="font-medium text-green-800 mb-2">去程：10/1 英航 BA0007</p>
                  <p className="text-sm text-gray-600">09:20 倫敦出發 → 10/2 07:00 抵達 東京羽田機場</p>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-4">
                  <p className="font-medium text-orange-800 mb-2">回程：10/12 英航 BA0006</p>
                  <p className="text-sm text-gray-600">13:05 東京羽田 → 19:55 抵達 倫敦希斯洛機場</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accommodation */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-purple-500 rounded-xl">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">住宿安排與費用（更新版）</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-4">
            <p className="text-gray-600 mb-4">小朋友不佔床，Jasper（老公朋友）費用另計，其餘以「大人數」平均分攤。</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <thead className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">日期</th>
                  <th className="px-6 py-4 text-left font-semibold">地點</th>
                  <th className="px-6 py-4 text-left font-semibold">房數</th>
                  <th className="px-6 py-4 text-left font-semibold">總金額（台幣）</th>
                  <th className="px-6 py-4 text-left font-semibold">備註</th>
                  <th className="px-6 py-4 text-left font-semibold">分攤人數</th>
                  <th className="px-6 py-4 text-left font-semibold">每人費用</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-800">10/1（7大1小）</td>
                  <td className="px-6 py-4 font-medium text-gray-800">大阪民宿</td>
                  <td className="px-6 py-4 font-medium text-gray-800">4</td>
                  <td className="px-6 py-4 font-semibold text-gray-800">NT$18,125</td>
                  <td className="px-6 py-4 font-medium text-gray-700">小孩不佔床，共 7 人分攤</td>
                  <td className="px-6 py-4 font-medium text-gray-800">7</td>
                  <td className="px-6 py-4 font-bold text-green-600">NT$2,589</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-800">10/2–10/4（9大1小）</td>
                  <td className="px-6 py-4 font-medium text-gray-800">大阪民宿</td>
                  <td className="px-6 py-4 font-medium text-gray-800">4</td>
                  <td className="px-6 py-4 font-semibold text-gray-800">NT$35,850</td>
                  <td className="px-6 py-4 font-medium text-gray-700">Jasper支付 NT$4,240（106 英鎊），其餘由 8 人分攤</td>
                  <td className="px-6 py-4 font-medium text-gray-800">8</td>
                  <td className="px-6 py-4 font-bold text-green-600">NT$3,451</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-800">10/4–10/6（9大1小）</td>
                  <td className="px-6 py-4 font-medium text-gray-800">京都飯店</td>
                  <td className="px-6 py-4 font-medium text-gray-800">5</td>
                  <td className="px-6 py-4 font-semibold text-gray-800">NT$48,060</td>
                  <td className="px-6 py-4 font-medium text-gray-700">Jasper支付 NT$5,360（134 英鎊），其餘由 8 人分攤</td>
                  <td className="px-6 py-4 font-medium text-gray-800">8</td>
                  <td className="px-6 py-4 font-bold text-green-600">NT$5,338</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-800">10/6（9大1小）</td>
                  <td className="px-6 py-4 font-medium text-gray-800">大阪民宿</td>
                  <td className="px-6 py-4 font-medium text-gray-800">4</td>
                  <td className="px-6 py-4 font-semibold text-gray-800">NT$7,690</td>
                  <td className="px-6 py-4 font-medium text-gray-700">Jasper支付 NT$1,600（40 英鎊），其餘由 8 人分攤</td>
                  <td className="px-6 py-4 font-medium text-gray-800">8</td>
                  <td className="px-6 py-4 font-bold text-green-600">NT$761</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-800">10/7–10/9（7大1小）</td>
                  <td className="px-6 py-4 font-medium text-gray-800">大阪民宿</td>
                  <td className="px-6 py-4 font-medium text-gray-800">4</td>
                  <td className="px-6 py-4 font-semibold text-gray-800">NT$17,640</td>
                  <td className="px-6 py-4 font-medium text-gray-700">小孩不佔床，共 7 人分攤</td>
                  <td className="px-6 py-4 font-medium text-gray-800">7</td>
                  <td className="px-6 py-4 font-bold text-green-600">NT$2,520</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Transportation */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-green-500 rounded-xl">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">關西機場 → 大阪民宿 交通資訊</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="font-semibold text-gray-800">抵達時間：12:50</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="font-semibold text-gray-800">預估通關與取行李時間：約 1 小時 15 分</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-semibold text-gray-800">交通方式：南海電鐵（Rapit 或一般急行）→ 天下茶屋站</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="font-semibold text-gray-800">車程時間：約 50 分鐘</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="font-semibold text-gray-800">步行至民宿：10 分鐘</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="font-semibold text-gray-800">總預估時間（含緩衝）：約 1 小時 15 分</span>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
              <p className="text-lg font-bold text-center text-gray-800">
                預估抵達民宿時間：約 15:15–15:30
              </p>
            </div>
          </div>
        </section>

        {/* Itinerary */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-orange-500 rounded-xl">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">行程概要</h2>
          </div>

          <div className="space-y-6">
            {/* Day 1 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-800">10/1（三）抵達日本・入住大阪民宿</h3>
              </div>
              
              <div className="space-y-3 ml-11">
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-blue-600 min-w-16">15:15</span>
                  <span className="text-gray-700">抵達大阪民宿，簡單整理休息</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-blue-600 min-w-16">16:00</span>
                  <span className="text-gray-700">出發前往心齋橋、道頓堀散策</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-blue-600 min-w-16">17:00</span>
                  <span className="text-gray-700">晚餐：はり重 壽喜燒本店（位於道頓堀）</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-blue-600 min-w-16">18:30</span>
                  <span className="text-gray-700">餐後至附近超商採買生活用品</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-blue-600 min-w-16">19:00</span>
                  <span className="text-gray-700">回民宿休息</span>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-800">10/2（四）大阪市區行程・老公與 Jasper 會合</h3>
              </div>
              
              <div className="space-y-3 ml-11">
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-purple-600 min-w-16">上午</span>
                  <span className="text-gray-700">前往天王寺公園、動物園輕鬆散步</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-purple-600 min-w-16">午餐</span>
                  <span className="text-gray-700">阿倍野百貨或 Q&apos;s Mall 自由選擇</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-purple-600 min-w-16">下午茶</span>
                  <span className="text-gray-700">Eggs &apos;n Things 心齋橋店，稍作休息</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-purple-600 min-w-16">15:30</span>
                  <span className="text-gray-700">老公與 Jasper 自東京搭乘新幹線抵達大阪會合</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-purple-600 min-w-16">晚上</span>
                  <span className="text-gray-700">自由活動或回民宿休息</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
