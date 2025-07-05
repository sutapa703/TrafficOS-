const PersonalAlerts = () => {
  const alertCategories = [
    { name: "Traffic Updates", enabled: true },
    { name: "Weather Alerts", enabled: true },
    { name: "Emergency Notifications", enabled: true },
    { name: "Event Updates", enabled: false },
    { name: "Infrastructure Issues", enabled: true },
    { name: "Personal Reminders", enabled: false },
  ];

  const recentAlerts = [
    {
      title: "Route Optimization Available",
      message: "Faster route to work detected - save 5 minutes",
      time: "2 min ago",
      outcome: "Accepted",
    },
    {
      title: "Weather Advisory",
      message: "Rain expected in 15 minutes at your location",
      time: "8 min ago",
      outcome: "Acknowledged",
    },
    {
      title: "Parking Reminder",
      message: "Your parking expires in 30 minutes",
      time: "25 min ago",
      outcome: "Extended",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Personal Alerts
        </h1>
        <p className="text-muted-foreground">
          Customized notifications and smart suggestions
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Alert Categories */}
        <div className="space-y-6">
          <div className="p-6 border border-border bg-card">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Alert Categories
            </h2>
            <div className="space-y-3">
              {alertCategories.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-foreground">{category.name}</span>
                  <button
                    className={`w-12 h-6 border transition-colors ${
                      category.enabled
                        ? "bg-black border-black"
                        : "bg-background border-border"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 transition-transform ${
                        category.enabled
                          ? "bg-white translate-x-6"
                          : "bg-muted-foreground translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Smart Suggestions */}
          <div className="p-6 border border-border bg-card">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Smart Suggestions
            </h2>
            <div className="space-y-3">
              <div className="p-3 border border-border bg-secondary">
                <p className="text-sm text-foreground">
                  Leave 5 minutes early for your 2 PM meeting due to traffic
                </p>
                <div className="flex space-x-2 mt-2">
                  <button className="px-3 py-1 text-xs bg-black text-white">
                    Set Reminder
                  </button>
                  <button className="px-3 py-1 text-xs border border-border bg-background text-foreground">
                    Dismiss
                  </button>
                </div>
              </div>
              <div className="p-3 border border-border bg-secondary">
                <p className="text-sm text-foreground">
                  Coffee shop on your route has your usual order ready
                </p>
                <div className="flex space-x-2 mt-2">
                  <button className="px-3 py-1 text-xs bg-black text-white">
                    Add to Route
                  </button>
                  <button className="px-3 py-1 text-xs border border-border bg-background text-foreground">
                    Not Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alert History */}
        <div className="p-6 border border-border bg-card">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Alert History
          </h2>
          <div className="space-y-4">
            {recentAlerts.map((alert, index) => (
              <div
                key={index}
                className="p-3 border border-border bg-background"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-foreground">{alert.title}</h3>
                  <span className="text-xs text-muted-foreground">
                    {alert.time}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {alert.message}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Outcome: {alert.outcome}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalAlerts;
