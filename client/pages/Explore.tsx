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

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Explore TrafficOS
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Discover how AI-powered traffic management is transforming cities
            worldwide
          </p>

          <div className="p-8 border border-border bg-card">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Demo Coming Soon
            </h2>
            <p className="text-muted-foreground">
              Interactive demo and case studies will be available here.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-border pt-8 mt-12">
            <p className="text-xs text-muted-foreground">
              ©TrafficOS 2025. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
