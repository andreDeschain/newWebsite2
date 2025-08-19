
const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 px-6">
        <h1 className="text-6xl md:text-8xl font-light text-white mb-8 leading-tight">
          engineering
          <br />
          <span className="text-primary">&</span>
          <br />
          consulting
        </h1>
        
        <div className="flex items-center justify-center space-x-3 mt-16">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <span className="text-gray-400 text-sm">Straight to the point</span>
        </div>
        
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
