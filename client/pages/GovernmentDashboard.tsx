import { useState, useEffect } from "react";
import BottomNavigation from "@/components/BottomNavigation";

const GovernmentDashboard = () => {
  const [pulseAnimation, setPulseAnimation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseAnimation(!pulseAnimation);
    }, 1000);
    return () => clearInterval(interval);
  }, [pulseAnimation]);

  const cityMetrics = [
    { label: "Active Vehicles", value: "48,392", change: "+2.3%" },
    { label: "Traffic Efficiency", value: "94.2%", change: "+1.8%" },
    { label: "Emergency Response", value: "2.4 min", change: "-0.5 min" },
    { label: "System Uptime", value: "99.7%", change: "+0.1%" },
  ];

  const systemStatus = [
    { system: "Traffic Control", status: "Operational", agents: 12 },
    { system: "Emergency Services", status: "Operational", agents: 8 },
    { system: "Public Transport", status: "Operational", agents: 15 },
    { system: "Weather Integration", status: "Operational", agents: 4 },
    { system: "Parking Management", status: "Maintenance", agents: 6 },
  ];

  const alerts = [
    {
      level: "High",
      message: "Traffic congestion building on Ring Road",
      time: "2 min ago",
      action: "Auto-rerouting active",
    },
    {
      level: "Medium",
      message: "Weather alert: Rain in 20 minutes",
      time: "8 min ago",
      action: "Traffic lights adjusted",
    },
    {
      level: "Low",
      message: "Scheduled maintenance completed",
      time: "15 min ago",
      action: "System fully operational",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Government Control Center
              </h1>
              <p className="text-muted-foreground">
                Citywide traffic management system
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div
                className={`w-3 h-3 bg-green-500 rounded-full transition-all duration-300 ${
                  pulseAnimation ? "scale-125" : "scale-100"
                }`}
              />
              <span className="text-sm font-medium text-foreground">
                System Active
              </span>
            </div>
          </div>
        </div>

        {/* City Metrics */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">
            City Metrics
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {cityMetrics.map((metric, index) => (
              <div key={index} className="p-4 border border-border bg-card">
                <div className="text-xs text-muted-foreground mb-1">
                  {metric.label}
                </div>
                <div className="text-lg font-bold text-foreground">
                  {metric.value}
                </div>
                <div className="text-xs text-green-600">{metric.change}</div>
              </div>
            ))}
          </div>
        </div>

        {/* System Status */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">
            System Status
          </h2>
          <div className="space-y-2">
            {systemStatus.map((system, index) => (
              <div key={index} className="p-3 border border-border bg-card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {system.system}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {system.agents} agents
                    </p>
                  </div>
                  <div
                    className={`px-2 py-1 text-xs ${
                      system.status === "Operational"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {system.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Alerts */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Active Alerts
          </h2>
          <div className="space-y-2">
            {alerts.map((alert, index) => (
              <div key={index} className="p-3 border border-border bg-card">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span
                        className={`px-2 py-1 text-xs ${
                          alert.level === "High"
                            ? "bg-red-100 text-red-800"
                            : alert.level === "Medium"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {alert.level}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {alert.time}
                      </span>
                    </div>
                    <p className="text-sm text-foreground">{alert.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Action: {alert.action}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button className="p-4 border border-border bg-card hover:bg-secondary transition-colors">
            <div className="text-center">
              <div className="text-xl mb-2">🚨</div>
              <div className="text-sm font-medium text-foreground">
                Emergency Override
              </div>
            </div>
          </button>
          <button className="p-4 border border-border bg-card hover:bg-secondary transition-colors">
            <div className="text-center">
              <div className="text-xl mb-2">📊</div>
              <div className="text-sm font-medium text-foreground">
                Full Analytics
              </div>
            </div>
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-border pt-4 mt-6">
          <p className="text-xs text-muted-foreground">
            ©TrafficOS 2025. All rights reserved.
          </p>
        </div>
      </div>

      <BottomNavigation userType="government" />
    </div>
  );
};

export default GovernmentDashboard;
