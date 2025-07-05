import { useState, useEffect } from "react";
import BottomNavigation from "@/components/BottomNavigation";

const CitizenDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const quickActions = [
    {
      title: "Plan Trip",
      description: "Get optimized routes",
      icon: "🗺️",
      stat: "Save 8 min avg",
    },
    {
      title: "Traffic Status",
      description: "Live traffic updates",
      icon: "🚦",
      stat: "Light traffic",
    },
    {
      title: "Parking",
      description: "Find nearby spots",
      icon: "🅿️",
      stat: "12 available",
    },
    {
      title: "Public Transport",
      description: "Bus & metro times",
      icon: "🚌",
      stat: "On time",
    },
  ];

  const recentTrips = [
    { from: "Home", to: "Office", time: "8:30 AM", duration: "25 min" },
    { from: "Office", to: "Mall", time: "6:15 PM", duration: "18 min" },
    { from: "Mall", to: "Home", time: "8:45 PM", duration: "22 min" },
  ];

  const communityReports = [
    {
      user: "Rajesh K.",
      report: "Heavy traffic jam on Outer Ring Road near Marathahalli",
      time: "3 min ago",
      type: "Traffic",
      verified: true,
    },
    {
      user: "Priya M.",
      report: "Minor accident at Silk Board junction, lane blocked",
      time: "8 min ago",
      type: "Accident",
      verified: false,
    },
    {
      user: "Suresh R.",
      report: "Road construction started on Hosur Road",
      time: "15 min ago",
      type: "Construction",
      verified: true,
    },
  ];

  const comboSuggestions = [
    {
      destination: "Electronic City",
      combo: "Auto + Metro",
      time: "45 min",
      cost: "₹85",
      savings: "Save 15 min",
    },
    {
      destination: "Whitefield",
      combo: "Bus + Metro",
      time: "52 min",
      cost: "₹35",
      savings: "Save ₹40",
    },
    {
      destination: "Airport",
      combo: "Metro + Bus",
      time: "65 min",
      cost: "₹95",
      savings: "Save 25 min",
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
                Welcome Back
              </h1>
              <p className="text-muted-foreground">
                Your daily commute assistant
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">
                {currentTime.toLocaleDateString()}
              </div>
              <div className="text-lg font-semibold text-foreground">
                {currentTime.toLocaleTimeString()}
              </div>
            </div>
          </div>

          {/* Status Bar */}
          <div className="p-3 border border-border bg-card">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm text-foreground">
                  All systems normal
                </span>
              </div>
              <span className="text-xs text-muted-foreground">
                Current: MG Road, Bangalore
              </span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action, index) => (
              <div
                key={index}
                className="p-4 border border-border bg-card hover:bg-secondary transition-colors"
              >
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">{action.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-sm">
                      {action.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-1">
                      {action.description}
                    </p>
                    <div className="text-xs text-muted-foreground">
                      {action.stat}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CO2 Alert */}
        <div className="mb-6 p-3 border border-orange-200 bg-orange-50">
          <div className="flex items-start space-x-2">
            <span className="text-sm">🫁</span>
            <div>
              <p className="text-sm font-medium text-orange-800">
                High CO2 Alert: Avoid MG Road route
              </p>
              <p className="text-xs text-orange-600">
                Air quality poor due to heavy traffic. Consider alternate routes
                for respiratory health.
              </p>
            </div>
          </div>
        </div>

        {/* Live Updates */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Live Updates
          </h2>
          <div className="space-y-2">
            <div className="p-3 border border-border bg-card">
              <div className="flex items-start space-x-2">
                <span className="text-sm">🚧</span>
                <div>
                  <p className="text-sm text-foreground">
                    Construction on Brigade Road - alternate route suggested
                  </p>
                  <span className="text-xs text-muted-foreground">
                    2 min ago
                  </span>
                </div>
              </div>
            </div>
            <div className="p-3 border border-border bg-card">
              <div className="flex items-start space-x-2">
                <span className="text-sm">☔</span>
                <div>
                  <p className="text-sm text-foreground">
                    Light rain expected in 15 minutes
                  </p>
                  <span className="text-xs text-muted-foreground">
                    5 min ago
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Reports */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-foreground">
              Community Reports
            </h2>
            <button className="text-xs bg-black text-white px-3 py-1">
              + Report
            </button>
          </div>
          <div className="space-y-2">
            {communityReports.map((report, index) => (
              <div key={index} className="p-3 border border-border bg-card">
                <div className="flex items-start justify-between mb-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-medium">{report.user}</span>
                    <span
                      className={`px-2 py-1 text-xs ${
                        report.type === "Traffic"
                          ? "bg-red-100 text-red-800"
                          : report.type === "Accident"
                            ? "bg-orange-100 text-orange-800"
                            : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {report.type}
                    </span>
                    {report.verified && (
                      <span className="text-xs text-green-600">✓ Verified</span>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {report.time}
                  </span>
                </div>
                <p className="text-sm text-foreground">{report.report}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Combo Ride Suggestions */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Smart Combo Rides
          </h2>
          <div className="space-y-2">
            {comboSuggestions.map((combo, index) => (
              <div key={index} className="p-3 border border-border bg-card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      To {combo.destination}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {combo.combo} • {combo.time} • {combo.cost}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-green-600">{combo.savings}</p>
                    <button className="text-xs bg-secondary px-2 py-1 mt-1">
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Trips */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Recent Trips
          </h2>
          <div className="space-y-2">
            {recentTrips.map((trip, index) => (
              <div key={index} className="p-3 border border-border bg-card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {trip.from} → {trip.to}
                    </p>
                    <p className="text-xs text-muted-foreground">{trip.time}</p>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {trip.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-border pt-4 mt-6">
          <p className="text-xs text-muted-foreground">
            ©TrafficOS 2025. All rights reserved.
          </p>
        </div>
      </div>

      <BottomNavigation userType="citizen" />
    </div>
  );
};

export default CitizenDashboard;
