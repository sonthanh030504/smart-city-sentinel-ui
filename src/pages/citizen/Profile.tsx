
import React from 'react';
import CitizenLayout from '@/components/CitizenLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Shield, User, CreditCard, Settings, Bell, Lock } from 'lucide-react';

const Profile = () => {
  return (
    <CitizenLayout>
      <div className="p-6 space-y-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Hồ sơ Định danh số</h1>
          <p className="text-muted-foreground">Quản lý thông tin cá nhân và cài đặt tài khoản</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* VNeID Information */}
          <Card className="lg:col-span-2 border-2 border-dashed border-primary/30 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Thông tin được xác thực bởi VNeID
                <Badge className="ml-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                  Đã xác thực
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4 mb-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="text-xl">NVA</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold">Nguyễn Văn A</h3>
                  <p className="text-muted-foreground">Công dân được xác thực</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Họ và Tên</Label>
                  <Input value="Nguyễn Văn A" disabled className="bg-muted" />
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Ngày sinh</Label>
                  <Input value="15/03/1990" disabled className="bg-muted" />
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Số CCCD</Label>
                  <Input value="079090001234" disabled className="bg-muted" />
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Giới tính</Label>
                  <Input value="Nam" disabled className="bg-muted" />
                </div>
                <div className="md:col-span-2">
                  <Label className="text-sm font-medium text-muted-foreground">Nơi thường trú</Label>
                  <Input 
                    value="123 Nguyễn Văn Cừ, Phường 1, Quận 5, TP. Hồ Chí Minh" 
                    disabled 
                    className="bg-muted" 
                  />
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  <Shield className="h-4 w-4 inline mr-1" />
                  Các thông tin này được đồng bộ từ Cổng Dịch vụ công Quốc gia và không thể thay đổi trên hệ thống SmartSecure.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Driver License */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Giấy phép Lái xe
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 text-center">
                <CreditCard className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Chưa có thông tin GPLX</p>
              </div>
              
              <div className="space-y-3">
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Số GPLX</Label>
                  <Input placeholder="Nhập số giấy phép lái xe" />
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Hạng GPLX</Label>
                  <Input placeholder="Ví dụ: A1, A2, B1, B2" />
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Ngày hết hạn</Label>
                  <Input type="date" />
                </div>
              </div>

              <Button className="w-full">
                Cập nhật GPLX
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Account Settings */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="h-5 w-5 mr-2" />
                Cài đặt Bảo mật
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Xác thực 2 bước</p>
                  <p className="text-sm text-muted-foreground">Tăng cường bảo mật tài khoản</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Đăng nhập bằng vân tay</p>
                  <p className="text-sm text-muted-foreground">Trên thiết bị di động</p>
                </div>
                <Switch />
              </div>

              <Button variant="outline" className="w-full">
                Đổi mật khẩu
              </Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Cài đặt Thông báo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email thông báo</p>
                  <p className="text-sm text-muted-foreground">Nhận thông báo qua email</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Thông báo đẩy</p>
                  <p className="text-sm text-muted-foreground">Thông báo trên trình duyệt</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Vi phạm giao thông</p>
                  <p className="text-sm text-muted-foreground">Thông báo khi có vi phạm mới</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Hết hạn đăng kiểm</p>
                  <p className="text-sm text-muted-foreground">Nhắc nhở trước 30 ngày</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Phát hiện bất thường</p>
                  <p className="text-sm text-muted-foreground">Xe xuất hiện ở vị trí lạ</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </CitizenLayout>
  );
};

export default Profile;
