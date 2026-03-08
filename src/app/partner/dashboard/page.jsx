"use client";
import React, { useState } from 'react';
import { TrendingUp, Wallet, Users, History, Percent, Bike, Car, ArrowUpRight } from 'lucide-react';

const PartnerDashboard = () => {
  const [partnerType, setPartnerType] = useState('OPERATOR'); // Mock state

  const stats = [
    { title: 'Total Revenue', value: '₹45,600', icon: <TrendingUp />, trend: '+12% this month' },
    { title: 'Washes Done', value: '342', icon: <Bike />, trend: '+45 recently' },
    { title: 'Your Share', value: partnerType === 'OPERATOR' ? '₹27,360' : '₹36,480', icon: <Wallet />, trend: partnerType === 'OPERATOR' ? '60%' : '80%' },
    { title: 'Active Staff', value: '4', icon: <Users />, trend: 'Online' },
  ];

  return (
    <div className="container section-padding">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h2 style={{ fontSize: '2rem' }}>Partner Dashboard</h2>
          <p style={{ color: 'var(--text-light)' }}>
            {partnerType === 'OPERATOR' ? 'Operator Partner (60/40 Split)' : 'Franchise Partner (80/20 Split)'}
          </p>
        </div>
        <button className="btn-outline">Withdraw Funds</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '25px', marginBottom: '50px' }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div style={{ color: 'var(--accent)', backgroundColor: 'rgba(255,127,80,0.1)', padding: '12px', borderRadius: '12px' }}>
                {stat.icon}
              </div>
              <span style={{ fontSize: '0.8rem', color: '#11a73e', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <ArrowUpRight size={14} /> {stat.trend}
              </span>
            </div>
            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '5px' }}>{stat.title}</p>
            <h3 style={{ fontSize: '1.8rem', margin: 0 }}>{stat.value}</h3>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        {/* Recent Transactions */}
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <h3 style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <History size={20} color="var(--accent)" /> Detailed Revenue History
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', borderBottom: '1px solid #eee' }}>
                <div>
                  <p style={{ fontWeight: 600, margin: 0 }}>ID #BK-993{i} • Car Wash</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', margin: 0 }}>Mar 06, 2026 • 2:30 PM</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontWeight: 700, color: 'var(--primary)', margin: 0 }}>₹120 Share</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', margin: 0 }}>Total ₹200</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Rules */}
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <h3 style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Percent size={20} color="var(--accent)" /> Earnings Structure
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ padding: '20px', backgroundColor: 'var(--background)', borderRadius: '15px' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Commission Logic</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: 1.6 }}>
                Your share is calculated based on the net washing cost. Company 40% goes towards platform maintenance, marketing, and technology support.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{ border: '1px solid #eee', padding: '20px', borderRadius: '15px' }}>
                <Bike color="var(--accent)" size={24} />
                <h5 style={{ margin: '10px 0 5px' }}>Bike Revenue</h5>
                <p style={{ fontSize: '1.2rem', fontWeight: 700 }}>₹36.00 <span style={{ fontSize: '0.8rem', fontWeight: 400 }}>/wash</span></p>
              </div>
              <div style={{ border: '1px solid #eee', padding: '20px', borderRadius: '15px' }}>
                <Car color="var(--accent)" size={24} />
                <h5 style={{ margin: '10px 0 5px' }}>Car Revenue</h5>
                <p style={{ fontSize: '1.2rem', fontWeight: 700 }}>₹114.00+ <span style={{ fontSize: '0.8rem', fontWeight: 400 }}>/wash</span></p>
              </div>
            </div>

            <div style={{ padding: '20px', border: '2px dashed #ddd', borderRadius: '15px', textAlign: 'center' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', margin: 0 }}>
                Revenue is auto-calculated after every successful wash confirmation via OTP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerDashboard;
