
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Filter, FileDown, Map, BarChart3, PieChart, TrendingUp } from "lucide-react";
import AdminLayout from "@/components/AdminLayout";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, LineChart, Line, PieChart as RechartsPieChart, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts";

// Mock data for charts
const trafficOverviewData = [
  { time: "00:00", vehicles: 45 },
  { time: "04:00", vehicles: 23 },
  { time: "08:00", vehicles: 156 },
  { time: "12:00", vehicles: 234 },
  { time: "16:00", vehicles: 189 },
  { time: "20:00", vehicles: 167 },
];

const vehicleTypeData = [
  { type: "Ô tô", count: 1234, percentage: 45 },
  { type: "Xe máy", count: 987, percentage: 36 },
  { type: "Xe tải", count: 345, percentage: 13 },
  { type: "Xe buýt", count: 123, percentage: 6 },
];

const hourlyData = Array.from({ length: 24 }, (_, i) => ({
  hour: i,
  vehicles: Math.floor(Math.random() * 200) + 50,
}));

const weeklyData = [
  { day: "T2", vehicles: 1250 },
  { day: "T3", vehicles: 1180 },
  { day: "T4", vehicles: 1350 },
  { day: "T5", vehicles: 1420 },
  { day: "T6", vehicles: 1680 },
  { day: "T7", vehicles: 890 },
  { day: "CN", vehicles: 650 },
];

const trafficRiskData = [
  { route: "Đường Nguyễn Huệ", current: 245, risk: "Cao" },
  { route: "Đường Lê Lợi", current: 189, risk: "Trung bình" },
  { route: "Đường Hai Bà Trưng", current: 134, risk: "Thấp" },
  { route: "Đường Trần Hưng Đạo", current: 278, risk: "Cao" },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Analytics = () => {
  const [timeFilter, setTimeFilter] = useState("7days");
  const [areaFilter, setAreaFilter] = useState("all");
  const [customDateRange, setCustomDateRange] = useState({ start: "", end: "" });

  const handleExportPDF = () => {
    console.log("Exporting analytics report to PDF...");
    // PDF export logic would go here
  };

  const handleApplyFilters = () => {
    console.log("Applying filters:", { timeFilter, areaFilter, customDateRange });
    // Filter application logic would go here
  };

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Phân tích & Báo cáo</h1>
          <Button onClick={handleExportPDF} className="bg-blue-600 hover:bg-blue-700">
            <FileDown className="h-4 w-4 mr-2" />
            Xuất Báo cáo PDF
          </Button>
        </div>

        {/* Global Filters */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Bộ lọc Toàn cục
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Time Filter */}
              <div className="space-y-2">
                <label className="text-sm text-slate-300">Thời gian</label>
                <Select value={timeFilter} onValueChange={setTimeFilter}>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Hôm nay</SelectItem>
                    <SelectItem value="7days">7 ngày qua</SelectItem>
                    <SelectItem value="30days">30 ngày qua</SelectItem>
                    <SelectItem value="custom">Phạm vi tùy chỉnh</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Area Filter */}
              <div className="space-y-2">
                <label className="text-sm text-slate-300">Khu vực</label>
                <Select value={areaFilter} onValueChange={setAreaFilter}>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả</SelectItem>
                    <SelectItem value="district1">Quận 1</SelectItem>
                    <SelectItem value="district3">Quận 3</SelectItem>
                    <SelectItem value="district5">Quận 5</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Custom Date Range */}
              {timeFilter === "custom" && (
                <>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-300">Từ ngày</label>
                    <Input
                      type="date"
                      value={customDateRange.start}
                      onChange={(e) => setCustomDateRange(prev => ({ ...prev, start: e.target.value }))}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-300">Đến ngày</label>
                    <Input
                      type="date"
                      value={customDateRange.end}
                      onChange={(e) => setCustomDateRange(prev => ({ ...prev, end: e.target.value }))}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-2 items-end">
                <Button onClick={handleApplyFilters} className="bg-blue-600 hover:bg-blue-700">
                  Áp dụng
                </Button>
                <Button variant="outline" className="border-slate-600 text-slate-300">
                  <Map className="h-4 w-4 mr-2" />
                  Chọn trên bản đồ
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Analytics Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          
          {/* Traffic Overview Card */}
          <Card className="bg-slate-800/50 border-slate-700 col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Tổng quan Lưu lượng
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">2,847</div>
                  <div className="text-sm text-slate-400">Tổng số xe</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">156</div>
                  <div className="text-sm text-slate-400">Trung bình/giờ</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">08:30</div>
                  <div className="text-sm text-slate-400">Giờ cao điểm</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">02:15</div>
                  <div className="text-sm text-slate-400">Giờ thấp điểm</div>
                </div>
              </div>
              <ChartContainer config={{}} className="h-64">
                <LineChart data={trafficOverviewData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="vehicles" stroke="#3B82F6" strokeWidth={2} />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Vehicle Distribution Card */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <PieChart className="h-5 w-5 mr-2" />
                Phân bố Phương tiện
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{}} className="h-48 mb-4">
                <RechartsPieChart>
                  <RechartsPieChart data={vehicleTypeData} cx="50%" cy="50%" outerRadius={80} dataKey="count">
                    {vehicleTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </RechartsPieChart>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </RechartsPieChart>
              </ChartContainer>
              <div className="space-y-2">
                {vehicleTypeData.map((item, index) => (
                  <div key={item.type} className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      />
                      <span className="text-slate-300 text-sm">{item.type}</span>
                    </div>
                    <span className="text-white font-medium">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Hourly Analysis Card */}
          <Card className="bg-slate-800/50 border-slate-700 col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Phân tích theo Giờ trong Ngày
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{}} className="h-64">
                <BarChart data={hourlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="vehicles" fill="#3B82F6" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Weekly Analysis Card */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Phân tích theo Tuần
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{}} className="h-64">
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="vehicles" fill="#10B981" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Traffic Risk Prediction Card */}
          <Card className="bg-slate-800/50 border-slate-700 col-span-1 lg:col-span-2 xl:col-span-3">
            <CardHeader>
              <CardTitle className="text-white">Dự báo Ùn tắc</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left text-slate-300 py-2">Tuyến đường</th>
                      <th className="text-left text-slate-300 py-2">Lưu lượng hiện tại</th>
                      <th className="text-left text-slate-300 py-2">Rủi ro Ùn tắc</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trafficRiskData.map((item, index) => (
                      <tr key={index} className="border-b border-slate-700/50">
                        <td className="text-white py-3">{item.route}</td>
                        <td className="text-slate-300 py-3">{item.current} xe</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            item.risk === 'Cao' 
                              ? 'bg-red-500/20 text-red-400' 
                              : item.risk === 'Trung bình'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : 'bg-green-500/20 text-green-400'
                          }`}>
                            {item.risk}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Analytics;
