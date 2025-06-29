
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Github, Linkedin, Mail, Code, Database, Cpu, Brain, Zap, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Nguyễn Văn A",
      role: "Lead Developer & AI Specialist",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      skills: ["React", "Python", "TensorFlow", "Computer Vision"]
    },
    {
      name: "Trần Thị B",
      role: "Frontend Architect",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=150&h=150&fit=crop&crop=face",
      skills: ["React", "TypeScript", "UI/UX", "WebGL"]
    },
    {
      name: "Phạm Minh C",
      role: "Backend Engineer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      skills: ["Node.js", "PostgreSQL", "Docker", "AWS"]
    },
    {
      name: "Lê Thu D",
      role: "Data Scientist",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      skills: ["Python", "Machine Learning", "Analytics", "Statistics"]
    }
  ];

  const coreFeatures = [
    {
      icon: Brain,
      title: "AI Nhận dạng",
      description: "Sử dụng YOLOv10 và ViT để nhận dạng phương tiện và biển số xe với độ chính xác cao",
      technologies: ["YOLOv10", "Vision Transformer", "OpenCV", "TensorFlow"]
    },
    {
      icon: Zap,
      title: "Tối ưu hóa Hiệu năng",
      description: "Triển khai OpenVINO và các kỹ thuật tối ưu hóa để xử lý real-time",
      technologies: ["OpenVINO", "Model Optimization", "Edge Computing", "GPU Acceleration"]
    },
    {
      icon: BarChart,
      title: "Phân tích Dữ liệu Lớn",
      description: "Xử lý và phân tích hàng triệu điểm dữ liệu để tạo ra insights có giá trị",
      technologies: ["Apache Kafka", "ElasticSearch", "Time Series DB", "Real-time Analytics"]
    },
    {
      icon: Code,
      title: "Tương tác Thông minh",
      description: "Tích hợp LLM để cung cấp trải nghiệm tương tác tự nhiên và trực quan",
      technologies: ["Large Language Models", "Natural Language Processing", "Conversational AI"]
    }
  ];

  const technologies = [
    {
      category: "Frontend",
      icon: Code,
      items: ["React 18", "TypeScript", "Tailwind CSS", "Three.js", "WebRTC", "Real-time Dashboard"]
    },
    {
      category: "Backend & Infrastructure",
      icon: Database,
      items: ["Node.js", "Express", "PostgreSQL", "Redis", "Socket.io", "Docker", "Kubernetes"]
    },
    {
      category: "AI & Machine Learning",
      icon: Cpu,
      items: ["YOLOv10", "Vision Transformer", "OpenVINO", "TensorFlow", "OpenCV", "Face Recognition"]
    }
  ];

  const projectGoals = [
    {
      title: "Giải quyết Thực trạng Giao thông",
      description: "Ứng dụng AI để giám sát, phân tích và tối ưu hóa hệ thống giao thông đô thị"
    },
    {
      title: "Tăng cường An ninh Công cộng",
      description: "Phát hiện và theo dõi các phương tiện có liên quan đến hoạt động bất hợp pháp"
    },
    {
      title: "Tối ưu hóa Quản lý Thành phố",
      description: "Cung cấp dữ liệu và insights để hỗ trợ quyết định quản lý đô thị thông minh"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Về trang chủ
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-white">Giới thiệu Dự án</h1>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
            SmartSecure Traffic AI
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Hệ thống AI tiên tiến cho giám sát giao thông thông minh và an ninh đô thị, 
            được phát triển bởi đội ngũ sinh viên tài năng với sự hướng dẫn của các chuyên gia.
          </p>
        </div>

        {/* Project Mission */}
        <section className="mb-16">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">Về Dự án</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {projectGoals.map((goal, index) => (
                  <div key={index} className="text-center space-y-3">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{goal.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{goal.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Core Technologies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Công nghệ Nổi bật</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-lg">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4 leading-relaxed">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Stack Công nghệ</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardHeader className="text-center">
                  <tech.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <CardTitle className="text-white text-xl">{tech.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tech.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-slate-300 flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Đội ngũ Phát triển</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-blue-400"
                  />
                  <CardTitle className="text-white text-lg">{member.name}</CardTitle>
                  <p className="text-blue-400 text-sm">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Supervisor Section */}
          <div className="mt-8">
            <Card className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-blue-500/30">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-xl">Giảng viên Hướng dẫn</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">GS</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">TS. Nguyễn Văn Khoa</h3>
                <p className="text-blue-300 mb-4">Giảng viên Khoa Công nghệ Thông tin</p>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Chuyên gia về AI, Computer Vision và Hệ thống Thông minh với hơn 15 năm kinh nghiệm nghiên cứu và giảng dạy
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Liên hệ với chúng tôi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-6">
                Bạn có ý tưởng hợp tác hoặc cần tư vấn về giải pháp thành phố thông minh? 
                Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ!
              </p>
              <div className="flex justify-center space-x-4">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                  <Mail className="h-4 w-4 mr-2" />
                  smartsecure@edu.vn
                </Button>
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
