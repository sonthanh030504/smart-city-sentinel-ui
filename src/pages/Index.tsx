
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Camera, Map, Users, BarChart3, AlertTriangle, Clock, Award, Globe, CheckCircle, Star, Zap, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    },
    {
      icon: AlertTriangle,
      title: "Cảnh báo Tức thì",
      description: "Thông báo ngay lập tức khi phát hiện vi phạm hoặc sự cố giao thông"
    },
    {
      icon: Clock,
      title: "Giám sát 24/7",
      description: "Hoạt động liên tục không ngừng nghỉ để đảm bảo an toàn tối đa"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Giải thưởng Công nghệ 2024",
      description: "Được vinh danh là Giải pháp Công nghệ Xuất sắc nhất"
    },
    {
      icon: Globe,
      title: "Triển khai Toàn quốc",
      description: "Hệ thống đã được áp dụng tại 15 tỉnh thành trên cả nước"
    },
    {
      icon: CheckCircle,
      title: "Chứng nhận ISO 27001",
      description: "Đạt tiêu chuẩn bảo mật thông tin quốc tế"
    }
  ];

  const testimonials = [
    {
      name: "Nguyễn Văn A",
      role: "Trưởng phòng CSGT TP.HCM",
      content: "SmartSecure đã giúp chúng tôi giảm 60% thời gian xử lý vi phạm và tăng hiệu quả tuần tra.",
      rating: 5
    },
    {
      name: "Trần Thị B",
      role: "Giám đốc Sở GTVT Hà Nội",
      content: "Hệ thống rất dễ sử dụng và cung cấp dữ liệu chính xác cho việc ra quyết định.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-2 rounded-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">SmartSecure</h1>
                <p className="text-xs text-slate-400">Hệ thống An ninh Thông minh</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-white font-medium">
                Trang chủ
              </Link>
              <Link to="/map-explorer" className="text-slate-300 hover:text-blue-400 transition-colors">
                Khám phá Bản đồ
              </Link>
              <Link to="/blog" className="text-slate-300 hover:text-blue-400 transition-colors">
                Blog
              </Link>
              <Link to="/about" className="text-slate-300 hover:text-blue-400 transition-colors">
                Giới thiệu
              </Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                  Đăng nhập
                </Button>
              </Link>
              <Link to="/map-explorer">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                  Dùng thử
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-slate-800 pt-4">
              <div className="flex flex-col space-y-4">
                <Link to="/" className="text-white font-medium">Trang chủ</Link>
                <Link to="/map-explorer" className="text-slate-300">Khám phá Bản đồ</Link>
                <Link to="/blog" className="text-slate-300">Blog</Link>
                <Link to="/about" className="text-slate-300">Giới thiệu</Link>
                <div className="flex flex-col space-y-2 pt-4 border-t border-slate-800">
                  <Link to="/login">
                    <Button variant="outline" className="w-full border-blue-400 text-blue-400">
                      Đăng nhập
                    </Button>
                  </Link>
                  <Link to="/map-explorer">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600">
                      Dùng thử
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-blue-600/10 border border-blue-600/20 rounded-full px-4 py-2 mb-6">
                <Zap className="h-4 w-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">Công nghệ AI tiên tiến</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Hệ thống An ninh & 
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                {" "}Giao thông Thông minh
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-4xl mx-auto">
              Giải pháp toàn diện tích hợp AI, camera thông minh và phân tích dữ liệu 
              để quản lý an ninh và giao thông hiệu quả, đảm bảo an toàn cho cộng đồng
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/map-explorer">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg">
                  Khám phá Hệ thống
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg">
                  Khu vực Quản trị
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tính năng Nổi bật
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Hệ thống tích hợp công nghệ tiên tiến nhất để mang lại hiệu quả tối ưu
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group">
                <CardHeader className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Thành tích Đạt được</h2>
            <p className="text-xl text-slate-300">Những con số ấn tượng chứng minh hiệu quả</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
              <div className="text-5xl font-bold text-blue-400 mb-4">500+</div>
              <div className="text-slate-300 text-lg">Camera được kết nối</div>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
              <div className="text-5xl font-bold text-green-400 mb-4">99.9%</div>
              <div className="text-slate-300 text-lg">Thời gian hoạt động</div>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
              <div className="text-5xl font-bold text-purple-400 mb-4">24/7</div>
              <div className="text-slate-300 text-lg">Giám sát liên tục</div>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
              <div className="text-5xl font-bold text-cyan-400 mb-4">60%</div>
              <div className="text-slate-300 text-lg">Giảm vi phạm giao thông</div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Thành tựu & Chứng nhận</h2>
            <p className="text-xl text-slate-300">Được ghi nhận bởi các tổ chức uy tín</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700 text-center p-8">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-4 rounded-full w-fit mx-auto mb-6">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl mb-4">{achievement.title}</CardTitle>
                <CardDescription className="text-slate-300 leading-relaxed">
                  {achievement.description}
                </CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Đánh giá từ Khách hàng</h2>
            <p className="text-xl text-slate-300">Phản hồi tích cực từ các đơn vị sử dụng</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-300 text-lg mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-slate-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-600/20 rounded-2xl p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Sẵn sàng trải nghiệm Hệ thống?
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Khám phá hệ thống demo hoặc liên hệ để được tư vấn triển khai chi tiết
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/map-explorer">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg">
                  Demo Tương tác
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg">
                Liên hệ Tư vấn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-2 rounded-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">SmartSecure</h3>
                  <p className="text-slate-400 text-sm">Hệ thống An ninh Thông minh</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
                Giải pháp công nghệ tiên tiến cho việc quản lý an ninh và giao thông, 
                góp phần xây dựng thành phố thông minh và an toàn.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <Globe className="h-5 w-5 text-slate-400" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Liên kết nhanh</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-slate-400 hover:text-blue-400 transition-colors">Trang chủ</Link></li>
                <li><Link to="/map-explorer" className="text-slate-400 hover:text-blue-400 transition-colors">Khám phá Bản đồ</Link></li>
                <li><Link to="/blog" className="text-slate-400 hover:text-blue-400 transition-colors">Blog</Link></li>
                <li><Link to="/about" className="text-slate-400 hover:text-blue-400 transition-colors">Giới thiệu</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold mb-6">Hỗ trợ</h4>
              <ul className="space-y-3">
                <li><Link to="/login" className="text-slate-400 hover:text-blue-400 transition-colors">Đăng nhập</Link></li>
                <li><span className="text-slate-400">Hotline: 1900-1234</span></li>
                <li><span className="text-slate-400">Email: support@smartsecure.vn</span></li>
                <li><span className="text-slate-400">Hỗ trợ 24/7</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              &copy; 2024 SmartSecure System. Bản quyền thuộc về Công ty TNHH SmartSecure Việt Nam. 
              <br className="md:hidden" />
              <span className="md:ml-2">Được phát triển với ❤️ tại Việt Nam</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
