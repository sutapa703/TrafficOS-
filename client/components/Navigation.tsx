import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Dashboard", icon: "■" },
    { path: "/trip-planner", label: "Trip Planner", icon: "→" },
    { path: "/predictions", label: "Predictions", icon: "◆" },
    { path: "/agents", label: "Agents", icon: "●" },
    { path: "/alerts", label: "Alerts", icon: "!" },
  ];

  return (
    <nav className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center bg-black text-white text-sm font-bold">
                CP
              </div>
              <span className="text-xl font-semibold text-foreground">
                CityPulse
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-black text-white"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
