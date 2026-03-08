"use client";
import React, { useState } from 'react';
import { MapPin, Search, Play, CheckCircle2, Navigation, PlusCircle, History, Package } from 'lucide-react';

const OperatorPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [otp, setOtp] = useState('');
  const [washStarted, setWashStarted] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery) return;
    // Mock search result
    setSearchResult({
      id: '#BK-8890',
      name: 'Amit Kumar',
      address: 'Plot 45, Green Park Society, New Delhi',
      vehicle: searchQuery.toUpperCase(),
      type: 'Car',
      service: 'Double Foam Wash',
      time: '11:15 AM'
    });
  };

  const handleStartWash = () => {
    if (otp.length !== 4) {
      alert("Please enter the 4-digit OTP provided by the customer.");
      return;
    }
    setWashStarted(true);
    alert("Wash operation started! Data saved to backend.");
  };

  return (
    <div className="container section-padding">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h2 style={{ fontSize: '2rem' }}>Operator Dashboard</h2>
          <p style={{ color: 'var(--text-light)' }}>Manage your daily wash assignments</p>
        </div>
        <div style={{ backgroundColor: '#e6ffef', color: '#11a73e', padding: '10px 20px', borderRadius: '30px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '10px', height: '100%', backgroundColor: '#11a73e', borderRadius: '50%' }}></span>
          Online & Ready
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '40px' }}>
        {/* Main Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {/* Search Advance Bookings */}
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Search size={20} color="var(--accent)" /> Search Advance Bookings
            </h3>
            <form onSubmit={handleSearch} style={{ display: 'flex', gap: '15px' }}>
              <input 
                type="text" 
                placeholder="Enter Bike/Car Number (e.g. MH12 AB 1234)" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ flex: 1, padding: '15px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '1rem' }}
              />
              <button type="submit" className="btn-primary" style={{ padding: '0 30px' }}>Search</button>
            </form>

            {searchResult && (
              <div style={{ marginTop: '30px', padding: '25px', borderRadius: '15px', border: '2px solid var(--background)', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <span style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '4px 10px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600 }}>
                      {searchResult.id}
                    </span>
                    <h4 style={{ fontSize: '1.4rem', margin: '15px 0 5px' }}>{searchResult.name}</h4>
                    <p style={{ color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '15px' }}>
                      <MapPin size={16} /> {searchResult.address}
                    </p>
                    <div style={{ display: 'flex', gap: '20px' }}>
                      <p><strong>Vehicle:</strong> {searchResult.vehicle}</p>
                      <p><strong>Service:</strong> {searchResult.service}</p>
                      <p><strong>Time:</strong> {searchResult.time}</p>
                    </div>
                  </div>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchResult.address)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-outline" 
                    style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#e6f0ff' }}
                  >
                    <Navigation size={18} /> Navigate
                  </a>
                </div>

                {!washStarted ? (
                  <div style={{ marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '30px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div style={{ flex: 1 }}>
                      <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.9rem' }}>Enter Customer OTP</label>
                      <input 
                        type="text" 
                        placeholder="4-digit OTP" 
                        maxLength={4}
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', letterSpacing: '4px', fontWeight: 700 }} 
                      />
                    </div>
                    <button 
                      onClick={handleStartWash}
                      style={{ 
                        flex: 1, 
                        height: '50px', 
                        backgroundColor: '#11a73e', 
                        color: 'white', 
                        borderRadius: '8px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        gap: '10px',
                        fontWeight: 600,
                        marginTop: '25px'
                      }}
                    >
                      <Play size={18} fill="white" /> Start Washing
                    </button>
                  </div>
                ) : (
                  <div style={{ marginTop: '30px', backgroundColor: '#e6ffef', padding: '15px', borderRadius: '10px', textAlign: 'center', color: '#11a73e', fontWeight: 600 }}>
                    <CheckCircle2 size={24} style={{ verticalAlign: 'middle', marginRight: '10px' }} />
                    Wash in progress...
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Activity Feed */}
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <History size={20} color="var(--accent)" /> Recent Activity
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {[1, 2, 3].map((i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', borderRadius: '10px', backgroundColor: 'var(--background)' }}>
                  <div>
                    <p style={{ fontWeight: 600, margin: 0 }}>Completed: Bike Wash (MH12 XY 99{i}0)</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', margin: 0 }}>Success • ₹60 • 2 hours ago</p>
                  </div>
                  <Package size={20} color="var(--primary)" style={{ opacity: 0.3 }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar: Manual Booking */}
        <div style={{ backgroundColor: 'white', padding: '40px 30px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', height: 'fit-content' }}>
          <h3 style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem' }}>
            <PlusCircle size={20} color="var(--accent)" /> Instant Booking
          </h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.9rem' }}>Customer Mobile</label>
              <input type="tel" placeholder="Mobile Number" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.9rem' }}>Vehicle Number</label>
              <input type="text" placeholder="MH12 AB 1234" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.9rem' }}>Type & Service</label>
              <select style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}>
                <option>Bike - Normal Wash (₹60)</option>
                <option>Car - Single Foam (₹200)</option>
                <option>Car - Double Foam (₹300)</option>
              </select>
            </div>
            <button type="button" className="btn-primary" style={{ width: '100%', marginTop: '10px' }}>
              Create & Start
            </button>
          </form>
          
          <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fffbe6', borderRadius: '12px', border: '1px solid #ffe58f' }}>
            <p style={{ fontSize: '0.8rem', color: '#856404', margin: 0, lineHeight: 1.5 }}>
              Use this form for customers who haven't booked in advance. This will create a booking and start the wash immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatorPage;
