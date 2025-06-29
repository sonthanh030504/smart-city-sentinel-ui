
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  Video, 
  Car, 
  Bike, 
  AlertTriangle, 
  Filter,
  MapPin,
  Clock,
  Eye
} from "lucide-react";
import AdminLayout from "@/components/AdminLayout";

// Simulated data types
interface Camera {
  id: string;
  name: string;
  lat: number;
  lng: number;
  status: 'online' | 'warning' | 'offline';
}

interface Vehicle {
  id: string;
  type: 'car' | 'bike' | 'truck' | 'bus';
  licensePlate: string;
  lat: number;
  lng: number;
  detectedAt: Date;
  cameraId: string;
  image?: string;
}

interface Alert {
  id: string;
  type: 'speed' | 'blacklist' | 'traffic' | 'security';
  severity: 'high' | 'medium' | 'low';
  lat: number;
  lng: number;
  message: string;
  time: Date;
  cameraId: string;
}

const LiveMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedObject, setSelectedObject] = useState<any>(null);
  const [filters, setFilters] = useState({
    cars: true,
    bikes: true,
    trucks: true,
    buses: true,
    highAlerts: true,
    mediumAlerts: true,
    lowAlerts: true,
    heatmap: false
  });

  // Simulated data
  const [cameras] = useState<Camera[]>([
    { id: 'CAM_01', name: 'CAM_01_NGUYENTRAI', lat: 10.7769, lng: 106.7009, status: 'online' },
    { id: 'CAM_02', name: 'CAM_02_LELELOI', lat: 10.7751, lng: 106.7048, status: 'online' },
    { id: 'CAM_03', name: 'CAM_03_CAULONG', lat: 10.7778, lng: 106.6947, status: 'warning' },
    { id: 'CAM_04', name: 'CAM_04_BENXETT', lat: 10.7734, lng: 106.7081, status: 'offline' },
    { id: 'CAM_05', name: 'CAM_05_BITEXCO', lat: 10.7722, lng: 106.7040, status: 'online' },
  ]);

  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [liveEvents, setLiveEvents] = useState<any[]>([]);

  // Simulate real-time vehicle detection
  useEffect(() => {
    const generateVehicle = (): Vehicle => {
      const camera = cameras[Math.floor(Math.random() * cameras.length)];
      const types: Vehicle['type'][] = ['car', 'bike', 'truck', 'bus'];
      const licensePlates = ['51G123.45', '59A456.78', '43B789.01', '50F234.56', '29H567.89'];
      
      return {
        id: `VEH_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        type: types[Math.floor(Math.random() * types.length)],
        licensePlate: licensePlates[Math.floor(Math.random() * licensePlates.length)],
        lat: camera.lat + (Math.random() - 0.5) * 0.002,
        lng: camera.lng + (Math.random() - 0.5) * 0.002,
        detectedAt: new Date(),
        cameraId: camera.id
      };
    };

    const generateAlert = (): Alert => {
      const camera = cameras[Math.floor(Math.random() * cameras.length)];
      const types: Alert['type'][] = ['speed', 'blacklist', 'traffic', 'security'];
      const severities: Alert['severity'][] = ['high', 'medium', 'low'];
      const messages = [
        'Phát hiện xe vượt tốc độ',
        'Xe trong danh sách đen',
        'Ùn tắc giao thông',
        'Sự cố an ninh'
      ];
      
      return {
        id: `ALERT_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        type: types[Math.floor(Math.random() * types.length)],
        severity: severities[Math.floor(Math.random() * severities.length)],
        lat: camera.lat,
        lng: camera.lng,
        message: messages[Math.floor(Math.random() * messages.length)],
        time: new Date(),
        cameraId: camera.id
      };
    };

    // Generate initial data
    const initialVehicles = Array.from({ length: 8 }, generateVehicle);
    const initialAlerts = Array.from({ length: 3 }, generateAlert);
    
    setVehicles(initialVehicles);
    setAlerts(initialAlerts);
    setLiveEvents([...initialVehicles, ...initialAlerts].sort((a, b) => 
      new Date(b.detectedAt || b.time).getTime() - new Date(a.detectedAt || a.time).getTime()
    ));

    // Simulate real-time updates
    const interval = setInterval(() => {
      // Add new vehicle
      if (Math.random() > 0.3) {
        const newVehicle = generateVehicle();
        setVehicles(prev => {
          const updated = [newVehicle, ...prev.slice(0, 15)]; // Keep only recent 15 vehicles
          return updated;
        });
        
        setLiveEvents(prev => [newVehicle, ...prev.slice(0, 19)]);
      }

      // Occasionally add alert
      if (Math.random() > 0.8) {
        const newAlert = generateAlert();
        setAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
        setLiveEvents(prev => [newAlert, ...prev.slice(0, 19)]);
      }

      // Remove old vehicles (simulate 2-minute visibility)
      setVehicles(prev => prev.filter(v => 
        Date.now() - v.detectedAt.getTime() < 2 * 60 * 1000
      ));
    }, 3000);

    return () => clearInterval(interval);
  }, [cameras]);

  const getStatusColor = (status: Camera['status']) => {
    switch (status) {
      case 'online': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'offline': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getSeverityColor = (severity: Alert['severity']) => {
    switch (severity) {
      case 'high': return 'text-red-400 bg-red-400/10';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10';
      case 'low': return 'text-blue-400 bg-blue-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  const getVehicleIcon = (type: Vehicle['type']) => {
    switch (type) {
      case 'car': return Car;
      case 'bike': return Bike;
      case 'truck': return Car;
      case 'bus': return Car;
      default: return Car;
    }
  };

  return (
    <AdminLayout>
      <div className="h-screen flex flex-col">
        {/* Header with Filters */}
        <div className="p-4 bg-slate-800/50 border-b border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-white">Bản đồ Giám sát Thời gian thực</h1>
            <div className="flex items-center space-x-4">
              <Switch
                id="heatmap"
                checked={filters.heatmap}
                onCheckedChange={(checked) => setFilters(prev => ({ ...prev, heatmap: checked }))}
              />
              <Label htmlFor="heatmap" className="text-white">Bản đồ nhiệt</Label>
            </div>
          </div>
          
          {/* Filter Controls */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-slate-400" />
              <span className="text-slate-400 text-sm">Lọc phương tiện:</span>
            </div>
            {[
              { key: 'cars', label: 'Ô tô' },
              { key: 'bikes', label: 'Xe máy' },
              { key: 'trucks', label: 'Xe tải' },
              { key: 'buses', label: 'Xe buýt' }
            ].map(({ key, label }) => (
              <label key={key} className="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  checked={filters[key as keyof typeof filters] as boolean}
                  onChange={(e) => setFilters(prev => ({ ...prev, [key]: e.target.checked }))}
                  className="rounded border-slate-600"
                />
                <span className="text-slate-300">{label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex">
          {/* Map Area */}
          <div className="flex-1 relative">
            <div 
              ref={mapRef}
              className="w-full h-full bg-slate-900 relative overflow-hidden"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23334155" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
              }}
            >
              {/* Simulated Map Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 opacity-90" />
              
              {/* Simulated Map Elements */}
              <div className="absolute inset-0 p-8">
                {/* Title */}
                <div className="text-center mb-8">
                  <h2 className="text-xl text-white mb-2">Khu vực Quận 1 - TP.HCM</h2>
                  <p className="text-slate-400 text-sm">Bản đồ mô phỏng - Dữ liệu thời gian thực</p>
                </div>

                {/* Cameras Grid */}
                <div className="grid grid-cols-5 gap-8 max-w-4xl mx-auto">
                  {cameras.map((camera, index) => (
                    <div
                      key={camera.id}
                      className="relative cursor-pointer group"
                      onClick={() => setSelectedObject({ type: 'camera', data: camera })}
                    >
                      <div className={`p-4 rounded-lg border ${
                        camera.status === 'online' ? 'border-green-400/30 bg-green-400/10' :
                        camera.status === 'warning' ? 'border-yellow-400/30 bg-yellow-400/10' :
                        'border-red-400/30 bg-red-400/10'
                      } group-hover:scale-110 transition-transform`}>
                        <Video className={`h-6 w-6 mx-auto mb-2 ${getStatusColor(camera.status)}`} />
                        <div className="text-xs text-center text-white">{camera.name}</div>
                      </div>

                      {/* Vehicles near camera */}
                      {vehicles
                        .filter(v => v.cameraId === camera.id)
                        .slice(0, 2)
                        .map((vehicle, vIndex) => {
                          const VehicleIcon = getVehicleIcon(vehicle.type);
                          return (
                            <div
                              key={vehicle.id}
                              className={`absolute cursor-pointer`}
                              style={{
                                top: `${20 + vIndex * 15}px`,
                                left: `${60 + vIndex * 15}px`
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedObject({ type: 'vehicle', data: vehicle });
                              }}
                            >
                              <VehicleIcon className="h-4 w-4 text-blue-400 animate-pulse" />
                            </div>
                          );
                        })}

                      {/* Alerts near camera */}
                      {alerts
                        .filter(a => a.cameraId === camera.id)
                        .slice(0, 1)
                        .map(alert => (
                          <div
                            key={alert.id}
                            className="absolute -top-2 -right-2 cursor-pointer animate-bounce"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedObject({ type: 'alert', data: alert });
                            }}
                          >
                            <AlertTriangle className="h-5 w-5 text-red-400" />
                          </div>
                        ))}
                    </div>
                  ))}
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-4 left-4 flex space-x-4">
                  <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 border border-slate-600">
                    <div className="text-green-400 font-bold text-lg">{cameras.filter(c => c.status === 'online').length}</div>
                    <div className="text-xs text-slate-400">Camera hoạt động</div>
                  </div>
                  <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 border border-slate-600">
                    <div className="text-blue-400 font-bold text-lg">{vehicles.length}</div>
                    <div className="text-xs text-slate-400">Phương tiện</div>
                  </div>
                  <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 border border-slate-600">
                    <div className="text-red-400 font-bold text-lg">{alerts.filter(a => a.severity === 'high').length}</div>
                    <div className="text-xs text-slate-400">Cảnh báo cao</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 bg-slate-800/50 border-l border-slate-700 flex flex-col">
            {selectedObject ? (
              <div className="p-4 border-b border-slate-700">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-white font-semibold">Chi tiết</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedObject(null)}
                    className="text-slate-400 hover:text-white"
                  >
                    ×
                  </Button>
                </div>
                
                {selectedObject.type === 'camera' && (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Video className={`h-5 w-5 ${getStatusColor(selectedObject.data.status)}`} />
                      <span className="text-white font-medium">{selectedObject.data.name}</span>
                    </div>
                    <div className="text-sm text-slate-400">
                      Trạng thái: <span className={getStatusColor(selectedObject.data.status)}>
                        {selectedObject.data.status === 'online' ? 'Hoạt động' :
                         selectedObject.data.status === 'warning' ? 'Cảnh báo' : 'Offline'}
                      </span>
                    </div>
                    <div className="text-sm text-slate-400">
                      Vị trí: {selectedObject.data.lat.toFixed(4)}, {selectedObject.data.lng.toFixed(4)}
                    </div>
                  </div>
                )}

                {selectedObject.type === 'vehicle' && (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      {(() => {
                        const Icon = getVehicleIcon(selectedObject.data.type);
                        return <Icon className="h-5 w-5 text-blue-400" />;
                      })()}
                      <span className="text-white font-medium">{selectedObject.data.licensePlate}</span>
                    </div>
                    <div className="text-sm text-slate-400">
                      Loại: {selectedObject.data.type === 'car' ? 'Ô tô' : 
                            selectedObject.data.type === 'bike' ? 'Xe máy' :
                            selectedObject.data.type === 'truck' ? 'Xe tải' : 'Xe buýt'}
                    </div>
                    <div className="text-sm text-slate-400">
                      Phát hiện: {selectedObject.data.detectedAt.toLocaleTimeString('vi-VN')}
                    </div>
                    <div className="text-sm text-slate-400">
                      Camera: {selectedObject.data.cameraId}
                    </div>
                  </div>
                )}

                {selectedObject.type === 'alert' && (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="h-5 w-5 text-red-400" />
                      <span className="text-white font-medium">Cảnh báo</span>
                    </div>
                    <div className={`text-sm px-2 py-1 rounded ${getSeverityColor(selectedObject.data.severity)}`}>
                      Mức độ: {selectedObject.data.severity === 'high' ? 'Cao' :
                              selectedObject.data.severity === 'medium' ? 'Trung bình' : 'Thấp'}
                    </div>
                    <div className="text-sm text-slate-400">
                      {selectedObject.data.message}
                    </div>
                    <div className="text-sm text-slate-400">
                      Thời gian: {selectedObject.data.time.toLocaleTimeString('vi-VN')}
                    </div>
                    <Button 
                      size="sm" 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      onClick={() => console.log('Navigate to investigation')}
                    >
                      Bắt đầu Truy vết
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-4 border-b border-slate-700">
                <h3 className="text-white font-semibold mb-4">Sự kiện Thời gian thực</h3>
              </div>
            )}

            {/* Live Events Feed */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {liveEvents.slice(0, 10).map((event, index) => (
                <div
                  key={event.id}
                  className="bg-slate-700/50 rounded-lg p-3 border border-slate-600 cursor-pointer hover:bg-slate-700/70 transition-colors"
                  onClick={() => {
                    const type = 'licensePlate' in event ? 'vehicle' : 'alert';
                    setSelectedObject({ type, data: event });
                  }}
                >
                  <div className="flex items-center space-x-3">
                    {('licensePlate' in event) ? (
                      (() => {
                        const Icon = getVehicleIcon(event.type);
                        return <Icon className="h-4 w-4 text-blue-400" />;
                      })()
                    ) : (
                      <AlertTriangle className="h-4 w-4 text-red-400" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-white truncate">
                        {'licensePlate' in event ? event.licensePlate : event.message}
                      </div>
                      <div className="text-xs text-slate-400 flex items-center space-x-2">
                        <Clock className="h-3 w-3" />
                        <span>
                          {(event.detectedAt || event.time).toLocaleTimeString('vi-VN')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default LiveMap;
