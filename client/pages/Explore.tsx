import { Link } from "react-router-dom";

const Explore = () => {
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
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-center">
            Explore TrafficOS
          </h1>
          <p className="text-lg text-muted-foreground mb-8 text-center">
            Discover how AI-powered traffic management is transforming cities
            worldwide
          </p>
        </div>

        {/* What TrafficOS Does */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 border border-border bg-card">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              🚦 Traffic Management
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Real-time traffic light synchronization</li>
              <li>• Congestion prediction and prevention</li>
              <li>• Intelligent signal timing optimization</li>
              <li>• Emergency vehicle priority routing</li>
            </ul>
          </div>

          <div className="p-6 border border-border bg-card">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              🗺️ Smart Routing
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Dynamic route optimization</li>
              <li>• Multi-modal transport integration</li>
              <li>• Real-time traffic condition updates</li>
              <li>• Personalized journey planning</li>
            </ul>
          </div>

          <div className="p-6 border border-border bg-card">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              📊 Predictive Analytics
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Incident prediction before occurrence</li>
              <li>• Weather impact assessment</li>
              <li>• Traffic pattern analysis</li>
              <li>• Infrastructure maintenance alerts</li>
            </ul>
          </div>

          <div className="p-6 border border-border bg-card">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              🤝 Community Integration
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Citizen-reported incidents</li>
              <li>• Real-time community alerts</li>
              <li>• Air quality monitoring</li>
              <li>• Public transport coordination</li>
            </ul>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-border bg-card">
              <div className="text-3xl mb-4">⏱️</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Time Savings
              </h3>
              <p className="text-muted-foreground">
                Average 8 minutes saved per journey through AI optimization
              </p>
            </div>

            <div className="text-center p-6 border border-border bg-card">
              <div className="text-3xl mb-4">🌱</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Environmental Impact
              </h3>
              <p className="text-muted-foreground">
                40% reduction in emissions through optimized traffic flow
              </p>
            </div>

            <div className="text-center p-6 border border-border bg-card">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Safety First
              </h3>
              <p className="text-muted-foreground">
                60% reduction in traffic incidents through predictive systems
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            How It Works
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-6 border border-border bg-card">
              <div className="text-2xl">1️⃣</div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Data Collection
                </h3>
                <p className="text-muted-foreground">
                  TrafficOS continuously gathers data from traffic sensors,
                  cameras, GPS devices, and citizen reports to create a
                  comprehensive real-time city traffic picture.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 border border-border bg-card">
              <div className="text-2xl">2️⃣</div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  AI Analysis
                </h3>
                <p className="text-muted-foreground">
                  Our 12 specialized AI agents analyze patterns, predict traffic
                  flow, identify potential issues, and calculate optimal routing
                  solutions in real-time.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 border border-border bg-card">
              <div className="text-2xl">3️⃣</div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Smart Coordination
                </h3>
                <p className="text-muted-foreground">
                  The system coordinates traffic lights, updates navigation
                  apps, alerts emergency services, and provides personalized
                  route recommendations to optimize city-wide traffic flow.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-border pt-8 mt-12">
          <p className="text-xs text-muted-foreground">
            ©TrafficOS 2025. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
