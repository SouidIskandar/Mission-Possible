'use client';
import { Leaf, Zap, Droplet, Coins, Clock } from 'lucide-react';
import { useState } from 'react';

export default function EcoCalculator() {
  const [values, setValues] = useState({
    water: 3,
    electricity: 150,
    time: 4
  });

  const calculateSavings = () => {
    return {
      money: values.water * 5 + values.electricity * 0.2 + values.time * 15,
      co2: values.water * 1.2 + values.electricity * 0.05
    };
  };

  const savings = calculateSavings();

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-green-600">Calculateur</span> d'économies
        </h2>
        
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Droplet className="text-blue-500 mr-2" />
                <label>Fuites d'eau (L/jour)</label>
              </div>
              <input 
                type="range" 
                min="1" 
                max="10" 
                value={values.water}
                onChange={(e) => setValues({...values, water: Number(e.target.value)})}
                className="w-full"
              />
              <div className="text-center mt-2 font-bold">{values.water} L</div>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Zap className="text-yellow-500 mr-2" />
                <label>Électricité gaspillée (kWh/mois)</label>
              </div>
              <input 
                type="range" 
                min="50" 
                max="300" 
                value={values.electricity}
                onChange={(e) => setValues({...values, electricity: Number(e.target.value)})}
                className="w-full"
              />
              <div className="text-center mt-2 font-bold">{values.electricity} kWh</div>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Clock className="text-gray-500 mr-2" />
                <label>Heures perdues/mois</label>
              </div>
              <input 
                type="range" 
                min="1" 
                max="10" 
                value={values.time}
                onChange={(e) => setValues({...values, time: Number(e.target.value)})}
                className="w-full"
              />
              <div className="text-center mt-2 font-bold">{values.time} h</div>
            </div>
          </div>

          <div className="bg-green-100 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-4">Vos économies potentielles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center justify-center mb-2">
                  <Coins className="text-yellow-500 mr-2" />
                  <span className="font-bold">Économies financières</span>
                </div>
                <div className="text-3xl font-bold text-green-600">
                  {savings.money.toFixed(0)} DT/mois
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center justify-center mb-2">
                  <Leaf className="text-green-500 mr-2" />
                  <span className="font-bold">Réduction CO₂</span>
                </div>
                <div className="text-3xl font-bold text-green-600">
                  {savings.co2.toFixed(1)} kg/mois
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}