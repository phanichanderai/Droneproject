import { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { DroneBackground } from './DroneBackground';
import { VideoModal } from './VideoModal';

export const HeroSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoUrl = "https://youtu.be/N_XneaFmOmU?si=9Hfp4bVg88cQaabu";

  const handleWatchDemo = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <DroneBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Elevate Your
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent block">
                Vision
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience the future of aerial photography with our cutting-edge drone technology. 
              Capture breathtaking moments from perspectives never seen before.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-2">
                Explore Models
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={handleWatchDemo}
                className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 border border-white/20 flex items-center gap-2 hover:scale-105"
              >
                <Play className="h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-40 delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-50 delay-500"></div>
      </section>

      <VideoModal 
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
        videoUrl={videoUrl}
      />
    </>
  );
};