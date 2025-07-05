import { Link } from "react-router-dom";

const SignUp = () => {
  const userTypes = [
    {
      type: "citizen",
      title: "Citizen",
      description: "Access daily commute optimization and city services",
      icon: "👤",
      route: "/citizen-dashboard",
    },
    {
      type: "tourist",
      title: "Tourist/Visitor",
      description: "Navigate the city with guided routes and attractions",
      icon: "🗺️",
      route: "/tourist-dashboard",
    },
    {
      type: "emergency",
      title: "Emergency Services",
      description: "Priority routing and emergency response coordination",
      icon: "🚑",
      route: "/emergency-dashboard",
    },
    {
      type: "transport",
      title: "Transport Authority",
      description: "Monitor and manage public transport systems",
      icon: "🚌",
      route: "/transport-dashboard",
    },
    {
      type: "business",
      title: "Business",
      description: "Optimize employee commutes and logistics",
      icon: "🏢",
      route: "/business-dashboard",
    },
    {
      type: "police",
      title: "Traffic Police",
      description: "Real-time traffic enforcement and incident management",
      icon: "👮",
      route: "/police-dashboard",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center bg-black text-white text-sm font-bold">
                TO
              </div>
              <span className="text-xl font-semibold text-foreground">
                TrafficOS
              </span>
            </Link>
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Choose Your Access Level
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select your role to access personalized TrafficOS features designed
            for your specific needs and responsibilities.
          </p>
        </div>

        {/* User Type Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {userTypes.map((user, index) => (
            <Link
              key={index}
              to={user.route}
              className="group p-6 border border-border bg-card hover:bg-secondary transition-colors"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{user.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary">
                  {user.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {user.description}
                </p>
              </div>
              <div className="mt-4 flex justify-center">
                <div className="px-4 py-2 bg-black text-white text-xs">
                  Sign Up
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Government Access */}
        <div className="border-t border-border pt-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Government Access
            </h2>
            <p className="text-muted-foreground">
              Administrative control panel for city management
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Link
              to="/government-dashboard"
              className="group block p-8 border border-border bg-card hover:bg-secondary transition-colors"
            >
              <div className="text-center">
                <div className="text-5xl mb-4">🏛️</div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary">
                  Government Portal
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Full system access, policy management, and citywide analytics
                </p>
                <div className="px-6 py-3 bg-black text-white">
                  Administrative Sign Up
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Already Have Account */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-foreground underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
