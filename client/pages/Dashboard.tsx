import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [pulseAnimation, setPulseAnimation] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseAnimation(!pulseAnimation);
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [pulseAnimation]);

  const actionCards = [
    {
      title: "Plan Trip",
      description: "AI-optimized route planning",
      icon: "→",
      link: "/trip-planner",
      stat: "8 min avg savings",
    },
    {
      title: "Live Predictions",
      description: "Real-time city intelligence",
      icon: "◆",
      link: "/predictions",
      stat: "12 active alerts",
    },
    {
      title: "Agent Orchestra",
      description: "AI coordination center",
      icon: "●",
      link: "/agents",
      stat: "3 agents active",
    },
    {
      title: "Personal Alerts",
      description: "Customized notifications",
      icon: "!",
      link: "/alerts",
      stat: "2 pending",
    },
  ];

  const quickStats = [
    { label: "Agents Active", value: "3" },
    { label: "Traffic Status", value: "Optimized" },
    { label: "Delays Predicted", value: "0" },
    { label: "Citizens Served", value: "3.2M" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              City Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Current Location: MG Road, Bangalore
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

        {/* Live City Pulse */}
        <div className="flex items-center space-x-4 p-4 border border-border bg-card">
          <div className="flex items-center space-x-2">
            <div
              className={`w-3 h-3 bg-black rounded-full transition-all duration-300 ${
                pulseAnimation ? "scale-125" : "scale-100"
              }`}
            />
            <span className="text-sm font-medium text-foreground">
              City Pulse
            </span>
          </div>
          <div className="text-sm text-muted-foreground">
            All systems operational
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {quickStats.map((stat, index) => (
          <div key={index} className="p-4 border border-border bg-card">
            <div className="text-sm text-muted-foreground">{stat.label}</div>
            <div className="text-lg font-semibold text-foreground">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {actionCards.map((card, index) => (
          <Link
            key={index}
            to={card.link}
            className="group p-6 border border-border bg-card hover:bg-secondary transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{card.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">{card.stat}</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground">Tap to access</div>
              <div className="text-sm">→</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Success Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 text-center border border-border bg-card">
          <div className="text-xl font-bold text-foreground">99%</div>
          <div className="text-xs text-muted-foreground">Trips Optimized</div>
        </div>
        <div className="p-4 text-center border border-border bg-card">
          <div className="text-xl font-bold text-foreground">8 min</div>
          <div className="text-xs text-muted-foreground">Avg Time Savings</div>
        </div>
        <div className="p-4 text-center border border-border bg-card">
          <div className="text-xl font-bold text-foreground">0</div>
          <div className="text-xs text-muted-foreground">Stress Commutes</div>
        </div>
        <div className="p-4 text-center border border-border bg-card">
          <div className="text-xl font-bold text-foreground">3.2M</div>
          <div className="text-xs text-muted-foreground">Citizens Served</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
