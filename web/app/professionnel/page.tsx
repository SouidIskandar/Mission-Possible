// app/professionnel/page.tsx
'use client';

import { useState } from 'react';
import { Calendar, Clock, CheckCircle, AlertTriangle, User, Settings, LogOut, Home, Briefcase, MessageSquare, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProfessionalSpace() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [missions, setMissions] = useState([
    { id: 1, client: 'Mohamed T.', service: 'Plomberie', date: '15/06/2023', status: 'completed', address: '20 Rue Habib Bourguiba, Tunis' },
    { id: 2, client: 'Sarah B.', service: 'Électricité', date: '16/06/2023', status: 'in-progress', address: '45 Avenue de France, Tunis' },
    { id: 3, client: 'Karim L.', service: 'Climatisation', date: '18/06/2023', status: 'pending', address: '12 Rue du Liban, La Marsa' }
  ]);

  const completeMission = (id: number) => {
    setMissions(missions.map(mission => 
      mission.id === id ? { ...mission, status: 'completed' } : mission
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-black to-red-900 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            ESPACE <span className="text-red-500">PRO</span>
          </h1>
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-sm hover:text-red-300">
              <User className="mr-1" size={16} />
              Mon compte
            </button>
            <button className="flex items-center text-sm hover:text-red-300">
              <LogOut className="mr-1" size={16} />
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
        {/* Sidebar */}
        <motion.nav 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full md:w-64 bg-white rounded-lg shadow-md p-4 mb-6 md:mb-0 md:mr-6 h-fit"
        >
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center px-4 py-2 rounded-lg ${activeTab === 'dashboard' ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                <Home className="mr-3" size={18} />
                Tableau de bord
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('missions')}
                className={`w-full flex items-center px-4 py-2 rounded-lg ${activeTab === 'missions' ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                <Briefcase className="mr-3" size={18} />
                Mes missions
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('messages')}
                className={`w-full flex items-center px-4 py-2 rounded-lg ${activeTab === 'messages' ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                <MessageSquare className="mr-3" size={18} />
                Messages
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('payments')}
                className={`w-full flex items-center px-4 py-2 rounded-lg ${activeTab === 'payments' ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                <DollarSign className="mr-3" size={18} />
                Paiements
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center px-4 py-2 rounded-lg ${activeTab === 'settings' ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                <Settings className="mr-3" size={18} />
                Paramètres
              </button>
            </li>
          </ul>
        </motion.nav>

        {/* Main Content */}
        <motion.main 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="flex-1"
        >
          {activeTab === 'dashboard' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Home className="text-red-600 mr-3" size={24} />
                Tableau de bord
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <h3 className="font-medium text-gray-600 mb-2">Missions en cours</h3>
                  <p className="text-3xl font-bold">5</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <h3 className="font-medium text-gray-600 mb-2">Missions terminées</h3>
                  <p className="text-3xl font-bold">12</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-medium text-gray-600 mb-2">Revenus ce mois</h3>
                  <p className="text-3xl font-bold">2,450 TND</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Prochaines missions</h3>
                <div className="space-y-3">
                  {missions.filter(m => m.status === 'pending').map(mission => (
                    <div key={mission.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold">{mission.client} - {mission.service}</h4>
                          <p className="text-gray-600 text-sm">{mission.address}</p>
                        </div>
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                          À faire
                        </span>
                      </div>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <Calendar className="mr-1" size={14} />
                        {mission.date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Statistiques mensuelles</h3>
                <div className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center text-gray-400">
                  Graphique des statistiques à implémenter
                </div>
              </div>
            </div>
          )}

          {activeTab === 'missions' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Briefcase className="text-red-600 mr-3" size={24} />
                Mes missions
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Adresse</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {missions.map((mission) => (
                      <tr key={mission.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mission.client}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mission.service}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="mr-1" size={14} />
                            {mission.date}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">{mission.address}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {mission.status === 'completed' && (
                            <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-800 flex items-center">
                              <CheckCircle className="mr-1" size={12} />
                              Terminée
                            </span>
                          )}
                          {mission.status === 'in-progress' && (
                            <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-800 flex items-center">
                              <Clock className="mr-1" size={12} />
                              En cours
                            </span>
                          )}
                          {mission.status === 'pending' && (
                            <span className="px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-800 flex items-center">
                              <AlertTriangle className="mr-1" size={12} />
                              À faire
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {mission.status !== 'completed' && (
                            <button 
                              onClick={() => completeMission(mission.id)}
                              className="text-red-600 hover:text-red-800 mr-3"
                            >
                              Valider
                            </button>
                          )}
                          <button className="text-gray-600 hover:text-gray-800">
                            Détails
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <MessageSquare className="text-red-600 mr-3" size={24} />
                Messages
              </h2>
              <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-400">
                Système de messagerie à implémenter
              </div>
            </div>
          )}

          {activeTab === 'payments' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <DollarSign className="text-red-600 mr-3" size={24} />
                Paiements
              </h2>
              <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-400">
                Historique des paiements à implémenter
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Settings className="text-red-600 mr-3" size={24} />
                Paramètres
              </h2>
              <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-400">
                Paramètres du compte à implémenter
              </div>
            </div>
          )}
        </motion.main>
      </div>
    </div>
  );
}