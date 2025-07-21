import { Plane, MapPin, Calendar, Users, Clock, Banknote } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-100 relative">
      {/* Traditional Japanese maple pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23dc2626' fill-opacity='0.15' fill-rule='evenodd'%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="container mx-auto px-4 py-8 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Traditional Japanese border pattern */}
          <div className="relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-600 via-orange-600 to-red-700 rounded-full"></div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-600 via-orange-600 to-red-700 rounded-full"></div>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-800 via-orange-700 to-red-800 bg-clip-text text-transparent mb-6 py-6 tracking-wide">
              2025 關西旅遊計劃書
            </h1>
            
            {/* Momiji decorative elements */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <div className="w-8 h-8 text-2xl">🍁</div>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
              <div className="w-10 h-10 text-2xl text-red-700">⛩️</div>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
              <div className="w-8 h-8 text-2xl">🍁</div>
            </div>
          </div>
        </div>

        {/* Flight Information */}
        <section className="mb-16">
          <div className="relative mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center shadow-lg border-2 border-amber-300">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-800 to-red-700 bg-clip-text text-transparent tracking-wide">
                  ✈️ 航班資訊
                </h2>
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center shadow-lg border-2 border-amber-300">
                  <Plane className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Taiwan Family Flight */}
            <div className="bg-gradient-to-br from-white to-amber-50 rounded-3xl shadow-xl border-2 border-amber-200 p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-200 to-orange-200 rounded-bl-3xl opacity-50"></div>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-amber-800 to-red-700 bg-clip-text text-transparent">台灣家人（7大1小）</h3>
              </div>
              
              <div className="space-y-5">
                <div className="bg-gradient-to-r from-green-100 to-emerald-50 rounded-2xl p-5 border border-green-200">
                  <p className="font-bold text-green-800 mb-3 text-lg">🛫 去程：2025/10/1（週三）</p>
                  <p className="text-gray-700 font-medium">華航 CI152</p>
                  <p className="text-gray-600">09:00 桃園 ✈️ 12:50 關西機場</p>
                </div>
                
                <div className="bg-gradient-to-r from-orange-100 to-amber-50 rounded-2xl p-5 border border-orange-200">
                  <p className="font-bold text-orange-800 mb-3 text-lg">🛬 回程：2025/10/9（週四）</p>
                  <p className="text-gray-700 font-medium">華航 CI153</p>
                  <p className="text-gray-600">14:00 關西機場 ✈️ 15:55 桃園</p>
                </div>
                
                <div className="bg-gradient-to-r from-amber-100 to-orange-50 rounded-2xl p-5 border border-amber-200">
                  <div className="flex items-center gap-3">
                    <Banknote className="w-5 h-5 text-amber-700" />
                    <p className="font-bold text-amber-800 text-lg">票價：NT$12,900 / 人</p>
                  </div>
                </div>
              </div>
            </div>

            {/* UK Flight */}
            <div className="bg-gradient-to-br from-white to-red-50 rounded-3xl shadow-xl border-2 border-red-200 p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-red-200 to-orange-200 rounded-bl-3xl opacity-50"></div>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-orange-700 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-red-700 to-orange-600 bg-clip-text text-transparent">William與 Jasper（英國出發）</h3>
              </div>
              
              <div className="space-y-5">
                <div className="bg-gradient-to-r from-green-100 to-emerald-50 rounded-2xl p-5 border border-green-200">
                  <p className="font-bold text-green-800 mb-3 text-lg">🛫 去程：2025/10/1 英航 BA0007</p>
                  <p className="text-gray-600">09:20 倫敦希斯洛 ✈️ 10/2 07:00 東京羽田</p>
                </div>
                
                <div className="bg-gradient-to-r from-orange-100 to-amber-50 rounded-2xl p-5 border border-orange-200">
                  <p className="font-bold text-orange-800 mb-3 text-lg">🛬 回程：2025/10/12 英航 BA0006</p>
                  <p className="text-gray-600">13:05 東京羽田 ✈️ 19:55 倫敦希斯洛</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accommodation */}
        <section className="mb-16">
          <div className="relative mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-700 rounded-full flex items-center justify-center shadow-lg border-2 border-orange-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-800 to-red-700 bg-clip-text text-transparent tracking-wide">
                  🏨 住宿安排與費用
                </h2>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-700 rounded-full flex items-center justify-center shadow-lg border-2 border-orange-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-100 rounded-3xl shadow-xl border-2 border-amber-300 p-8 mb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-br-3xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-red-200/30 to-orange-200/30 rounded-tl-3xl"></div>
            
            <div className="text-center mb-6 relative z-10">
              <div className="flex justify-center items-center gap-3 mb-4">
                <div className="w-8 h-8 text-2xl">🍁</div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-800 to-red-700 bg-clip-text text-transparent">每人住宿總費用</h3>
                <div className="w-8 h-8 text-2xl">🍁</div>
              </div>
              <div className="text-5xl font-bold bg-gradient-to-r from-amber-700 via-orange-600 to-red-700 bg-clip-text text-transparent mb-2">
                NT$14,659
              </div>
              <div className="flex justify-center items-center gap-2">
                <div className="w-6 h-6 text-lg">🍂</div>
                <div className="w-6 h-6 text-lg">🍁</div>
                <div className="w-6 h-6 text-lg">🍂</div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-gradient-to-br from-white to-amber-50 rounded-3xl shadow-xl border-2 border-amber-200 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-bl-3xl"></div>
              
              <h4 className="text-xl font-bold bg-gradient-to-r from-amber-800 to-red-700 bg-clip-text text-transparent mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                🏯 民宿／飯店連結
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-amber-100 to-orange-50 rounded-2xl p-5 border border-amber-200">
                  <p className="font-bold text-amber-800 mb-2">🏮 大阪民宿（天下茶屋）</p>
                  <a href="https://www.booking.com/hotel/jp/11-tenngacyaya-ii.en-gb.html?aid=356980&label=gog235jc-1FCAsodUIRMTEtdGVubmdhY3lheWEtaWlIMFgDaFCIAQGYAQm4AQfIAQzYAQHoAQH4AQyIAgGoAgO4Ap_--sMGwAIB0gIkMjA5OGE1ODEtYzU4NC00NDlmLWE5OWUtZDgxYzE3MjNiMTdh2AIG4AIB&sid=3f6635d2a9ad2846d260c04959a53240&age=2&dest_id=-240905&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1753136939&srpvid=797d9e10061c0521&type=total&ucfs=1" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-900 font-medium text-sm hover:underline">查看詳情 →</a>
                </div>
                <div className="bg-gradient-to-r from-red-100 to-orange-50 rounded-2xl p-5 border border-red-200">
                  <p className="font-bold text-red-800 mb-1">🏨 京都飯店</p>
                  <p className="text-gray-600 text-sm mb-2">La&apos;gent Hotel Kyoto Nijo</p>
                  <a href="https://www.booking.com/hotel/jp/razientohoterujing-du-er-tiao.en-gb.html?aid=898224&label=hotel_details-rezkMP%401752705810&sid=3f6635d2a9ad2846d260c04959a53240&age=2&checkin=2025-10-04&checkout=2025-10-06&dist=0&from_sn=ios&group_adults=9&group_children=1&keep_landing=1&no_rooms=5&req_adults=9&req_age=2&req_children=1&room1=A%2CA%2CA%2CA%2CA%2CA%2CA%2CA%2CA%2C2%2C&sb_price_type=total&type=total" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:text-red-900 font-medium text-sm hover:underline">查看詳情 →</a>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto bg-gradient-to-br from-white to-amber-50 rounded-3xl shadow-xl border-2 border-amber-300 p-4">
            <table className="w-full overflow-hidden rounded-2xl">
              <thead className="bg-gradient-to-r from-amber-700 via-orange-600 to-red-700 text-white">
                <tr>
                  <th className="px-6 py-5 text-left font-bold text-lg tracking-wide">📅 日期</th>
                  <th className="px-6 py-5 text-left font-bold text-lg tracking-wide">🏮 地點</th>
                  <th className="px-6 py-5 text-left font-bold text-lg tracking-wide">🌸 每人費用</th>
                </tr>
              </thead>
              <tbody className="bg-white/80 backdrop-blur-sm divide-y divide-amber-200">
                <tr className="hover:bg-amber-50/80 transition-colors duration-200">
                  <td className="px-6 py-4 font-bold text-amber-800">10/1（7大1小）</td>
                  <td className="px-6 py-4 font-bold text-amber-800">🏮 大阪民宿</td>
                  <td className="px-6 py-4 font-bold text-green-700 text-lg">NT$2,589</td>
                </tr>
                <tr className="hover:bg-amber-50/80 transition-colors duration-200">
                  <td className="px-6 py-4 font-bold text-amber-800">10/2–10/4（9大1小）</td>
                  <td className="px-6 py-4 font-bold text-amber-800">🏮 大阪民宿</td>
                  <td className="px-6 py-4 font-bold text-green-700 text-lg">NT$3,451</td>
                </tr>
                <tr className="hover:bg-amber-50/80 transition-colors duration-200">
                  <td className="px-6 py-4 font-bold text-orange-800">10/4–10/6（9大1小）</td>
                  <td className="px-6 py-4 font-bold text-orange-800">🏯 京都飯店</td>
                  <td className="px-6 py-4 font-bold text-green-700 text-lg">NT$5,338</td>
                </tr>
                <tr className="hover:bg-amber-50/80 transition-colors duration-200">
                  <td className="px-6 py-4 font-bold text-red-800">10/6（9大1小）</td>
                  <td className="px-6 py-4 font-bold text-red-800">🏮 大阪民宿</td>
                  <td className="px-6 py-4 font-bold text-green-700 text-lg">NT$761</td>
                </tr>
                <tr className="hover:bg-amber-50/80 transition-colors duration-200">
                  <td className="px-6 py-4 font-bold text-amber-800">10/7–10/9（7大1小）</td>
                  <td className="px-6 py-4 font-bold text-amber-800">🏮 大阪民宿</td>
                  <td className="px-6 py-4 font-bold text-green-700 text-lg">NT$2,520</td>
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
            <h2 className="text-2xl font-bold text-gray-800">📅 行程概要</h2>
          </div>

          <div className="space-y-6">
            {/* Day 1 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <h3 className="text-xl font-bold text-gray-800">🛬 10/1（三）抵達日本・入住大阪民宿</h3>
              </div>
              
              <div className="space-y-3 ml-11">
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-blue-600 min-w-16">15:15</span>
                  <span className="text-gray-700">抵達民宿，整理休息</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-blue-600 min-w-16">16:00</span>
                  <span className="text-gray-700">前往心齋橋、道頓堀拍照逛街購物（地鐵移動約 20 分鐘）</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-blue-600 min-w-16">17:00</span>
                  <span className="text-gray-700">🍽️ 晚餐：はり重壽喜燒本店（需準時抵達，避免排隊）</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-blue-600 min-w-16">18:30</span>
                  <span className="text-gray-700">超商採買生活用品</span>
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
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <h3 className="text-xl font-bold text-gray-800">🤝 10/2（四）大阪市區行程・與William & Jasper 會合</h3>
              </div>
              
              <div className="space-y-4 ml-11">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">☀️ 上午行程選項一：天王寺附近</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-700">• 天王寺公園散步、天王寺動物園（¥500 或使用大阪周遊卡免費）</p>
                    <p className="text-gray-700">• 四天王寺或通天閣周邊老街</p>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">☀️ 上午行程選項二：海遊館</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-700">• 成人：¥2,700，交通時間：約30分鐘</p>
                    <p className="text-gray-700">• 世界最大級別水族館，推薦鯨鯊區、企鵝</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-sm font-medium text-purple-600 min-w-16">午餐</span>
                    <span className="text-gray-700">🍽️ とんかつKYK 阿倍野店 或 釜たけうどん</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sm font-medium text-purple-600 min-w-16">15:00</span>
                    <span className="text-gray-700">☕ Eggs &apos;n Things 心齋橋店下午茶</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sm font-medium text-purple-600 min-w-16">15:30</span>
                    <span className="text-gray-700">🚄 William與 Jasper 自東京新幹線抵達大阪會合</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sm font-medium text-purple-600 min-w-16">晚上</span>
                    <span className="text-gray-700">🍽️ 蔦燒肉、道頓堀今井烏龍麵 或 HARUKAS展望台夜景</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <h3 className="text-xl font-bold text-gray-800">🏰 10/3（五）大阪經典文化一日遊</h3>
              </div>
              
              <div className="space-y-3 ml-11">
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-green-600 min-w-16">上午</span>
                  <span className="text-gray-700">🏯 大阪城公園 + 天守閣（¥600）/ 御座船（需預約10:00~11:00）</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-green-600 min-w-16">午餐</span>
                  <span className="text-gray-700">🍽️ 天神橋筋商店街：串かつ だるま 或 北極星蛋包飯</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-green-600 min-w-16">下午</span>
                  <span className="text-gray-700">👘 大阪今昔生活館（和服體驗30分鐘，¥500）</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-green-600 min-w-16">晚餐</span>
                  <span className="text-gray-700">🍽️ 梅田：浪花そば玄（蕎麥麵）或 大阪燒きじ（米其林推薦）</span>
                </div>
              </div>
            </div>

            {/* Day 4 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                <h3 className="text-xl font-bold text-gray-800">🚄 10/4（六）大阪 → 京都移動日</h3>
              </div>
              
              <div className="space-y-3 ml-11">
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-red-600 min-w-16">上午</span>
                  <span className="text-gray-700">⛩️ 伏見稻荷大社（千本鳥居）+ 東福寺（¥400）</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-red-600 min-w-16">午餐</span>
                  <span className="text-gray-700">🍵 京都站「中村藤吉」抹茶甜點 + 蕎麥麵</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-red-600 min-w-16">下午</span>
                  <span className="text-gray-700">🏯 二条城（世界遺產，¥1,300）+ 錦市場小吃採買</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-red-600 min-w-16">晚餐</span>
                  <span className="text-gray-700">🍽️ 鳥せい串燒（有兒童餐）或 先斗町居酒屋</span>
                </div>
              </div>
            </div>

            {/* Day 5 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                <h3 className="text-xl font-bold text-gray-800">⛩️ 10/5（日）京都悠閒文化遊</h3>
              </div>
              
              <div className="space-y-3 ml-11">
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-pink-600 min-w-16">上午</span>
                  <span className="text-gray-700">🏛️ 清水寺 + 三年坂</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-pink-600 min-w-16">午餐</span>
                  <span className="text-gray-700">🍽️ 清水寺周邊「奧丹湯豆腐」</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-pink-600 min-w-16">下午</span>
                  <span className="text-gray-700">🌸 祇園花見小路 + 八坂神社 + 茶道體驗</span>
                </div>
              </div>
            </div>

            {/* Day 6 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">6</div>
                <h3 className="text-xl font-bold text-gray-800">🍂 10/6（一）京都 → 大阪（下午返回）</h3>
              </div>
              
              <div className="space-y-3 ml-11">
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-indigo-600 min-w-16">08:30</span>
                  <span className="text-gray-700">🥈 銀閣寺（慈照寺）¥500 - 枯山水「銀沙灘」</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-indigo-600 min-w-16">10:00</span>
                  <span className="text-gray-700">🚶‍♀️ 哲學之道散步 → 南禪寺（2公里步行）</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-indigo-600 min-w-16">12:00</span>
                  <span className="text-gray-700">🍽️ 南禪寺「順正湯豆腐」（預約制，¥3,000）</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-indigo-600 min-w-16">14:00</span>
                  <span className="text-gray-700">🚄 返回大阪，晚餐：黑門市場或道頓堀金龍拉麵</span>
                </div>
              </div>
            </div>

            {/* Day 7 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">7</div>
                <h3 className="text-xl font-bold text-gray-800">🦌 10/7（二）奈良一日遊</h3>
              </div>
              
              <div className="space-y-3 ml-11">
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-yellow-600 min-w-16">09:30</span>
                  <span className="text-gray-700">🦌 奈良公園 + 東大寺（¥600）餵鹿仙貝¥200</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-yellow-600 min-w-16">11:00</span>
                  <span className="text-gray-700">⛩️ 春日大社（¥500）千盞石燈籠</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-yellow-600 min-w-16">12:30</span>
                  <span className="text-gray-700">🍽️ 志津香釜飯（奈良名物）</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-yellow-600 min-w-16">14:00</span>
                  <span className="text-gray-700">🏘️ 奈良町老街 + 大和茶冰淇淋</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-yellow-600 min-w-16">晚餐</span>
                  <span className="text-gray-700">🦀 回大阪：玄品河豚 或 姑姑的帝王蟹</span>
                </div>
              </div>
            </div>

            {/* Day 8 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">8</div>
                <h3 className="text-xl font-bold text-gray-800">🐄 10/8（三）神戶一日遊</h3>
              </div>
              
              <div className="space-y-3 ml-11">
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-teal-600 min-w-16">10:00</span>
                  <span className="text-gray-700">🏘️ 北野異人館（風見雞館+萌黃之館）¥1,050</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-teal-600 min-w-16">午餐</span>
                  <span className="text-gray-700">🥩 神戶牛鐵板燒（午間套餐¥5,000起）</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-teal-600 min-w-16">13:30</span>
                  <span className="text-gray-700">⚓ 神戶港 + 麵包超人博物館（親子必訪）</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-teal-600 min-w-16">15:30</span>
                  <span className="text-gray-700">♨️ 有馬溫泉（太閣之湯）¥2,600</span>
                </div>
              </div>
            </div>

            {/* Day 9 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-gray-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">9</div>
                <h3 className="text-xl font-bold text-gray-800">✈️ 10/9（四）關西機場返程</h3>
              </div>
              
              <div className="space-y-3 ml-11">
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-gray-600 min-w-16">09:00</span>
                  <span className="text-gray-700">🏨 民宿退房 → 南海電鐵空港急行（45分鐘）</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-gray-600 min-w-16">10:30</span>
                  <span className="text-gray-700">🛂 抵達機場 → 託運行李、安檢</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-gray-600 min-w-16">12:00</span>
                  <span className="text-gray-700">🛍️ 機場「Sky View」採買伴手禮</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-gray-600 min-w-16">14:00</span>
                  <span className="text-gray-700">✈️ 華航CI153起飛返台</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Sections */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-500 rounded-xl">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">🌧️ 雨天備案</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">京都雨天行程</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-800">室內文化體驗</p>
                  <p className="text-sm text-gray-600">• 京都鐵道博物館（¥1,500）</p>
                  <p className="text-sm text-gray-600">• 西陣織會館（和服秀+手工藝）</p>
                  <p className="text-sm text-gray-600">• 京都站溫泉花螢之湯（¥1,000）</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">大阪雨天行程</h3>
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-semibold text-purple-800">室內景點</p>
                  <p className="text-sm text-gray-600">• EXPOCITY（室內樂園+摩天輪）</p>
                  <p className="text-sm text-gray-600">• 大阪市立科學館（¥400）</p>
                  <p className="text-sm text-gray-600">• TeamLab光影展（長居植物園）</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Restaurant Recommendations */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-green-500 rounded-xl">
              <Banknote className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">🦀 帝王蟹餐廳推薦</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-orange-600 mb-4">蟹道樂（道頓堀本店）</h3>
              <div className="space-y-2">
                <p className="text-gray-700">特色：全蟹宴（刺身、烤蟹、鍋物）</p>
                <p className="text-gray-700">價格：套餐 ¥5,000~15,000</p>
                <p className="text-sm text-blue-600">📞 需提前1個月官網預約</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-blue-600 mb-4">磯丸水產（黑門市場店）</h3>
              <div className="space-y-2">
                <p className="text-gray-700">特色：現烤帝王蟹腳</p>
                <p className="text-gray-700">價格：¥3,000~5,000</p>
                <p className="text-sm text-green-600">✅ 24小時營業，平價新鮮</p>
              </div>
            </div>
          </div>
        </section>

        {/* Transportation Passes */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-purple-500 rounded-xl">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">🎫 必買票券</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-purple-800 mb-4">關西周遊券（Kansai Thru Pass）</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">適用範圍</h4>
                <p className="text-gray-700 text-sm mb-2">大阪、京都、奈良、神戶 私鐵/地鐵/巴士</p>
                <p className="text-gray-700 text-sm">可不連續使用（如10/4京都、10/7奈良、10/8神戶）</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">價格</h4>
                <p className="text-gray-700 text-sm">成人3日券：¥5,800</p>
                <p className="text-gray-700 text-sm">兒童3日券：¥2,900</p>
                <p className="text-green-600 text-sm mt-2">💡 跨市交通3天總費用＞¥5,800即回本</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
