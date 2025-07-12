

export const DroneBackground = () => {
  return (
    <div className="absolute inset-0 z-0 perspective-1000">
      {/* Animated gradient background with depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 opacity-90"></div>
      
      {/* 3D Grid layers */}
      <div className="absolute inset-0 transform-gpu">
        {/* Back layer */}
        <div className="absolute inset-0 opacity-10 transform rotateX-12 translateZ--100">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid-back" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
                <path d="M 5 0 L 0 0 0 5" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-cyan-500"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-back)"/>
          </svg>
        </div>
        
        {/* Middle layer */}
        <div className="absolute inset-0 opacity-20 transform rotateX-6 translateZ--50">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid-middle" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.4" className="text-cyan-400"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-middle)"/>
          </svg>
        </div>
        
        {/* Front layer */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid-front" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                <path d="M 12 0 L 0 0 0 12" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-300"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-front)"/>
          </svg>
        </div>
      </div>
      
      {/* 3D Floating drone with enhanced brightness and glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-40">
        <div className="animate-float transform-gpu perspective-500">
          <div className="transform rotateX-15 rotateY-12">
            <svg width="400" height="300" viewBox="0 0 400 300" className="text-cyan-200 drop-shadow-2xl filter brightness-150">
              <defs>
                <linearGradient id="droneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="1"/>
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.9"/>
                  <stop offset="100%" stopColor="#0891b2" stopOpacity="0.8"/>
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <g fill="url(#droneGradient)" filter="url(#glow)">
                {/* Enhanced drone body with brighter colors */}
                <ellipse cx="200" cy="150" rx="25" ry="15" className="animate-pulse" fill="#22d3ee"/>
                <rect x="175" y="140" width="50" height="20" rx="10" fill="#06b6d4"/>
                
                {/* Brighter propellers with enhanced glow */}
                <g className="animate-spin" style={{ transformOrigin: '140px 120px' }}>
                  <circle cx="140" cy="120" r="20" fill="#22d3ee" opacity="0.8"/>
                  <ellipse cx="140" cy="120" rx="25" ry="3" fill="#67e8f9" opacity="1"/>
                </g>
                <g className="animate-spin" style={{ transformOrigin: '260px 120px', animationDirection: 'reverse' }}>
                  <circle cx="260" cy="120" r="20" fill="#22d3ee" opacity="0.8"/>
                  <ellipse cx="260" cy="120" rx="25" ry="3" fill="#67e8f9" opacity="1"/>
                </g>
                <g className="animate-spin" style={{ transformOrigin: '140px 180px', animationDelay: '0.5s' }}>
                  <circle cx="140" cy="180" r="20" fill="#22d3ee" opacity="0.8"/>
                  <ellipse cx="140" cy="180" rx="25" ry="3" fill="#67e8f9" opacity="1"/>
                </g>
                <g className="animate-spin" style={{ transformOrigin: '260px 180px', animationDirection: 'reverse', animationDelay: '0.5s' }}>
                  <circle cx="260" cy="180" r="20" fill="#22d3ee" opacity="0.8"/>
                  <ellipse cx="260" cy="180" rx="25" ry="3" fill="#67e8f9" opacity="1"/>
                </g>
                
                {/* Brighter arms */}
                <rect x="140" y="147" width="35" height="6" rx="3" fill="#06b6d4" opacity="1"/>
                <rect x="225" y="147" width="35" height="6" rx="3" fill="#06b6d4" opacity="1"/>
                <rect x="197" y="120" width="6" height="35" rx="3" fill="#06b6d4" opacity="1"/>
                <rect x="197" y="175" width="6" height="35" rx="3" fill="#06b6d4" opacity="1"/>
                
                {/* Brighter landing gear */}
                <rect x="185" y="165" width="30" height="3" rx="1.5" fill="#22d3ee" opacity="0.9"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Enhanced 3D Particles with depth */}
      <div className="absolute inset-0">
        {/* Far particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`far-${i}`}
            className="absolute animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              transform: `scale(${0.5 + Math.random() * 0.3}) translateZ(-100px)`
            }}
          >
            <div className="w-1 h-1 bg-cyan-500 rounded-full blur-sm"></div>
          </div>
        ))}
        
        {/* Mid particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`mid-${i}`}
            className="absolute animate-float opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              transform: `scale(${0.7 + Math.random() * 0.4}) translateZ(-50px)`
            }}
          >
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
          </div>
        ))}
        
        {/* Near particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`near-${i}`}
            className="absolute animate-float opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              transform: `scale(${0.8 + Math.random() * 0.5})`
            }}
          >
            <div className="w-2 h-2 bg-cyan-300 rounded-full shadow-cyan-300/50 shadow-lg"></div>
          </div>
        ))}
      </div>
      
      {/* 3D Geometric shapes floating in space */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 animate-float opacity-20" style={{ animationDuration: '8s' }}>
          <div className="transform rotateX-45 rotateY-45">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 transform rotate-45"></div>
          </div>
        </div>
        
        <div className="absolute top-3/4 right-1/4 animate-float opacity-15" style={{ animationDuration: '12s', animationDelay: '2s' }}>
          <div className="transform rotateX-30 rotateZ-60">
            <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full"></div>
          </div>
        </div>
        
        <div className="absolute top-1/2 right-1/6 animate-float opacity-10" style={{ animationDuration: '10s', animationDelay: '4s' }}>
          <div className="transform rotateY-60 rotateZ-30">
            <div className="w-4 h-12 bg-gradient-to-t from-blue-400 to-cyan-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};