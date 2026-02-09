import React from 'react';
import { StatData } from '../types';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

interface StatCardProps {
  data: StatData;
}

const StatCard: React.FC<StatCardProps> = ({ data }) => {
  const { title, value, change, trend, icon: Icon, color } = data;

  // Map incoming Tailwind text colors to hex values for background opacity
  const getColorHex = (twClass: string) => {
      if (twClass.includes('indigo')) return '#6366f1';
      if (twClass.includes('emerald')) return '#10b981';
      if (twClass.includes('amber')) return '#f59e0b';
      if (twClass.includes('pink')) return '#ec4899';
      return '#6C5CE7'; // Default accent
  };

  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <ArrowUpRight className="w-3.5 h-3.5 text-[#4ADE80]" />;
      case 'down':
        return <ArrowDownRight className="w-3.5 h-3.5 text-red-400" />;
      default:
        return <Minus className="w-3.5 h-3.5 text-gray-400" />;
    }
  };

  const getTrendStyle = () => {
    switch (trend) {
      case 'up':
        return 'text-[#4ADE80] bg-[#4ADE80]/10 border border-[#4ADE80]/20';
      case 'down':
        return 'text-red-400 bg-red-400/10 border border-red-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border border-gray-400/20';
    }
  };

  return (
    <div className="bg-[#151518] p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] group">
      <div className="flex justify-between items-start mb-4">
        <div 
          className="p-3 rounded-xl transition-colors duration-300" 
          style={{ backgroundColor: `${getColorHex(color)}15`, color: getColorHex(color) }}
        >
          <Icon className="w-6 h-6" />
        </div>
        <div className={`flex items-center space-x-1 text-xs font-semibold px-2.5 py-1 rounded-full ${getTrendStyle()}`}>
          {getTrendIcon()}
          <span>{change}</span>
        </div>
      </div>
      <div>
        <h3 className="text-gray-400 text-sm font-medium mb-1 group-hover:text-gray-300 transition-colors">{title}</h3>
        <p className="text-2xl font-bold text-white tracking-tight">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;