
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CitizenLayout from '@/components/CitizenLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Car, 
  FileText, 
  History, 
  AlertTriangle, 
  Edit, 
  ArrowLeftRight,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Eye
} from 'lucide-react';

const VehicleDetail = () => {
  const { vehicleId } = useParams();
  const [has3DModel] = useState(vehicleId === '2'); // Xe có ID 2 sẽ có mô hình 3D
  
  // Mock data
  const vehicle = {
    id: vehicleId,
    licensePlate: vehicleId === '1' ? '51G-123.45' : '29A-987.65',
    name: vehicleId === '1' ? 'Honda Vision 2022' : 'Yamaha Exciter 2021',
    brand: vehicleId === '1' ? 'Honda' : 'Yamaha',
    model: vehicleId === '1' ? 'Vision' : 'Exciter',
    year: vehicleId === '1' ? '2022' : '2021',
    color: vehicleId === '1' ? 'Xanh đen' : 'Đỏ',
    frameNumber: 'RLHPC1110ME123456',
    engineNumber: 'PC1110E123456',
    registrationDate: '15/03/2022'
  };

  const documents = [
    {
      name: 'Giấy đăng ký xe',
      status: 'verified',
      uploadDate: '15/03/2022'
    },
    {
      name: 'Bảo hiểm TNDS',
      status: 'verified', 
      uploadDate: '01/01/2024',
      expiryDate: '31/12/2024'
    }
  ];

  const history = [
    {
      type: 'inspection',
      title: 'Đăng kiểm định kỳ',
      date: '15/03/2023',
      result: 'Đạt',
      nextDate: '15/03/2024'
    },
    {
      type: 'maintenance',
      title: 'Bảo dưỡng định kỳ',
      date: '10/01/2024',
      note: 'Thay dầu máy, kiểm tra phanh'
    },
    {
      type: 'violation',
      title: 'Vượt đèn đỏ',
      date: '05/02/2024',
      location: 'Ngã tư Hàng Xanh, TP.HCM',
      status: 'Chưa xử lý'
    }
  ];

  return (
    <CitizenLayout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">{vehicle.licensePlate}</h1>
            <p className="text-muted-foreground">{vehicle.name}</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Báo mất cắp
            </Button>
            <Button variant="outline">
              <Edit className="h-4 w-4 mr-2" />
              Cập nhật Thông tin
            </Button>
            <Button>
              <ArrowLeftRight className="h-4 w-4 mr-2" />
              Chuyển nhượng
            </Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* 3D Model Viewer */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Mô hình 3D</CardTitle>
            </CardHeader>
            <CardContent>
              {has3DModel ? (
                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg h-96 flex items-center justify-center relative">
                  <div className="text-center">
                    <Car className="h-24 w-24 mx-auto mb-4 text-slate-400" />
                    <p className="text-sm text-muted-foreground mb-4">
                      Mô hình 3D tương tác - Sử dụng chuột để xoay và phóng to/thu nhỏ
                    </p>
                  </div>
                  
                  {/* 3D Controls */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <Button size="icon" variant="secondary">
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary">
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary">
                      <ZoomOut className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg h-96 flex items-center justify-center">
                  <div className="text-center">
                    <Car className="h-24 w-24 mx-auto mb-4 text-slate-400" />
                    <p className="text-lg font-semibold mb-2">Chưa có mô hình 3D</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Tạo bản sao số 3D cho xe của bạn để có trải nghiệm tốt nhất
                    </p>
                    <Button>
                      Tạo Bản sao số 3D
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Info */}
          <Card>
            <CardHeader>
              <CardTitle>Thông tin nhanh</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm font-medium">Biển số</p>
                <p className="text-lg font-bold">{vehicle.licensePlate}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Hãng xe</p>
                <p>{vehicle.brand}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Model</p>
                <p>{vehicle.model} {vehicle.year}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Màu sắc</p>
                <p>{vehicle.color}</p>
              </div>
              <Badge className="w-full justify-center bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                Trạng thái: Hợp lệ
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information Tabs */}
        <Card className="mt-6">
          <Tabs defaultValue="general" className="w-full">
            <CardHeader>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="general">Thông tin chung</TabsTrigger>
                <TabsTrigger value="documents">Giấy tờ Pháp lý</TabsTrigger>
                <TabsTrigger value="history">Lịch sử & Tình trạng</TabsTrigger>
              </TabsList>
            </CardHeader>
            
            <CardContent>
              <TabsContent value="general" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Số khung</p>
                    <p className="font-mono">{vehicle.frameNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Số máy</p>
                    <p className="font-mono">{vehicle.engineNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Ngày đăng ký lần đầu</p>
                    <p>{vehicle.registrationDate}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Chủ sở hữu</p>
                    <p>Nguyễn Văn A</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="documents" className="space-y-4">
                {documents.map((doc, index) => (
                  <Card key={index}>
                    <CardContent className="flex items-center justify-between p-4">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-8 w-8 text-blue-500" />
                        <div>
                          <p className="font-semibold">{doc.name}</p>
                          <p className="text-sm text-muted-foreground">
                            Tải lên: {doc.uploadDate}
                            {doc.expiryDate && ` • Hết hạn: ${doc.expiryDate}`}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                          Đã xác thực
                        </Badge>
                        <Button variant="outline" size="sm">
                          Xem
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="history" className="space-y-4">
                {history.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-full ${
                            item.type === 'inspection' ? 'bg-blue-100 text-blue-600' :
                            item.type === 'maintenance' ? 'bg-green-100 text-green-600' :
                            'bg-red-100 text-red-600'
                          }`}>
                            {item.type === 'inspection' ? <FileText className="h-4 w-4" /> :
                             item.type === 'maintenance' ? <Car className="h-4 w-4" /> :
                             <AlertTriangle className="h-4 w-4" />}
                          </div>
                          <div>
                            <p className="font-semibold">{item.title}</p>
                            <p className="text-sm text-muted-foreground">{item.date}</p>
                            {item.location && (
                              <p className="text-sm text-muted-foreground">{item.location}</p>
                            )}
                            {item.note && (
                              <p className="text-sm text-muted-foreground">{item.note}</p>
                            )}
                          </div>
                        </div>
                        {item.status && (
                          <Badge variant={item.status === 'Chưa xử lý' ? 'destructive' : 'default'}>
                            {item.status}
                          </Badge>
                        )}
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

export default VehicleDetail;
