
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Camera, 
  AlertTriangle, 
  Users, 
  Activity, 
  TrendingUp,
  Car,
  MapPin,
  Bell,
  LogOut
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import AdminLayout from "@/components/AdminLayout";

const Dashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalCameras: 142,
    activeCameras: 138,
    totalAlerts: 23,
    urgentAlerts: 5,
    totalUsers: 89,
    activeUsers: 67,
    vehiclesTracked: 15847,
    averageSpeed: 42
  });

  const [recentAlerts] = useState([
    { id: 1, type: "speed", location: "Ngã tư Lê Lợi", time: "2 phút trước", severity: "high" },
    { id: 2, type: "traffic", location: "Cầu Rồng", time: "5 phút trước", severity: "medium" },
    { id: 3, type: "security", location: "Bến xe TT", time: "8 phút trước", severity: "high" },
    { id: 4, type: "system", location: "Camera #45", time: "12 phút trước", severity: "low" }
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        vehiclesTracked: prev.vehiclesTracked + Math.floor(Math.random() * 10),
        averageSpeed: Math.max(25, Math.min(65, prev.averageSpeed + Math.floor(Math.random() * 6 - 3))),
        totalAlerts: prev.totalAlerts + Math.floor(Math.random() * 2),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "text-red-400 bg-red-400/10 border-red-400/20";
      case "medium": return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
      case "low": return "text-blue-400 bg-blue-400/10 border-blue-400/20";
      default: return "text-slate-400 bg-slate-400/10 border-slate-400/20";
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "speed": return Car;
      case "traffic": return MapPin;
      case "security": return Shield;
      case "system": return Camera;
      default: return AlertTriangle;
    }
  };

  return (
    <AdminLayout>
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Dashboard Tổng quan</h1>
            <p className="text-slate-400">Giám sát hệ thống an ninh và giao thông</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Đăng xuất
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-slate-400 flex items-center">
                <Camera className="h-4 w-4 mr-2" />
                Camera System
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-1">
                {stats.activeCameras}/{stats.totalCameras}
              </div>
              <p className="text-xs text-green-400">
                {((stats.activeCameras / stats.totalCameras) * 100).toFixed(1)}% hoạt động
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-slate-400 flex items-center">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Cảnh báo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-400 mb-1">
                {stats.totalAlerts}
              </div>
              <p className="text-xs text-red-400">
                {stats.urgentAlerts} cần xử lý ngay
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-slate-400 flex items-center">
                <Users className="h-4 w-4 mr-2" />
                Người dùng
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-1">
                {stats.activeUsers}/{stats.totalUsers}
              </div>
              <p className="text-xs text-blue-400">
                {((stats.activeUsers / stats.totalUsers) * 100).toFixed(1)}% đang online
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-slate-400 flex items-center">
                <Activity className="h-4 w-4 mr-2" />
                Giao thông
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-1">
                {stats.vehiclesTracked.toLocaleString()}
              </div>
              <p className="text-xs text-green-400">
                TB: {stats.averageSpeed} km/h
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <Card className="bg-slate-800/50 border-slate-700 mb-6">
              <CardHeader>
                <CardTitle className="text-white">Thao tác Nhanh</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/admin/live-map">
                  <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700">
                    <MapPin className="h-4 w-4 mr-2" />
                    Xem bản đồ Live
                  </Button>
                </Link>
                <Link to="/admin/alerts">
                  <Button className="w-full justify-start bg-orange-600 hover:bg-orange-700">
                    <Bell className="h-4 w-4 mr-2" />
                    Quản lý cảnh báo
                  </Button>
                </Link>
                <Link to="/admin/investigation">
                  <Button className="w-full justify-start bg-purple-600 hover:bg-purple-700">
                    <Shield className="h-4 w-4 mr-2" />
                    Điều tra sự kiện
                  </Button>
                </Link>
                <Link to="/admin/analytics">
                  <Button className="w-full justify-start bg-green-600 hover:bg-green-700">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Phân tích dữ liệu
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* System Health */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Tình trạng Hệ thống</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">CPU Usage</span>
                  <span className="text-green-400">23%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: '23%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Memory</span>
                  <span className="text-yellow-400">67%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '67%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Storage</span>
                  <span className="text-blue-400">45%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Alerts */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Cảnh báo Gần đây
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Các sự kiện cần chú ý trong hệ thống
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAlerts.map((alert) => {
                    const AlertIcon = getAlertIcon(alert.type);
                    return (
                      <div
                        key={alert.id}
                        className={`p-4 rounded-lg border ${getSeverityColor(alert.severity)} flex items-center justify-between`}
                      >
                        <div className="flex items-center space-x-3">
                          <AlertIcon className="h-5 w-5" />
                          <div>
                            <div className="font-medium">{alert.location}</div>
                            <div className="text-sm opacity-80">{alert.time}</div>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost" className="hover:bg-slate-700">
                          Xem chi tiết
                        </Button>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 text-center">
                  <Link to="/admin/alerts">
                    <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                      Xem tất cả cảnh báo
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
