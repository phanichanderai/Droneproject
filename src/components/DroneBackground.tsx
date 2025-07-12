

export const DroneBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 opacity-90"></div>
      
      {/* Animated mesh pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="mesh" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mesh)"/>
        </svg>
      </div>
      
      {/* Floating drone silhouette */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
        <div className="animate-float">
          <svg width="300" height="200" viewBox="0 0 300 200" className="text-cyan-400">
            <g fill="currentColor">
              {/* Drone body */}
              <rect x="130" y="90" width="40" height="20" rx="10"/>
              {/* Propellers */}
              <circle cx="110" cy="80" r="15" opacity="0.7"/>
              <circle cx="190" cy="80" r="15" opacity="0.7"/>
              <circle cx="110" cy="120" r="15" opacity="0.7"/>
              <circle cx="190" cy="120" r="15" opacity="0.7"/>
              {/* Arms */}
              <rect x="110" y="98" width="25" height="4"/>
              <rect x="165" y="98" width="25" height="4"/>
              <rect x="148" y="80" width="4" height="25"/>
              <rect x="148" y="115" width="4" height="25"/>
            </g>
          </svg>
        </div>
      </div>
      
      {/* Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className="w-1 h-1 bg-cyan-400 rounded-full opacity-60"></div>
          </div>
        ))}
      </div>
    </div>
  );
};