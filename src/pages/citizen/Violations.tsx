
import React, { useState } from 'react';
import CitizenLayout from '@/components/CitizenLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertTriangle, MapPin, Clock, CreditCard, Eye, ExternalLink } from 'lucide-react';

const Violations = () => {
  const [selectedViolation, setSelectedViolation] = useState(null);

  const violations = [
    {
      id: '1',
      licensePlate: '51G-123.45',
      violation: 'Vượt đèn đỏ',
      time: '2024-03-15 08:30:45',
      location: 'Ngã tư Hàng Xanh, Quận Bình Thạnh, TP.HCM',
      fine: '1.000.000',
      status: 'unpaid',
      statusText: 'Chưa xử lý',
      evidence: {
        image: '/placeholder.svg',
        video: true,
        description: 'Phương tiện vượt đèn đỏ tại ngã tư Hàng Xanh lúc 08:30:45 ngày 15/03/2024'
      },
      law: {
        article: 'Điều 5, Nghị định 100/2019/NĐ-CP',
        description: 'Không chấp hành hiệu lệnh của đèn tín hiệu giao thông'
      }
    },
    {
      id: '2',
      licensePlate: '29A-987.65',
      violation: 'Không đội mũ bảo hiểm',
      time: '2024-03-10 14:15:20',
      location: 'Đường Nguyễn Văn Cừ, Quận 5, TP.HCM',
      fine: '200.000',
      status: 'paid',
      statusText: 'Đã xử lý',
      evidence: {
        image: '/placeholder.svg',
        video: false,
        description: 'Người điều khiển xe máy không đội mũ bảo hiểm'
      },
      law: {
        article: 'Điều 6, Nghị định 100/2019/NĐ-CP',
        description: 'Người điều khiển xe máy không đội mũ bảo hiểm'
      }
    },
    {
      id: '3',
      licensePlate: '51G-123.45',
      violation: 'Vượt quá tốc độ cho phép',
      time: '2024-02-28 16:45:10',
      location: 'Đại lộ Võ Văn Kiệt, Quận 1, TP.HCM',
      fine: '800.000',
      status: 'appealing',
      statusText: 'Đang khiếu nại',
      evidence: {
        image: '/placeholder.svg',
        video: true,
        description: 'Phương tiện chạy với tốc độ 65km/h trong khu vực giới hạn 50km/h'
      },
      law: {
        article: 'Điều 4, Nghị định 100/2019/NĐ-CP',
        description: 'Vượt quá tốc độ cho phép từ 10km/h đến 20km/h'
      }
    }
  ];

  const getStatusBadge = (status: string, statusText: string) => {
    switch (status) {
      case 'unpaid':
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100">{statusText}</Badge>;
      case 'paid':
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">{statusText}</Badge>;
      case 'appealing':
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">{statusText}</Badge>;
      default:
        return <Badge variant="secondary">{statusText}</Badge>;
    }
  };

  const formatCurrency = (amount: string) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(parseInt(amount));
  };

  return (
    <CitizenLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Vi phạm Giao thông</h1>
          <p className="text-muted-foreground">
            Tra cứu và xử lý các vi phạm giao thông được ghi nhận bởi hệ thống
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-8 w-8 text-red-500" />
                <div>
                  <p className="text-2xl font-bold">2</p>
                  <p className="text-sm text-muted-foreground">Chưa xử lý</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <CreditCard className="h-8 w-8 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">1</p>
                  <p className="text-sm text-muted-foreground">Đã xử lý</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-8 w-8 text-yellow-500" />
                <div>
                  <p className="text-2xl font-bold">1</p>
                  <p className="text-sm text-muted-foreground">Đang khiếu nại</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Violations List */}
        <div className="space-y-4">
          {violations.map((violation) => (
            <Card key={violation.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline" className="font-mono">
                        {violation.licensePlate}
                      </Badge>
                      {getStatusBadge(violation.status, violation.statusText)}
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2">{violation.violation}</h3>
                    
                    <div className="grid gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {violation.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {violation.location}
                      </div>
                    </div>
                  </div>

                  <div className="text-right space-y-2">
                    <p className="text-2xl font-bold text-red-600">
                      {formatCurrency(violation.fine)}
                    </p>
                    
                    <div className="flex space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            Xem bằng chứng
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Bằng chứng vi phạm</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4">
                              <img 
                                src={violation.evidence.image} 
                                alt="Evidence"
                                className="w-full h-64 object-cover rounded-lg mb-4"
                              />
                              {violation.evidence.video && (
                                <div className="flex items-center justify-center bg-black/10 rounded-lg p-4">
                                  <Button>
                                    <Eye className="h-4 w-4 mr-2" />
                                    Xem video bằng chứng
                                  </Button>
                                </div>
                              )}
                            </div>
                            
                            <div className="space-y-3">
                              <div>
                                <h4 className="font-semibold mb-1">Mô tả vi phạm:</h4>
                                <p className="text-sm text-muted-foreground">
                                  {violation.evidence.description}
                                </p>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold mb-1">Căn cứ pháp lý:</h4>
                                <p className="text-sm font-medium">{violation.law.article}</p>
                                <p className="text-sm text-muted-foreground">
                                  {violation.law.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>

                      {violation.status === 'unpaid' && (
                        <Button>
                          <CreditCard className="h-4 w-4 mr-2" />
                          Nộp phạt Trực tuyến
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {violations.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">Không có vi phạm nào</h3>
              <p className="text-muted-foreground">
                Chúc mừng! Bạn không có vi phạm giao thông nào được ghi nhận.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </CitizenLayout>
  );
};

export default Violations;
