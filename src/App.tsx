import { DroneBackground } from "./components/DroneBackground";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { DroneShowcase } from "./components/DroneShowcase";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";


const App: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
   <Navigation />
    <HeroSection />
    <DroneShowcase />
    <FeaturesSection />
    <Footer />
    <DroneBackground />
  </div>
);

export default App;
