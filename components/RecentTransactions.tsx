import React from 'react';
import { Transaction, TransactionStatus } from '../types';
import { MoreHorizontal } from 'lucide-react';

interface RecentTransactionsProps {
  transactions: Transaction[];
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({ transactions }) => {
  const getStatusStyle = (status: TransactionStatus) => {
    switch (status) {
      case TransactionStatus.COMPLETED:
        return 'bg-[#4ADE80]/10 text-[#4ADE80] border-[#4ADE80]/20';
      case TransactionStatus.PENDING:
        return 'bg-amber-400/10 text-amber-400 border-amber-400/20';
      case TransactionStatus.FAILED:
        return 'bg-red-400/10 text-red-400 border-red-400/20';
      default:
        return 'bg-gray-400/10 text-gray-400 border-gray-400/20';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/5 text-left">
            <th className="text-xs font-semibold text-gray-400 uppercase tracking-wider py-4 px-3">Transaction ID</th>
            <th className="text-xs font-semibold text-gray-400 uppercase tracking-wider py-4 px-3">Customer</th>
            <th className="text-xs font-semibold text-gray-400 uppercase tracking-wider py-4 px-3">Date</th>
            <th className="text-xs font-semibold text-gray-400 uppercase tracking-wider py-4 px-3">Amount</th>
            <th className="text-xs font-semibold text-gray-400 uppercase tracking-wider py-4 px-3">Status</th>
            <th className="text-xs font-semibold text-gray-400 uppercase tracking-wider py-4 px-3 text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="group hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
              <td className="py-4 px-3 text-sm text-white font-medium">{transaction.id}</td>
              <td className="py-4 px-3">
                <div className="flex items-center space-x-3">
                  <img 
                    src={transaction.avatar} 
                    alt={transaction.user} 
                    className="w-8 h-8 rounded-full bg-gray-700"
                  />
                  <div>
                    <p className="text-sm font-medium text-white">{transaction.user}</p>
                    <p className="text-xs text-gray-500">{transaction.method}</p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-3 text-sm text-gray-400">{transaction.date}</td>
              <td className="py-4 px-3 text-sm font-medium text-white">{transaction.amount}</td>
              <td className="py-4 px-3">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusStyle(transaction.status)}`}>
                  {transaction.status}
                </span>
              </td>
              <td className="py-4 px-3 text-right">
                <button className="text-gray-400 hover:text-white hover:bg-white/10 transition-colors p-1.5 rounded-lg">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransactions;