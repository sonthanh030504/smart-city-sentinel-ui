
import React from 'react';
import CitizenLayout from '@/components/CitizenLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Plus, MoreHorizontal, AlertTriangle, History, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Vehicles = () => {
  const vehicles = [
    {
      id: '1',
      licensePlate: '51G-123.45',
      name: 'Honda Vision 2022',
      image: '/placeholder.svg',
      status: 'valid',
      statusText: 'Hợp lệ',
      color: 'Xanh đen'
    },
    {
      id: '2',
      licensePlate: '29A-987.65',
      name: 'Yamaha Exciter 2021',
      image: '/placeholder.svg',
      status: 'warning',
      statusText: 'Sắp hết hạn đăng kiểm',
      color: 'Đỏ'
    },
    {
      id: '3',
      licensePlate: '43B-456.78',
      name: 'Honda Wave 2020',
      image: '/placeholder.svg',
      status: 'expired',
      statusText: 'Hết hạn đăng kiểm',
      color: 'Bạc'
    }
  ];

  const getStatusBadge = (status: string, statusText: string) => {
    switch (status) {
      case 'valid':
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">{statusText}</Badge>;
      case 'warning':
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">{statusText}</Badge>;
      case 'expired':
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100">{statusText}</Badge>;
      default:
        return <Badge variant="secondary">{statusText}</Badge>;
    }
  };

  return (
    <CitizenLayout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Phương tiện của tôi</h1>
            <p className="text-muted-foreground">Quản lý tất cả phương tiện đã đăng ký</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Đăng ký Xe mới
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{vehicle.licensePlate}</CardTitle>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Báo mất cắp
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <History className="h-4 w-4 mr-2" />
                        Xem lịch sử đăng kiểm
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Xóa phương tiện
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent>
                <Link to={`/citizen/vehicles/${vehicle.id}`}>
                  <div className="cursor-pointer">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <div className="space-y-2">
                      <p className="font-semibold">{vehicle.name}</p>
                      <p className="text-sm text-muted-foreground">Màu: {vehicle.color}</p>
                      {getStatusBadge(vehicle.status, vehicle.statusText)}
                    </div>
                  </div>
                </Link>
                <div className="flex space-x-2 mt-4">
                  <Link to={`/citizen/vehicles/${vehicle.id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      Xem chi tiết
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </CitizenLayout>
  );
};

export default Vehicles;
