import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6">
            TrafficOS
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            The next-generation AI-powered traffic management system that
            coordinates smart city infrastructure to create seamless urban
            experiences for everyone.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 border border-border bg-card">
            <div className="text-2xl mb-4">🚦</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Smart Traffic Control
            </h3>
            <p className="text-sm text-muted-foreground">
              AI-optimized traffic light coordination reduces congestion by 40%
            </p>
          </div>
          <div className="p-6 border border-border bg-card">
            <div className="text-2xl mb-4">🗺️</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Intelligent Routing
            </h3>
            <p className="text-sm text-muted-foreground">
              Real-time route optimization saves 8 minutes per journey
            </p>
          </div>
          <div className="p-6 border border-border bg-card">
            <div className="text-2xl mb-4">📊</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Predictive Analytics
            </h3>
            <p className="text-sm text-muted-foreground">
              Prevent incidents before they happen with 95% accuracy
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            How TrafficOS Works
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            TrafficOS coordinates 12 specialized AI agents to monitor, predict,
            and optimize every aspect of urban mobility. From traffic lights to
            emergency response, our system ensures the city flows smoothly.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              "Traffic Flow",
              "Emergency Response",
              "Route Optimization",
              "Weather Integration",
              "Parking Management",
              "Public Transport",
            ].map((agent, index) => (
              <div
                key={index}
                className="px-4 py-2 border border-border bg-secondary text-foreground text-sm"
              >
                {agent} Agent
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
          <Link
            to="/signup"
            className="inline-block w-full md:w-auto bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-900 transition-colors"
          >
            Start Over
          </Link>
          <Link
            to="/explore"
            className="inline-block w-full md:w-auto border border-border bg-background text-foreground px-8 py-4 text-lg font-semibold hover:bg-secondary transition-colors"
          >
            Explore
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">3.2M+</div>
            <div className="text-sm text-muted-foreground">Citizens Served</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">99%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">40%</div>
            <div className="text-sm text-muted-foreground">
              Congestion Reduced
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">50+</div>
            <div className="text-sm text-muted-foreground">Cities Deployed</div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            ©TrafficOS 2025. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
