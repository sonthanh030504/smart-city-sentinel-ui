import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Calendar, 
  User, 
  Search, 
  ArrowRight, 
  Clock,
  TrendingUp,
  BookOpen
} from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock blog data
  const featuredPost = {
    id: 1,
    title: "Công nghệ AI trong Giám sát Giao thông: Tương lai đã Đến",
    excerpt: "Khám phá cách trí tuệ nhân tạo đang cách mạng hóa hệ thống giám sát giao thông và đảm bảo an toàn đô thị...",
    author: "Nguyễn Văn A",
    date: "2024-03-15",
    readTime: "5 phút đọc",
    image: "/placeholder.svg",
    category: "Công nghệ"
  };

  const posts = [
    {
      id: 2,
      title: "Quy định mới về Phạt nguội từ tháng 4/2024",
      excerpt: "Tổng hợp các quy định mới nhất về phạt nguội và cách tránh vi phạm giao thông...",
      author: "Trần Thị B",
      date: "2024-03-12",
      readTime: "3 phút đọc",
      image: "/placeholder.svg",
      category: "Luật giao thông"
    },
    {
      id: 3,
      title: "Hướng dẫn An toàn cho Người điều khiển Xe máy",
      excerpt: "Những lưu ý quan trọng để đảm bảo an toàn khi tham gia giao thông bằng xe máy...",
      author: "Lê Văn C",
      date: "2024-03-10",
      readTime: "4 phút đọc",
      image: "/placeholder.svg",
      category: "An toàn"
    },
    {
      id: 4,
      title: "Cách thức Hoạt động của Hệ thống SmartSecure",
      excerpt: "Tìm hiểu về công nghệ và quy trình hoạt động của hệ thống giám sát thông minh...",
      author: "Phạm Thị D",
      date: "2024-03-08",
      readTime: "6 phút đọc",
      image: "/placeholder.svg",
      category: "Hệ thống"
    },
    {
      id: 5,
      title: "Thống kê Vi phạm Giao thông Quý I/2024",
      excerpt: "Báo cáo chi tiết về tình hình vi phạm giao thông và hiệu quả của hệ thống giám sát...",
      author: "Hoàng Văn E",
      date: "2024-03-05",
      readTime: "7 phút đọc",
      image: "/placeholder.svg",
      category: "Báo cáo"
    }
  ];

  const categories = [
    { name: "Công nghệ", count: 12 },
    { name: "Luật giao thông", count: 8 },
    { name: "An toàn", count: 15 },
    { name: "Hệ thống", count: 6 },
    { name: "Báo cáo", count: 4 }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Công nghệ": return "bg-blue-500";
      case "Luật giao thông": return "bg-red-500";
      case "An toàn": return "bg-green-500";
      case "Hệ thống": return "bg-purple-500";
      case "Báo cáo": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-400" />
            <h1 className="text-xl font-bold text-white">SmartSecure</h1>
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-slate-300 hover:text-blue-400 transition-colors">
              Trang chủ
            </Link>
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <BookOpen className="inline h-12 w-12 mr-4 text-blue-400" />
              Blog SmartSecure
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Chia sẻ kiến thức về an toàn giao thông, công nghệ và quy định pháp luật
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Featured Post */}
            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto bg-slate-700 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-slate-500" />
                </div>
                <div className="p-6">
                  <Badge className={`${getCategoryColor(featuredPost.category)} text-white mb-3`}>
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-2xl font-bold text-white mb-3 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-300 mb-4 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-slate-400">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Other Posts */}
            <div className="grid md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <Card key={post.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                  <div className="aspect-video bg-slate-700 flex items-center justify-center">
                    <BookOpen className="h-12 w-12 text-slate-500" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={`${getCategoryColor(post.category)} text-white`}>
                        {post.category}
                      </Badge>
                      <span className="text-xs text-slate-400">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-white text-lg leading-tight">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-300 mb-4">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-slate-400">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                        Đọc thêm
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Search */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Tìm kiếm</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder="Tìm kiếm bài viết..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-slate-700 border-slate-600 text-white"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Chủ đề</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.name} className="flex items-center justify-between p-2 rounded hover:bg-slate-700/50 cursor-pointer">
                      <span className="text-slate-300">{category.name}</span>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Bài viết phổ biến
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {posts.slice(0, 3).map((post, index) => (
                    <div key={post.id} className="flex items-start space-x-3 p-2 rounded hover:bg-slate-700/50 cursor-pointer">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-white line-clamp-2 leading-tight">
                          {post.title}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-4 border-t border-slate-800">
        <div className="container mx-auto text-center text-slate-400">
          <p>&copy; 2024 SmartSecure System. Được phát triển với ❤️ tại Việt Nam</p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
