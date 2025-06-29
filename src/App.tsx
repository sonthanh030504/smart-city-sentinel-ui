
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import AuthGuard from "./components/AuthGuard";

// Public Pages
import Index from "./pages/Index";
import MapExplorer from "./pages/MapExplorer";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import NotFound from "./pages/NotFound";

// Admin Pages
import Dashboard from "./pages/admin/Dashboard";
import LiveMap from "./pages/admin/LiveMap";
import Investigation from "./pages/admin/Investigation";
import Analytics from "./pages/admin/Analytics";
import Alerts from "./pages/admin/Alerts";
import Management from "./pages/admin/Management";
import Profile from "./pages/admin/Profile";

// Citizen Pages
import CitizenDashboard from "./pages/citizen/Dashboard";
import Vehicles from "./pages/citizen/Vehicles";
import VehicleDetail from "./pages/citizen/VehicleDetail";
import CitizenProfile from "./pages/citizen/Profile";
import Violations from "./pages/citizen/Violations";
import Notifications from "./pages/citizen/Notifications";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="smartsecure-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/map-explorer" element={<MapExplorer />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            
            {/* Citizen Routes */}
            <Route path="/citizen/dashboard" element={
              <AuthGuard>
                <CitizenDashboard />
              </AuthGuard>
            } />
            
            <Route path="/citizen/vehicles" element={
              <AuthGuard>
                <Vehicles />
              </AuthGuard>
            } />
            
            <Route path="/citizen/vehicles/:vehicleId" element={
              <AuthGuard>
                <VehicleDetail />
              </AuthGuard>
            } />
            
            <Route path="/citizen/profile" element={
              <AuthGuard>
                <CitizenProfile />
              </AuthGuard>
            } />
            
            <Route path="/citizen/violations" element={
              <AuthGuard>
                <Violations />
              </AuthGuard>
            } />
            
            <Route path="/citizen/notifications" element={
              <AuthGuard>
                <Notifications />
              </AuthGuard>
            } />
            
            {/* Protected Admin Routes */}
            <Route path="/admin/dashboard" element={
              <AuthGuard>
                <Dashboard />
              </AuthGuard>
            } />
            
            <Route path="/admin/live-map" element={
              <AuthGuard>
                <LiveMap />
              </AuthGuard>
            } />
            
            <Route path="/admin/investigation" element={
              <AuthGuard>
                <Investigation />
              </AuthGuard>
            } />

            <Route path="/admin/analytics" element={
              <AuthGuard>
                <Analytics />
              </AuthGuard>
            } />

            <Route path="/admin/alerts" element={
              <AuthGuard>
                <Alerts />
              </AuthGuard>
            } />

            <Route path="/admin/management" element={
              <AuthGuard>
                <Management />
              </AuthGuard>
            } />

            <Route path="/admin/profile" element={
              <AuthGuard>
                <Profile />
              </AuthGuard>
            } />
            
            {/* Placeholder for future admin routes */}
            <Route path="/admin/*" element={
              <AuthGuard>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h1 className="text-2xl font-bold mb-4">Trang đang phát triển</h1>
                    <p className="text-slate-400">Tính năng này sẽ được bổ sung trong phiên bản tiếp theo</p>
                  </div>
                </div>
              </AuthGuard>
            } />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
