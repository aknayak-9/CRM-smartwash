"use client";
import React, { useState } from 'react';
import { User, Camera, History, Crown, CreditCard, CheckCircle, Bike, Car } from 'lucide-react';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile'); // profile, history, prime

  const memberships = [
    { 
      type: 'Bike Prime', 
      price: '₹300', 
      benefits: '6 Normal Washes', 
      validity: '6 Months',
      icon: <Bike size={32} />
    },
    { 
      type: 'Car Prime', 
      price: '₹1500', 
      benefits: '6 Single Foam Washes + Deep Cleaning', 
      validity: '6 Months',
      icon: <Car size={32} />
    }
  ];

  const bookingHistory = [
    { id: '#BK-1024', vehicle: 'MH12 AB 1234', type: 'Car', service: 'Double Foam', date: '2026-03-01', status: 'Completed', amount: '₹300' },
    { id: '#BK-1010', vehicle: 'MH12 AB 1234', type: 'Car', service: 'Single Foam', date: '2026-02-15', status: 'Completed', amount: '₹200' },
  ];

  return (
    <div className="container section-padding">
      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '40px' }}>
        {/* Sidebar */}
        <div style={{ backgroundColor: 'white', padding: '40px 20px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', height: 'fit-content' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ position: 'relative', width: '120px', height: '120px', margin: '0 auto 20px' }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <User size={60} color="#ccc" />
              </div>
              <button style={{ position: 'absolute', bottom: '5px', right: '5px', backgroundColor: 'var(--accent)', color: 'white', padding: '8px', borderRadius: '50%', border: '2px solid white' }}>
                <Camera size={16} />
              </button>
            </div>
            <h3 style={{ fontSize: '1.4rem' }}>John Doe</h3>
            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>+91 98765 43210</p>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <button 
              onClick={() => setActiveTab('profile')}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px', borderRadius: '12px', width: '100%', backgroundColor: activeTab === 'profile' ? 'var(--background)' : 'transparent', color: activeTab === 'profile' ? 'var(--primary)' : 'var(--text-light)', fontWeight: activeTab === 'profile' ? 600 : 400, transition: 'var(--transition)' }}
            >
              <User size={20} /> My Profile
            </button>
            <button 
              onClick={() => setActiveTab('history')}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px', borderRadius: '12px', width: '100%', backgroundColor: activeTab === 'history' ? 'var(--background)' : 'transparent', color: activeTab === 'history' ? 'var(--primary)' : 'var(--text-light)', fontWeight: activeTab === 'history' ? 600 : 400, transition: 'var(--transition)' }}
            >
              <History size={20} /> Booking History
            </button>
            <button 
              onClick={() => setActiveTab('prime')}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px', borderRadius: '12px', width: '100%', backgroundColor: activeTab === 'prime' ? 'var(--background)' : 'transparent', color: activeTab === 'prime' ? 'var(--primary)' : 'var(--text-light)', fontWeight: activeTab === 'prime' ? 600 : 400, transition: 'var(--transition)' }}
            >
              <Crown size={20} /> Prime Membership
            </button>
          </nav>
        </div>

        {/* Content */}
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          {activeTab === 'profile' && (
            <div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Account Settings</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600 }}>Full Name</label>
                    <input type="text" defaultValue="John Doe" style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #ddd' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600 }}>Email Address</label>
                    <input type="email" defaultValue="john@example.com" style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #ddd' }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600 }}>Mobile Number</label>
                  <input type="tel" defaultValue="+91 98765 43210" disabled style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #eee', backgroundColor: '#f9f9f9', cursor: 'not-allowed' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600 }}>Default Wash Address</label>
                  <textarea defaultValue="123 Smart Street, Clean City" style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #ddd', minHeight: '100px' }}></textarea>
                </div>
                <button type="button" className="btn-primary" style={{ alignSelf: 'flex-start', padding: '12px 30px' }}>Save Changes</button>
              </form>
            </div>
          )}

          {activeTab === 'history' && (
            <div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Your Bookings</h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--background)', textAlign: 'left' }}>
                      <th style={{ padding: '15px' }}>ID</th>
                      <th style={{ padding: '15px' }}>Vehicle</th>
                      <th style={{ padding: '15px' }}>Service</th>
                      <th style={{ padding: '15px' }}>Date</th>
                      <th style={{ padding: '15px' }}>Status</th>
                      <th style={{ padding: '15px' }}>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookingHistory.map((booking, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                        <td style={{ padding: '15px', fontWeight: 600 }}>{booking.id}</td>
                        <td style={{ padding: '15px' }}>{booking.vehicle}</td>
                        <td style={{ padding: '15px' }}>{booking.service}</td>
                        <td style={{ padding: '15px' }}>{booking.date}</td>
                        <td style={{ padding: '15px' }}>
                          <span style={{ backgroundColor: '#e6ffef', color: '#11a73e', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>
                            {booking.status}
                          </span>
                        </td>
                        <td style={{ padding: '15px', fontWeight: 700 }}>{booking.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'prime' && (
            <div>
              <div style={{ backgroundColor: 'var(--primary)', padding: '40px', borderRadius: '20px', color: 'white', marginBottom: '40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '1.6rem', marginBottom: '10px' }}>Current Plan: None</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>Upgrade to Prime for exclusive benefits and savings.</p>
                  </div>
                  <Crown size={40} color="var(--accent)" />
                </div>
              </div>

              <h4 style={{ fontSize: '1.4rem', marginBottom: '25px' }}>Available Prime Plans</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {memberships.map((plan, i) => (
                  <div key={i} style={{ border: '2px solid #eee', padding: '30px', borderRadius: '20px', transition: 'var(--transition)' }}>
                    <div style={{ color: 'var(--accent)', marginBottom: '15px' }}>{plan.icon}</div>
                    <h5 style={{ fontSize: '1.3rem', marginBottom: '5px' }}>{plan.type}</h5>
                    <p style={{ fontSize: '1.8rem', fontWeight: 700, margin: '15px 0' }}>{plan.price}</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}><CheckCircle size={16} color="var(--accent)" /> {plan.benefits}</li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}><CheckCircle size={16} color="var(--accent)" /> {plan.validity} Validity</li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}><CheckCircle size={16} color="var(--accent)" /> Priority Support</li>
                    </ul>
                    <button className="btn-outline" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                      <CreditCard size={18} /> Buy Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
