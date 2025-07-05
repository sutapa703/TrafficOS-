import BottomNavigation from "@/components/BottomNavigation";

const TransportDashboard = () => {
  const systemMetrics = [
    { label: "Active Buses", value: "342", change: "+12" },
    { label: "Metro Lines", value: "4", change: "100%" },
    { label: "On-Time Performance", value: "94.8%", change: "+2.1%" },
    { label: "Daily Passengers", value: "2.1M", change: "+5.2%" },
  ];

  const routeStatus = [
    {
      line: "Purple Line",
      status: "Normal",
      delay: "0 min",
      passengers: "High",
    },
    {
      line: "Green Line",
      status: "Delayed",
      delay: "3 min",
      passengers: "Medium",
    },
    { line: "Blue Line", status: "Normal", delay: "0 min", passengers: "High" },
    {
      line: "Red Line",
      status: "Maintenance",
      delay: "N/A",
      passengers: "Diverted",
    },
  ];

  const incidents = [
    {
      type: "Technical Issue",
      location: "Majestic Station - Purple Line",
      status: "Resolving",
      time: "8 min ago",
    },
    {
      type: "Crowd Management",
      location: "MG Road Station - Green Line",
      status: "Monitoring",
      time: "15 min ago",
    },
    {
      type: "Schedule Adjustment",
      location: "Whitefield Terminal",
      status: "Completed",
      time: "32 min ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Transport Control Center
          </h1>
          <p className="text-muted-foreground">
            Public transport system management
          </p>
        </div>

        {/* System Metrics */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">
            System Overview
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {systemMetrics.map((metric, index) => (
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

        {/* Route Status */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Metro Line Status
          </h2>
          <div className="space-y-2">
            {routeStatus.map((route, index) => (
              <div key={index} className="p-3 border border-border bg-card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {route.line}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Passengers: {route.passengers}
                    </p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`px-2 py-1 text-xs ${
                        route.status === "Normal"
                          ? "bg-green-100 text-green-800"
                          : route.status === "Delayed"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {route.status}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1">
                      {route.delay !== "N/A"
                        ? `Delay: ${route.delay}`
                        : route.delay}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Incidents */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Active Incidents
          </h2>
          <div className="space-y-2">
            {incidents.map((incident, index) => (
              <div key={index} className="p-3 border border-border bg-card">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-xs font-medium bg-secondary px-2 py-1">
                        {incident.type}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {incident.time}
                      </span>
                    </div>
                    <p className="text-sm text-foreground">
                      {incident.location}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Status: {incident.status}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Control Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button className="p-4 border border-border bg-card hover:bg-secondary transition-colors">
            <div className="text-center">
              <div className="text-xl mb-2">🚇</div>
              <div className="text-sm font-medium text-foreground">
                Service Update
              </div>
            </div>
          </button>
          <button className="p-4 border border-border bg-card hover:bg-secondary transition-colors">
            <div className="text-center">
              <div className="text-xl mb-2">📢</div>
              <div className="text-sm font-medium text-foreground">
                Passenger Alert
              </div>
            </div>
          </button>
        </div>
      </div>

      <BottomNavigation userType="transport" />
    </div>
  );
};

export default TransportDashboard;
