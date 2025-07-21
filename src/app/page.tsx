import { Plane, MapPin, Calendar, Users, Clock, Banknote, Phone, AlertTriangle } from 'lucide-react';

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
          <div className="relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-600 via-orange-600 to-red-700 rounded-full"></div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-600 via-orange-600 to-red-700 rounded-full"></div>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-800 via-orange-700 to-red-800 bg-clip-text text-transparent mb-6 py-6 tracking-wide">
              2025 關西旅遊計劃書
            </h1>
            
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
                  <a href="https://www.booking.com/hotel/jp/11-tenngacyaya-ii.en-gb.html" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-900 font-medium text-sm hover:underline">查看詳情 →</a>
                </div>
                <div className="bg-gradient-to-r from-red-100 to-orange-50 rounded-2xl p-5 border border-red-200">
                  <p className="font-bold text-red-800 mb-1">🏨 京都飯店</p>
                  <p className="text-gray-600 text-sm mb-2">La&apos;gent Hotel Kyoto Nijo</p>
                  <a href="https://www.booking.com/hotel/jp/razientohoterujing-du-er-tiao.en-gb.html" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:text-red-900 font-medium text-sm hover:underline">查看詳情 →</a>
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
                  <div className="flex-1">
                    <span className="text-gray-700">🍽️ 晚餐：はり重壽喜燒本店（需準時抵達，避免排隊）</span>
                    <div className="mt-1">
                      <a href="https://www.harijyu.co.jp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm hover:underline">官網</a>
                      <span className="text-gray-400 mx-2">|</span>
                      <a href="https://tabelog.com/tw/osaka/A2701/A270202/27001250/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm hover:underline">Tabelog評價</a>
                    </div>
                  </div>
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
                  <h4 className="font-semibold text-yellow-800 mb-2">☀️ 上午行程選項一：天王寺附近散步（車程約20分鐘）</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-700">• 天王寺公園散步、天王寺動物園（¥500 或使用大阪周遊卡免費）</p>
                    <p className="text-gray-700">• 四天王寺或通天閣周邊老街（順路、可悠閒參觀）</p>
                  </div>
                  <div className="mt-3">
                    <h5 className="font-medium text-yellow-700 mb-1">午餐地點選擇（天王寺附近）：</h5>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-600">• とんかつKYK 阿倍野店（炸豬排名店）- 高CP值、份量足</p>
                      <p className="text-gray-600">• 釜たけうどん あべのキューズモール店（大阪風烏龍麵）- 地道口味、排隊名店</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">☀️ 上午行程選項二：海遊館參觀</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-700">• 成人：¥2,700，交通時間：約30分鐘</p>
                    <p className="text-gray-700">• 世界最大級別水族館，推薦必看環太平洋水槽、企鵝、鯨鯊區</p>
                    <p className="text-gray-700">• 午餐：館旁 Tempozan Marketplace美食街</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-sm font-medium text-purple-600 min-w-16">15:00</span>
                    <div className="flex-1">
                      <span className="text-gray-700">☕ Eggs &apos;n Things 心齋橋店下午茶（美式甜鬆餅 & 咖啡）</span>
                      <div className="mt-1">
                        <a href="https://goo.gl/maps/JiRQkpzEBZK2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm hover:underline">Google Map</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sm font-medium text-purple-600 min-w-16">15:30</span>
                    <span className="text-gray-700">🚄 William與 Jasper 自東京新幹線抵達大阪會合</span>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-medium text-blue-700 mb-2">晚餐地點選擇：</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <div>
                          <span className="text-gray-700">蔦燒肉（心齋橋）- 高評價燒肉、建議提前1-2週預約</span>
                          <div className="mt-1">
                            <a href="https://goo.gl/maps/8HoWchECXfUYZndJ7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs hover:underline">Google Map</a>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <div>
                          <span className="text-gray-700">とんかつまい泉 心齋橋 - 日式炸豬排名店</span>
                          <div className="mt-1">
                            <a href="https://goo.gl/maps/F3MP8CDbivB2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs hover:underline">Google Map</a>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <div>
                          <span className="text-gray-700">道頓堀 今井（日式烏龍麵老舖）- 店面較小，可能需分批入座</span>
                          <div className="mt-1">
                            <a href="https://goo.gl/maps/SXeLNPXRZGQRxEnRA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs hover:underline">Google Map</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-medium text-purple-700 mb-2">夜景/晚上景點（太累也可以回民宿休息）：</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <div>
                          <span className="text-gray-700">阿倍野 HARUKAS 展望台（300m 高空）</span>
                          <p className="text-gray-600 text-xs mt-1">成人1,500日圓（現場購票）、1,350日圓（官網預約）</p>
                          <p className="text-gray-600 text-xs">交通約15分鐘，回飯店車程約 6分鐘</p>
                          <div className="mt-1">
                            <a href="https://www.abenoharukas-300.jp/tw/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs hover:underline">官網</a>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span className="text-gray-700">道頓堀夜景散步 + 河岸步道</span>
                      </div>
                    </div>
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
                  <div className="flex-1">
                    <span className="text-gray-700">🏯 大阪城公園 + 天守閣（¥600）/ 御座船（需預約）</span>
                    <p className="text-gray-600 text-sm mt-1">交通：天下茶屋 → 大阪城公園（地鐵30分鐘）</p>
                    <p className="text-gray-600 text-sm">備註：御座船建議預約10:00~11:00時段</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-green-600 min-w-16">午餐</span>
                  <div className="flex-1">
                    <span className="text-gray-700">🍽️ 午餐推薦</span>
                    <div className="text-gray-600 text-sm mt-1 space-y-1">
                      <p>• 大阪城周邊：森之宮站「大阪城公園餐廳」或「がんこ お好み焼き」</p>
                      <p>• 天神橋筋商店街：「串かつ だるま」或「北極星 蛋包飯」</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-green-600 min-w-16">下午</span>
                  <div className="flex-1">
                    <span className="text-gray-700">👘 大阪今昔生活館（和服體驗限時30分鐘，建議14:00前完成 ¥500）</span>
                    <p className="text-gray-600 text-sm mt-1">交通：大阪城 → 今昔生活館（地鐵20分鐘）</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-green-600 min-w-16">晚餐</span>
                  <div className="flex-1">
                    <span className="text-gray-700">🍽️ 梅田區域晚餐推薦</span>
                    <div className="text-gray-600 text-sm mt-1 space-y-1">
                      <p>• 「浪花そば 玄」（蕎麥麵）</p>
                      <p>• 「はり重 うどん」（烏龍麵）</p>
                      <p>• 「大阪燒 きじ」（米其林推薦）</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-green-600 min-w-16">返回</span>
                  <div className="flex-1">
                    <span className="text-gray-700">返回民宿</span>
                    <p className="text-gray-600 text-sm mt-1">交通：梅田 → 天下茶屋（地鐵30分鐘）</p>
                    <p className="text-gray-600 text-sm">時間：建議19:30前出發</p>
                  </div>
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
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-medium text-blue-700 mb-2">交通安排</h5>
                  <p className="text-gray-700 text-sm">出發：天下茶屋站 → 京都站（南海電鐵→近鐵奈良線，約 1小時10分鐘）</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-red-600 min-w-16">上午</span>
                  <div className="flex-1">
                    <div className="space-y-2">
                      <div>
                        <span className="text-gray-700">⛩️ 伏見稻荷大社（千本鳥居）</span>
                        <p className="text-gray-600 text-sm mt-1">交通：京都站→JR奈良線「稻荷站」（5分鐘，¥150）</p>
                      </div>
                      <div>
                        <span className="text-gray-700">🍁 東福寺（紅葉名所，10月初可能已有秋色）</span>
                        <p className="text-gray-600 text-sm mt-1">交通：稻荷站→JR奈良線「東福寺站」（2分鐘）</p>
                        <p className="text-gray-600 text-sm">門票：¥400</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-red-600 min-w-16">午餐</span>
                  <div className="flex-1">
                    <div className="space-y-1">
                      <p className="text-gray-700">🍵 京都站「中村藤吉」（抹茶甜點＋蕎麥麵）</p>
                      <p className="text-gray-700">🍜 或「拉麵小路」多元選擇</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-red-600 min-w-16">下午</span>
                  <div className="flex-1">
                    <div className="space-y-2">
                      <div>
                        <span className="text-gray-700">🏯 二条城（世界遺產）</span>
                        <p className="text-gray-600 text-sm mt-1">交通：京都站→地鐵烏丸線「二条城前站」（15分鐘）</p>
                        <p className="text-gray-600 text-sm">門票：¥1,300</p>
                      </div>
                      <div>
                        <span className="text-gray-700">🛒 錦市場（小吃採買）</span>
                        <p className="text-gray-600 text-sm mt-1">交通：二条城→地鐵「四条站」步行10分鐘</p>
                        <p className="text-gray-600 text-sm">時間：16:00前（部分店家18:00關門）</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-red-600 min-w-16">晚餐</span>
                  <div className="flex-1">
                    <div className="space-y-1">
                      <p className="text-gray-700">🍽️ 飯店周邊「鳥せい」串燒（有兒童餐）</p>
                      <p className="text-gray-700">🍽️ 或「先斗町」居酒屋（需預約）</p>
                    </div>
                  </div>
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
                  <div className="flex-1">
                    <span className="text-gray-700">🏛️ 清水寺＋三年坂</span>
                    <p className="text-gray-600 text-sm mt-1">交通：飯店→市巴士「五条坂站」步行10分鐘</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-pink-600 min-w-16">午餐</span>
                  <span className="text-gray-700">🍽️ 清水寺周邊「奧丹湯豆腐」</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-pink-600 min-w-16">下午</span>
                  <div className="flex-1">
                    <div className="space-y-1">
                      <p className="text-gray-700">🌸 祇園花見小路＋八坂神社</p>
                      <p className="text-gray-700">🍵 茶道體驗（預約制，如「祇園辻利」）</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-pink-600 min-w-16">晚餐</span>
                  <div className="flex-1">
                    <div className="space-y-1">
                      <p className="text-gray-700">🍽️ 飯店周邊「鳥せい」串燒（有兒童餐）</p>
                      <p className="text-gray-700">🍽️ 或「先斗町」居酒屋（需預約）</p>
                    </div>
                  </div>
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
                  <div className="flex-1">
                    <span className="text-gray-700">🥈 銀閣寺（慈照寺）¥500（附贈御守紙籤）</span>
                    <div className="text-gray-600 text-sm mt-1 space-y-1">
                      <p>特色：枯山水「銀沙灘」與「向月台」、哲學之道（10月初可能有早楓）</p>
                      <p>交通：從京都飯店（La&apos;gent Hotel Kyoto Nijo）→ 市巴士「銀閣寺道站」（約30分鐘）</p>
                      <p>或搭地鐵烏丸線「今出川站」→ 轉巴士（203系統）</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-indigo-600 min-w-16">10:00</span>
                  <div className="flex-1">
                    <span className="text-gray-700">🚶‍♀️ 哲學之道散步 → 南禪寺</span>
                    <div className="text-gray-600 text-sm mt-1 space-y-1">
                      <p>路線：銀閣寺→ 沿哲學之道步行（約2公里，30分鐘）→ 南禪寺</p>
                      <p>途中可停留「藍瓶咖啡」或「Yojiya Cafe」</p>
                      <p>南禪寺：免費參觀（方丈庭園 ¥500，水路閣拍照必去）</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-indigo-600 min-w-16">12:00</span>
                  <div className="flex-1">
                    <span className="text-gray-700">🍽️ 南禪寺周邊「順正湯豆腐」</span>
                    <p className="text-gray-600 text-sm mt-1">京都傳統湯豆腐料理（預約制，人均 ¥3,000）</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-indigo-600 min-w-16">14:00</span>
                  <div className="flex-1">
                    <span className="text-gray-700">🚄 返回大阪</span>
                    <p className="text-gray-600 text-sm mt-1">南禪寺→ 京都站（巴士約25分鐘）→ JR京都線「新大阪」→ 南海電鐵「天下茶屋」</p>
                    <p className="text-gray-600 text-sm">總車程：約 1小時20分鐘</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-indigo-600 min-w-16">晚餐</span>
                  <div className="flex-1">
                    <div className="space-y-1">
                      <p className="text-gray-700">🦀 黑門市場「磯丸水產」（海鮮燒烤，營業至23:00）</p>
                      <p className="text-gray-700">🍜 道頓堀「金龍拉麵」（24小時營業，適合晚歸）</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-medium text-yellow-700 mb-2">注意事項</h5>
                  <div className="text-gray-600 text-sm space-y-1">
                    <p>1. 行李安排：上午退房後可寄放飯店，或利用 京都站投幣櫃（¥500~700/櫃）</p>
                    <p>2. 交通券：單程票即可（ICOCA卡最方便），若當天跑多景點可買「京都巴士1日券」（¥700）</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 7 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">7</div>
                <h3 className="text-xl font-bold text-gray-800">🦌 10/7（二）奈良一日遊</h3>
              </div>
              
              <div className="space-y-4 ml-11">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-medium text-green-700 mb-2">交通安排（大阪 → 奈良）</h5>
                  <div className="text-gray-600 text-sm space-y-1">
                    <p>1. 去程：天下茶屋站 → 南海電鐵「難波站」→ 轉近鐵奈良線（急行）→ 近鐵奈良站</p>
                    <p>時間：約 50分鐘（直達，無需轉乘）｜費用：¥560（ICOCA卡可直接刷卡）</p>
                    <p>2. 回程：近鐵奈良站 → 難波站 → 轉南海電鐵回天下茶屋</p>
                    <p>末班車：23:00（建議19:00前返程避開人潮）</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-yellow-600 min-w-16">09:30</span>
                  <div className="flex-1">
                    <span className="text-gray-700">🦌 奈良公園＋東大寺</span>
                    <div className="text-gray-600 text-sm mt-1 space-y-1">
                      <p>奈良公園：免費入場，沿途可買「鹿仙貝」（¥200）餵鹿</p>
                      <p>注意：鹿會追著食物跑，建議把仙貝藏好、避開帶角的公鹿</p>
                      <p>東大寺：門票¥600（世界文化遺產，大佛殿必看）</p>
                      <p>兒童會喜歡鑽「大佛鼻孔」（柱子下的洞，祈求平安）</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-yellow-600 min-w-16">11:00</span>
                  <div className="flex-1">
                    <span className="text-gray-700">⛩️ 春日大社</span>
                    <div className="text-gray-600 text-sm mt-1 space-y-1">
                      <p>門票：¥500（外苑免費，本殿需付費）</p>
                      <p>特色：千盞石燈籠、森林步道清幽</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-yellow-600 min-w-16">12:30</span>
                  <div className="flex-1">
                    <span className="text-gray-700">🍽️ 午餐：奈良在地美食</span>
                    <div className="text-gray-600 text-sm mt-1">
                      <p>「志津香」釜飯（奈良名物，七種食材釜炊）</p>
                      <p>11:00開門（排隊名店）</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-yellow-600 min-w-16">14:00</span>
                  <span className="text-gray-700">🏘️ 奈良町老街 - 逛雜貨店、吃大和茶冰淇淋</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-yellow-600 min-w-16">晚餐</span>
                  <div className="flex-1">
                    <span className="text-gray-700">🦀 返回大阪後的晚餐</span>
                    <div className="text-gray-600 text-sm mt-1 space-y-1">
                      <p>• 心齋橋「玄品河豚」（體驗河豚料理，需預約）</p>
                      <p>• 黑門市場「黑門三平」（海鮮丼、壽司）</p>
                      <p>• 姑姑的帝王蟹</p>
                    </div>
                  </div>
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
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-medium text-blue-700 mb-2">交通</h5>
                  <p className="text-gray-600 text-sm">天下茶屋→JR神戶線「三宮站」（約40分鐘，¥650）</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-teal-600 min-w-16">10:00</span>
                  <div className="flex-1">
                    <span className="text-gray-700">🏘️ 北野異人館（風見雞館＋萌黃之館）</span>
                    <p className="text-gray-600 text-sm mt-1">¥1,050｜歐風建築拍照聖地</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-teal-600 min-w-16">午餐</span>
                  <div className="flex-1">
                    <div className="space-y-1">
                      <p className="text-gray-700">🥩 「ステーキランド」神戶牛鐵板燒（午間套餐¥5,000起）</p>
                      <p className="text-gray-700">🍽️ 或「神戶PLAISIR」法式料理（港邊景觀餐廳）</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-teal-600 min-w-16">13:30</span>
                  <div className="flex-1">
                    <span className="text-gray-700">⚓ 神戶港（美利堅公園＋MOSAIC廣場）</span>
                    <p className="text-gray-600 text-sm mt-1">推薦：麵包超人博物館（親子必訪）</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-teal-600 min-w-16">15:30</span>
                  <div className="flex-1">
                    <span className="text-gray-700">♨️ 有馬溫泉（太閣之湯）</span>
                    <div className="text-gray-600 text-sm mt-1 space-y-1">
                      <p>交通：神戶三宮→巴士40分鐘（¥1,370）</p>
                      <p>門票：¥2,600｜金之湯、銀之湯分區體驗</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-medium text-teal-600 min-w-16">晚餐</span>
                  <span className="text-gray-700">🍽️ 神戶港「RED STEAKHOUSE」或返回大阪用餐</span>
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
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h5 className="font-medium text-orange-700 mb-2">流程建議</h5>
                  <div className="text-gray-600 text-sm space-y-1">
                    <p>09:00 民宿退房 → 南海電鐵空港急行（天下茶屋→關西機場，45分鐘）</p>
                    <p>10:30 抵達機場 → 託運行李、安檢</p>
                    <p>12:00 逛機場「Sky View」或採買伴手禮</p>
                    <p>14:00 華航CI153起飛返台</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> 
       {/* Rainy Day Plans */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-500 rounded-xl">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">🌧️ 雨天備案（大阪 & 京都）</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">🏛️ 京都雨天行程</h3>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-800 mb-2">1. 京都車站周邊</p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• 京都鐵道博物館（¥1,500，兒童免費｜互動設施多）</p>
                    <p>• 伊勢丹百貨（11F空中走廊觀景＋美食街）</p>
                    <p>• 拉麵小路（8家名店集中，避雨好選擇）</p>
                  </div>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-semibold text-green-800 mb-2">2. 室內文化體驗</p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• 西陣織會館（和服秀＋手工藝體驗）</p>
                    <p>• 京都文化博物館（¥500，展覽＋日式庭院）</p>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-semibold text-purple-800 mb-2">3. 溫泉放鬆</p>
                  <div className="text-sm text-gray-600">
                    <p>• 京都站「溫泉 花螢の湯」（¥1,000，附設餐廳）</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">🏢 大阪雨天行程</h3>
              <div className="space-y-4">
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="font-semibold text-orange-800 mb-2">1. 購物中心</p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• EXPOCITY（大阪萬博園區｜室內樂園＋摩天輪）</p>
                    <p>• Grand Front Osaka（梅田｜北館科技體驗＋南館美食）</p>
                  </div>
                </div>
                <div className="p-3 bg-teal-50 rounded-lg">
                  <p className="font-semibold text-teal-800 mb-2">2. 博物館 & 水族館</p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• 大阪市立科學館（¥400，超多動手實驗）</p>
                    <p>• 海遊館（¥2,700，巨型鯨鯊震撼）</p>
                  </div>
                </div>
                <div className="p-3 bg-pink-50 rounded-lg">
                  <p className="font-semibold text-pink-800 mb-2">3. 室內景點</p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• 大阪今昔生活館（和服體驗＋懷舊街景）</p>
                    <p>• TeamLab Botanical Garden（夜間光影展，長居植物園內）</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Crab Restaurant Recommendations */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-green-500 rounded-xl">
              <Banknote className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">🦀 帝王蟹餐廳推薦</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6">
            <h3 className="text-lg font-bold text-orange-600 mb-4">🏮 大阪地區</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-3">1. 蟹道樂（かに道楽） 道頓堀本店</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700">特色：全蟹宴（刺身、烤蟹、鍋物）</p>
                  <p className="text-gray-700">套餐：¥5,000~15,000</p>
                  <p className="text-blue-600">預約：官網提前1個月預約</p>
                  <p className="text-gray-600">分店：心齋橋、梅田也有分店</p>
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-3">2. 磯丸水產（黑門市場店）</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700">特色：現烤帝王蟹腳（單點¥3,000~5,000）</p>
                  <p className="text-green-600">優點：24小時營業，平價新鮮，適合宵夜</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reservations */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-500 rounded-xl">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">📞 餐廳預約（需提前1~2個月）</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-red-600 mb-4">🍽️ 重要餐廳預約</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-red-50">
                    <tr>
                      <th className="px-3 py-2 text-left font-semibold text-red-800">餐廳名稱</th>
                      <th className="px-3 py-2 text-left font-semibold text-red-800">預約方式</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-3 py-2 font-medium text-gray-800">はり重壽喜燒</td>
                      <td className="px-3 py-2 text-gray-600">官網預約</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium text-gray-800">蔦燒肉</td>
                      <td className="px-3 py-2 text-gray-600">TableCheck</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium text-gray-800">蟹道樂</td>
                      <td className="px-3 py-2 text-gray-600">官方預約</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium text-gray-800">順正湯豆腐</td>
                      <td className="px-3 py-2 text-gray-600">官網預約</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium text-gray-800">志津香釜飯</td>
                      <td className="px-3 py-2 text-gray-600">電話預約</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-blue-600 mb-4">🎫 景點預約（提前1週~1個月）</h3>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-800 mb-1">大阪城御座船</p>
                  <p className="text-sm text-gray-600">10/3上午時段，選「黃金船」</p>
                  <p className="text-sm text-blue-600">官網預約</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-semibold text-green-800 mb-1">阿倍野展望台</p>
                  <p className="text-sm text-gray-600">電子票比現場便宜¥150，掃碼入場</p>
                  <p className="text-sm text-blue-600">Klook購票</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-purple-600 mb-4">🚗 交通預約（特殊需求時）</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 bg-purple-50 rounded-lg">
                <p className="font-semibold text-purple-800 mb-1">關西機場→大阪民宿接送</p>
                <p className="text-sm text-gray-600">如行李多可預約 KKday包車（7人車約NT$2,500）</p>
              </div>
              <div className="p-3 bg-indigo-50 rounded-lg">
                <p className="font-semibold text-indigo-800 mb-1">神戶有馬溫泉接送</p>
                <p className="text-sm text-gray-600">預約 有馬溫泉組合套票（含巴士+入浴券）</p>
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
            <h2 className="text-2xl font-bold text-gray-800">🎫 必買票券（適合多次跨城市移動）</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-purple-800 mb-4">1. 關西周遊券（Kansai Thru Pass）</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">適用範圍</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• 大阪、京都、奈良、神戶 私鐵/地鐵/巴士</p>
                    <p>• 含南海電鐵、京阪電車、阪急阪神等（JR除外）</p>
                    <p>• 可不連續使用（如選3日券，可在10/4京都、10/7奈良、10/8神戶分開用）</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">價格</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• 成人3日券：¥5,800</p>
                    <p>• 兒童3日券：¥2,900</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">計算回本</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>若跨市交通3天總費用＞¥5,800即回本</p>
                    <p className="text-green-600">例：大阪→京都單程¥1,100+奈良¥560+神戶¥650=¥2,310×3天=¥6,930</p>
                    <p className="text-blue-600">哪裡買：關西機場或 KKday預購</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-blue-800 mb-4">2. 京都巴士一日券（¥700）</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">適用行程</h4>
                  <p className="text-sm text-gray-600">10/6銀閣寺→南禪寺散步日</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">計算</h4>
                  <p className="text-sm text-green-600">單趟巴士¥230，當天搭3次即回本</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-yellow-500 rounded-xl">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">⚠️ 重要注意事項</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-yellow-600 mb-4">🦌 奈良餵鹿注意事項</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-yellow-600">•</span>
                  <span className="text-gray-700">鹿會追著食物跑，建議把仙貝藏好</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-600">•</span>
                  <span className="text-gray-700">避開帶角的公鹿</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-600">•</span>
                  <span className="text-gray-700">鹿仙貝：¥200</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  <span className="text-gray-700">兒童可鑽「大佛鼻孔」祈求平安</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-blue-600 mb-4">🚇 交通末班車提醒</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">近鐵奈良→難波 末班車：23:00</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">建議19:00前返程避開人潮</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">ICOCA卡可直接刷卡使用</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-8 h-8 text-2xl">🍁</div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
            <div className="w-10 h-10 text-2xl text-red-700">⛩️</div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
            <div className="w-8 h-8 text-2xl">🍁</div>
          </div>
          <p className="text-gray-600 text-lg">祝您關西之旅愉快！🌸</p>
        </footer>
      </div>
    </div>
  );
}