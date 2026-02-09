import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/DashboardPage';
import AnalyticsPage from './pages/AnalyticsPage';
import CustomersPage from './pages/CustomersPage';
import SettingsPage from './pages/SettingsPage';
import { ViewState } from './types';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.DASHBOARD);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const renderContent = () => {
    switch (currentView) {
      case ViewState.DASHBOARD:
        return <DashboardPage />;
      case ViewState.ANALYTICS:
        return <AnalyticsPage />;
      case ViewState.CUSTOMERS:
        return <CustomersPage />;
      case ViewState.SETTINGS:
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0F] text-white selection:bg-[#6C5CE7] selection:text-white">
      {/* Mobile Header */}
      <div className="md:hidden bg-[#0D0D0F] border-b border-white/5 px-4 py-3 flex items-center justify-between sticky top-0 z-30 backdrop-blur-md bg-opacity-80">
        <div className="flex items-center space-x-2">
           <div className="w-8 h-8 bg-[#6C5CE7] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(108,92,231,0.5)]">
             <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
             </svg>
           </div>
           <span className="text-lg font-bold text-white tracking-tight">Lumina</span>
        </div>
        <button onClick={toggleSidebar} className="p-2 text-gray-400 hover:bg-white/5 rounded-lg transition-colors">
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <Sidebar 
        currentView={currentView} 
        onChangeView={(view) => {
          setCurrentView(view);
          setIsSidebarOpen(false);
        }}
        isOpen={isSidebarOpen}
      />

      <main className="transition-all duration-300 md:ml-64 min-h-screen">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;