import { LucideIcon } from 'lucide-react';

export interface StatData {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: LucideIcon;
  color: string;
}

export interface RevenueData {
  name: string;
  revenue: number;
  expenses: number;
  profit: number;
}

export interface CategoryData {
  name: string;
  value: number;
  color: string;
}

export enum TransactionStatus {
  COMPLETED = 'Completed',
  PENDING = 'Pending',
  FAILED = 'Failed'
}

export interface Transaction {
  id: string;
  user: string;
  avatar: string;
  date: string;
  amount: string;
  status: TransactionStatus;
  method: string;
}

export enum ViewState {
  DASHBOARD = 'DASHBOARD',
  ANALYTICS = 'ANALYTICS',
  CUSTOMERS = 'CUSTOMERS',
  SETTINGS = 'SETTINGS'
}

export interface TrafficData {
  date: string;
  visits: number;
  sessions: number;
}

export interface PageStat {
  path: string;
  views: number;
  visitors: number;
  avgTime: string;
  bounceRate: string;
}

export interface DeviceStat {
  name: string;
  value: number;
  color: string;
}

export enum CustomerStatus {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
  BLOCKED = 'Blocked'
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  avatar: string;
  status: CustomerStatus;
  totalSpent: string;
  lastOrder: string;
  country: string;
}