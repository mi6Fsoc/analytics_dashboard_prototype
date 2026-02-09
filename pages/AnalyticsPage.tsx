import React from 'react';
import { Activity, Clock, Globe, Smartphone, ArrowUpRight, ArrowDownRight, Download, Calendar } from 'lucide-react';
import StatCard from '../components/StatCard';
import { TrafficChart, DeviceChart } from '../components/Charts';
import { TRAFFIC_DATA, PAGE_STATS, DEVICE_STATS } from '../constants';
import { StatData } from '../types';

const analyticsStats: StatData[] = [
  {
    title: 'Avg. Session Duration',
    value: '4m 32s',
    change: '+12.5%',
    trend: 'up',
    icon: Clock,
    color: 'text-[#6C5CE7]'
  },
  {
    title: 'Bounce Rate',
    value: '42.3%',
    change: '-5.2%',
    trend: 'up', // 'up' trend means good here (lower bounce rate)
    icon: Activity,
    color: 'text-emerald-500'
  },
  {
    title: 'Pages per Session',
    value: '3.8',
    change: '+8.4%',
    trend: 'up',
    icon: Globe,
    color: 'text-amber-500'
  },
  {
    title: 'Mobile Users',
    value: '845',
    change: '-2.4%',
    trend: 'down',
    icon: Smartphone,
    color: 'text-pink-500'
  }
];

const AnalyticsPage: React.FC = () => {
  return (
    <div className="p-6 md:p-10 max-w-[1600px] mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Analytics Overview</h1>
          <p className="text-gray-400 mt-1">Deep dive into your traffic and user behavior.</p>
        </div>
        
        <div className="flex items-center gap-3">
           <button className="flex items-center gap-2 px-4 py-2.5 bg-[#151518] border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
            <Calendar className="w-4 h-4" />
            <span>Last 30 Days</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#6C5CE7] hover:bg-[#5a4ad1] text-white rounded-xl text-sm font-medium transition-all shadow-[0_0_20px_rgba(108,92,231,0.35)] hover:shadow-[0_0_25px_rgba(108,92,231,0.5)]">
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsStats.map((stat, index) => (
          <StatCard key={index} data={stat} />
        ))}
      </div>

      {/* Main Traffic Chart */}
      <div className="bg-[#151518] p-6 rounded-2xl border border-white/5 shadow-sm">
        <div className="flex items-center justify-between mb-6">
            <div>
                <h2 className="text-lg font-semibold text-white">Traffic Trends</h2>
                <p className="text-sm text-gray-400">Visits vs Unique Sessions over time</p>
            </div>
             <div className="flex items-center space-x-2">
                 <span className="flex items-center text-xs font-medium text-[#4ADE80] bg-[#4ADE80]/10 px-2 py-1 rounded-md">
                    <ArrowUpRight className="w-3 h-3 mr-1" /> +14.2%
                 </span>
             </div>
        </div>
        <TrafficChart data={TRAFFIC_DATA} />
      </div>

      {/* Detailed Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Top Pages Table */}
        <div className="lg:col-span-2 bg-[#151518] p-6 rounded-2xl border border-white/5 flex flex-col">
            <h2 className="text-lg font-semibold text-white mb-6">Top Performing Pages</h2>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-white/5 text-left">
                            <th className="text-xs font-semibold text-gray-400 uppercase tracking-wider py-3 px-2">Page Path</th>
                            <th className="text-xs font-semibold text-gray-400 uppercase tracking-wider py-3 px-2">Views</th>
                            <th className="text-xs font-semibold text-gray-400 uppercase tracking-wider py-3 px-2">Avg. Time</th>
                            <th className="text-xs font-semibold text-gray-400 uppercase tracking-wider py-3 px-2 text-right">Bounce Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {PAGE_STATS.map((page, index) => (
                            <tr key={index} className="group hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
                                <td className="py-4 px-2 text-sm font-medium text-white break-all">{page.path}</td>
                                <td className="py-4 px-2 text-sm text-gray-300">
                                    <div className="flex items-center">
                                        <span className="w-16">{page.views.toLocaleString()}</span>
                                        <div className="w-24 h-1.5 bg-gray-700 rounded-full ml-2 overflow-hidden">
                                            <div 
                                                className="h-full bg-[#6C5CE7] rounded-full" 
                                                style={{ width: `${(page.views / 15000) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-2 text-sm text-gray-400">{page.avgTime}</td>
                                <td className="py-4 px-2 text-sm text-right">
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${parseInt(page.bounceRate) > 40 ? 'text-amber-400 bg-amber-400/10' : 'text-emerald-400 bg-emerald-400/10'}`}>
                                        {page.bounceRate}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button className="mt-auto pt-4 text-[#6C5CE7] text-sm font-medium hover:text-[#8b7ef0] transition-colors self-start">
                View full report &rarr;
            </button>
        </div>

        {/* Device Breakdown */}
        <div className="bg-[#151518] p-6 rounded-2xl border border-white/5 flex flex-col">
            <h2 className="text-lg font-semibold text-white mb-2">Device Breakdown</h2>
            <p className="text-sm text-gray-400 mb-6">Traffic share by device type</p>
            
            <div className="flex-1 flex items-center justify-center">
                <DeviceChart data={DEVICE_STATS} />
            </div>

            <div className="mt-6 space-y-3">
                {DEVICE_STATS.map((device, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-3">
                             <div 
                                className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-inner"
                                style={{ backgroundColor: `${device.color}20`, color: device.color }}
                             >
                                {device.value}%
                             </div>
                             <div>
                                 <p className="text-sm font-medium text-white">{device.name}</p>
                                 <p className="text-xs text-gray-500">Global traffic</p>
                             </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-gray-500" />
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default AnalyticsPage;