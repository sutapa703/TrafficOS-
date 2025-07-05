import BottomNavigation from "@/components/BottomNavigation";

const TouristDashboard = () => {
  const attractions = [
    { name: "Lalbagh Botanical Garden", distance: "2.3 km", time: "8 min" },
    { name: "Bangalore Palace", distance: "5.1 km", time: "15 min" },
    { name: "Cubbon Park", distance: "1.8 km", time: "6 min" },
  ];

  const quickGuides = [
    {
      title: "Best Routes",
      description: "Optimized sightseeing paths",
      icon: "🗺️",
    },
    {
      title: "Local Transport",
      description: "Metro, bus, auto guides",
      icon: "🚌",
    },
    {
      title: "Language Help",
      description: "Basic Kannada phrases",
      icon: "💬",
    },
    { title: "Emergency", description: "Important contacts", icon: "🆘" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Explore Bangalore
          </h1>
          <p className="text-muted-foreground">Your AI-powered city guide</p>
        </div>

        {/* Weather & Status */}
        <div className="mb-6 p-4 border border-border bg-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">
                Today's Weather
              </p>
              <p className="text-xs text-muted-foreground">
                Partly cloudy, 26°C
              </p>
            </div>
            <div className="text-2xl">⛅</div>
          </div>
        </div>

        {/* Quick Guides */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Quick Guides
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {quickGuides.map((guide, index) => (
              <div
                key={index}
                className="p-3 border border-border bg-card hover:bg-secondary transition-colors"
              >
                <div className="text-center">
                  <div className="text-xl mb-2">{guide.icon}</div>
                  <p className="text-sm font-medium text-foreground">
                    {guide.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {guide.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby Attractions */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">
            Nearby Attractions
          </h2>
          <div className="space-y-2">
            {attractions.map((attraction, index) => (
              <div key={index} className="p-3 border border-border bg-card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {attraction.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {attraction.distance} away
                    </p>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {attraction.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Language Helper */}
        <div className="p-4 border border-border bg-card">
          <h3 className="text-sm font-semibold text-foreground mb-2">
            Quick Phrases
          </h3>
          <div className="space-y-1">
            <p className="text-xs">
              <span className="font-medium">Hello:</span> Namaskara
            </p>
            <p className="text-xs">
              <span className="font-medium">Thank you:</span> Dhanyavada
            </p>
            <p className="text-xs">
              <span className="font-medium">Where is?:</span> Elli ide?
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-border pt-4 mt-6">
          <p className="text-xs text-muted-foreground">
            ©TrafficOS 2025. All rights reserved.
          </p>
        </div>
      </div>

      <BottomNavigation userType="tourist" />
    </div>
  );
};

export default TouristDashboard;
