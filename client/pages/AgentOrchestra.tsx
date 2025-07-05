import Navigation from "@/components/Navigation";

const AgentOrchestra = () => {
  const agents = [
    { name: "Traffic Flow Agent", status: "Active", type: "Traffic" },
    { name: "Weather Prediction Agent", status: "Active", type: "Weather" },
    { name: "Emergency Response Agent", status: "Standby", type: "Emergency" },
    { name: "Personal Assistant Agent", status: "Active", type: "Personal" },
    {
      name: "Infrastructure Monitor",
      status: "Active",
      type: "Infrastructure",
    },
    { name: "Route Optimization Agent", status: "Standby", type: "Traffic" },
    { name: "Event Coordination Agent", status: "Standby", type: "Events" },
    { name: "Security Monitoring Agent", status: "Active", type: "Security" },
    { name: "Energy Management Agent", status: "Standby", type: "Energy" },
    { name: "Waste Management Agent", status: "Standby", type: "Waste" },
    { name: "Public Transport Agent", status: "Active", type: "Transport" },
    { name: "Parking Management Agent", status: "Active", type: "Parking" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Agent Orchestra
          </h1>
          <p className="text-muted-foreground">
            AI agent coordination and management center
          </p>
        </div>

        {/* Coordination Status */}
        <div className="mb-6 p-4 border border-border bg-card">
          <h2 className="text-lg font-semibold text-foreground mb-2">
            Live Coordination Status
          </h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-black rounded-full animate-pulse" />
              <span className="text-sm text-foreground">
                7 agents coordinating
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              Last sync: 2 seconds ago
            </div>
          </div>
        </div>

        {/* Agent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {agents.map((agent, index) => (
            <div key={index} className="p-4 border border-border bg-card">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-foreground">
                    {agent.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{agent.type}</p>
                </div>
                <div
                  className={`px-2 py-1 text-xs ${
                    agent.status === "Active"
                      ? "bg-black text-white"
                      : "bg-secondary text-foreground"
                  }`}
                >
                  {agent.status}
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                {agent.status === "Active"
                  ? "Processing requests"
                  : "On standby"}
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Controls */}
        <div className="p-6 border border-border bg-card">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Emergency Override Controls
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-3 border border-border bg-background text-foreground hover:bg-secondary transition-colors">
              Activate All Agents
            </button>
            <button className="p-3 border border-border bg-background text-foreground hover:bg-secondary transition-colors">
              Emergency Protocol
            </button>
            <button className="p-3 border border-border bg-background text-foreground hover:bg-secondary transition-colors">
              System Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentOrchestra;
