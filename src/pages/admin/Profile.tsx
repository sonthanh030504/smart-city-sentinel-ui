
import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { User, Key, Shield, Clock, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState("Admin User");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { toast } = useToast();

  // Mock login history data
  const loginHistory = [
    {
      id: 1,
      time: "2024-03-15 09:30:45",
      ip: "192.168.1.100",
      device: "Chrome trên Windows 10",
      location: "Hồ Chí Minh"
    },
    {
      id: 2,
      time: "2024-03-14 14:22:15",
      ip: "192.168.1.100",
      device: "Firefox trên Windows 10",
      location: "Hồ Chí Minh"
    },
    {
      id: 3,
      time: "2024-03-13 08:15:30",
      ip: "10.0.0.50",
      device: "Chrome trên Android",
      location: "Hồ Chí Minh"
    }
  ];

  const handleSaveProfile = () => {
    // Logic to save profile changes
    setIsEditing(false);
    toast({
      title: "Thành công",
      description: "Thông tin cá nhân đã được cập nhật",
    });
  };

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      toast({
        title: "Lỗi",
        description: "Mật khẩu xác nhận không khớp",
        variant: "destructive",
      });
      return;
    }
    
    if (newPassword.length < 6) {
      toast({
        title: "Lỗi", 
        description: "Mật khẩu phải có ít nhất 6 ký tự",
        variant: "destructive",
      });
      return;
    }

    // Logic to change password
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    toast({
      title: "Thành công",
      description: "Mật khẩu đã được thay đổi",
    });
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">Thông tin Cá nhân</h1>
          <p className="text-slate-400">Quản lý thông tin tài khoản và bảo mật</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Profile Information */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <User className="h-5 w-5 mr-2" />
                Thông tin Cơ bản
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar */}
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-blue-600 text-white text-xl">
                    A
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline" size="sm" className="border-slate-600">
                    <Camera className="h-4 w-4 mr-2" />
                    Thay đổi ảnh
                  </Button>
                  <p className="text-xs text-slate-400 mt-1">JPG, PNG tối đa 2MB</p>
                </div>
              </div>

              {/* Basic Info */}
              <div className="grid gap-4">
                <div>
                  <Label className="text-slate-300">Tên đăng nhập</Label>
                  <Input 
                    value="admin@smartsecure.com" 
                    disabled 
                    className="bg-slate-700/50 border-slate-600 text-slate-400"
                  />
                </div>
                
                <div>
                  <Label className="text-slate-300">Vai trò</Label>
                  <Input 
                    value="Quản trị viên" 
                    disabled 
                    className="bg-slate-700/50 border-slate-600 text-slate-400"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <Label className="text-slate-300">Họ và Tên</Label>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setIsEditing(!isEditing)}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      {isEditing ? "Hủy" : "Chỉnh sửa"}
                    </Button>
                  </div>
                  <Input 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    disabled={!isEditing}
                    className={`bg-slate-700/50 border-slate-600 text-white ${
                      isEditing ? 'focus:border-blue-400' : 'text-slate-400'
                    }`}
                  />
                </div>

                {isEditing && (
                  <Button 
                    onClick={handleSaveProfile}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Lưu thay đổi
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Change Password */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Key className="h-5 w-5 mr-2" />
                Đổi Mật khẩu
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-slate-300">Mật khẩu hiện tại</Label>
                <Input 
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="bg-slate-700/50 border-slate-600 text-white focus:border-blue-400"
                  placeholder="Nhập mật khẩu hiện tại"
                />
              </div>

              <div>
                <Label className="text-slate-300">Mật khẩu mới</Label>
                <Input 
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="bg-slate-700/50 border-slate-600 text-white focus:border-blue-400"
                  placeholder="Nhập mật khẩu mới"
                />
              </div>

              <div>
                <Label className="text-slate-300">Xác nhận mật khẩu mới</Label>
                <Input 
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-slate-700/50 border-slate-600 text-white focus:border-blue-400"
                  placeholder="Nhập lại mật khẩu mới"
                />
              </div>

              <Button 
                onClick={handleChangePassword}
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={!currentPassword || !newPassword || !confirmPassword}
              >
                Đổi Mật khẩu
              </Button>
            </CardContent>
          </Card>

          {/* Login History */}
          <Card className="bg-slate-800/50 border-slate-700 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Hoạt động Đăng nhập
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-700">
                    <TableHead className="text-slate-300">Thời gian</TableHead>
                    <TableHead className="text-slate-300">Địa chỉ IP</TableHead>
                    <TableHead className="text-slate-300">Thiết bị</TableHead>
                    <TableHead className="text-slate-300">Vị trí</TableHead>
                    <TableHead className="text-slate-300">Trạng thái</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loginHistory.map((login, index) => (
                    <TableRow key={login.id} className="border-slate-700">
                      <TableCell className="text-white">{login.time}</TableCell>
                      <TableCell className="text-slate-300 font-mono">{login.ip}</TableCell>
                      <TableCell className="text-slate-300">{login.device}</TableCell>
                      <TableCell className="text-slate-300">{login.location}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${
                            index === 0 ? 'bg-green-500' : 'bg-slate-500'
                          }`}></div>
                          <span className="text-slate-300">
                            {index === 0 ? 'Hiện tại' : 'Đã kết thúc'}
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Profile;
