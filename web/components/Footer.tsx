export default function Footer() {
    return (
      <footer className="bg-red-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">MISSION POSSIBLE</h3>
              <p className="opacity-80">Votre partenaire pour toutes les réparations urgentes à domicile.</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">LIENS RAPIDES</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Accueil</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">CONTACT</h4>
              <address className="not-italic">
                <p>71 234 567</p>
                <p>contact@missionpossible.tn</p>
                <p>Tunis, Tunisie</p>
              </address>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">NEWSLETTER</h4>
              <input 
                type="email" 
                placeholder="Votre email" 
                className="w-full px-4 py-2 rounded text-black mb-2"
              />
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                S'abonner
              </button>
            </div>
          </div>
          
          <div className="border-t border-red-500 mt-8 pt-8 text-center opacity-80">
            <p>© {new Date().getFullYear()} Mission Possible TN. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    );
  }