
const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
            <span 
            className="text-black font-bold">
            L
            </span>
          </div>
          <span className="text-foreground font-light">Lucano's co.</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 bg-black/20 backdrop-blur-sm rounded-full px-6 py-2 border border-border">
          <a href="#home" className="text-foreground hover:text-primary transition-colors text-sm">
            home
          </a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors text-sm">
            our services
          </a>
          <a href="https://www.linkedin.com/company/lucanos-co" className="text-foreground hover:text-primary transition-colors text-sm">
            linkedin
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors text-sm">
            contact
          </a>
        </div>
        
        <button
            className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium transition-transform transform hover:scale-105 hover:bg-gray-100"
            onClick={() => (window.location.href = "mailto:andrea@lucanos.it")}
          >
            email us
          </button>
      </div>
    </nav>
  );
};

export default Navigation;
