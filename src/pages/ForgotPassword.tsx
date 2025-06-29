
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, Shield, Mail, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      if (email && email.includes("@")) {
        setIsSuccess(true);
        console.log("Forgot password request sent for:", email);
      } else {
        setError("Vui lòng nhập địa chỉ email hợp lệ");
      }
      setIsLoading(false);
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,200,255,0.1)_0%,_transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(120,200,255,0.1)_0%,_transparent_50%)]"></div>
        </div>

        <div className="relative w-full max-w-md">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-md">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-3 rounded-full">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl text-white">Email đã được gửi!</CardTitle>
              <CardDescription className="text-slate-400">
                Kiểm tra hộp thư của bạn để tiếp tục
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <Alert className="border-green-500 bg-green-500/10">
                <AlertDescription className="text-green-400">
                  Yêu cầu đặt lại mật khẩu đã được gửi đến <strong>{email}</strong>. 
                  Vui lòng kiểm tra email của bạn để tiếp tục.
                </AlertDescription>
              </Alert>
              
              <div className="text-sm text-slate-400 space-y-2">
                <p>Không nhận được email?</p>
                <ul className="text-xs space-y-1">
                  <li>• Kiểm tra thư mục Spam/Junk</li>
                  <li>• Đợi vài phút để email được gửi</li>
                  <li>• Đảm bảo địa chỉ email chính xác</li>
                </ul>
              </div>

              <div className="pt-4 space-y-3">
                <Button 
                  onClick={() => {
                    setIsSuccess(false);
                    setEmail("");
                  }}
                  variant="outline" 
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  Thử lại với email khác
                </Button>
                
                <Link to="/login">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Quay lại Đăng nhập
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,200,255,0.1)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(120,200,255,0.1)_0%,_transparent_50%)]"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Quay lại đăng nhập
            </Button>
          </Link>
        </div>

        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-full">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl text-white">Quên mật khẩu?</CardTitle>
            <CardDescription className="text-slate-400">
              Nhập email của bạn để nhận hướng dẫn đặt lại mật khẩu
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert className="border-red-500 bg-red-500/10">
                  <AlertDescription className="text-red-400">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">Địa chỉ Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@smartsecure.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Đang gửi..." : "Gửi yêu cầu"}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-700">
              <div className="text-center">
                <p className="text-sm text-slate-400 mb-2">Nhớ mật khẩu rồi?</p>
                <Link to="/login">
                  <Button variant="ghost" className="text-blue-400 hover:text-blue-300">
                    Quay lại đăng nhập
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-500">
            Liên kết đặt lại mật khẩu sẽ hết hạn sau 24 giờ vì lý do bảo mật
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
