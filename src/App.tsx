// src/App.tsx
import React from "react";

const splineUrl = "https://prod.spline.design/your-drone-model-url/scene.splinecode"; // Replace with your Spline scene

const drones = [
  {
    name: "AeroX Pro",
    image: "/images/aerox-pro.png",
    description: "Professional 4K drone for aerial photography.",
  },
  {
    name: "SkyLite Mini",
    image: "/images/skylite-mini.png",
    description: "Compact, lightweight drone for beginners.",
  },
  // Add more models as needed
];

const App: React.FC = () => (
  <div className="relative min-h-screen bg-gray-900 overflow-hidden">
    {/* 3D Background */}
    <iframe
      src={splineUrl}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      frameBorder="0"
      allow="autoplay; fullscreen"
      title="3D Drone Model"
    />

    {/* Overlay Content */}
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 bg-black/60">
      {/* Header */}
      <header className="w-full max-w-5xl mx-auto py-8 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg text-center">
          Elevate Your Vision
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-200 text-center max-w-2xl">
          Discover our next-generation drones with immersive 3D previews.
        </p>
        <a
          href="#models"
          className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg font-semibold shadow-lg transition"
        >
          Explore Models
        </a>
      </header>

      {/* Drone Models */}
      <section
        id="models"
        className="w-full max-w-5xl mx-auto mt-16 grid gap-8 md:grid-cols-2"
      >
        {drones.map((drone) => (
          <div
            key={drone.name}
            className="bg-white/90 rounded-xl shadow-xl p-6 flex flex-col items-center"
          >
            <img
              src={drone.image}
              alt={drone.name}
              className="w-48 h-48 object-contain mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-900">{drone.name}</h2>
            <p className="mt-2 text-gray-700 text-center">{drone.description}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-20 text-gray-300 text-sm text-center">
        &copy; {new Date().getFullYear()} DroneVision. All rights reserved.
      </footer>
    </div>
  </div>
);

export default App;
