
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Github, Linkedin, Mail, Code, Database, Cpu } from "lucide-react";
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

  const technologies = [
    {
      category: "Frontend",
      icon: Code,
      items: ["React 18", "TypeScript", "Tailwind CSS", "Three.js", "WebRTC"]
    },
    {
      category: "Backend",
      icon: Database,
      items: ["Node.js", "Express", "PostgreSQL", "Redis", "Socket.io"]
    },
    {
      category: "AI & ML",
      icon: Cpu,
      items: ["TensorFlow", "OpenCV", "YOLO", "Face Recognition", "Real-time Analytics"]
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
            <h1 className="text-xl font-bold text-white">Giới thiệu</h1>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Về Chúng Tôi
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Chúng tôi là đội ngũ kỹ sư và nhà nghiên cứu tài năng, cam kết phát triển 
            các giải pháp công nghệ tiên tiến để xây dựng thành phố thông minh và an toàn hơn.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">Sứ mệnh của chúng tôi</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-300 text-lg leading-relaxed max-w-4xl mx-auto">
                Chúng tôi tin rằng công nghệ AI và IoT có thể tạo ra những thay đổi tích cực cho xã hội. 
                Hệ thống của chúng tôi không chỉ giúp tăng cường an ninh mà còn cải thiện chất lượng cuộc sống, 
                giảm thiểu tai nạn giao thông và tối ưu hóa luồng di chuyển trong thành phố.
              </p>
            </CardContent>
          </Card>
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
        </section>

        {/* Technologies Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Công nghệ Sử dụng</h2>
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

        {/* Contact Section */}
        <section className="text-center">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Liên hệ với chúng tôi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-6">
                Bạn có ý tưởng hợp tác hoặc cần tư vấn về giải pháp thành phố thông minh? 
                Chúng tôi luôn sẵn sàng lắng nghe!
              </p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
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
