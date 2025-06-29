
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/ThemeToggle';
import { 
  Home, 
  Car, 
  AlertTriangle, 
  Map, 
  FileText, 
  Bell, 
  User, 
  Settings, 
  LogOut,
  Shield,
  Menu,
  X
} from 'lucide-react';

const sidebarItems = [
  { href: '/citizen/dashboard', icon: Home, label: 'Bảng tin của tôi' },
  { href: '/citizen/vehicles', icon: Car, label: 'Phương tiện của tôi' },
  { href: '/citizen/violations', icon: AlertTriangle, label: 'Vi phạm Giao thông' },
  { href: '/map-explorer', icon: Map, label: 'Bản đồ Giao thông' },
  { href: '/blog', icon: FileText, label: 'Blog & Tin tức' },
];

interface CitizenLayoutProps {
  children: React.ReactNode;
}

const CitizenLayout: React.FC<CitizenLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notificationCount] = useState(3);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic đăng xuất
    navigate('/login');
  };

  const switchToAdmin = () => {
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="flex h-16 items-center px-4">
          {/* Logo & Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <Link to="/citizen/dashboard" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Shield className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold">SmartSecure</span>
            </Link>
          </div>

          {/* Right Side */}
          <div className="ml-auto flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Switch to Admin */}
            <Button variant="outline" size="sm" onClick={switchToAdmin}>
              <Shield className="h-4 w-4 mr-2" />
              Chế độ Quản trị
            </Button>

            {/* Notifications */}
            <Link to="/citizen/notifications">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {notificationCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {notificationCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>ND</AvatarFallback>
                  </Avatar>
                  <div className="text-left hidden sm:block">
                    <p className="text-sm font-medium">Nguyễn Văn A</p>
                    <Badge variant="secondary" className="text-xs">
                      VNeID Verified
                    </Badge>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/citizen/profile">
                    <User className="h-4 w-4 mr-2" />
                    Hồ sơ Định danh số
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="h-4 w-4 mr-2" />
                  Cài đặt
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Đăng xuất
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${
          sidebarOpen ? 'w-64' : 'w-0 md:w-16'
        } transition-all duration-300 border-r bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50 overflow-hidden`}>
          <nav className="p-4 space-y-2">
            {sidebarItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {sidebarOpen && <span className="whitespace-nowrap">{item.label}</span>}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default CitizenLayout;
