
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthGuard from "./components/AuthGuard";

// Public Pages
import Index from "./pages/Index";
import MapExplorer from "./pages/MapExplorer";
import About from "./pages/About";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// Admin Pages
import Dashboard from "./pages/admin/Dashboard";
import LiveMap from "./pages/admin/LiveMap";
import Investigation from "./pages/admin/Investigation";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/map-explorer" element={<MapExplorer />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          
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
  </QueryClientProvider>
);

export default App;
