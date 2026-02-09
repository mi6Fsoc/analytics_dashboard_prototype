import { Transaction, TransactionStatus, RevenueData, CategoryData, TrafficData, PageStat, DeviceStat, Customer, CustomerStatus } from './types';

export const REVENUE_DATA: RevenueData[] = [
  { name: 'Jan', revenue: 4000, expenses: 2400, profit: 1600 },
  { name: 'Feb', revenue: 3000, expenses: 1398, profit: 1602 },
  { name: 'Mar', revenue: 2000, expenses: 9800, profit: -7800 },
  { name: 'Apr', revenue: 2780, expenses: 3908, profit: -1128 },
  { name: 'May', revenue: 1890, expenses: 4800, profit: -2910 },
  { name: 'Jun', revenue: 2390, expenses: 3800, profit: -1410 },
  { name: 'Jul', revenue: 3490, expenses: 4300, profit: -810 },
  { name: 'Aug', revenue: 5490, expenses: 2300, profit: 3190 },
  { name: 'Sep', revenue: 6490, expenses: 2100, profit: 4390 },
  { name: 'Oct', revenue: 7490, expenses: 2600, profit: 4890 },
  { name: 'Nov', revenue: 8490, expenses: 3100, profit: 5390 },
  { name: 'Dec', revenue: 9490, expenses: 3600, profit: 5890 },
];

export const CATEGORY_DATA: CategoryData[] = [
  { name: 'Electronics', value: 400, color: '#6366f1' },
  { name: 'Fashion', value: 300, color: '#8b5cf6' },
  { name: 'Home', value: 300, color: '#ec4899' },
  { name: 'Sports', value: 200, color: '#10b981' },
];

export const RECENT_TRANSACTIONS: Transaction[] = [
  {
    id: 'TRX-9821',
    user: 'Courtney Henry',
    avatar: 'https://picsum.photos/32/32?random=1',
    date: '2023-10-24',
    amount: '$1,200.00',
    status: TransactionStatus.COMPLETED,
    method: 'Visa •••• 4242'
  },
  {
    id: 'TRX-9822',
    user: 'Tom Cook',
    avatar: 'https://picsum.photos/32/32?random=2',
    date: '2023-10-24',
    amount: '$850.00',
    status: TransactionStatus.PENDING,
    method: 'Mastercard •••• 8822'
  },
  {
    id: 'TRX-9823',
    user: 'Whitney Francis',
    avatar: 'https://picsum.photos/32/32?random=3',
    date: '2023-10-23',
    amount: '$2,300.00',
    status: TransactionStatus.COMPLETED,
    method: 'PayPal'
  },
  {
    id: 'TRX-9824',
    user: 'Leonard Krasner',
    avatar: 'https://picsum.photos/32/32?random=4',
    date: '2023-10-23',
    amount: '$540.00',
    status: TransactionStatus.FAILED,
    method: 'Visa •••• 1234'
  },
  {
    id: 'TRX-9825',
    user: 'Floyd Miles',
    avatar: 'https://picsum.photos/32/32?random=5',
    date: '2023-10-22',
    amount: '$120.50',
    status: TransactionStatus.COMPLETED,
    method: 'Amex •••• 5512'
  },
];

export const TRAFFIC_DATA: TrafficData[] = [
  { date: '01 Nov', visits: 1200, sessions: 1000 },
  { date: '02 Nov', visits: 1350, sessions: 1120 },
  { date: '03 Nov', visits: 1100, sessions: 980 },
  { date: '04 Nov', visits: 1600, sessions: 1450 },
  { date: '05 Nov', visits: 1800, sessions: 1620 },
  { date: '06 Nov', visits: 1750, sessions: 1580 },
  { date: '07 Nov', visits: 1950, sessions: 1800 },
  { date: '08 Nov', visits: 2100, sessions: 1950 },
  { date: '09 Nov', visits: 2050, sessions: 1880 },
  { date: '10 Nov', visits: 2300, sessions: 2100 },
  { date: '11 Nov', visits: 2200, sessions: 2000 },
  { date: '12 Nov', visits: 2500, sessions: 2350 },
];

