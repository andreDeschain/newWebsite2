
const BubbleBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Large orange/red bubble - top right */}
      <div 
        className="absolute top-32 right-16 w-96 h-96 rounded-full opacity-80 animate-float"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #ff6b35, #f7931e, #1a1a1a)',
          filter: 'blur(1px)',
        }}
      />
      
      {/* Blue/purple bubble - top left */}
      <div 
        className="absolute top-40 left-20 w-80 h-80 rounded-full opacity-70 animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle at 70% 30%, #4285f4, #7b68ee, #1a1a1a)',
          filter: 'blur(1px)',
          animationDelay: '1s'
        }}
      />
      
      {/* Large gradient bubble - center */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full opacity-60 animate-drift"
        style={{
          background: 'radial-gradient(ellipse at 20% 50%, #ff6b35, #4285f4, #7b68ee, #1a1a1a)',
          filter: 'blur(2px)',
          animationDelay: '0.5s'
        }}
      />
      
      {/* Bottom left teal bubble */}
      <div 
        className="absolute bottom-32 left-16 w-72 h-72 rounded-full opacity-75 animate-float"
        style={{
          background: 'radial-gradient(circle at 60% 40%, #20b2aa, #4285f4, #1a1a1a)',
          filter: 'blur(1px)',
          animationDelay: '2s'
        }}
      />
      
      {/* Bottom right purple bubble */}
      <div 
        className="absolute bottom-20 right-32 w-64 h-64 rounded-full opacity-70 animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle at 40% 60%, #7b68ee, #ff1493, #1a1a1a)',
          filter: 'blur(1px)',
          animationDelay: '3s'
        }}
      />
      
      {/* Small floating bubbles */}
      <div 
        className="absolute top-60 left-1/3 w-32 h-32 rounded-full opacity-50 animate-drift"
        style={{
          background: 'radial-gradient(circle, #ff6b35, #1a1a1a)',
          filter: 'blur(2px)',
          animationDelay: '1.5s'
        }}
      />
      
      <div 
        className="absolute bottom-60 right-1/4 w-24 h-24 rounded-full opacity-40 animate-float"
        style={{
          background: 'radial-gradient(circle, #4285f4, #1a1a1a)',
          filter: 'blur(2px)',
          animationDelay: '2.5s'
        }}
      />
    </div>
  );
};

export default BubbleBackground;
