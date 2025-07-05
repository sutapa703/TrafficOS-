import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Landing = () => {
  const [heartBeat, setHeartBeat] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartBeat(!heartBeat);
    }, 800);
    return () => clearInterval(interval);
  }, [heartBeat]);

  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 120 }, (_, i) => (
            <div key={i} className="border border-foreground" />
          ))}
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Headline with Heart */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <h1 className="text-6xl md:text-8xl font-bold text-foreground mr-4">
                Traffic
              </h1>
              <div
                className={`text-6xl md:text-8xl transition-transform duration-300 ${
                  heartBeat ? "scale-125" : "scale-100"
                }`}
                style={{ color: "#ef4444" }}
              >
                ❤️
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-foreground ml-4">
                S
              </h1>
            </div>
            <div className="relative">
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                The next-generation AI-powered traffic management system that
                coordinates smart city infrastructure to create seamless urban
                experiences for everyone.
              </p>
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-foreground rotate-45" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-foreground" />
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="relative group">
              <div className="absolute inset-0 border-2 border-foreground transform rotate-1 group-hover:rotate-0 transition-transform duration-300" />
              <div className="relative p-8 bg-background border-2 border-foreground">
                <div className="text-3xl mb-6 text-center">🚦</div>
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                  Smart Traffic Control
                </h3>
                <p className="text-muted-foreground text-center">
                  AI-optimized traffic light coordination reduces congestion by
                  40%
                </p>
                <div className="absolute top-2 right-2 w-4 h-4 bg-foreground" />
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 border-2 border-foreground transform -rotate-1 group-hover:rotate-0 transition-transform duration-300" />
              <div className="relative p-8 bg-background border-2 border-foreground">
                <div className="text-3xl mb-6 text-center">🗺️</div>
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                  Intelligent Routing
                </h3>
                <p className="text-muted-foreground text-center">
                  Real-time route optimization saves 8 minutes per journey
                </p>
                <div className="absolute bottom-2 left-2 w-4 h-4 bg-foreground" />
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 border-2 border-foreground transform rotate-1 group-hover:rotate-0 transition-transform duration-300" />
              <div className="relative p-8 bg-background border-2 border-foreground">
                <div className="text-3xl mb-6 text-center">📊</div>
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                  Predictive Analytics
                </h3>
                <p className="text-muted-foreground text-center">
                  Prevent incidents before they happen with 95% accuracy
                </p>
                <div className="absolute top-2 left-2 w-4 h-4 bg-foreground" />
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-foreground opacity-20" />

            <h2 className="text-4xl font-bold text-foreground mb-8 relative">
              How Traffic<span style={{ color: "#ef4444" }}>❤️</span>S Works
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-foreground" />
            </h2>

            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              TrafficOS coordinates 12 specialized AI agents to monitor,
              predict, and optimize every aspect of urban mobility. From traffic
              lights to emergency response, our system ensures the city flows
              smoothly.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
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
                  className="relative p-4 border-2 border-foreground bg-background hover:bg-secondary transition-colors group"
                >
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-foreground" />
                  <div className="text-sm font-bold text-foreground text-center">
                    {agent}
                  </div>
                  <div className="text-xs text-muted-foreground text-center mt-1">
                    Agent
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-3 h-3 border-2 border-foreground bg-background" />
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="relative mb-20">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link to="/signup" className="relative group inline-block">
                <div className="absolute inset-0 bg-foreground transform rotate-2 group-hover:rotate-0 transition-transform duration-300" />
                <div className="relative bg-background border-2 border-foreground px-12 py-6 transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300">
                  <span className="text-xl font-bold text-foreground">
                    Start Over
                  </span>
                </div>
              </Link>

              <Link to="/explore" className="relative group inline-block">
                <div className="absolute inset-0 bg-background border-2 border-foreground transform -rotate-1 group-hover:rotate-0 transition-transform duration-300" />
                <div className="relative bg-background border-2 border-foreground px-12 py-6 transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300">
                  <span className="text-xl font-bold text-foreground">
                    Explore
                  </span>
                </div>
              </Link>
            </div>

            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 border-2 border-foreground rotate-45 bg-background" />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "3.2M+", label: "Citizens Served" },
              { number: "99%", label: "Uptime" },
              { number: "40%", label: "Congestion Reduced" },
              { number: "50+", label: "Cities Deployed" },
            ].map((stat, index) => (
              <div key={index} className="relative text-center group">
                <div className="absolute inset-0 border-2 border-foreground transform rotate-45 opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative p-6 bg-background">
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
                <div className="absolute top-1 right-1 w-3 h-3 bg-foreground" />
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center border-t-2 border-foreground pt-8">
            <p className="text-sm text-muted-foreground font-bold">
              ©TrafficOS 2025. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
