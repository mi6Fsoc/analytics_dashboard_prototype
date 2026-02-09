import React from 'react';
import { LayoutDashboard, PieChart, Users, Settings, LogOut, FileText, Bell } from 'lucide-react';
import { ViewState } from '../types';

interface SidebarProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onChangeView, isOpen }) => {
  const menuItems = [
    { id: ViewState.DASHBOARD, label: 'Dashboard', icon: LayoutDashboard },
    { id: ViewState.ANALYTICS, label: 'Analytics', icon: PieChart },
    { id: ViewState.CUSTOMERS, label: 'Customers', icon: Users },
    { id: ViewState.SETTINGS, label: 'Settings', icon: Settings },
  ];

  return (
    <aside 
      className={`
        fixed top-0 left-0 z-40 h-screen transition-transform bg-[#0D0D0F] border-r border-white/5
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 w-64
      `}
    >
      <div className="flex flex-col h-full px-6 py-6">
        {/* Logo */}
        <div className="flex items-center space-x-3 mb-10 px-2">
          <div className="w-8 h-8 bg-[#6C5CE7] rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(108,92,231,0.5)]">
            <PieChart className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">Lumina</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onChangeView(item.id)}
                className={`
                  w-full flex items-center space-x-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200
                  ${isActive 
                    ? 'bg-[#6C5CE7]/10 text-[#6C5CE7] shadow-[0_0_10px_rgba(108,92,231,0.1)]' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'}
                `}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#6C5CE7]' : 'text-gray-400 group-hover:text-white'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Secondary Navigation */}
        <div className="pt-6 border-t border-white/5 space-y-2">
          <button className="w-full flex items-center space-x-3 px-3 py-3 rounded-xl text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
            <FileText className="w-5 h-5 text-gray-500 group-hover:text-gray-300" />
            <span>Documentation</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-3 py-3 rounded-xl text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white transition-colors">
            <Bell className="w-5 h-5 text-gray-500 group-hover:text-gray-300" />
            <span>Notifications</span>
          </button>
        </div>

        {/* User Profile */}
        <div className="mt-8 pt-6 border-t border-white/5">
           <div className="flex items-center space-x-3 px-2 p-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
              <img 
                src="https://picsum.photos/40/40" 
                alt="User" 
                className="w-10 h-10 rounded-full bg-gray-700 border-2 border-[#151518] shadow-sm"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate">Alex Morgan</p>
                <p className="text-xs text-gray-500 truncate">alex@lumina.io</p>
              </div>
              <button className="text-gray-400 hover:text-white transition-colors">
                <LogOut className="w-4 h-4" />
              </button>
           </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;