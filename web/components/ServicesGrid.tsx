const services = [
    { name: "Plomberie", icon: "🚿", desc: "Fuites, WC bouchés, chauffe-eau..." },
    { name: "Électricité", icon: "💡", desc: "Pannes, installations, tableau électrique..." },
    { name: "Climatisation", icon: "❄️", desc: "Installation, dépannage, entretien" },
    { name: "Serruerie", icon: "🔑", desc: "Dépannage 24h/7j, ouvertures de porte" },
  ];
  
  export default function ServicesGrid() {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            NOS <span className="text-red-600">SERVICES</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-red-500/20 transition-all border border-transparent hover:border-red-100"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.desc}</p>
                <button className="mt-4 text-red-600 hover:text-red-700 font-medium flex items-center">
                  Voir détails →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }