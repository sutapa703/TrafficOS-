import { Link, useLocation } from "react-router-dom";

interface BottomNavigationProps {
  userType?: string;
}

const BottomNavigation = ({ userType = "citizen" }: BottomNavigationProps) => {
  const location = useLocation();

  const getNavItems = (type: string) => {
    const basePath = `/${type}-dashboard`;

    switch (type) {
      case "citizen":
        return [
          { path: `${basePath}`, label: "Home", icon: "🏠" },
          { path: `${basePath}/trip`, label: "Trip", icon: "🗺️" },
          { path: `${basePath}/alerts`, label: "Alerts", icon: "🔔" },
          { path: `${basePath}/profile`, label: "Profile", icon: "👤" },
        ];
      case "tourist":
        return [
          { path: `${basePath}`, label: "Home", icon: "🏠" },
          { path: `${basePath}/attractions`, label: "Places", icon: "📍" },
          { path: `${basePath}/routes`, label: "Routes", icon: "🗺️" },
          { path: `${basePath}/help`, label: "Help", icon: "❓" },
        ];
      case "emergency":
        return [
          { path: `${basePath}`, label: "Control", icon: "🚨" },
          { path: `${basePath}/incidents`, label: "Incidents", icon: "⚠️" },
          { path: `${basePath}/routes`, label: "Routes", icon: "🛣️" },
          { path: `${basePath}/units`, label: "Units", icon: "🚑" },
        ];
      case "government":
        return [
          { path: `${basePath}`, label: "Overview", icon: "📊" },
          { path: `${basePath}/traffic`, label: "Traffic", icon: "🚦" },
          { path: `${basePath}/analytics`, label: "Analytics", icon: "📈" },
          { path: `${basePath}/settings`, label: "Settings", icon: "⚙️" },
        ];
      default:
        return [
          { path: `${basePath}`, label: "Home", icon: "🏠" },
          { path: `${basePath}/monitor`, label: "Monitor", icon: "📊" },
          { path: `${basePath}/alerts`, label: "Alerts", icon: "🔔" },
          { path: `${basePath}/settings`, label: "Settings", icon: "⚙️" },
        ];
    }
  };

  const navItems = getNavItems(userType);

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
      <div className="grid grid-cols-4 h-16">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
              location.pathname === item.path
                ? "bg-black text-white"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
