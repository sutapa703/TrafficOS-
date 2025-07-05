import BottomNavigation from "@/components/BottomNavigation";

const PoliceDashboard = () => {
  const trafficMetrics = [
    { label: "Active Violations", value: "23", change: "-5" },
    { label: "Traffic Volume", value: "High", change: "Normal" },
    { label: "Response Time", value: "4.2 min", change: "-0.8 min" },
    { label: "Officers on Duty", value: "47", change: "+3" },
  ];

  const activeIncidents = [
    {
      id: "TF001",
      type: "Overspeeding",
      location: "MG Road Junction",
      priority: "Medium",
      time: "2 min ago",
    },
    {
      id: "TF002",
      type: "Signal Jump",
      location: "Brigade Road",
      priority: "High",
      time: "5 min ago",
    },
    {
      id: "TF003",
      type: "Wrong Parking",
      location: "Commercial Street",
      priority: "Low",
      time: "12 min ago",
    },
  ];

  const patrolUnits = [
    {
      unit: "TPU-01",
      location: "CBD Area",
      status: "Patrol",
      officer: "Constable Kumar",
    },
    {
      unit: "TPU-02",
      location: "Ring Road",
      status: "Responding",
      officer: "Constable Sharma",
    },
    {
      unit: "TPU-03",
      location: "Airport Road",
      status: "Available",
      officer: "Constable Reddy",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Traffic Police Command
          </h1>
          <p className="text-muted-foreground">
            Real-time traffic enforcement & incident management
          </p>
        </div>

        {/* Traffic Metrics */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Traffic Status
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {trafficMetrics.map((metric, index) => (
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

        {/* Active Incidents */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Active Violations
          </h2>
          <div className="space-y-2">
            {activeIncidents.map((incident) => (
              <div
                key={incident.id}
                className="p-3 border border-border bg-card"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono bg-secondary px-2 py-1">
                      {incident.id}
                    </span>
                    <span
                      className={`px-2 py-1 text-xs ${
                        incident.priority === "High"
                          ? "bg-red-100 text-red-800"
                          : incident.priority === "Medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {incident.priority}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {incident.time}
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground">
                  {incident.type} - {incident.location}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Patrol Units */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Patrol Units
          </h2>
          <div className="space-y-2">
            {patrolUnits.map((unit, index) => (
              <div key={index} className="p-3 border border-border bg-card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {unit.unit} - {unit.officer}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {unit.location}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs ${
                      unit.status === "Available"
                        ? "bg-green-100 text-green-800"
                        : unit.status === "Responding"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {unit.status}
                  </span>
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
                Report Incident
              </div>
            </div>
          </button>
          <button className="p-4 border border-border bg-card hover:bg-secondary transition-colors">
            <div className="text-center">
              <div className="text-xl mb-2">📋</div>
              <div className="text-sm font-medium text-foreground">
                Issue Challan
              </div>
            </div>
          </button>
        </div>
      </div>

      <BottomNavigation userType="police" />
    </div>
  );
};

export default PoliceDashboard;
