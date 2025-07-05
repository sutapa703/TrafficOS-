import Navigation from "@/components/Navigation";

const TripPlanner = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Trip Planner
          </h1>
          <p className="text-muted-foreground">
            AI-optimized route planning with real-time coordination
          </p>
        </div>

        <div className="space-y-6">
          {/* Destination Input */}
          <div className="p-6 border border-border bg-card">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Plan Your Journey
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  From
                </label>
                <input
                  type="text"
                  value="Current Location"
                  className="w-full p-3 border border-border bg-background text-foreground"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  To
                </label>
                <input
                  type="text"
                  placeholder="Enter destination..."
                  className="w-full p-3 border border-border bg-background text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <button className="w-full bg-black text-white py-3 px-6 hover:bg-gray-900 transition-colors">
                Calculate Magic Route
              </button>
            </div>
          </div>

          {/* Sample Route Display */}
          <div className="p-6 border border-border bg-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Magic Route Preview
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground">Destination</span>
                <span className="text-muted-foreground">
                  Central Coffee, MG Road
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground">Travel Time</span>
                <span className="text-muted-foreground">
                  12 mins via AI-optimized path
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground">Traffic Lights</span>
                <span className="text-muted-foreground">3 synced</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground">Parking</span>
                <span className="text-muted-foreground">Reserved</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-foreground">Coffee Status</span>
                <span className="text-muted-foreground">Brewing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPlanner;
