
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        {/* 404 Text with Glow Effect */}
        <div className="mb-8">
          <h1 className="text-8xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent mb-4">
            404
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Trang không tồn tại
          </h2>
          <p className="text-slate-400 mb-2">
            Rất tiếc, chúng tôi không thể tìm thấy trang bạn đang tìm kiếm.
          </p>
          <p className="text-sm text-slate-500">
            URL: <code className="bg-slate-800 px-2 py-1 rounded">{location.pathname}</code>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
              <Home className="h-4 w-4 mr-2" />
              Về trang chủ
            </Button>
          </Link>
          <Button
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-800 px-6 py-3"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại
          </Button>
        </div>

        {/* Help Text */}
        <div className="mt-8 pt-6 border-t border-slate-700">
          <p className="text-xs text-slate-500">
            Nếu bạn cho rằng đây là lỗi, vui lòng liên hệ với quản trị viên
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
