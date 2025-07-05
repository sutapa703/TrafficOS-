import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Landing & Auth pages
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import Explore from "./pages/Explore";

// Dashboard pages
import CitizenDashboard from "./pages/CitizenDashboard";
import TouristDashboard from "./pages/TouristDashboard";
import EmergencyDashboard from "./pages/EmergencyDashboard";
import TransportDashboard from "./pages/TransportDashboard";
import BusinessDashboard from "./pages/BusinessDashboard";
import PoliceDashboard from "./pages/PoliceDashboard";
import GovernmentDashboard from "./pages/GovernmentDashboard";

// Legacy pages (for reference/demo)
import Navigation from "@/components/Navigation";
import Dashboard from "./pages/Dashboard";
import TripPlanner from "./pages/TripPlanner";
import PredictionFeed from "./pages/PredictionFeed";
import AgentOrchestra from "./pages/AgentOrchestra";
import PersonalAlerts from "./pages/PersonalAlerts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Landing & Auth Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/explore" element={<Explore />} />

          {/* User Type Dashboards */}
          <Route path="/citizen-dashboard" element={<CitizenDashboard />} />
          <Route path="/tourist-dashboard" element={<TouristDashboard />} />
          <Route path="/emergency-dashboard" element={<EmergencyDashboard />} />
          <Route path="/transport-dashboard" element={<TransportDashboard />} />
          <Route path="/business-dashboard" element={<BusinessDashboard />} />
          <Route path="/police-dashboard" element={<PoliceDashboard />} />
          <Route
            path="/government-dashboard"
            element={<GovernmentDashboard />}
          />

          {/* Legacy Demo Routes with Navigation */}
          <Route
            path="/demo/*"
            element={
              <div className="min-h-screen bg-background">
                <Navigation />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/trip-planner" element={<TripPlanner />} />
                  <Route path="/predictions" element={<PredictionFeed />} />
                  <Route path="/agents" element={<AgentOrchestra />} />
                  <Route path="/alerts" element={<PersonalAlerts />} />
                </Routes>
              </div>
            }
          />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
