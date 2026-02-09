import React from 'react';
import { DollarSign, Users, ShoppingCart, TrendingUp, Download, Calendar } from 'lucide-react';
import StatCard from '../components/StatCard';
import { RevenueChart, CategoryChart, BarChartComponent } from '../components/Charts';
import RecentTransactions from '../components/RecentTransactions';
import { REVENUE_DATA, CATEGORY_DATA, RECENT_TRANSACTIONS } from '../constants';
import { StatData } from '../types';

const stats: StatData[] = [
  {
    title: 'Total Revenue',
    value: '$54,230',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
    color: 'text-[#6C5CE7]'
  },
  {
    title: 'Active Users',
    value: '2,450',
    change: '+5.2%',
    trend: 'up',
    icon: Users,
    color: 'text-emerald-500'
  },
  {
    title: 'New Orders',
    value: '845',
    change: '-2.4%',
    trend: 'down',
    icon: ShoppingCart,
    color: 'text-amber-500'
  },
  {
    title: 'Growth Rate',
    value: '18.2%',
    change: '+4.1%',
    trend: 'up',
    icon: TrendingUp,
    color: 'text-pink-500'
  }
];

const DashboardPage: React.FC = () => {
  return (
    <div className="p-6 md:p-10 max-w-[1600px] mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Dashboard Overview</h1>
          <p className="text-gray-400 mt-1">Welcome back, Alex. Here's what's happening today.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#151518] border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
            <Calendar className="w-4 h-4" />
            <span>Oct 24, 2023 - Nov 24, 2023</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#6C5CE7] hover:bg-[#5a4ad1] text-white rounded-xl text-sm font-medium transition-all shadow-[0_0_20px_rgba(108,92,231,0.35)] hover:shadow-[0_0_25px_rgba(108,92,231,0.5)]">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} data={stat} />
        ))}
      </div>

      {/* Main Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-[#151518] p-6 rounded-2xl border border-white/5">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Revenue Analytics</h2>
            <select className="bg-[#0D0D0F] border border-white/10 text-sm font-medium text-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-[#6C5CE7] focus:outline-none cursor-pointer">
              <option>This Year</option>
              <option>Last Year</option>
            </select>
          </div>
          <RevenueChart data={REVENUE_DATA} />
        </div>

        {/* Sales by Category */}
        <div className="bg-[#151518] p-6 rounded-2xl border border-white/5">
           <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Sales by Category</h2>
            <button className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Options</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
          <CategoryChart data={CATEGORY_DATA} />
          <div className="mt-4 space-y-3">
            {CATEGORY_DATA.map((item, index) => {
                 const displayColor = item.color === '#6366f1' ? '#6C5CE7' : item.color;
                 return (
                  <div key={index} className="flex items-center justify-between text-sm group cursor-default">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)]" style={{ backgroundColor: displayColor }} />
                      <span className="text-gray-400 group-hover:text-gray-300 transition-colors">{item.name}</span>
                    </div>
                    <span className="font-medium text-white">{item.value} sales</span>
                  </div>
                );
            })}
          </div>
        </div>
      </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Transactions */}
        <div className="lg:col-span-2 bg-[#151518] p-6 rounded-2xl border border-white/5">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Recent Transactions</h2>
            <button className="text-[#6C5CE7] text-sm font-medium hover:text-[#8b7ef0] transition-colors">View all</button>
          </div>
          <RecentTransactions transactions={RECENT_TRANSACTIONS} />
        </div>

        {/* Visitor Stats */}
         <div className="bg-[#151518] p-6 rounded-2xl border border-white/5">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Traffic Source</h2>
          </div>
          <BarChartComponent />
          <div className="mt-6 text-center">
             <p className="text-sm text-gray-400">Most of your traffic comes from Direct visits this week.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;