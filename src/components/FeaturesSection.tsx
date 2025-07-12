
import { Camera, Shield, Zap, Cpu, Radio, Compass } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: "4K Ultra HD Camera",
    description: "Capture stunning aerial footage with our advanced camera systems featuring gimbal stabilization."
  },
  {
    icon: Shield,
    title: "Obstacle Avoidance",
    description: "Advanced sensors and AI technology ensure safe flight by automatically detecting and avoiding obstacles."
  },
  {
    icon: Zap,
    title: "Long Battery Life",
    description: "Extended flight times up to 60 minutes with our high-capacity intelligent battery systems."
  },
  {
    icon: Cpu,
    title: "AI-Powered Flight",
    description: "Intelligent flight modes including Follow Me, Waypoint Navigation, and automated cinematography."
  },
  {
    icon: Radio,
    title: "Extended Range",
    description: "Reliable connection up to 15km with our advanced transmission technology and signal boosters."
  },
  {
    icon: Compass,
    title: "GPS Precision",
    description: "Accurate positioning and automatic return-to-home functionality for worry-free flying."
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Advanced <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our drones are packed with cutting-edge technology to deliver exceptional performance and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25">
            Learn More About Our Technology
          </button>
        </div>
      </div>
    </section>
  );
};

