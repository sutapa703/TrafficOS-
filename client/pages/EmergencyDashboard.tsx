import BottomNavigation from "@/components/BottomNavigation";

const EmergencyDashboard = () => {
  const activeIncidents = [
    {
      id: "EM001",
      type: "Medical",
      location: "MG Road",
      priority: "High",
      eta: "3 min",
    },
    {
      id: "EM002",
      type: "Fire",
      location: "Brigade Road",
      priority: "Critical",
      eta: "5 min",
    },
    {
      id: "EM003",
      type: "Accident",
      location: "Ring Road",
      priority: "Medium",
      eta: "8 min",
    },
  ];

  const units = [
    {
      id: "AMB-01",
      type: "Ambulance",
      status: "En Route",
      location: "MG Road",
    },
    {
      id: "FIRE-02",
      type: "Fire Truck",
      status: "Available",
      location: "Station 5",
    },
    { id: "POL-15", type: "Police", status: "Patrol", location: "CBD Area" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <h1 className="text-2xl font-bold text-foreground">
              Emergency Control
            </h1>
          </div>
          <p className="text-muted-foreground">Real-time incident management</p>
        </div>

        {/* Active Incidents */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Active Incidents
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
                        incident.priority === "Critical"
                          ? "bg-red-100 text-red-800"
                          : incident.priority === "High"
                            ? "bg-orange-100 text-orange-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {incident.priority}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ETA: {incident.eta}
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground">
                  {incident.type} - {incident.location}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Unit Status */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Unit Status
          </h2>
          <div className="space-y-2">
            {units.map((unit) => (
              <div key={unit.id} className="p-3 border border-border bg-card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {unit.id} - {unit.type}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {unit.location}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs ${
                      unit.status === "En Route"
                        ? "bg-orange-100 text-orange-800"
                        : unit.status === "Available"
                          ? "bg-green-100 text-green-800"
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

        {/* Emergency Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button className="p-4 border border-border bg-red-50 hover:bg-red-100 transition-colors">
            <div className="text-center">
              <div className="text-xl mb-2">🚨</div>
              <div className="text-sm font-medium text-foreground">
                New Incident
              </div>
            </div>
          </button>
          <button className="p-4 border border-border bg-card hover:bg-secondary transition-colors">
            <div className="text-center">
              <div className="text-xl mb-2">📡</div>
              <div className="text-sm font-medium text-foreground">
                Dispatch Unit
              </div>
            </div>
          </button>
        </div>
      </div>

      <BottomNavigation userType="emergency" />
    </div>
  );
};

export default EmergencyDashboard;
