
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Users, 
  Camera, 
  Shield, 
  Plus, 
  Search, 
  Edit, 
  Trash2,
  MoreHorizontal,
  MapPin,
  Key
} from "lucide-react";

const Management = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  // Mock data
  const users = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      username: "admin1",
      role: "Admin",
      status: "Hoạt động",
      createdAt: "2024-01-15",
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Trần Thị B",
      username: "operator1",
      role: "Operator",
      status: "Hoạt động",
      createdAt: "2024-02-20",
      avatar: "/placeholder.svg"
    }
  ];

  const cameras = [
    {
      id: "CAM_01",
      name: "Ngã tư Thủ Đức",
      location: "Đường Võ Văn Ngân, Thủ Đức",
      status: "Hoạt động",
      installedAt: "2024-01-10",
      coordinates: "10.8505, 106.7717"
    },
    {
      id: "CAM_02", 
      name: "Cầu Sài Gòn",
      location: "Quốc lộ 1A, Quận 12",
      status: "Bảo trì",
      installedAt: "2024-01-05",
      coordinates: "10.8231, 106.6297"
    }
  ];

  const blacklists = [
    {
      id: 1,
      licensePlate: "59A-12345",
      priority: "Cao",
      reason: "Xe tội phạm hình sự",
      addedBy: "Admin",
      addedAt: "2024-03-01"
    },
    {
      id: 2,
      licensePlate: "51G-67890",
      priority: "Trung bình", 
      reason: "Xe nghi vấn",
      addedBy: "Operator1",
      addedAt: "2024-03-05"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Cao": return "bg-red-500";
      case "Trung bình": return "bg-yellow-500";
      case "Thấp": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Hoạt động": return "bg-green-500";
      case "Bảo trì": return "bg-yellow-500";
      case "Không hoạt động": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">Quản lý Hệ thống</h1>
          <p className="text-slate-400">Cấu hình và quản lý các thành phần cốt lõi của hệ thống</p>
        </div>

        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800 border-slate-700">
            <TabsTrigger value="users" className="data-[state=active]:bg-blue-600">
              <Users className="h-4 w-4 mr-2" />
              Quản lý Người dùng
            </TabsTrigger>
            <TabsTrigger value="cameras" className="data-[state=active]:bg-blue-600">
              <Camera className="h-4 w-4 mr-2" />
              Quản lý Camera
            </TabsTrigger>
            <TabsTrigger value="blacklists" className="data-[state=active]:bg-blue-600">
              <Shield className="h-4 w-4 mr-2" />
              Danh sách Theo dõi
            </TabsTrigger>
          </TabsList>

          {/* Users Management */}
          <TabsContent value="users" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-white">Danh sách Người dùng</CardTitle>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Thêm Người dùng
                  </Button>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      placeholder="Tìm kiếm người dùng..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-slate-700">
                      <TableHead className="text-slate-300">Người dùng</TableHead>
                      <TableHead className="text-slate-300">Tên đăng nhập</TableHead>
                      <TableHead className="text-slate-300">Vai trò</TableHead>
                      <TableHead className="text-slate-300">Trạng thái</TableHead>
                      <TableHead className="text-slate-300">Ngày tạo</TableHead>
                      <TableHead className="text-slate-300">Hành động</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id} className="border-slate-700">
                        <TableCell className="text-white">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                              <span className="text-xs font-medium">{user.name.charAt(0)}</span>
                            </div>
                            <span>{user.name}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-slate-300">{user.username}</TableCell>
                        <TableCell>
                          <Badge variant={user.role === "Admin" ? "default" : "secondary"}>
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-slate-300">{user.status}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-slate-300">{user.createdAt}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Cameras Management */}
          <TabsContent value="cameras" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-white">Danh sách Camera</CardTitle>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Thêm Camera
                  </Button>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      placeholder="Tìm kiếm camera..."
                      className="pl-10 bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-slate-700">
                      <TableHead className="text-slate-300">ID Camera</TableHead>
                      <TableHead className="text-slate-300">Tên Camera</TableHead>
                      <TableHead className="text-slate-300">Vị trí</TableHead>
                      <TableHead className="text-slate-300">Trạng thái</TableHead>
                      <TableHead className="text-slate-300">Ngày lắp đặt</TableHead>
                      <TableHead className="text-slate-300">Hành động</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cameras.map((camera) => (
                      <TableRow key={camera.id} className="border-slate-700">
                        <TableCell className="text-white font-mono">{camera.id}</TableCell>
                        <TableCell className="text-white">{camera.name}</TableCell>
                        <TableCell className="text-slate-300">{camera.location}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full ${getStatusColor(camera.status)}`}></div>
                            <span className="text-slate-300">{camera.status}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-slate-300">{camera.installedAt}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                              <MapPin className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-red-400">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Blacklists Management */}
          <TabsContent value="blacklists" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Danh sách Theo dõi</CardTitle>
                <div className="flex items-center space-x-2 mt-4">
                  <Input
                    placeholder="Nhập biển số xe..."
                    className="flex-1 bg-slate-700 border-slate-600 text-white"
                  />
                  <select className="px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white">
                    <option>Cao</option>
                    <option>Trung bình</option>
                    <option>Thấp</option>
                  </select>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Thêm
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-slate-700">
                      <TableHead className="text-slate-300">Biển số</TableHead>
                      <TableHead className="text-slate-300">Mức độ ưu tiên</TableHead>
                      <TableHead className="text-slate-300">Lý do</TableHead>
                      <TableHead className="text-slate-300">Người thêm</TableHead>
                      <TableHead className="text-slate-300">Ngày thêm</TableHead>
                      <TableHead className="text-slate-300">Hành động</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {blacklists.map((item) => (
                      <TableRow key={item.id} className="border-slate-700">
                        <TableCell className="text-white font-mono">{item.licensePlate}</TableCell>
                        <TableCell>
                          <Badge className={`${getPriorityColor(item.priority)} text-white`}>
                            {item.priority}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-slate-300">{item.reason}</TableCell>
                        <TableCell className="text-slate-300">{item.addedBy}</TableCell>
                        <TableCell className="text-slate-300">{item.addedAt}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-red-400">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default Management;
