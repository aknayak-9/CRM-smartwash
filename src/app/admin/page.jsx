"use client";
import React, { useState } from 'react';
import { 
  Users, Calendar, Clock, BarChart3, Settings, 
  Search, Filter, Download, Edit2, Trash2, 
  CheckCircle, XCircle, AlertCircle, MoreVertical,
  Shield, Truck, Handshake, Bookmark
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('bookings'); // users, bookings, slots, reports

  const menuItems = [
    { id: 'bookings', label: 'Bookings', icon: <Bookmark size={20} /> },
    { id: 'users', label: 'User Management', icon: <Users size={20} /> },
    { id: 'slots', label: 'Time Slots', icon: <Clock size={20} /> },
    { id: 'reports', label: 'Revenue & Reports', icon: <BarChart3 size={20} /> },
    { id: 'settings', label: 'CMS Settings', icon: <Settings size={20} /> },
  ];

  const mockUsers = [
    { date: '2026-03-06', name: 'John Doe', mobile: '9876543210', idCode: 'USR-001', email: 'john@example.com', role: 'User', status: 'Active' },
    { date: '2026-03-05', name: 'Amit Singh', mobile: '8877665544', idCode: 'OP-122', email: 'amit@smartwash.com', role: 'Operator Partner', status: 'Active' },
    { date: '2026-03-04', name: 'Clean Corp', mobile: '7766554433', idCode: 'FR-09', email: 'franchise@cleancorp.in', role: 'Franchise Partner', status: 'Active' },
  ];

  const mockBookings = [
    { id: '#BK-9931', customer: 'Rahul Sharma', vehicle: 'DL 01 AB 1234', type: 'Car', service: 'Double Foam', status: 'Success', amount: '₹300' },
    { id: '#BK-9932', customer: 'Priya Verma', vehicle: 'HR 26 CD 5678', type: 'Bike', service: 'Normal Wash', status: 'Pending', amount: '₹60' },
    { id: '#BK-9933', customer: 'Suresh Raina', vehicle: 'UP 14 EF 9012', type: 'Car', service: 'Single Foam', status: 'Failed', amount: '₹200' },
  ];

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case 'Admin': return { bg: '#fff0f6', text: '#d70654' };
      case 'Operator Partner': return { bg: '#e6f7ff', text: '#1890ff' };
      case 'Franchise Partner': return { bg: '#f9f0ff', text: '#722ed1' };
      default: return { bg: '#f6ffed', text: '#52c41a' };
    }
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'Success': case 'Completed': case 'Active': return { bg: '#e6ffef', text: '#11a73e' };
      case 'Failed': return { bg: '#fff1f0', text: '#ff4d4f' };
      case 'Pending': return { bg: '#fffbe6', text: '#faad14' };
      default: return { bg: '#f5f5f5', text: '#8c8c8c' };
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 80px)', backgroundColor: 'var(--background)' }}>
      {/* Sidebar */}
      <aside style={{ width: '280px', backgroundColor: 'var(--primary)', color: 'white', padding: '30px 20px' }}>
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ color: 'white', fontSize: '1.2rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '1px' }}>Admin Console</h2>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {menuItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 20px',
                borderRadius: '12px',
                width: '100%',
                backgroundColor: activeTab === item.id ? 'var(--accent)' : 'transparent',
                color: 'white',
                fontWeight: activeTab === item.id ? 600 : 400,
                transition: 'var(--transition)'
              }}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '12px' }}>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>System Status</p>
            <p style={{ fontSize: '0.9rem', margin: '5px 0 0', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '8px', height: '8px', backgroundColor: '#11a73e', borderRadius: '50%' }}></span>
              All systems operational
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.8rem' }}>{menuItems.find(i => i.id === activeTab).label}</h2>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'white' }}>
              <Download size={18} /> Export Data
            </button>
          </div>
        </div>

        {/* Filters Bar */}
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', marginBottom: '30px', display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#8c8c8c' }} />
            <input type="text" placeholder="Search anything..." style={{ width: '100%', padding: '12px 12px 12px 45px', borderRadius: '10px', border: '1px solid #eee' }} />
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 20px', borderRadius: '10px', border: '1px solid #eee', color: '#595959' }}>
            <Filter size={18} /> Filters
          </button>
        </div>

        {activeTab === 'users' && (
          <div style={{ backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #eee', textAlign: 'left' }}>
                  <th style={{ padding: '20px' }}>Join Date</th>
                  <th style={{ padding: '20px' }}>User Details</th>
                  <th style={{ padding: '20px' }}>Code & Email</th>
                  <th style={{ padding: '20px' }}>Role</th>
                  <th style={{ padding: '20px' }}>Status</th>
                  <th style={{ padding: '20px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockUsers.map((user, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '20px', color: '#8c8c8c', fontSize: '0.9rem' }}>{user.date}</td>
                    <td style={{ padding: '20px' }}>
                      <p style={{ fontWeight: 600, margin: 0 }}>{user.name}</p>
                      <p style={{ margin: 0, color: '#8c8c8c', fontSize: '0.85rem' }}>{user.mobile}</p>
                    </td>
                    <td style={{ padding: '20px' }}>
                      <p style={{ margin: 0, fontWeight: 500 }}>{user.idCode}</p>
                      <p style={{ margin: 0, color: '#8c8c8c', fontSize: '0.85rem' }}>{user.email}</p>
                    </td>
                    <td style={{ padding: '20px' }}>
                      <span style={{ 
                        backgroundColor: getRoleBadgeColor(user.role).bg, 
                        color: getRoleBadgeColor(user.role).text, 
                        padding: '4px 10px', 
                        borderRadius: '6px', 
                        fontSize: '0.8rem', 
                        fontWeight: 600 
                      }}>
                        {user.role}
                      </span>
                    </td>
                    <td style={{ padding: '20px' }}>
                      <span style={{ 
                        color: getStatusBadgeColor(user.status).text, 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '6px', 
                        fontSize: '0.9rem', 
                        fontWeight: 600 
                      }}>
                        <CheckCircle size={14} /> {user.status}
                      </span>
                    </td>
                    <td style={{ padding: '20px' }}>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button style={{ color: '#1890ff' }}><Edit2 size={18} /></button>
                        <button style={{ color: '#ff4d4f' }}><Trash2 size={18} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'bookings' && (
          <div style={{ backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #eee', textAlign: 'left' }}>
                  <th style={{ padding: '20px' }}>Booking ID</th>
                  <th style={{ padding: '20px' }}>Customer</th>
                  <th style={{ padding: '20px' }}>Vehicle Info</th>
                  <th style={{ padding: '20px' }}>Service</th>
                  <th style={{ padding: '20px' }}>Status</th>
                  <th style={{ padding: '20px' }}>Total</th>
                  <th style={{ padding: '20px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockBookings.map((booking, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '20px', fontWeight: 700 }}>{booking.id}</td>
                    <td style={{ padding: '20px' }}>{booking.customer}</td>
                    <td style={{ padding: '20px' }}>
                      <p style={{ margin: 0, fontWeight: 500 }}>{booking.vehicle}</p>
                      <p style={{ margin: 0, color: '#8c8c8c', fontSize: '0.85rem' }}>{booking.type}</p>
                    </td>
                    <td style={{ padding: '20px' }}>{booking.service}</td>
                    <td style={{ padding: '20px' }}>
                      <span style={{ 
                        backgroundColor: getStatusBadgeColor(booking.status).bg, 
                        color: getStatusBadgeColor(booking.status).text, 
                        padding: '6px 14px', 
                        borderRadius: '20px', 
                        fontSize: '0.8rem', 
                        fontWeight: 600 
                      }}>
                        {booking.status}
                      </span>
                    </td>
                    <td style={{ padding: '20px', fontWeight: 700 }}>{booking.amount}</td>
                    <td style={{ padding: '20px' }}><MoreVertical size={18} color="#8c8c8c" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Summary Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '40px' }}>
          {[
            { label: 'Total Sales', val: '₹1.2L', color: '#1890ff' },
            { label: 'Pending Washes', val: '43', color: '#faad14' },
            { label: 'Active Operators', val: '18', color: '#52c41a' },
            { label: 'New Franchise Apps', val: '5', color: '#722ed1' }
          ].map((card, i) => (
            <div key={i} style={{ backgroundColor: 'white', padding: '25px', borderRadius: '16px', borderLeft: `5px solid ${card.color}`, boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
              <p style={{ margin: 0, color: '#8c8c8c', fontSize: '0.9rem' }}>{card.label}</p>
              <h4 style={{ margin: '10px 0 0', fontSize: '1.6rem' }}>{card.val}</h4>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
