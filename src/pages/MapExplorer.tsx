
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Camera, MapPin, Activity, AlertTriangle, Users, Car } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const MapExplorer = () => {
  const [activeCamera, setActiveCamera] = useState<number | null>(null);
  const [trafficData, setTrafficData] = useState({
    totalVehicles: 1247,
    averageSpeed: 35,
    alerts: 3,
    onlineCameras: 28
  });

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTrafficData(prev => ({
        totalVehicles: prev.totalVehicles + Math.floor(Math.random() * 10 - 5),
        averageSpeed: Math.max(20, Math.min(60, prev.averageSpeed + Math.floor(Math.random() * 6 - 3))),
        alerts: Math.max(0, prev.alerts + Math.floor(Math.random() * 3 - 1)),
        onlineCameras: prev.onlineCameras
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const cameraPoints = [
    { id: 1, x: 25, y: 30, name: "Ngã tư Lê Lợi", status: "online", alerts: 0 },
    { id: 2, x: 45, y: 20, name: "Cầu Rồng", status: "online", alerts: 1 },
    { id: 3, x: 65, y: 40, name: "Bến xe Trung tâm", status: "online", alerts: 0 },
    { id: 4, x: 35, y: 60, name: "Sân bay", status: "offline", alerts: 0 },
    { id: 5, x: 70, y: 70, name: "Cảng biển", status: "online", alerts: 2 },
    { id: 6, x: 15, y: 75, name: "Khu CN", status: "online", alerts: 0 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Về trang chủ
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-white">Bản đồ Giao thông</h1>
          </div>
          <Link to="/login">
            <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
              Quản trị viên
            </Button>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Stats Cards */}
          <div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-slate-400 flex items-center">
                  <Car className="h-4 w-4 mr-2" />
                  Phương tiện
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{trafficData.totalVehicles.toLocaleString()}</div>
                <p className="text-xs text-green-400">+12% so với hôm qua</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-slate-400 flex items-center">
                  <Activity className="h-4 w-4 mr-2" />
                  Tốc độ TB
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{trafficData.averageSpeed} km/h</div>
                <p className="text-xs text-blue-400">Trong giới hạn cho phép</p>
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
                <div className="text-2xl font-bold text-orange-400">{trafficData.alerts}</div>
                <p className="text-xs text-slate-400">Cần chú ý</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-slate-400 flex items-center">
                  <Camera className="h-4 w-4 mr-2" />
                  Camera
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-400">{trafficData.onlineCameras}/30</div>
                <p className="text-xs text-green-400">Hoạt động tốt</p>
              </CardContent>
            </Card>
          </div>

          {/* Map Area */}
          <div className="lg:col-span-3">
            <Card className="bg-slate-800/50 border-slate-700 h-[600px]">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Bản đồ Thành phố (Demo)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative w-full h-full bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg overflow-hidden">
                  {/* Simulated map background */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-green-900/20"></div>
                    {/* Roads simulation */}
                    <div className="absolute top-1/3 left-0 right-0 h-1 bg-slate-400 opacity-40"></div>
                    <div className="absolute bottom-1/3 left-0 right-0 h-1 bg-slate-400 opacity-40"></div>
                    <div className="absolute left-1/3 top-0 bottom-0 w-1 bg-slate-400 opacity-40"></div>
                    <div className="absolute right-1/3 top-0 bottom-0 w-1 bg-slate-400 opacity-40"></div>
                  </div>

                  {/* Camera points */}
                  {cameraPoints.map((camera) => (
                    <div
                      key={camera.id}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                        activeCamera === camera.id ? 'scale-125 z-10' : 'hover:scale-110'
                      }`}
                      style={{ left: `${camera.x}%`, top: `${camera.y}%` }}
                      onClick={() => setActiveCamera(activeCamera === camera.id ? null : camera.id)}
                    >
                      <div className={`relative ${
                        camera.status === 'online' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        <Camera className="h-6 w-6" />
                        {camera.alerts > 0 && (
                          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                            {camera.alerts}
                          </div>
                        )}
                        {activeCamera === camera.id && (
                          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white p-2 rounded-lg shadow-lg whitespace-nowrap z-20">
                            <div className="font-semibold">{camera.name}</div>
                            <div className="text-sm text-slate-300">
                              Trạng thái: <span className={camera.status === 'online' ? 'text-green-400' : 'text-red-400'}>
                                {camera.status === 'online' ? 'Hoạt động' : 'Ngoại tuyến'}
                              </span>
                            </div>
                            {camera.alerts > 0 && (
                              <div className="text-sm text-orange-400">
                                {camera.alerts} cảnh báo
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Floating vehicles simulation */}
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-3/4 left-2/3 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Camera Info Panel */}
          <div className="lg:col-span-1">
            <Card className="bg-slate-800/50 border-slate-700 h-[600px]">
              <CardHeader>
                <CardTitle className="text-white">Camera & Cảnh báo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cameraPoints.map((camera) => (
                  <div
                    key={camera.id}
                    className={`p-3 rounded-lg border transition-all cursor-pointer ${
                      activeCamera === camera.id
                        ? 'border-blue-400 bg-blue-400/10'
                        : 'border-slate-600 hover:border-slate-500'
                    }`}
                    onClick={() => setActiveCamera(activeCamera === camera.id ? null : camera.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium text-sm">{camera.name}</span>
                      <Badge variant={camera.status === 'online' ? 'default' : 'destructive'} className="text-xs">
                        {camera.status === 'online' ? 'Online' : 'Offline'}
                      </Badge>
                    </div>
                    {camera.alerts > 0 && (
                      <div className="flex items-center text-orange-400 text-xs">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        {camera.alerts} cảnh báo
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-4 border-t border-slate-700">
                  <h3 className="text-white font-medium mb-2">Hướng dẫn</h3>
                  <ul className="text-xs text-slate-400 space-y-1">
                    <li>• Nhấp vào camera để xem chi tiết</li>
                    <li>• Màu xanh: Camera hoạt động</li>
                    <li>• Màu đỏ: Camera ngoại tuyến</li>
                    <li>• Số đỏ: Cảnh báo cần xử lý</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapExplorer;
