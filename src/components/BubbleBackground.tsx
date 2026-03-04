
const BubbleBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Large primary orange bubble - top right */}
      <div 
        className="absolute top-32 right-16 w-96 h-96 rounded-full opacity-50 animate-float"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #ff914d, #ff7a35, #132f44)',
          filter: 'blur(1.5px)',
        }}
      />
      
      {/* Subtle navy accent bubble - top left */}
      <div 
        className="absolute top-40 left-20 w-80 h-80 rounded-full opacity-35 animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle at 70% 30%, #1e4a63, #132f44, #0f1e2b)',
          filter: 'blur(2px)',
          animationDelay: '1s'
        }}
      />
      
      {/* Large gradient bubble - center */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full opacity-25 animate-drift"
        style={{
          background: 'radial-gradient(ellipse at 20% 50%, #ff914d, #f4f1eb, #132f44, #0f1e2b)',
          filter: 'blur(3px)',
          animationDelay: '0.5s'
        }}
      />
      
      {/* Bottom left warm accent bubble */}
      <div 
        className="absolute bottom-32 left-16 w-72 h-72 rounded-full opacity-45 animate-float"
        style={{
          background: 'radial-gradient(circle at 60% 40%, #ffb366, #ff914d, #132f44)',
          filter: 'blur(1.5px)',
          animationDelay: '2s'
        }}
      />
      
      {/* Bottom right subtle cream bubble */}
      <div 
        className="absolute bottom-20 right-32 w-64 h-64 rounded-full opacity-30 animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle at 40% 60%, #f4f1eb, #e8e1d9, #132f44)',
          filter: 'blur(2px)',
          animationDelay: '3s'
        }}
      />
      
      {/* Small floating orange bubbles */}
      <div 
        className="absolute top-60 left-1/3 w-32 h-32 rounded-full opacity-55 animate-drift"
        style={{
          background: 'radial-gradient(circle, #ff914d, #132f44)',
          filter: 'blur(1px)',
          animationDelay: '1.5s'
        }}
      />
      
      <div 
        className="absolute bottom-60 right-1/4 w-24 h-24 rounded-full opacity-40 animate-float"
        style={{
          background: 'radial-gradient(circle, #ffb366, #132f44)',
          filter: 'blur(1px)',
          animationDelay: '2.5s'
        }}
      />
    </div>
  );
};

export default BubbleBackground;
