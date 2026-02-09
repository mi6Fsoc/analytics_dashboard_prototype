import React, { useState } from 'react';
import { User, Bell, Shield, CreditCard, Save, Check, Camera, Lock, Mail } from 'lucide-react';

type Tab = 'profile' | 'notifications' | 'security' | 'billing';

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('profile');

  // Navigation Items
  const navItems = [
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'billing', label: 'Billing & Plans', icon: CreditCard },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSettings />;
      case 'notifications':
        return <NotificationSettings />;
      case 'security':
        return <SecuritySettings />;
      case 'billing':
        return <BillingSettings />;
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="p-6 md:p-10 max-w-[1200px] mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Settings</h1>
        <p className="text-gray-400 mt-1">Manage your account settings and preferences.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:w-64 flex-shrink-0">
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as Tab)}
                  className={`
                    w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
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
        </div>

        {/* Content Area */}
        <div className="flex-1 min-w-0">
           {renderContent()}
        </div>
      </div>
    </div>
  );
};

// --- Sub-Components for Sections ---

const ProfileSettings: React.FC = () => {
  return (
    <div className="bg-[#151518] rounded-2xl border border-white/5 p-6 md:p-8 space-y-8">
      <div>
        <h2 className="text-xl font-bold text-white">Profile Information</h2>
        <p className="text-sm text-gray-400 mt-1">Update your photo and personal details.</p>
      </div>

      {/* Avatar Section */}
      <div className="flex items-center gap-6 pb-8 border-b border-white/5">
        <div className="relative">
          <img 
            src="https://picsum.photos/100/100?random=50" 
            alt="Profile" 
            className="w-24 h-24 rounded-full bg-gray-700 object-cover border-4 border-[#0D0D0F]"
          />
          <button className="absolute bottom-0 right-0 p-2 bg-[#6C5CE7] hover:bg-[#5a4ad1] text-white rounded-full shadow-lg transition-colors border-2 border-[#151518]">
            <Camera className="w-4 h-4" />
          </button>
        </div>
        <div>
           <h3 className="text-white font-medium">Profile Photo</h3>
           <p className="text-sm text-gray-400 mb-3">Recommended dimensions: 400x400px.</p>
           <div className="flex gap-3">
             <button className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-xs font-medium rounded-lg border border-white/10 transition-colors">
                Change
             </button>
             <button className="px-4 py-2 text-red-400 hover:bg-red-400/10 text-xs font-medium rounded-lg transition-colors">
                Remove
             </button>
           </div>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">First Name</label>
          <input 
            type="text" 
            defaultValue="Alex"
            className="w-full bg-[#0D0D0F] border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:border-transparent placeholder-gray-600 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Last Name</label>
          <input 
            type="text" 
            defaultValue="Morgan"
            className="w-full bg-[#0D0D0F] border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:border-transparent placeholder-gray-600 transition-all"
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium text-gray-300">Email Address</label>
          <div className="relative">
             <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
             <input 
              type="email" 
              defaultValue="alex.morgan@lumina.io"
              className="w-full bg-[#0D0D0F] border border-white/10 text-white pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:border-transparent placeholder-gray-600 transition-all"
            />
          </div>
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium text-gray-300">Bio</label>
          <textarea 
            rows={4}
            defaultValue="Product Designer & Developer based in San Francisco. Analyzing data to build better experiences."
            className="w-full bg-[#0D0D0F] border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:border-transparent placeholder-gray-600 transition-all resize-none"
          />
        </div>
      </div>

      <div className="flex justify-end pt-4 border-t border-white/5">
        <button className="flex items-center gap-2 px-6 py-3 bg-[#6C5CE7] hover:bg-[#5a4ad1] text-white rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(108,92,231,0.35)] hover:shadow-[0_0_25px_rgba(108,92,231,0.5)]">
           <Save className="w-4 h-4" />
           <span>Save Changes</span>
        </button>
      </div>
    </div>
  );
};

const NotificationSettings: React.FC = () => {
  return (
    <div className="bg-[#151518] rounded-2xl border border-white/5 p-6 md:p-8 space-y-8">
      <div>
        <h2 className="text-xl font-bold text-white">Notifications</h2>
        <p className="text-sm text-gray-400 mt-1">Choose what updates you want to receive.</p>
      </div>

      <div className="space-y-6">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Email Notifications</h3>
        
        <ToggleItem 
          title="Marketing Emails" 
          description="Receive emails about new products, features, and more."
          defaultChecked={true}
        />
        <ToggleItem 
          title="Account Activity" 
          description="Get notified when someone logs into your account."
          defaultChecked={true}
        />
         <ToggleItem 
          title="Weekly Report" 
          description="Receive a summary of your analytics every Monday."
          defaultChecked={false}
        />
      </div>

      <div className="pt-6 border-t border-white/5 space-y-6">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Push Notifications</h3>
         <ToggleItem 
          title="New Comments" 
          description="Get notified when someone posts a comment on your dashboard."
          defaultChecked={true}
        />
        <ToggleItem 
          title="Transaction Alerts" 
          description="Instant notification for high-value transactions."
          defaultChecked={true}
        />
      </div>
       <div className="flex justify-end pt-4 border-t border-white/5">
        <button className="flex items-center gap-2 px-6 py-3 bg-[#6C5CE7] hover:bg-[#5a4ad1] text-white rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(108,92,231,0.35)] hover:shadow-[0_0_25px_rgba(108,92,231,0.5)]">
           <Save className="w-4 h-4" />
           <span>Save Preferences</span>
        </button>
      </div>
    </div>
  );
};

const SecuritySettings: React.FC = () => {
  return (
     <div className="bg-[#151518] rounded-2xl border border-white/5 p-6 md:p-8 space-y-8">
      <div>
        <h2 className="text-xl font-bold text-white">Security</h2>
        <p className="text-sm text-gray-400 mt-1">Manage your password and authentication methods.</p>
      </div>

      {/* Change Password */}
      <div className="space-y-6">
        <h3 className="text-lg font-medium text-white">Change Password</h3>
        <div className="space-y-4">
             <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Current Password</label>
              <div className="relative">
                 <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                 <input 
                  type="password" 
                  className="w-full bg-[#0D0D0F] border border-white/10 text-white pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:border-transparent placeholder-gray-600 transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">New Password</label>
                   <div className="relative">
                     <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                     <input 
                      type="password" 
                      className="w-full bg-[#0D0D0F] border border-white/10 text-white pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:border-transparent placeholder-gray-600 transition-all"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                 <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Confirm Password</label>
                   <div className="relative">
                     <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                     <input 
                      type="password" 
                      className="w-full bg-[#0D0D0F] border border-white/10 text-white pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:border-transparent placeholder-gray-600 transition-all"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
             </div>
        </div>
        <div className="flex justify-end">
           <button className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 transition-colors">
              Update Password
           </button>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 space-y-6">
         <h3 className="text-lg font-medium text-white">Two-Factor Authentication</h3>
         <div className="flex items-center justify-between p-4 bg-[#0D0D0F] border border-white/10 rounded-xl">
            <div className="flex items-center gap-4">
               <div className="p-3 bg-[#6C5CE7]/10 rounded-lg text-[#6C5CE7]">
                  <Shield className="w-6 h-6" />
               </div>
               <div>
                  <p className="font-medium text-white">Authenticator App</p>
                  <p className="text-sm text-gray-400">Keep your account secure by using an authenticator app.</p>
               </div>
            </div>
            <button className="px-4 py-2 bg-[#6C5CE7] hover:bg-[#5a4ad1] text-white text-sm font-medium rounded-lg transition-colors shadow-[0_0_15px_rgba(108,92,231,0.25)]">
               Enable
            </button>
         </div>
      </div>
     </div>
  );
};

const BillingSettings: React.FC = () => {
  return (
    <div className="bg-[#151518] rounded-2xl border border-white/5 p-6 md:p-8 space-y-8">
      <div>
        <h2 className="text-xl font-bold text-white">Billing & Plans</h2>
        <p className="text-sm text-gray-400 mt-1">Manage your subscription and payment methods.</p>
      </div>

      {/* Current Plan */}
      <div className="p-6 bg-gradient-to-br from-[#6C5CE7] to-[#8b5cf6] rounded-2xl relative overflow-hidden">
         <div className="absolute top-0 right-0 p-32 bg-white opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
         <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
               <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-3 border border-white/20 backdrop-blur-md">
                  CURRENT PLAN
               </div>
               <h3 className="text-3xl font-bold text-white mb-1">Lumina Pro</h3>
               <p className="text-white/80">$29/month • Billed Annually</p>
            </div>
            <div className="flex flex-col gap-3">
               <button className="px-6 py-3 bg-white text-[#6C5CE7] font-bold rounded-xl shadow-lg hover:bg-gray-50 transition-colors">
                  Upgrade Plan
               </button>
               <button className="px-6 py-3 bg-black/20 text-white font-medium rounded-xl hover:bg-black/30 transition-colors backdrop-blur-sm">
                  Cancel Subscription
               </button>
            </div>
         </div>
      </div>

      {/* Payment Method */}
      <div className="space-y-4">
         <h3 className="text-lg font-medium text-white">Payment Method</h3>
         <div className="flex items-center justify-between p-4 bg-[#0D0D0F] border border-white/10 rounded-xl">
            <div className="flex items-center gap-4">
               <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                  <CreditCard className="w-6 h-6 text-gray-300" />
               </div>
               <div>
                  <p className="font-medium text-white">Visa ending in 4242</p>
                  <p className="text-sm text-gray-400">Expires 10/25</p>
               </div>
            </div>
            <button className="text-sm text-[#6C5CE7] font-medium hover:text-[#8b7ef0] transition-colors">
               Edit
            </button>
         </div>
      </div>
      
       {/* Invoice History */}
       <div className="space-y-4 pt-4">
         <h3 className="text-lg font-medium text-white">Invoice History</h3>
         <div className="space-y-2">
            {[
               { date: 'Oct 24, 2023', amount: '$29.00', status: 'Paid' },
               { date: 'Sep 24, 2023', amount: '$29.00', status: 'Paid' },
               { date: 'Aug 24, 2023', amount: '$29.00', status: 'Paid' }
            ].map((invoice, i) => (
                <div key={i} className="flex items-center justify-between p-4 hover:bg-white/5 rounded-xl transition-colors border-b border-white/5 last:border-0">
                  <div className="flex items-center gap-4">
                      <div className="p-2 bg-[#4ADE80]/10 rounded-full text-[#4ADE80]">
                         <Check className="w-4 h-4" />
                      </div>
                      <span className="text-sm text-white font-medium">Pro Plan Subscription</span>
                  </div>
                  <div className="flex items-center gap-6">
                      <span className="text-sm text-gray-400">{invoice.date}</span>
                      <span className="text-sm text-white font-medium">{invoice.amount}</span>
                      <button className="p-2 text-gray-400 hover:text-white transition-colors">
                         <DownloadIcon className="w-4 h-4" />
                      </button>
                  </div>
                </div>
            ))}
         </div>
       </div>

    </div>
  );
};

// --- Utility Components ---

const ToggleItem: React.FC<{ title: string; description: string; defaultChecked?: boolean }> = ({ title, description, defaultChecked = false }) => {
   const [enabled, setEnabled] = useState(defaultChecked);

   return (
      <div className="flex items-center justify-between">
         <div>
            <p className="font-medium text-white">{title}</p>
            <p className="text-sm text-gray-400">{description}</p>
         </div>
         <button 
            onClick={() => setEnabled(!enabled)}
            className={`
               relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:ring-offset-2 focus:ring-offset-[#151518]
               ${enabled ? 'bg-[#6C5CE7]' : 'bg-gray-700'}
            `}
         >
            <span 
               className={`
                  inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                  ${enabled ? 'translate-x-6' : 'translate-x-1'}
               `} 
            />
         </button>
      </div>
   );
}

// Simple internal icon component for the invoice download
const DownloadIcon = ({ className }: { className?: string }) => (
   <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
   </svg>
);

export default SettingsPage;