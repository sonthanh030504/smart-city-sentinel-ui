
import React, { useState } from 'react';
import CitizenLayout from '@/components/CitizenLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Bell, 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  Clock, 
  MoreHorizontal,
  X,
  Eye
} from 'lucide-react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      type: 'warning',
      title: 'Xe 51G-123.45 sắp hết hạn đăng kiểm',
      message: 'Xe Honda Vision 2022 của bạn sẽ hết hạn đăng kiểm trong 15 ngày (30/03/2024). Vui lòng thực hiện đăng kiểm định kỳ.',
      time: '2 giờ trước',
      read: false,
      priority: 'high'
    },
    {
      id: '2',
      type: 'info',
      title: 'Vi phạm nguội chưa được xử lý',
      message: 'Bạn có 01 vi phạm "Vượt đèn đỏ" tại Ngã tư Hàng Xanh chưa được xử lý. Số tiền phạt: 1.000.000 VNĐ.',
      time: '1 ngày trước',
      read: false,
      priority: 'medium'
    },
    {
      id: '3',
      type: 'success',
      title: 'Mô hình 3D hoàn thành',
      message: 'Mô hình 3D cho xe 29A-987.65 (Yamaha Exciter 2021) đã được tạo thành công. Bạn có thể xem chi tiết trong trang quản lý phương tiện.',
      time: '2 ngày trước',
      read: true,
      priority: 'low'
    },
    {
      id: '4',
      type: 'info',
      title: 'Cập nhật chính sách mới',
      message: 'Nghị định mới về xử phạt vi phạm giao thông đã có hiệu lực từ 01/03/2024. Xem chi tiết tại mục Blog & Tin tức.',
      time: '3 ngày trước',
      read: true,
      priority: 'medium'
    },
    {
      id: '5',
      type: 'warning',
      title: 'Phát hiện hoạt động bất thường',
      message: 'Xe 51G-123.45 được phát hiện tại vị trí xa so với thường lệ (Cần Thơ) vào lúc 14:30 ngày 10/03/2024.',
      time: '5 ngày trước',
      read: true,
      priority: 'high'
    }
  ]);

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'info':
        return <Info className="h-5 w-5 text-blue-600" />;
      default:
        return <Bell className="h-5 w-5 text-gray-600" />;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100">Cao</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">Trung bình</Badge>;
      case 'low':
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">Thấp</Badge>;
      default:
        return null;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;
  const highPriorityCount = notifications.filter(n => n.priority === 'high' && !n.read).length;

  return (
    <CitizenLayout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Thông báo</h1>
            <p className="text-muted-foreground">
              Theo dõi các thông báo quan trọng về phương tiện và tài khoản của bạn
            </p>
          </div>
          
          {unreadCount > 0 && (
            <Button onClick={markAllAsRead}>
              Đánh dấu tất cả đã đọc
            </Button>
          )}
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Bell className="h-8 w-8 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">{notifications.length}</p>
                  <p className="text-sm text-muted-foreground">Tổng thông báo</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Eye className="h-8 w-8 text-orange-500" />
                <div>
                  <p className="text-2xl font-bold">{unreadCount}</p>
                  <p className="text-sm text-muted-foreground">Chưa đọc</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-8 w-8 text-red-500" />
                <div>
                  <p className="text-2xl font-bold">{highPriorityCount}</p>
                  <p className="text-sm text-muted-foreground">Ưu tiên cao</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Notifications List */}
        <Card>
          <Tabs defaultValue="all" className="w-full">
            <CardHeader>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">Tất cả ({notifications.length})</TabsTrigger>
                <TabsTrigger value="unread">Chưa đọc ({unreadCount})</TabsTrigger>
                <TabsTrigger value="high">Ưu tiên cao ({highPriorityCount})</TabsTrigger>
                <TabsTrigger value="read">Đã đọc ({notifications.length - unreadCount})</TabsTrigger>
              </TabsList>
            </CardHeader>
            
            <CardContent>
              <TabsContent value="all" className="space-y-4">
                {notifications.map((notification) => (
                  <Card key={notification.id} className={`${!notification.read ? 'border-l-4 border-l-primary' : ''}`}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3 flex-1">
                          {getNotificationIcon(notification.type)}
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className={`font-semibold ${!notification.read ? 'text-primary' : ''}`}>
                                {notification.title}
                              </h3>
                              {!notification.read && (
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                              )}
                              {getPriorityBadge(notification.priority)}
                            </div>
                            
                            <p className="text-sm text-muted-foreground mb-2">
                              {notification.message}
                            </p>
                            
                            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              <span>{notification.time}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          {!notification.read && (
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => markAsRead(notification.id)}
                            >
                              Đánh dấu đã đọc
                            </Button>
                          )}
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => deleteNotification(notification.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="unread" className="space-y-4">
                {notifications.filter(n => !n.read).map((notification) => (
                  <Card key={notification.id} className="border-l-4 border-l-primary">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3 flex-1">
                          {getNotificationIcon(notification.type)}
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-semibold text-primary">{notification.title}</h3>
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              {getPriorityBadge(notification.priority)}
                            </div>
                            
                            <p className="text-sm text-muted-foreground mb-2">
                              {notification.message}
                            </p>
                            
                            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              <span>{notification.time}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => markAsRead(notification.id)}
                          >
                            Đánh dấu đã đọc
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => deleteNotification(notification.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                {notifications.filter(n => !n.read).length === 0 && (
                  <div className="text-center py-8">
                    <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-500" />
                    <h3 className="text-lg font-semibold mb-2">Tất cả thông báo đã được đọc</h3>
                    <p className="text-muted-foreground">Bạn không có thông báo chưa đọc nào.</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="high" className="space-y-4">
                {notifications.filter(n => n.priority === 'high' && !n.read).map((notification) => (
                  <Card key={notification.id} className="border-l-4 border-l-red-500">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3 flex-1">
                          {getNotificationIcon(notification.type)}
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-semibold text-red-600">{notification.title}</h3>
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              {getPriorityBadge(notification.priority)}
                            </div>
                            
                            <p className="text-sm text-muted-foreground mb-2">
                              {notification.message}
                            </p>
                            
                            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              <span>{notification.time}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => markAsRead(notification.id)}
                          >
                            Đánh dấu đã đọc
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => deleteNotification(notification.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                {notifications.filter(n => n.priority === 'high' && !n.read).length === 0 && (
                  <div className="text-center py-8">
                    <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-500" />
                    <h3 className="text-lg font-semibold mb-2">Không có thông báo ưu tiên cao</h3>
                    <p className="text-muted-foreground">Tất cả thông báo ưu tiên cao đã được xử lý.</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="read" className="space-y-4">
                {notifications.filter(n => n.read).map((notification) => (
                  <Card key={notification.id} className="opacity-75">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3 flex-1">
                          {getNotificationIcon(notification.type)}
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-semibold">{notification.title}</h3>
                              {getPriorityBadge(notification.priority)}
                            </div>
                            
                            <p className="text-sm text-muted-foreground mb-2">
                              {notification.message}
                            </p>
                            
                            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              <span>{notification.time}</span>
                            </div>
                          </div>
                        </div>

                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => deleteNotification(notification.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </CitizenLayout>
  );
};

export default Notifications;
