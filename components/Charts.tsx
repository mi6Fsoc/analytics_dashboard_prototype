import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
  LineChart,
  Line
} from 'recharts';
import { RevenueData, CategoryData, TrafficData, DeviceStat } from '../types';

interface RevenueChartProps {
  data: RevenueData[];
}

export const RevenueChart: React.FC<RevenueChartProps> = ({ data }) => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6C5CE7" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#6C5CE7" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ec4899" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#ec4899" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b', fontSize: 12 }} 
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b', fontSize: 12 }} 
          />
          <Tooltip 
            contentStyle={{ 
                backgroundColor: '#1e1e24', 
                borderRadius: '12px', 
                border: '1px solid rgba(255,255,255,0.1)', 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)' 
            }}
            itemStyle={{ fontSize: '12px', color: '#fff' }}
            labelStyle={{ color: '#94a3b8', marginBottom: '4px' }}
          />
          <Area 
            type="monotone" 
            dataKey="revenue" 
            stroke="#6C5CE7" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorRevenue)" 
            name="Revenue"
          />
          <Area 
            type="monotone" 
            dataKey="expenses" 
            stroke="#ec4899" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorExpenses)" 
            name="Expenses"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

interface CategoryChartProps {
  data: CategoryData[];
}

export const CategoryChart: React.FC<CategoryChartProps> = ({ data }) => {
    // Update colors to be slightly more vibrant/neon for dark mode
    const darkModeData = data.map(item => ({
        ...item,
        color: item.color === '#6366f1' ? '#6C5CE7' : item.color // Replace primary with accent
    }));

  return (
    <div className="h-[300px] w-full relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={darkModeData}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
            stroke="none"
          >
            {darkModeData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
             contentStyle={{ 
                backgroundColor: '#1e1e24', 
                borderRadius: '12px', 
                border: '1px solid rgba(255,255,255,0.1)', 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)' 
             }}
             itemStyle={{ fontSize: '12px', color: '#fff' }}
          />
        </PieChart>
      </ResponsiveContainer>
      {/* Center Label */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
        <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">Total</p>
        <p className="text-2xl font-bold text-white">1.2k</p>
      </div>
    </div>
  );
};

export const BarChartComponent: React.FC = () => {
    const data = [
      { name: 'Mon', visits: 4000, orders: 2400 },
      { name: 'Tue', visits: 3000, orders: 1398 },
      { name: 'Wed', visits: 2000, orders: 9800 },
      { name: 'Thu', visits: 2780, orders: 3908 },
      { name: 'Fri', visits: 1890, orders: 4800 },
      { name: 'Sat', visits: 2390, orders: 3800 },
      { name: 'Sun', visits: 3490, orders: 4300 },
    ];

    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                    <Tooltip 
                        cursor={{fill: 'rgba(255,255,255,0.05)'}} 
                        contentStyle={{ 
                            backgroundColor: '#1e1e24', 
                            borderRadius: '12px', 
                            border: '1px solid rgba(255,255,255,0.1)', 
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)' 
                        }} 
                        labelStyle={{ color: '#fff' }}
                    />
                    <Legend wrapperStyle={{ paddingTop: '10px' }} />
                    <Bar dataKey="visits" fill="#6C5CE7" radius={[4, 4, 0, 0]} name="Visits" />
                    <Bar dataKey="orders" fill="#334155" radius={[4, 4, 0, 0]} name="Orders" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

interface TrafficChartProps {
    data: TrafficData[];
}

export const TrafficChart: React.FC<TrafficChartProps> = ({ data }) => {
    return (
        <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                    <XAxis 
                        dataKey="date" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: '#64748b', fontSize: 12 }} 
                        dy={10} 
                    />
                    <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: '#64748b', fontSize: 12 }} 
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#1e1e24',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
                        }}
                        itemStyle={{ fontSize: '12px', color: '#fff' }}
                    />
                    <Legend wrapperStyle={{ paddingTop: '10px' }} />
                    <Line 
                        type="monotone" 
                        dataKey="visits" 
                        stroke="#6C5CE7" 
                        strokeWidth={3} 
                        dot={{ r: 4, fill: '#6C5CE7', strokeWidth: 0 }} 
                        activeDot={{ r: 6, stroke: '#6C5CE7', strokeWidth: 2, fill: '#1e1e24' }}
                        name="Page Visits"
                        filter="url(#glow)"
                    />
                    <Line 
                        type="monotone" 
                        dataKey="sessions" 
                        stroke="#4ADE80" 
                        strokeWidth={3} 
                        dot={{ r: 4, fill: '#4ADE80', strokeWidth: 0 }}
                        activeDot={{ r: 6, stroke: '#4ADE80', strokeWidth: 2, fill: '#1e1e24' }}
                        name="Unique Sessions"
                    />
                    <defs>
                        <filter id="glow" height="200%">
                             <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                             <feColorMatrix in="blur" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 18 -7" result="glow" />
                             <feComposite in="SourceGraphic" in2="glow" operator="over" />
                        </filter>
                    </defs>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

interface DeviceChartProps {
    data: DeviceStat[];
}

export const DeviceChart: React.FC<DeviceChartProps> = ({ data }) => {
    return (
        <div className="h-[250px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={8}
                        dataKey="value"
                        stroke="none"
                        cornerRadius={6}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#1e1e24',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
                        }}
                        itemStyle={{ fontSize: '12px', color: '#fff' }}
                    />
                </PieChart>
            </ResponsiveContainer>
             {/* Center Label */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">Mobile</p>
                <p className="text-xl font-bold text-white">34%</p>
            </div>
        </div>
    );
}