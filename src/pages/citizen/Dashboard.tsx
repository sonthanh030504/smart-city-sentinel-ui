
import React from 'react';
import CitizenLayout from '@/components/CitizenLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Car, 
  Shield, 
  Plus, 
  AlertTriangle, 
  Search, 
  CheckCircle,
  Clock,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const vehicles = [
    {
      id: '1',
      licensePlate: '51G-123.45',
      name: 'Honda Vision 2022',
      image: '/placeholder.svg',
      status: 'valid',
      statusText: 'Hợp lệ'
    },
    {
      id: '2', 
      licensePlate: '29A-987.65',
      name: 'Yamaha Exciter 2021',
      image: '/placeholder.svg',
      status: 'warning',
      statusText: 'Sắp hết hạn'
    }
  ];

  const notifications = [
    {
      type: 'warning',
      title: '[Cảnh báo] Xe 51G-123.45 sắp hết hạn đăng kiểm trong 15 ngày',
      time: '2 giờ trước'
    },
    {
      type: 'info',
      title: '[Thông tin] Bạn có 01 vi phạm nguội chưa được xử lý',
      time: '1 ngày trước'
    },
    {
      type: 'success',
      title: '[Thành công] Mô hình 3D cho xe 29A-987.65 đã được tạo xong',
      time: '2 ngày trước'
    }
  ];

  const quickActions = [
    {
      icon: Plus,
      title: 'Đăng ký Xe mới',
      description: 'Thêm phương tiện vào hệ thống',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: AlertTriangle,
      title: 'Báo mất cắp Phương tiện',
      description: 'Báo cáo xe bị mất cắp',
      color: 'bg-red-500 hover:bg-red-600'
    },
    {
      icon: Search,
      title: 'Tra cứu Vi phạm',
      description: 'Kiểm tra vi phạm giao thông',
      color: 'bg-orange-500 hover:bg-orange-600'
    }
  ];

  return (
    <CitizenLayout>
      <div className="p-6 space-y-6">
        {/* Welcome Card */}
        <Card className="border-2 border-dashed border-primary/30 bg-primary/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-2">
                  Chào mừng, Nguyễn Văn A
                </h1>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                    <Shield className="h-3 w-3 mr-1" />
                    Tài khoản đã được xác thực bởi VNeID
                  </Badge>
                </div>
              </div>
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="text-lg">NVA</AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Vehicles Card */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <Car className="h-5 w-5 mr-2" />
                  Phương tiện của tôi
                </span>
                <Link to="/citizen/vehicles">
                  <Button variant="outline" size="sm">
                    Quản lý tất cả
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                {vehicles.map((vehicle) => (
                  <Link key={vehicle.id} to={`/citizen/vehicles/${vehicle.id}`}>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <img 
                            src={vehicle.image} 
                            alt={vehicle.name}
                            className="h-12 w-12 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <p className="font-semibold">{vehicle.licensePlate}</p>
                            <p className="text-sm text-muted-foreground">{vehicle.name}</p>
                          </div>
                          <div className={`w-3 h-3 rounded-full ${
                            vehicle.status === 'valid' ? 'bg-green-500' : 'bg-yellow-500'
                          }`} />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Hành động nhanh</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start h-auto p-4"
                >
                  <div className={`p-2 rounded-lg ${action.color} text-white mr-3`}>
                    <action.icon className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">{action.title}</p>
                    <p className="text-xs text-muted-foreground">{action.description}</p>
                  </div>
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Thông báo & Nhắc nhở</span>
              <Link to="/citizen/notifications">
                <Button variant="outline" size="sm">
                  Xem tất cả
                </Button>
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.map((notification, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <div className={`p-1 rounded-full ${
                    notification.type === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                    notification.type === 'info' ? 'bg-blue-100 text-blue-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    {notification.type === 'warning' ? <AlertTriangle className="h-4 w-4" /> :
                     notification.type === 'info' ? <Clock className="h-4 w-4" /> :
                     <CheckCircle className="h-4 w-4" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{notification.title}</p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </CitizenLayout>
  );
};

export default Dashboard;
