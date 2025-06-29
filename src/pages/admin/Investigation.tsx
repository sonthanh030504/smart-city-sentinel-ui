
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Search, 
  Car, 
  Bike, 
  MapPin, 
  Clock, 
  Eye,
  Link as LinkIcon,
  FileText,
  Filter
} from "lucide-react";
import AdminLayout from "@/components/AdminLayout";

// Simulated data types
interface VehicleRecord {
  id: string;
  licensePlate: string;
  type: 'car' | 'bike' | 'truck' | 'bus';
  color: string;
  brand: string;
  detections: Detection[];
}

interface Detection {
  id: string;
  timestamp: Date;
  cameraId: string;
  cameraName: string;
  location: string;
  image: string;
  confidence: number;
}

const Investigation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<VehicleRecord[]>([]);
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleRecord | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  // Simulated database
  const [database] = useState<VehicleRecord[]>([
    {
      id: 'VEH001',
      licensePlate: '51G-123.45',
      type: 'car',
      color: 'Đỏ',
      brand: 'Toyota Vios',
      detections: [
        {
          id: 'DET001',
          timestamp: new Date('2024-06-29T08:30:00'),
          cameraId: 'CAM_01',
          cameraName: 'CAM_01_NGUYENTRAI',
          location: 'Ngã tư Nguyễn Trãi - Cầu Kho',
          image: '/placeholder-car.jpg',
          confidence: 0.95
        },
        {
          id: 'DET002',
          timestamp: new Date('2024-06-29T08:45:00'),
          cameraId: 'CAM_02',
          cameraName: 'CAM_02_LELELOI',
          location: 'Đường Lê Lợi gần Nhà hát',
          image: '/placeholder-car.jpg',
          confidence: 0.92
        },
        {
          id: 'DET003',
          timestamp: new Date('2024-06-29T09:15:00'),
          cameraId: 'CAM_05',
          cameraName: 'CAM_05_BITEXCO',
          location: 'Bitexco Financial Tower',
          image: '/placeholder-car.jpg',
          confidence: 0.88
        }
      ]
    },
    {
      id: 'VEH002',
      licensePlate: '59A-456.78',
      type: 'bike',
      color: 'Xanh',
      brand: 'Honda Wave',
      detections: [
        {
          id: 'DET004',
          timestamp: new Date('2024-06-29T07:20:00'),
          cameraId: 'CAM_03',
          cameraName: 'CAM_03_CAULONG',
          location: 'Cầu Long Biên',
          image: '/placeholder-bike.jpg',
          confidence: 0.87
        },
        {
          id: 'DET005',
          timestamp: new Date('2024-06-29T07:35:00'),
          cameraId: 'CAM_04',
          cameraName: 'CAM_04_BENXETT',
          location: 'Bến xe Trung tâm',
          image: '/placeholder-bike.jpg',
          confidence: 0.91
        }
      ]
    },
    {
      id: 'VEH003',
      licensePlate: '43B-789.01',
      type: 'truck',
      color: 'Trắng',
      brand: 'Hyundai Porter',
      detections: [
        {
          id: 'DET006',
          timestamp: new Date('2024-06-29T06:00:00'),
          cameraId: 'CAM_01',
          cameraName: 'CAM_01_NGUYENTRAI',
          location: 'Ngã tư Nguyễn Trãi - Cầu Kho',
          image: '/placeholder-truck.jpg',
          confidence: 0.94
        },
        {
          id: 'DET007',
          timestamp: new Date('2024-06-29T06:30:00'),
          cameraId: 'CAM_02',
          cameraName: 'CAM_02_LELELOI',
          location: 'Đường Lê Lợi gần Nhà hát',
          image: '/placeholder-truck.jpg',
          confidence: 0.89
        },
        {
          id: 'DET008',
          timestamp: new Date('2024-06-29T07:00:00'),
          cameraId: 'CAM_03',
          cameraName: 'CAM_03_CAULONG',
          location: 'Cầu Long Biên',
          image: '/placeholder-truck.jpg',
          confidence: 0.93
        }
      ]
    }
  ]);

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const results = database.filter(vehicle => 
        vehicle.licensePlate.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.color.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      setSearchResults(results);
      setIsLoading(false);
    }, 800);
  };

  const handleVehicleSelect = (vehicle: VehicleRecord) => {
    setSelectedVehicle(vehicle);
  };

  const getVehicleIcon = (type: string) => {
    switch (type) {
      case 'car': return Car;
      case 'bike': return Bike;
      case 'truck': return Car;
      case 'bus': return Car;
      default: return Car;
    }
  };

  const getVehicleTypeLabel = (type: string) => {
    switch (type) {
      case 'car': return 'Ô tô';
      case 'bike': return 'Xe máy';
      case 'truck': return 'Xe tải';
      case 'bus': return 'Xe buýt';
      default: return 'Xe';
    }
  };

  return (
    <AdminLayout>
      <div className="h-screen flex flex-col">
        {/* Header */}
        <div className="p-6 bg-slate-800/50 border-b border-slate-700">
          <h1 className="text-3xl font-bold text-white mb-4">Điều tra & Truy vết</h1>
          
          {/* Search Section */}
          <div className="space-y-4">
            <div className="flex space-x-4">
              <div className="flex-1">
                <Input
                  placeholder="Nhập biển số xe, màu sắc, hãng xe hoặc mô tả bằng ngôn ngữ tự nhiên..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                />
              </div>
              <Button onClick={handleSearch} disabled={isLoading} className="bg-blue-600 hover:bg-blue-700">
                <Search className="h-4 w-4 mr-2" />
                {isLoading ? 'Đang tìm...' : 'Tìm kiếm'}
              </Button>
              <Button 
                variant="outline"
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                className="border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                <Filter className="h-4 w-4 mr-2" />
                Bộ lọc Nâng cao
              </Button>
            </div>

            {/* Advanced Filters */}
            {showAdvancedFilters && (
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-4">
                  <div className="grid grid-cols-4 gap-4">
                    <div>
                      <Label className="text-slate-300">Từ ngày</Label>
                      <Input type="datetime-local" className="bg-slate-700 border-slate-600 text-white" />
                    </div>
                    <div>
                      <Label className="text-slate-300">Đến ngày</Label>
                      <Input type="datetime-local" className="bg-slate-700 border-slate-600 text-white" />
                    </div>
                    <div>
                      <Label className="text-slate-300">Loại xe</Label>
                      <select className="w-full p-2 bg-slate-700 border border-slate-600 rounded text-white">
                        <option value="">Tất cả</option>
                        <option value="car">Ô tô</option>
                        <option value="bike">Xe máy</option>
                        <option value="truck">Xe tải</option>
                        <option value="bus">Xe buýt</option>
                      </select>
                    </div>
                    <div>
                      <Label className="text-slate-300">Camera</Label>
                      <select className="w-full p-2 bg-slate-700 border border-slate-600 rounded text-white">
                        <option value="">Tất cả camera</option>
                        <option value="CAM_01">CAM_01_NGUYENTRAI</option>
                        <option value="CAM_02">CAM_02_LELELOI</option>
                        <option value="CAM_03">CAM_03_CAULONG</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex">
          {/* Search Results */}
          <div className="w-80 bg-slate-800/50 border-r border-slate-700 flex flex-col">
            <div className="p-4 border-b border-slate-700">
              <h3 className="text-white font-semibold">
                Kết quả tìm kiếm {searchResults.length > 0 && `(${searchResults.length})`}
              </h3>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {searchResults.map(vehicle => {
                const VehicleIcon = getVehicleIcon(vehicle.type);
                return (
                  <div
                    key={vehicle.id}
                    className={`bg-slate-700/50 rounded-lg p-4 border cursor-pointer transition-colors ${
                      selectedVehicle?.id === vehicle.id 
                        ? 'border-blue-400 bg-blue-400/10' 
                        : 'border-slate-600 hover:bg-slate-700/70'
                    }`}
                    onClick={() => handleVehicleSelect(vehicle)}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <VehicleIcon className="h-5 w-5 text-blue-400" />
                      <span className="text-white font-medium">{vehicle.licensePlate}</span>
                    </div>
                    <div className="text-sm text-slate-400 space-y-1">
                      <div>{vehicle.brand} - {vehicle.color}</div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{vehicle.detections.length} lần phát hiện</span>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {searchResults.length === 0 && searchTerm && !isLoading && (
                <div className="text-center text-slate-400 py-8">
                  <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>Không tìm thấy kết quả</p>
                </div>
              )}
            </div>
          </div>

          {/* Vehicle Journey Map and Timeline */}
          <div className="flex-1 flex flex-col">
            {selectedVehicle ? (
              <>
                {/* Journey Map */}
                <div className="flex-1 bg-slate-900 relative">
                  <div className="absolute inset-0 p-6">
                    <h3 className="text-white font-semibold mb-4">
                      Hành trình của {selectedVehicle.licensePlate}
                    </h3>
                    
                    {/* Simulated Journey Map */}
                    <div className="bg-slate-800 rounded-lg p-6 h-80 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800" />
                      
                      {/* Journey Path Visualization */}
                      <div className="relative h-full flex items-center justify-center">
                        <div className="grid grid-cols-3 gap-8 max-w-lg">
                          {selectedVehicle.detections.map((detection, index) => (
                            <div key={detection.id} className="text-center">
                              <div className="relative">
                                <div className={`w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold mb-2 mx-auto cursor-pointer hover:bg-blue-500 transition-colors`}>
                                  {index + 1}
                                </div>
                                {index < selectedVehicle.detections.length - 1 && (
                                  <div className="absolute top-4 left-8 w-8 h-0.5 bg-blue-400"></div>
                                )}
                              </div>
                              <div className="text-xs text-slate-400">
                                {detection.timestamp.toLocaleTimeString('vi-VN', { 
                                  hour: '2-digit', 
                                  minute: '2-digit' 
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="h-80 bg-slate-800/50 border-t border-slate-700 overflow-y-auto">
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-4">Dòng thời gian Sự kiện</h3>
                    
                    <div className="space-y-4">
                      {selectedVehicle.detections.map((detection, index) => (
                        <Card key={detection.id} className="bg-slate-700/50 border-slate-600">
                          <CardContent className="p-4">
                            <div className="flex space-x-4">
                              <div className="flex-shrink-0">
                                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
                                  {index + 1}
                                </div>
                              </div>
                              
                              <div className="flex-1">
                                <div className="flex justify-between items-start mb-2">
                                  <div>
                                    <div className="text-white font-medium mb-1">
                                      {detection.cameraName}
                                    </div>
                                    <div className="text-sm text-slate-400 flex items-center space-x-2">
                                      <MapPin className="h-3 w-3" />
                                      <span>{detection.location}</span>
                                    </div>
                                  </div>
                                  <div className="text-sm text-slate-400 flex items-center space-x-1">
                                    <Clock className="h-3 w-3" />
                                    <span>{detection.timestamp.toLocaleString('vi-VN')}</span>
                                  </div>
                                </div>
                                
                                <div className="flex justify-between items-center">
                                  <div className="text-sm text-slate-400">
                                    Độ chính xác: {(detection.confidence * 100).toFixed(1)}%
                                  </div>
                                  
                                  <div className="flex space-x-2">
                                    <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                                      <LinkIcon className="h-3 w-3 mr-1" />
                                      Phân tích Quan hệ
                                    </Button>
                                    <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                                      <FileText className="h-3 w-3 mr-1" />
                                      Tạo Báo cáo
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center bg-slate-900">
                <div className="text-center text-slate-400">
                  <Search className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <h3 className="text-xl mb-2">Bắt đầu điều tra</h3>
                  <p>Nhập thông tin tìm kiếm và chọn phương tiện để xem hành trình chi tiết</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Investigation;
