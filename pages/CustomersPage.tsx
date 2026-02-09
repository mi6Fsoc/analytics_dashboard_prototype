import React, { useState } from 'react';
import { Search, Filter, Plus, MoreHorizontal, Mail, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Customer, CustomerStatus } from '../types';
import { CUSTOMER_DATA } from '../constants';

const CustomersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredCustomers = CUSTOMER_DATA.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = statusFilter === 'All' || customer.status === statusFilter;
    
    return matchesSearch && matchesFilter;
  });

  const getStatusStyle = (status: CustomerStatus) => {
    switch (status) {
      case CustomerStatus.ACTIVE:
        return 'bg-[#4ADE80]/10 text-[#4ADE80] border-[#4ADE80]/20';
      case CustomerStatus.INACTIVE:
        return 'bg-gray-400/10 text-gray-400 border-gray-400/20';
      case CustomerStatus.BLOCKED:
        return 'bg-red-400/10 text-red-400 border-red-400/20';
      default:
        return 'bg-gray-400/10 text-gray-400 border-gray-400/20';
    }
  };

  return (
    <div className="p-6 md:p-10 max-w-[1600px] mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Customers</h1>
          <p className="text-gray-400 mt-1">Manage your customer base and view their activity.</p>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2.5 bg-[#6C5CE7] hover:bg-[#5a4ad1] text-white rounded-xl text-sm font-medium transition-all shadow-[0_0_20px_rgba(108,92,231,0.35)] hover:shadow-[0_0_25px_rgba(108,92,231,0.5)]">
          <Plus className="w-4 h-4" />
          <span>Add Customer</span>
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search customers..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#151518] border border-white/10 text-white pl-10 pr-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:border-transparent placeholder-gray-500 transition-all"
          />
        </div>
        
        <div className="flex gap-3">
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-[#151518] border border-white/10 text-gray-300 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] cursor-pointer"
          >
            <option value="All">All Status</option>
            <option value={CustomerStatus.ACTIVE}>Active</option>
            <option value={CustomerStatus.INACTIVE}>Inactive</option>
            <option value={CustomerStatus.BLOCKED}>Blocked</option>
          </select>
          
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#151518] border border-white/10 text-gray-300 rounded-xl hover:bg-white/5 transition-colors">
            <Filter className="w-4 h-4" />
            <span className="hidden md:inline">More Filters</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#151518] rounded-2xl border border-white/5 overflow-hidden flex flex-col shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5 text-left bg-white/[0.02]">
                <th className="text-xs font-semibold text-gray-400 uppercase tracking-wider py-4 px-6">Customer Name</th>
                <th className="text-xs font-semibold text-gray-400 uppercase tracking-wider py-4 px-6">Status</th>
                <th className="text-xs font-semibold text-gray-400 uppercase tracking-wider py-4 px-6">Location</th>
                <th className="text-xs font-semibold text-gray-400 uppercase tracking-wider py-4 px-6">Total Spent</th>
                <th className="text-xs font-semibold text-gray-400 uppercase tracking-wider py-4 px-6">Last Order</th>
                <th className="text-xs font-semibold text-gray-400 uppercase tracking-wider py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="group hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <img 
                          src={customer.avatar} 
                          alt={customer.name} 
                          className="w-10 h-10 rounded-full bg-gray-700 object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium text-white">{customer.name}</p>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <Mail className="w-3 h-3 text-gray-500" />
                            <p className="text-xs text-gray-500">{customer.email}</p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusStyle(customer.status)}`}>
                        {customer.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                       <div className="flex items-center gap-1.5 text-gray-400">
                          <MapPin className="w-3.5 h-3.5" />
                          <span className="text-sm">{customer.country}</span>
                       </div>
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-white">{customer.totalSpent}</td>
                    <td className="py-4 px-6 text-sm text-gray-400">{customer.lastOrder}</td>
                    <td className="py-4 px-6 text-right">
                      <button className="text-gray-400 hover:text-white hover:bg-white/10 transition-colors p-2 rounded-lg">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                   <td colSpan={6} className="py-12 text-center text-gray-500">
                      No customers found matching your criteria.
                   </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="border-t border-white/5 p-4 flex items-center justify-between">
            <div className="text-sm text-gray-500">
                Showing <span className="font-medium text-white">1</span> to <span className="font-medium text-white">{filteredCustomers.length}</span> of <span className="font-medium text-white">{CUSTOMER_DATA.length}</span> results
            </div>
            <div className="flex gap-2">
                <button className="p-2 rounded-lg border border-white/10 text-gray-400 hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed">
                    <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg border border-white/10 text-gray-400 hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed">
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersPage;