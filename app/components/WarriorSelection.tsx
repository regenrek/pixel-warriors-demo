'use client';

import { Sword } from 'lucide-react';
import { useState } from 'react';

const warriors = [
  {
    id: 1,
    name: 'Knight',
    description: 'A balanced warrior with strong defense',
    stats: { strength: 7, defense: 8, agility: 5 },
    image:
      'https://images.unsplash.com/photo-1590684874951-c482fc1c7f77?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Assassin',
    description: 'Swift and deadly, masters of stealth',
    stats: { strength: 6, defense: 4, agility: 10 },
    image:
      'https://images.unsplash.com/photo-1578353022142-09264fd64295?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Berserker',
    description: 'Unstoppable force of raw power',
    stats: { strength: 10, defense: 3, agility: 7 },
    image:
      'https://images.unsplash.com/photo-1514539079130-25950c84af65?w=400&h=400&fit=crop',
  },
];

export function WarriorSelection() {
  const [selectedWarrior, setSelectedWarrior] = useState(null);

  return (
    <div
      className="min-h-screen bg-[#1a1a2e] text-white"
      style={{ fontFamily: '"Press Start 2P", cursive' }}
    >
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-[float_4s_ease-in-out_infinite]">
          <Sword className="w-24 h-24 mx-auto mb-8 text-primary" />
          <h1 className="text-4xl md:text-6xl mb-6 text-white">Slack n Slay</h1>
          <p className="text-xl mb-12 text-gray-400">Choose Your Warrior</p>
        </div>

        {/* Warriors Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {warriors.map((warrior) => (
            <div
              key={warrior.id}
              className={`pixel-border p-6 bg-[#2a2a3e] cursor-pointer transition-all duration-300 ${
                selectedWarrior?.id === warrior.id ? 'ring-4 ring-primary' : ''
              }`}
              onClick={() => setSelectedWarrior(warrior)}
            >
              <div className="aspect-square mb-4 overflow-hidden pixel-border">
                <img
                  src={warrior.image}
                  alt={warrior.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg mb-4 text-primary">{warrior.name}</h3>
              <p className="text-sm text-gray-400 mb-4">
                {warrior.description}
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>STR</span>
                  <div className="w-32 bg-[#1a1a2e] h-4 pixel-border">
                    <div
                      className="h-full bg-chart-1"
                      style={{ width: `${warrior.stats.strength * 10}%` }}
                    />
                  </div>
                </div>
                <div className="flex justify-between text-xs">
                  <span>DEF</span>
                  <div className="w-32 bg-[#1a1a2e] h-4 pixel-border">
                    <div
                      className="h-full bg-chart-2"
                      style={{ width: `${warrior.stats.defense * 10}%` }}
                    />
                  </div>
                </div>
                <div className="flex justify-between text-xs">
                  <span>AGI</span>
                  <div className="w-32 bg-[#1a1a2e] h-4 pixel-border">
                    <div
                      className="h-full bg-chart-4"
                      style={{ width: `${warrior.stats.agility * 10}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Warrior Action */}
        {selectedWarrior && (
          <div className="text-center mt-12">
            <button className="pixel-button">
              Play as {selectedWarrior.name}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
