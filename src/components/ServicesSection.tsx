
const ServicesSection = () => {
  const services = [
    {
      number: "01",
      title: "marketing automation",
      description: "The marketing supply chain involves many stakeholders, data are never there and manual steps are common. You hope to find an expert on your platform. We will make your communications reach your customers, whatever it takes.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      number: "02", 
      title: "data management, reporting, governance",
      description: "Dashboards pile up and you never find that number you need. SQL is a nightmare. Your data pipeline is undocumented. You deserve not to struggle when you read your data.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      number: "03",
      title: "IT and system engineering", 
      description: "You need to set up your company infrastructure, and kit your team with the most advanced gear?",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      number: "04",
      title: "cloud hosting & private AI",
      description: "Cloud costs and data ownership may be the biggest challenges of our time. Are you evaluating a cloud migration? Want to leverage artificial intelligence for your company but in a private and safe setting for your data?",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section id="services" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-light text-white mb-16">
          our services
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-black/20 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center text-black text-sm font-bold`}>
                  {service.number}
                </div>
                <h3 className="text-white font-light text-lg">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              
              {/*<button className="text-primary hover:text-accent transition-colors text-sm font-medium underline group-hover:translate-x-1 transition-transform duration-300">
                more
              </button>*/}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
