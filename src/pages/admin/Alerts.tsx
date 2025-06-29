
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  AlertTriangle, 
  Clock, 
  MapPin, 
  Eye,
  Play,
  CheckCircle,
  X
} from "lucide-react";
import AdminLayout from "@/components/AdminLayout";
import { useNavigate } from "react-router-dom";

interface Alert {
  id: string;
  type: "blacklist" | "suspicious" | "accomplice";
  priority: "high" | "medium" | "low";
  status: "new" | "processing" | "resolved";
  time: Date;
  licensePlate: string;
  location: string;
  description: string;
  details: string;
  cameraId: string;
  imageUrl?: string;
}

// Mock alert data
const mockAlerts: Alert[] = [
  {
    id: "1",
    type: "blacklist",
    priority: "high",
    status: "new",
    time: new Date("2024-01-15T08:30:00"),
    licensePlate: "51G-123.45",
    location: "Ngã tư Nguyễn Huệ - Đồng Khởi",
    description: "Xe trong danh sách đen",
    details: "Phát hiện xe 51G-123.45 trong danh sách đen tại camera C001",
    cameraId: "C001",
    imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d0d80?w=200&h=150&fit=crop"
  },
  {
    id: "2",
    type: "suspicious",
    priority: "medium",
    status: "processing",
    time: new Date("2024-01-15T09:15:00"),
    licensePlate: "50A-987.65",
    location: "Đường Lê Lợi",
    description: "Hành vi bất thường",
    details: "Xe di chuyển với tốc độ bất thường, dừng đỗ nhiều lần",
    cameraId: "C005"
  },
  {
    id: "3",
    type: "accomplice",
    priority: "high",
    status: "new",
    time: new Date("2024-01-15T10:45:00"),
    licensePlate: "43B-456.78",
    location: "Cầu Sài Gòn",
    description: "Phát hiện đồng bọn",
    details: "Xe này đi cùng với xe trong danh sách đen trong 30 phút",
    cameraId: "C012"
  }
];

