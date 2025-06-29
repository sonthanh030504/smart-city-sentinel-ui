
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, Shield, Eye, EyeOff, CheckCircle, AlertTriangle } from "lucide-react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isValidToken, setIsValidToken] = useState(true);

  useEffect(() => {
    const tokenParam = searchParams.get("token");
    if (tokenParam) {
      setToken(tokenParam);
      // In a real app, you would validate the token here
      setIsValidToken(true);
    } else {
      setIsValidToken(false);
    }
  }, [searchParams]);

  const validatePassword = (pwd: string) => {
    if (pwd.length < 8) return "Mật khẩu phải có ít nhất 8 ký tự";
    if (!/(?=.*[a-z])/.test(pwd)) return "Mật khẩu phải có ít nhất 1 chữ thường";
    if (!/(?=.*[A-Z])/.test(pwd)) return "Mật khẩu phải có ít nhất 1 chữ hoa";
    if (!/(?=.*\d)/.test(pwd)) return "Mật khẩu phải có ít nhất 1 số";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Validate password
    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp");
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setIsSuccess(true);
      console.log("Password reset successful for token:", token);
      setIsLoading(false);
    }, 1000);
  };

  if (!isValidToken) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
        <div className="relative w-full max-w-md">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-md">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-red-600 to-orange-600 p-3 rounded-full">
                  <AlertTriangle className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl text-white">Liên kết không hợp lệ</CardTitle>
              <CardDescription className="text-slate-400">
                Liên kết đặt lại mật khẩu không hợp lệ hoặc đã hết hạn
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <Alert className="border-red-500 bg-red-500/10">
                <AlertDescription className="text-red-400">
                  Liên kết này có thể đã được sử dụng hoặc đã hết hạn. 
                  Vui lòng yêu cầu đặt lại mật khẩu mới.
                </AlertDescription>
              </Alert>
              
              <div className="pt-4 space-y-3">
                <Link to="/forgot-password">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                    Yêu cầu đặt lại mật khẩu mới
                  </Button>
                </Link>
                
                <Link to="/login">
                  <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-700">
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

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
        <div className="relative w-full max-w-md">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-md">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-3 rounded-full">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl text-white">Đặt lại thành công!</CardTitle>
              <CardDescription className="text-slate-400">
                Mật khẩu của bạn đã được cập nhật
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <Alert className="border-green-500 bg-green-500/10">
                <AlertDescription className="text-green-400">
                  Mật khẩu đã được đặt lại thành công! Bạn có thể sử dụng mật khẩu mới để đăng nhập.
                </AlertDescription>
              </Alert>
              
              <div className="pt-4">
                <Button 
                  onClick={() => navigate("/login")}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                >
                  Đăng nhập ngay
                </Button>
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
            <CardTitle className="text-2xl text-white">Đặt lại mật khẩu</CardTitle>
            <CardDescription className="text-slate-400">
              Nhập mật khẩu mới để hoàn tất quá trình đặt lại
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
                <Label htmlFor="password" className="text-slate-300">Mật khẩu mới</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Nhập mật khẩu mới"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400 pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 text-slate-400 hover:text-white"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-slate-300">Xác nhận mật khẩu mới</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Nhập lại mật khẩu mới"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400 pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 text-slate-400 hover:text-white"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {/* Password Requirements */}
              <div className="text-xs text-slate-400 space-y-1">
                <p>Mật khẩu phải có:</p>
                <ul className="space-y-1 ml-4">
                  <li className={password.length >= 8 ? 'text-green-400' : ''}>• Ít nhất 8 ký tự</li>
                  <li className={/(?=.*[a-z])/.test(password) ? 'text-green-400' : ''}>• Ít nhất 1 chữ thường</li>
                  <li className={/(?=.*[A-Z])/.test(password) ? 'text-green-400' : ''}>• Ít nhất 1 chữ hoa</li>
                  <li className={/(?=.*\d)/.test(password) ? 'text-green-400' : ''}>• Ít nhất 1 số</li>
                </ul>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Đang cập nhật..." : "Đặt lại mật khẩu"}
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
            Mật khẩu mới sẽ có hiệu lực ngay sau khi đặt lại thành công
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
