// file: /constent/Sidebar.ts

import {
  Home, Users, Calendar, UserCheck, Settings, MessageCircle, CreditCard, DollarSign,
  HelpCircle, BookOpen, Hotel, Bed, ClipboardList, Utensils, Car, Shield, BarChart3,
  FileText, Wrench, MapPin, Phone, Clock, UserPlus, Receipt, TrendingUp, AlertCircle,
  Gift, Wifi, Coffee, LucideIcon
} from 'lucide-react';

export interface SubMenuItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

export interface MenuItem {
  icon: LucideIcon;
  label: string;
  hasSubmenu: boolean;
  key: string;
  href?: string;
  submenu?: SubMenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    icon: Home,
    label: 'Dashboard',
    hasSubmenu: false,
    key: 'dashboard',
    href: '/pages/adminDashboard'
  },
  {
    icon: Bed,
    label: 'Room Management',
    hasSubmenu: true,
    key: 'rooms',
    href: '#',
    submenu: [
      { icon: MapPin, label: 'Rooms', href: '/pages/adminDashboard/rooms' },
      { icon: ClipboardList, label: 'Room Types', href: '/rooms/types' },
      { icon: Wrench, label: 'Maintenance', href: '/rooms/maintenance' },
      { icon: Coffee, label: 'Amenities', href: '/rooms/amenities' }
    ]
  },
  {
    icon: Calendar,
    label: 'Reservations',
    hasSubmenu: true,
    key: 'reservations',
    href: '/reservations',
    submenu: [
      { icon: UserPlus, label: 'Bookings', href: '/pages/adminDashboard/booking' },
      { icon: Clock, label: 'Check-in/Out', href: '/reservations/check' },
      { icon: AlertCircle, label: 'Cancellations', href: '/reservations/cancellations' },
      { icon: Gift, label: 'Group Bookings', href: '/reservations/groups' }
    ]
  },
  {
    icon: Users,
    label: 'Guest Management',
    hasSubmenu: true,
    key: 'guests',
    href: '#',
    submenu: [
      { icon: UserCheck, label: 'All guests', href: '/pages/adminDashboard/customers' },
      { icon: Phone, label: 'Guest Services', href: '/guests/services' },
      { icon: MessageCircle, label: 'Guest Feedback', href: '/guests/feedback' },
      { icon: TrendingUp, label: 'Loyalty Program', href: '/guests/loyalty' }
    ]
  },
  {
    icon: UserCheck,
    label: 'Staff Management',
    hasSubmenu: true,
    key: 'staff',
    href: '/staff',
    submenu: [
      { icon: Users, label: 'Employee List', href: '/staff/employees' },
      { icon: Calendar, label: 'Staff Schedule', href: '/staff/schedule' },
      { icon: DollarSign, label: 'Payroll', href: '/staff/payroll' },
      { icon: ClipboardList, label: 'Performance', href: '/staff/performance' }
    ]
  },
  {
    icon: CreditCard,
    label: 'Billing & Payments',
    hasSubmenu: true,
    key: 'billing',
    href: '/billing',
    submenu: [
      { icon: Receipt, label: 'Invoices', href: '/billing/invoices' },
      { icon: CreditCard, label: 'Payment Methods', href: '/billing/methods' },
      { icon: DollarSign, label: 'Pricing Management', href: '/billing/pricing' },
      { icon: BarChart3, label: 'Revenue Reports', href: '/billing/reports' }
    ]
  },
  {
    icon: Utensils,
    label: 'Restaurant & Bar',
    hasSubmenu: true,
    key: 'restaurant',
    href: '/restaurant',
    submenu: [
      { icon: ClipboardList, label: 'Menu Management', href: '/restaurant/menu' },
      { icon: Calendar, label: 'Table Reservations', href: '/restaurant/reservations' },
      { icon: Receipt, label: 'Orders & Billing', href: '/restaurant/orders' },
      { icon: Users, label: 'Kitchen Staff', href: '/restaurant/staff' }
    ]
  },
  {
    icon: Car,
    label: 'Services',
    hasSubmenu: true,
    key: 'services',
    href: '/services',
    submenu: [
      { icon: Car, label: 'servises', href: '/pages/adminDashboard/services' },
      { icon: Wifi, label: 'Laundry Service', href: '/services/laundry' },
      { icon: Gift, label: 'Spa & Wellness', href: '/services/spa' },
      { icon: Phone, label: 'Concierge', href: '/services/concierge' }
    ]
  },
  {
    icon: BarChart3,
    label: 'Reports & Analytics',
    hasSubmenu: true,
    key: 'reports',
    href: '/reports',
    submenu: [
      { icon: TrendingUp, label: 'Occupancy Reports', href: '/reports/occupancy' },
      { icon: DollarSign, label: 'Financial Reports', href: '/reports/financial' },
      { icon: Users, label: 'Guest Analytics', href: '/reports/guests' },
      { icon: BarChart3, label: 'Performance Metrics', href: '/reports/performance' }
    ]
  },
  {
    icon: Shield,
    label: 'Security & Safety',
    hasSubmenu: true,
    key: 'security',
    href: '/security',
    submenu: [
      { icon: Shield, label: 'Access Control', href: '/security/access' },
      { icon: AlertCircle, label: 'Incident Reports', href: '/security/incidents' },
      { icon: Users, label: 'Security Staff', href: '/security/staff' },
      { icon: FileText, label: 'Safety Protocols', href: '/security/protocols' }
    ]
  },
  {
    icon: Settings,
    label: 'System Settings',
    hasSubmenu: true,
    key: 'settings',
    href: '/settings',
    submenu: [
      { icon: Users, label: 'User Management', href: '/settings/users' },
      { icon: Shield, label: 'Permissions', href: '/settings/permissions' },
      { icon: Wrench, label: 'System Config', href: '/settings/config' },
      { icon: FileText, label: 'Backup & Restore', href: '/settings/backup' }
    ]
  },
  {
    icon: HelpCircle,
    label: 'Support & Help',
    hasSubmenu: true,
    key: 'support',
    href: '/support',
    submenu: [
      { icon: BookOpen, label: 'User Guide', href: '/support/guide' },
      { icon: Phone, label: 'Technical Support', href: '/support/technical' },
      { icon: MessageCircle, label: 'Contact Admin', href: '/support/contact' },
      { icon: AlertCircle, label: 'System Status', href: '/support/status' }
    ]
  }
];