const Alerts = () => {
  const [alerts, setAlerts] = useState<Alert[]>(mockAlerts);
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);
  const [selectedAlerts, setSelectedAlerts] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const navigate = useNavigate();

  const filteredAlerts = alerts.filter(alert => {
    const matchesSearch = alert.licensePlate.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alert.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || alert.status === statusFilter;
    const matchesPriority = priorityFilter === "all" || alert.priority === priorityFilter;
    const matchesType = typeFilter === "all" || alert.type === typeFilter;
    
    return matchesSearch && matchesStatus && matchesPriority && matchesType;
  });

  const handleSelectAlert = (alertId: string) => {
    setSelectedAlerts(prev => 
      prev.includes(alertId) 
        ? prev.filter(id => id !== alertId)
        : [...prev, alertId]
    );
  };

  const handleStartInvestigation = (licensePlate: string) => {
    navigate(`/admin/investigation?plate=${licensePlate}`);
  };

  const handleUpdateStatus = (alertId: string, newStatus: Alert['status']) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === alertId ? { ...alert, status: newStatus } : alert
    ));
  };

  const handleBulkAction = (action: string) => {
    console.log(`Bulk action: ${action} for alerts:`, selectedAlerts);
    setSelectedAlerts([]);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-400 border-red-500/50';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'low': return 'bg-green-500/20 text-green-400 border-green-500/50';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500/20 text-blue-400';
      case 'processing': return 'bg-orange-500/20 text-orange-400';
      case 'resolved': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blacklist': return 'Danh sách đen';
      case 'suspicious': return 'Hành vi bất thường';
      case 'accomplice': return 'Phát hiện đồng bọn';
      default: return type;
    }
  };

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Quản lý Cảnh báo</h1>
          <div className="flex space-x-2">
            {selectedAlerts.length > 0 && (
              <>
                <Button 
                  onClick={() => handleBulkAction('mark-read')}
                  variant="outline" 
                  className="border-slate-600 text-slate-300"
                >
                  Đánh dấu đã đọc ({selectedAlerts.length})
                </Button>
                <Button 
                  onClick={() => handleBulkAction('close')}
                  variant="outline" 
                  className="border-slate-600 text-slate-300"
                >
                  Đóng hàng loạt
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Filters */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Bộ lọc & Tìm kiếm
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-slate-300">Tìm kiếm</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder="Biển số hoặc từ khóa..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-slate-700 border-slate-600 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-300">Trạng thái</label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả</SelectItem>
                    <SelectItem value="new">Mới</SelectItem>
                    <SelectItem value="processing">Đang xử lý</SelectItem>
                    <SelectItem value="resolved">Đã xử lý</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-300">Mức độ ưu tiên</label>
                <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả</SelectItem>
                    <SelectItem value="high">Cao</SelectItem>
                    <SelectItem value="medium">Trung bình</SelectItem>
                    <SelectItem value="low">Thấp</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-300">Loại cảnh báo</label>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả</SelectItem>
                    <SelectItem value="blacklist">Danh sách đen</SelectItem>
                    <SelectItem value="suspicious">Hành vi bất thường</SelectItem>
                    <SelectItem value="accomplice">Phát hiện đồng bọn</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alerts Table */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">
                  Danh sách Cảnh báo ({filteredAlerts.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {filteredAlerts.map((alert) => (
                    <div
                      key={alert.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${
                        alert.priority === 'high' 
                          ? 'bg-red-500/10 border-red-500/30 hover:bg-red-500/20' 
                          : alert.priority === 'medium'
                          ? 'bg-yellow-500/10 border-yellow-500/30 hover:bg-yellow-500/20'
                          : 'bg-slate-700/50 border-slate-600 hover:bg-slate-700'
                      } ${selectedAlert?.id === alert.id ? 'ring-2 ring-blue-500' : ''}`}
                      onClick={() => setSelectedAlert(alert)}
                    >
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          checked={selectedAlerts.includes(alert.id)}
                          onCheckedChange={() => handleSelectAlert(alert.id)}
                          onClick={(e) => e.stopPropagation()}
                        />
                        
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Badge className={getPriorityColor(alert.priority)}>
                                {alert.priority === 'high' ? 'Cao' : 
                                 alert.priority === 'medium' ? 'Trung bình' : 'Thấp'}
                              </Badge>
                              <Badge className={getStatusColor(alert.status)}>
                                {alert.status === 'new' ? 'Mới' :
                                 alert.status === 'processing' ? 'Đang xử lý' : 'Đã xử lý'}
                              </Badge>
                            </div>
                            <div className="flex items-center text-xs text-slate-400">
                              <Clock className="h-3 w-3 mr-1" />
                              {alert.time.toLocaleTimeString('vi-VN')}
                            </div>
                          </div>
                          
                          <div>
                            <div className="font-medium text-white">{getTypeLabel(alert.type)}</div>
                            <div className="text-sm text-slate-300">{alert.description}</div>
                            <div className="text-xs text-slate-400 flex items-center mt-1">
                              <MapPin className="h-3 w-3 mr-1" />
                              {alert.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alert Detail Panel */}
          <div className="lg:col-span-1">
            {selectedAlert ? (
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Chi tiết Cảnh báo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedAlert.imageUrl && (
                    <div>
                      <img 
                        src={selectedAlert.imageUrl} 
                        alt="Alert snapshot"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                  )}
                  
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-slate-400">Biển số xe</label>
                      <div className="text-white font-mono text-lg">{selectedAlert.licensePlate}</div>
                    </div>
                    
                    <div>
                      <label className="text-xs text-slate-400">Vị trí</label>
                      <div className="text-slate-300">{selectedAlert.location}</div>
                    </div>
                    
                    <div>
                      <label className="text-xs text-slate-400">Camera</label>
                      <div className="text-slate-300">{selectedAlert.cameraId}</div>
                    </div>
                    
                    <div>
                      <label className="text-xs text-slate-400">Chi tiết</label>
                      <div className="text-slate-300 text-sm">{selectedAlert.details}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 pt-4 border-t border-slate-700">
                    <Button 
                      onClick={() => handleStartInvestigation(selectedAlert.licensePlate)}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Bắt đầu Truy vết
                    </Button>
                    
                    {selectedAlert.status === 'new' && (
                      <Button 
                        onClick={() => handleUpdateStatus(selectedAlert.id, 'processing')}
                        variant="outline" 
                        className="w-full border-orange-500 text-orange-400 hover:bg-orange-500/20"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Đánh dấu Đang xử lý
                      </Button>
                    )}
                    
                    <Button 
                      onClick={() => handleUpdateStatus(selectedAlert.id, 'resolved')}
                      variant="outline" 
                      className="w-full border-green-500 text-green-400 hover:bg-green-500/20"
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Đóng cảnh báo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="flex items-center justify-center h-64">
                  <div className="text-center text-slate-400">
                    <AlertTriangle className="h-12 w-12 mx-auto mb-2" />
                    <p>Chọn một cảnh báo để xem chi tiết</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Alerts;