export const PAGE_STATS: PageStat[] = [
  { path: '/home', views: 12450, visitors: 8200, avgTime: '2m 15s', bounceRate: '32%' },
  { path: '/products', views: 8200, visitors: 5600, avgTime: '3m 45s', bounceRate: '28%' },
  { path: '/blog/new-features', views: 5400, visitors: 4100, avgTime: '4m 10s', bounceRate: '45%' },
  { path: '/pricing', views: 4200, visitors: 2800, avgTime: '1m 50s', bounceRate: '38%' },
  { path: '/about', views: 2100, visitors: 1500, avgTime: '1m 20s', bounceRate: '52%' },
];

export const DEVICE_STATS: DeviceStat[] = [
  { name: 'Desktop', value: 58, color: '#6C5CE7' },
  { name: 'Mobile', value: 34, color: '#4ADE80' },
  { name: 'Tablet', value: 8, color: '#F43F5E' },
];

export const CUSTOMER_DATA: Customer[] = [
  {
    id: 'CUST-001',
    name: 'Esther Howard',
    email: 'esther.howard@example.com',
    avatar: 'https://picsum.photos/32/32?random=10',
    status: CustomerStatus.ACTIVE,
    totalSpent: '$3,450.00',
    lastOrder: '2023-11-01',
    country: 'USA'
  },
  {
    id: 'CUST-002',
    name: 'Wade Warren',
    email: 'wade.warren@example.com',
    avatar: 'https://picsum.photos/32/32?random=11',
    status: CustomerStatus.INACTIVE,
    totalSpent: '$1,200.50',
    lastOrder: '2023-09-15',
    country: 'Canada'
  },
  {
    id: 'CUST-003',
    name: 'Brooklyn Simmons',
    email: 'brooklyn.s@example.com',
    avatar: 'https://picsum.photos/32/32?random=12',
    status: CustomerStatus.ACTIVE,
    totalSpent: '$5,890.00',
    lastOrder: '2023-10-30',
    country: 'UK'
  },
  {
    id: 'CUST-004',
    name: 'Guy Hawkins',
    email: 'guy.hawkins@example.com',
    avatar: 'https://picsum.photos/32/32?random=13',
    status: CustomerStatus.BLOCKED,
    totalSpent: '$240.00',
    lastOrder: '2023-08-02',
    country: 'Brazil'
  },
  {
    id: 'CUST-005',
    name: 'Devon Lane',
    email: 'devon.lane@example.com',
    avatar: 'https://picsum.photos/32/32?random=14',
    status: CustomerStatus.ACTIVE,
    totalSpent: '$8,230.00',
    lastOrder: '2023-11-03',
    country: 'Australia'
  },
  {
    id: 'CUST-006',
    name: 'Dianne Russell',
    email: 'dianne.r@example.com',
    avatar: 'https://picsum.photos/32/32?random=15',
    status: CustomerStatus.ACTIVE,
    totalSpent: '$4,120.00',
    lastOrder: '2023-10-28',
    country: 'USA'
  },
  {
    id: 'CUST-007',
    name: 'Ralph Edwards',
    email: 'ralph.edwards@example.com',
    avatar: 'https://picsum.photos/32/32?random=16',
    status: CustomerStatus.INACTIVE,
    totalSpent: '$890.00',
    lastOrder: '2023-06-12',
    country: 'France'
  },
  {
    id: 'CUST-008',
    name: 'Courtney Henry',
    email: 'courtney.h@example.com',
    avatar: 'https://picsum.photos/32/32?random=17',
    status: CustomerStatus.ACTIVE,
    totalSpent: '$2,450.00',
    lastOrder: '2023-11-02',
    country: 'Germany'
  },
   {
    id: 'CUST-009',
    name: 'Arlene McCoy',
    email: 'arlene.mccoy@example.com',
    avatar: 'https://picsum.photos/32/32?random=18',
    status: CustomerStatus.ACTIVE,
    totalSpent: '$3,300.00',
    lastOrder: '2023-11-04',
    country: 'USA'
  },
  {
    id: 'CUST-010',
    name: 'Theresa Webb',
    email: 'theresa.webb@example.com',
    avatar: 'https://picsum.photos/32/32?random=19',
    status: CustomerStatus.BLOCKED,
    totalSpent: '$0.00',
    lastOrder: 'N/A',
    country: 'Russia'
  }
];