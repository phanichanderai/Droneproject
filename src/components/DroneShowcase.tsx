
import { Camera, Battery, Zap } from 'lucide-react';

const drones = [
  {
    id: 1,
    name: "AeroX Pro",
    price: "$2,999",
    image: "https://images.unsplash.com/photo-1576238842718-3aced1d50b57?w=400&h=300&fit=crop",
    specs: {
      camera: "4K Ultra HD",
      battery: "45 min flight",
      range: "10 km",
      features: ["GPS Return", "Obstacle Avoidance", "Follow Me"]
    },
    description: "Professional-grade drone for cinematographers and content creators."
  },
  {
    id: 2,
    name: "SkyLite Mini",
    price: "$899",
    image: "https://images.unsplash.com/photo-1551808525-65dae15ee5e9?w=400&h=300&fit=crop",
    specs: {
      camera: "2.7K HD",
      battery: "30 min flight",
      range: "5 km",
      features: ["Compact Design", "Easy Controls", "Quick Shots"]
    },
    description: "Perfect entry-level drone for beginners and hobbyists."
  },
  {
    id: 3,
    name: "Titan Elite",
    price: "$4,599", 
    image: "https://images.unsplash.com/photo-1508614999368-9260051292e5?w=400&h=300&fit=crop",
    specs: {
      camera: "6K Cinema",
      battery: "60 min flight",
      range: "15 km",
      features: ["Professional Cinema", "Weather Resistant", "AI Tracking"]
    },
    description: "Enterprise-level drone for professional filmmaking and industrial use."
  }
];

export const DroneShowcase = () => {
  return (
    <section id="models" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Drone <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Collection</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our range of cutting-edge drones, each designed for different needs and skill levels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {drones.map((drone, index) => (
            <div
              key={drone.id}
              className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={drone.image}
                  alt={drone.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {drone.price}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{drone.name}</h3>
                  <p className="text-gray-300 text-sm">{drone.description}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Camera className="h-4 w-4 text-cyan-400" />
                    <span className="text-sm">{drone.specs.camera}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Battery className="h-4 w-4 text-cyan-400" />
                    <span className="text-sm">{drone.specs.battery}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Zap className="h-4 w-4 text-cyan-400" />
                    <span className="text-sm">{drone.specs.range} range</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {drone.specs.features.map((feature, idx) => (
                    <span key={idx} className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
