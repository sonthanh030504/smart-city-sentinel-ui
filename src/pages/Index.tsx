
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Camera, Map, Users, BarChart3, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "An ninh Thông minh",
      description: "Hệ thống giám sát tự động với AI nhận diện khuôn mặt và phát hiện bất thường"
    },
    {
      icon: Camera,
      title: "Camera AI Tích hợp",
      description: "Mạng lưới camera thông minh với khả năng phân tích video real-time"
    },
    {
      icon: Map,
      title: "Bản đồ Tương tác",
      description: "Hiển thị thông tin giao thông, camera và sự kiện trên bản đồ thời gian thực"
    },
    {
      icon: BarChart3,
      title: "Phân tích Dữ liệu",
      description: "Báo cáo thống kê chi tiết và dự đoán xu hướng giao thông"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-400" />
            <h1 className="text-xl font-bold text-white">SmartSecure</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/map-explorer" className="text-slate-300 hover:text-blue-400 transition-colors">
              Khám phá Bản đồ
            </Link>
            <Link to="/about" className="text-slate-300 hover:text-blue-400 transition-colors">
              Giới thiệu
            </Link>
            <Link to="/login">
              <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                Đăng nhập
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Hệ thống An ninh & Giao thông Thông minh
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Giải pháp toàn diện tích hợp AI, camera thông minh và phân tích dữ liệu 
              để quản lý an ninh và giao thông hiệu quả
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/map-explorer">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Khám phá Hệ thống
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3">
                  Khu vực Quản trị
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Tính năng Nổi bật
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <feature.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400 text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-slate-300">Camera được kết nối</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-slate-300">Thời gian hoạt động</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-slate-300">Giám sát liên tục</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Sẵn sàng trải nghiệm?
            </h2>
            <p className="text-slate-300 mb-8">
              Khám phá hệ thống demo hoặc liên hệ để được tư vấn triển khai
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/map-explorer">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3">
                  Demo Tương tác
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3">
                Liên hệ Tư vấn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-4 border-t border-slate-800">
        <div className="container mx-auto text-center text-slate-400">
          <p>&copy; 2024 SmartSecure System. Được phát triển với ❤️ tại Việt Nam</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
