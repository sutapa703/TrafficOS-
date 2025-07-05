import BottomNavigation from "@/components/BottomNavigation";

const BusinessDashboard = () => {
  const employeeMetrics = [
    { label: "Employees on Route", value: "127", change: "+5" },
    { label: "Avg Commute Time", value: "32 min", change: "-3 min" },
    { label: "Late Arrivals", value: "3", change: "-8" },
    { label: "Transport Cost", value: "₹45,200", change: "-12%" },
  ];

  const fleetStatus = [
    {
      vehicle: "Bus BN-01",
      route: "Electronic City",
      capacity: "45/50",
      status: "On Time",
    },
    {
      vehicle: "Bus BN-02",
      route: "Whitefield",
      capacity: "38/50",
      status: "Delayed 5 min",
    },
    {
      vehicle: "Bus BN-03",
      route: "Koramangala",
      capacity: "42/50",
      status: "On Time",
    },
  ];

  const alerts = [
    {
      type: "Route Optimization",
      message: "Alternative route available for Whitefield - save 8 minutes",
      time: "5 min ago",
      priority: "Medium",
    },
    {
      type: "Weather Alert",
      message: "Rain expected - adjust pickup times for 15 employees",
      time: "12 min ago",
      priority: "High",
    },
    {
      type: "Traffic Update",
      message: "Heavy traffic on ORR - rerouting Bus BN-02",
      time: "8 min ago",
      priority: "Medium",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Business Transport Hub
          </h1>
          <p className="text-muted-foreground">
            Employee commute management & optimization
          </p>
        </div>

        {/* Key Metrics */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Today's Metrics
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {employeeMetrics.map((metric, index) => (
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

        {/* Fleet Status */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Fleet Status
          </h2>
          <div className="space-y-2">
            {fleetStatus.map((vehicle, index) => (
              <div key={index} className="p-3 border border-border bg-card">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {vehicle.vehicle}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Route: {vehicle.route}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">
                      {vehicle.capacity}
                    </p>
                    <span
                      className={`px-2 py-1 text-xs ${
                        vehicle.status === "On Time"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {vehicle.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Alerts */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Smart Alerts
          </h2>
          <div className="space-y-2">
            {alerts.map((alert, index) => (
              <div key={index} className="p-3 border border-border bg-card">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-xs font-medium bg-secondary px-2 py-1">
                        {alert.type}
                      </span>
                      <span
                        className={`px-2 py-1 text-xs ${
                          alert.priority === "High"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {alert.priority}
                      </span>
                    </div>
                    <p className="text-sm text-foreground">{alert.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {alert.time}
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
              <div className="text-xl mb-2">🚌</div>
              <div className="text-sm font-medium text-foreground">
                Add Route
              </div>
            </div>
          </button>
          <button className="p-4 border border-border bg-card hover:bg-secondary transition-colors">
            <div className="text-center">
              <div className="text-xl mb-2">📊</div>
              <div className="text-sm font-medium text-foreground">
                View Reports
              </div>
            </div>
          </button>
        </div>
      </div>

      <BottomNavigation userType="business" />
    </div>
  );
};

export default BusinessDashboard;
