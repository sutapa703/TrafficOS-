import Navigation from "@/components/Navigation";

const PredictionFeed = () => {
  const predictions = [
    {
      icon: "💧",
      text: "Water pipe burst in 8 mins - MG Road",
      time: "8 mins",
      confidence: 92,
      category: "Infrastructure",
    },
    {
      icon: "🚧",
      text: "Traffic jam forming - rerouting active",
      time: "5 mins",
      confidence: 87,
      category: "Traffic",
    },
    {
      icon: "☔️",
      text: "Rain starting in 12 mins - umbrella recommended",
      time: "12 mins",
      confidence: 94,
      category: "Weather",
    },
    {
      icon: "🚑",
      text: "Ambulance route cleared - ETA 3 mins",
      time: "3 mins",
      confidence: 98,
      category: "Emergency",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Live Predictions
          </h1>
          <p className="text-muted-foreground">
            Real-time AI predictions for smart city management
          </p>
        </div>

        <div className="space-y-4">
          {predictions.map((prediction, index) => (
            <div key={index} className="p-4 border border-border bg-card">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start space-x-3">
                  <span className="text-lg">{prediction.icon}</span>
                  <div className="flex-1">
                    <p className="text-foreground font-medium">
                      {prediction.text}
                    </p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-xs text-muted-foreground bg-secondary px-2 py-1">
                        {prediction.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        ETA: {prediction.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-muted-foreground">
                    Confidence:
                  </span>
                  <div className="w-20 h-2 bg-secondary">
                    <div
                      className="h-full bg-black"
                      style={{ width: `${prediction.confidence}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {prediction.confidence}%
                  </span>
                </div>

                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-xs border border-border bg-background text-foreground hover:bg-secondary">
                    Reroute
                  </button>
                  <button className="px-3 py-1 text-xs border border-border bg-background text-foreground hover:bg-secondary">
                    Notify
                  </button>
                  <button className="px-3 py-1 text-xs border border-border bg-background text-foreground hover:bg-secondary">
                    Ignore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PredictionFeed;
